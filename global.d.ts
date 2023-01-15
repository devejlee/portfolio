declare global {
  interface Window {
    gtag: Function;
  }
}

export const Gtag = window.gtag;