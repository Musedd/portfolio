import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  OPEN_CONSENT_SETTINGS_EVENT,
  clearConsent,
  readConsent,
  writeConsent,
  type ConsentChoice,
} from "../../utils/consent";
import "./ConsentBanner.scss";

const ConsentBanner = () => {
  const [consent, setConsent] = useState<ConsentChoice>(() => readConsent());
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const onConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<ConsentChoice>;
      setConsent(customEvent.detail);
    };

    const onOpenSettings = () => setSettingsOpen(true);

    window.addEventListener(CONSENT_EVENT, onConsentChange);
    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, onOpenSettings);

    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsentChange);
      window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, onOpenSettings);
    };
  }, []);

  const acceptAll = () => {
    writeConsent("accepted");
    setSettingsOpen(false);
  };

  const rejectOptional = () => {
    writeConsent("rejected");
    setSettingsOpen(false);
  };

  const resetConsent = () => {
    clearConsent();
    setSettingsOpen(false);
  };

  const isInitialBannerVisible = consent === null;

  return (
    <>
      {isInitialBannerVisible && (
        <div
          className="consent-banner"
          role="dialog"
          aria-live="polite"
          aria-label="Consent Banner"
        >
          <p>This website uses optional analytics only after your consent.</p>
          <div className="consent-actions">
            <button type="button" onClick={rejectOptional}>
              Only necessary
            </button>
            <button type="button" className="accept" onClick={acceptAll}>
              Accept all
            </button>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div
          className="consent-settings"
          role="dialog"
          aria-label="Datenschutz Einstellungen"
        >
          <p>Privacy settings</p>
          <p>Analytics is only loaded with your consent.</p>
          <div className="consent-actions">
            <button type="button" onClick={rejectOptional}>
              Only necessary
            </button>
            <button type="button" className="accept" onClick={acceptAll}>
              Accept all
            </button>
            <button type="button" onClick={resetConsent}>
              Reset consent
            </button>
          </div>
          <button
            type="button"
            className="close-settings"
            onClick={() => setSettingsOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default ConsentBanner;
