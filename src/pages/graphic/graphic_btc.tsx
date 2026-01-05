import { useEffect, useState } from "react";
import { ChartContainer, PriceLabel, Title } from "./style";
const API_URL = import.meta.env.VITE_API_URL;

export function BtcChart() {
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const wsUrl = API_URL.startsWith("https")
      ? API_URL.replace("https", "wss") + "/ws/btc"
      : API_URL.replace("http", "ws") + "/ws/btc";

    const ws = new WebSocket(wsUrl);


    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(data.price);
    };

    return () => ws.close();
  }, []);

  return (
    <ChartContainer>
      <Title>📊 BTC em tempo real</Title>
      <PriceLabel>
        R$ {price.toLocaleString("pt-BR")}
      </PriceLabel>
    </ChartContainer>
  );
}
