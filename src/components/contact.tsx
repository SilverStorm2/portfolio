'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { contactContent } from '@/content/contact';
import { useLanguage } from './layout';

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

const initialFormState: FormFields = {
  name: '',
  email: '',
  message: '',
};

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'infogetcontact24@gmail.com';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { language } = useLanguage();
  const copy = contactContent[language];

  const [formData, setFormData] = useState<FormFields>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>('idle');
  const [statusInfo, setStatusInfo] = useState<{
    type: 'success' | 'error';
    title: string;
    message: string;
  } | null>(null);

  const handleChange = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
    if (statusInfo) {
      setStatusInfo(null);
    }
  };

  const validate = (data: FormFields): FormErrors => {
    const validation = copy.validation;
    const nextErrors: FormErrors = {};

    if (!data.name.trim()) {
      nextErrors.name = validation.nameRequired;
    }

    if (!data.email.trim()) {
      nextErrors.email = validation.emailRequired;
    } else if (!emailPattern.test(data.email.trim())) {
      nextErrors.email = validation.emailInvalid;
    }

    if (!data.message.trim()) {
      nextErrors.message = validation.messageRequired;
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    const validationErrors = validate(trimmedData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const endpoint =
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
      'https://formspree.io/f/xlgrqwoq';
    if (!endpoint) {
      setSubmissionState('error');
      setStatusInfo({
        type: 'error',
        title: copy.status.errorTitle,
        message: copy.status.endpointMissing,
      });
      return;
    }

    setSubmissionState('submitting');
    setStatusInfo(null);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(trimmedData),
      });

      if (!response.ok) {
        throw new Error('request_failed');
      }

      setSubmissionState('success');
      setStatusInfo({
        type: 'success',
        title: copy.status.successTitle,
        message: copy.status.successMessage,
      });
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      console.error('Contact form submission failed', error);
      setSubmissionState('error');
      setStatusInfo({
        type: 'error',
        title: copy.status.errorTitle,
        message: copy.status.errorMessage,
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">
            {copy.subheading}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {copy.heading}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {copy.description}
          </p>
          <p className="text-sm text-muted-foreground">
            {copy.directEmailLabel}{' '}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {contactEmail}
            </a>
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {statusInfo && (
            <div
              className={`mb-6 flex items-start gap-3 rounded-2xl border px-4 py-3 ${
                statusInfo.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                  : 'border-destructive/20 bg-destructive/10 text-destructive'
              }`}
              role="status"
              aria-live="polite"
            >
              {statusInfo.type === 'success' ? (
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-shrink-0"
                  aria-hidden={true}
                />
              ) : (
                <AlertCircle
                  className="mt-1 h-5 w-5 flex-shrink-0"
                  aria-hidden={true}
                />
              )}
              <div>
                <p className="font-semibold">{statusInfo.title}</p>
                <p className="text-sm">{statusInfo.message}</p>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6 rounded-3xl border border-border bg-card/70 p-6 shadow-lg backdrop-blur"
          >
            <Field
              id="contact-name"
              label={copy.form.nameLabel}
              placeholder={copy.form.namePlaceholder}
              value={formData.name}
              error={errors.name}
              onChange={(value) => handleChange('name', value)}
              type="text"
              autoComplete="name"
            />
            <Field
              id="contact-email"
              label={copy.form.emailLabel}
              placeholder={copy.form.emailPlaceholder}
              value={formData.email}
              error={errors.email}
              onChange={(value) => handleChange('email', value)}
              type="email"
              autoComplete="email"
            />
            <Field
              id="contact-message"
              label={copy.form.messageLabel}
              placeholder={copy.form.messagePlaceholder}
              value={formData.message}
              error={errors.message}
              onChange={(value) => handleChange('message', value)}
              as="textarea"
              rows={5}
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">{copy.consent}</p>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                disabled={submissionState === 'submitting'}
              >
                {submissionState === 'submitting' && (
                  <Loader2
                    className="h-4 w-4 animate-spin"
                    aria-hidden={true}
                  />
                )}
                {submissionState === 'submitting'
                  ? copy.form.submittingLabel
                  : copy.form.submitLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  as?: 'textarea';
  rows?: number;
}

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
  type = 'text',
  autoComplete,
  as,
  rows = 4,
}: FieldProps) {
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  const describedBy = error ? `${id}-error` : undefined;
  const baseClassName =
    'w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';

  const sharedProps = {
    id,
    name: id,
    placeholder,
    value,
    onChange: handleInputChange,
    className: baseClassName,
    'aria-invalid': Boolean(error),
    'aria-describedby': describedBy,
    autoComplete,
    spellCheck: false,
  } as const;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea {...sharedProps} rows={rows} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
