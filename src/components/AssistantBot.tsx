import React, { useEffect } from 'react';

export const AssistantBot: React.FC = () => {
  useEffect(() => {
    if (window && !(window as any).tidioChatApi) {
      const script = document.createElement('script');
      script.src = 'https://code.tidio.co/YOUR_PUBLIC_KEY.js'; // Replace YOUR_PUBLIC_KEY with your Tidio public key
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  return null;
};
