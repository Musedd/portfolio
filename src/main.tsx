import { Analytics } from '@vercel/analytics/react';
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/open-sans/latin.css'
import './index.scss'
import App from './App.tsx'
import { CONSENT_EVENT, readConsent, type ConsentChoice } from './utils/consent'

const Root = () => {
  const [consent, setConsent] = useState<ConsentChoice>(() => readConsent());

  useEffect(() => {
    const onConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<ConsentChoice>;
      setConsent(customEvent.detail);
    };

    window.addEventListener(CONSENT_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, onConsentChange);
  }, []);

  return (
    <StrictMode>
      <App />
      {consent === "accepted" && <Analytics />}
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(
  <Root />,
)
