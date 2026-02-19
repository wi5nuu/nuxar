export {};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
        }
      ) => string;
      remove: (widgetId?: string) => void;
      reset: (widgetId?: string) => void;
    };
  }
}
