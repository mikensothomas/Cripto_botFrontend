import { useEffect, useState } from "react";

export function BTCPrice() {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/btc");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(data.price);
    };

    return () => ws.close();
  }, []);

  return (
    <h2>BTC/USDT: ${price.toFixed(2)}</h2>
  );
}
