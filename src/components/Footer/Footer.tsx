import { OPEN_CONSENT_SETTINGS_EVENT } from "../../utils/consent";
import "./Footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  const openConsentSettings = () => {
    window.dispatchEvent(new Event(OPEN_CONSENT_SETTINGS_EVENT));
  };

  return (
    <footer className="footer">
      <p>© 2025 Edvaldo Mussa - Designed and developed by myself</p>
      <motion.button
        type="button"
        className="privacy-settings-btn"
        onClick={openConsentSettings}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        Privacy settings
      </motion.button>
    </footer>
  );
};

export default Footer;
