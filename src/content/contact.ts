import type { Language } from './about';

export interface ContactCopy {
  heading: string;
  subheading: string;
  description: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
  };
  validation: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
  };
  status: {
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
    endpointMissing: string;
  };
  consent: string;
}

export const contactContent: Record<Language, ContactCopy> = {
  en: {
    heading: "Let's work together",
    subheading: 'Tell me about your project',
    description:
      'Ready to collaborate or want to learn more about my work? Share a few details and I will get back to you within two business days.',
    form: {
      nameLabel: 'Your name',
      namePlaceholder: 'Jane Doe',
      emailLabel: 'Email address',
      emailPlaceholder: 'jane@company.com',
      messageLabel: 'How can I help?',
      messagePlaceholder:
        'Tell me about your goals, timeline, and anything else that will help me prepare.',
      submitLabel: 'Send message',
      submittingLabel: 'Sending...',
    },
    validation: {
      nameRequired: 'Please enter your name.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please provide a valid email address.',
      messageRequired: 'Please include a short message.',
    },
    status: {
      successTitle: 'Message sent',
      successMessage:
        'Thank you! Your message is on its way. I will reply as soon as possible.',
      errorTitle: 'Something went wrong',
      errorMessage:
        'I could not send your message right now. Please try again or contact me directly at contact@example.com.',
      endpointMissing:
        'Form endpoint is not configured. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT to enable submissions.',
    },
    consent: 'By clicking "Send message" you agree to be contacted by email.',
  },
  pl: {
    heading: 'Wsp\u00f3\u0142pracujmy',
    subheading: 'Opowiedz o swoim projekcie',
    description:
      'Chcesz nawi\u0105za\u0107 wsp\u00f3\u0142prac\u0119 lub dowiedzie\u0107 si\u0119 wi\u0119cej o mojej pracy? Podziel si\u0119 szczeg\u00f3\u0142ami, a odezw\u0119 si\u0119 w ci\u0105gu dw\u00f3ch dni roboczych.',
    form: {
      nameLabel: 'Twoje imi\u0119',
      namePlaceholder: 'Anna Nowak',
      emailLabel: 'Adres e-mail',
      emailPlaceholder: 'anna@firma.pl',
      messageLabel: 'Jak mog\u0119 pom\u00f3c?',
      messagePlaceholder:
        'Napisz o celach, terminie i dodatkowych informacjach, kt\u00f3re pomog\u0105 mi si\u0119 przygotowa\u0107.',
      submitLabel: 'Wy\u015blij wiadomo\u015b\u0107',
      submittingLabel: 'Wysy\u0142anie...',
    },
    validation: {
      nameRequired: 'Podaj swoje imi\u0119.',
      emailRequired: 'Podaj adres e-mail.',
      emailInvalid: 'Wpisz poprawny adres e-mail.',
      messageRequired: 'Napisz kr\u00f3tk\u0105 wiadomo\u015b\u0107.',
    },
    status: {
      successTitle: 'Wiadomo\u015b\u0107 wys\u0142ana',
      successMessage:
        'Dzi\u0119kuj\u0119! Twoja wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana. Odpowiem tak szybko, jak to mo\u017cliwe.',
      errorTitle: 'Co\u015b posz\u0142o nie tak',
      errorMessage:
        'Nie uda\u0142o si\u0119 wys\u0142a\u0107 wiadomo\u015bci. Spr\u00f3buj ponownie lub napisz bezpo\u015brednio na contact@example.com.',
      endpointMissing:
        'Brak konfiguracji formularza. Ustaw NEXT_PUBLIC_FORMSPREE_ENDPOINT, aby w\u0142\u0105czy\u0107 wysy\u0142k\u0119.',
    },
    consent:
      'Klikaj\u0105c "Wy\u015blij wiadomo\u015b\u0107" wyra\u017casz zgod\u0119 na kontakt mailowy.',
  },
};
