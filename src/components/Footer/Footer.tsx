import { OPEN_CONSENT_SETTINGS_EVENT } from "../../utils/consent";
import "./Footer.scss";

const Footer = () => {
  const openConsentSettings = () => {
    window.dispatchEvent(new Event(OPEN_CONSENT_SETTINGS_EVENT));
  };

  return (
    <footer className="footer">
      <p>© 2025 Edvaldo Mussa - Designed and developed by myself</p>
      <button
        type="button"
        className="privacy-settings-btn"
        onClick={openConsentSettings}
      >
        Privacy settings
      </button>
    </footer>
  );
};

export default Footer;
