import { useEffect, useState } from "react";
import { Card, Item, Label, Value } from "./style";
import { getBalance } from "../../api/botApi";

export function BalanceCard() {
  const [brl, setBrl] = useState(0);
  const [btc, setBtc] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = await getBalance();
        setBrl(data.BRL);
        setBtc(data.BTC);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBalance();
    const interval = setInterval(fetchBalance, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <h3>💰 Saldo</h3>

      <Item>
        <Label>BRL</Label>
        <Value>R$ {brl.toFixed(2)}</Value>
      </Item>

      <Item>
        <Label>BTC</Label>
        <Value>{btc}</Value>
      </Item>
    </Card>
  );
}
