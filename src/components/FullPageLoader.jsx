import React, { useEffect, useState } from 'react';
import './FullPageLoader.css';

const quotes = [
  `"Set your heart ablaze!" – Rengoku 🔥`,
  `"Go forward! Even if you're torn apart!" – Rengoku ⚔️`,
  `"I will not yield!" – Tanjiro Kamado 🌊`,
  `"Don’t stop. Run. You’ve got legs, don’t you?" – Inosuke 🐗`,
  `"I swear I’ll protect Nezuko!" – Tanjiro Kamado 🩸`,
];

const FullPageLoader = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fullpage-loader">
      <div className="sword-slash-bg"></div>
      <div className="demon-slayer-line"></div>
      <p className="quote-text">{quotes[quoteIndex]}</p>
    </div>
  );
};

export default FullPageLoader;
