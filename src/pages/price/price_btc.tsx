import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export function BTCPrice() {
  const [price, setPrice] = useState(0);

  // useEffect(() => {
  //   const ws = new WebSocket(`ws:${API_URL}/ws/btc`);

  //   ws.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     setPrice(data.price);
  //   };

  //   return () => ws.close();
  // }, []);
  useEffect(() => {
    const wsUrl = `${API_URL.replace(/^http/, 'ws')}/ws/btc`;
    const ws = new WebSocket(wsUrl);

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
