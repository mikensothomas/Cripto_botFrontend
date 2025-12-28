const API_URL = import.meta.env.VITE_API_URL;

export type BalanceResponse = {
  BRL: number;
  BTC: number;
};

export type Trade = {
  action: "BUY" | "SELL";
  price: number;
  quantity: number;
  time: string;
};

export async function getStatus() {
  const res = await fetch(`${API_URL}/status`);
  return res.json();
}

export async function startBot() {
  const res = await fetch(`${API_URL}/start`, { method: "POST" });
  return res.json();
}

export async function stopBot() {
  const res = await fetch(`${API_URL}/stop`, { method: "POST" });
  return res.json();
}

export async function getBalance(): Promise<BalanceResponse> {
  const res = await fetch(`${API_URL}/balance`);

  if (!res.ok) {
    throw new Error("Erro ao buscar saldo");
  }

  return res.json();
}

export async function getHistory(): Promise<Trade[]> {
  const res = await fetch(`${API_URL}/history`);
  if (!res.ok) throw new Error("Erro ao buscar histórico");
  return res.json();
}
