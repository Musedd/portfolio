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

  const isInitialBannerVisible = consent === null;

  return (
    <>
      {isInitialBannerVisible && (
        <div className="consent-banner" role="dialog" aria-live="polite" aria-label="Consent Banner">
          <p>
            Diese Website nutzt optionale Analytics erst nach Einwilligung.
          </p>
          <div className="consent-actions">
            <button type="button" onClick={rejectOptional}>
              Nur notwendige
            </button>
            <button type="button" className="accept" onClick={acceptAll}>
              Alle akzeptieren
            </button>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div className="consent-settings" role="dialog" aria-label="Datenschutz Einstellungen">
          <p>Datenschutz-Einstellungen</p>
          <p>Analytics wird nur mit Einwilligung geladen.</p>
          <div className="consent-actions">
            <button type="button" onClick={rejectOptional}>
              Nur notwendige
            </button>
            <button type="button" className="accept" onClick={acceptAll}>
              Alle akzeptieren
            </button>
            <button type="button" onClick={clearConsent}>
              Einwilligung zuruecksetzen
            </button>
          </div>
          <button
            type="button"
            className="close-settings"
            onClick={() => setSettingsOpen(false)}
          >
            Schliessen
          </button>
        </div>
      )}
    </>
  );
};

export default ConsentBanner;
