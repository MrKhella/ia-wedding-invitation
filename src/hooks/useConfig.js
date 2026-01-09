import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function useConfig() {
  const { lang } = useLanguage();
  const [allConfig, setAllConfig] = useState(null);
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //1 Carica il JSON una sola volta
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch(`https://mrkhella.github.io/ia-wedding-invitation/Constants.json`);
        if (!response.ok) throw new Error("File di configurazione non trovato");

        const data = await response.json();
        setAllConfig(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  // 2 Ogni volta che cambia lingua, estrai la parte giusta
  useEffect(() => {
    if (allConfig) {
      setConfig(allConfig[lang]);
    }
  }, [lang, allConfig]);

  return { config, loading, error };
}
