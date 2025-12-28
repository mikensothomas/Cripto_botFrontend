import { useEffect, useState } from "react";
import { Card, Row } from "./style";
import { getHistory, type Trade } from "../../api/botApi";

export function HistoryCard() {
  const [history, setHistory] = useState<Trade[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getHistory();
      setHistory(data);
    };

    fetchHistory();
    const interval = setInterval(fetchHistory, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <h3>📜 Histórico</h3>

      {history.map((t, i) => (
        <Row key={i} action={t.action}>
          <span>{t.time}</span>
          <span>{t.action}</span>
          <span>R$ {t.price.toFixed(2)}</span>
        </Row>
      ))}
    </Card>
  );
}