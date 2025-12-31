import { useEffect, useState } from "react";

export default function useConfig() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/Constants.json`);
        if (!response.ok) throw new Error("File di configurazione non trovato");

        const data = await response.json();
        setConfig(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  return { config, loading, error };
}
