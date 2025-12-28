import { useEffect, useState } from "react";
import { ChartContainer, PriceLabel, Title } from "./style";

export function BtcChart() {
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/ws/btc");

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
