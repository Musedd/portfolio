export type ConsentChoice = "accepted" | "rejected" | null;

export const CONSENT_STORAGE_KEY = "fp_consent_v1";
export const CONSENT_EVENT = "fp-consent-change";
export const OPEN_CONSENT_SETTINGS_EVENT = "fp-open-consent-settings";

export function readConsent(): ConsentChoice {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function writeConsent(value: Exclude<ConsentChoice, null>) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_EVENT, { detail: value }));
}

export function clearConsent() {
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_EVENT, { detail: null }));
}
