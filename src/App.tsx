import { useEffect, useState } from "react";
import { getStatus } from "./api/botApi";
import { StatusCard } from "./components/status/StatusCard";
import { ButtonPanel } from "./components/button/Buttons";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Container, Grid } from "./style";
import { BalanceCard } from "./components/priceCard/balanceCard";
import { HistoryCard } from "./components/history/HistoryCard";
import { BtcChart } from "./pages/graphic/graphic_btc";

function App() {
  const [running, setRunning] = useState(false);

  useEffect(() => {
  const fetchStatus = async () => {
    try {
      const data = await getStatus();
      setRunning(data.running);
    } catch (err) {
      console.error(err);
    }
  };

  fetchStatus();

  const interval = setInterval(fetchStatus, 2000);

  return () => clearInterval(interval);
}, []);


  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>🤖 Binance Trading Bot</h1>

        <Grid>
          <StatusCard running={running} />
          <BalanceCard />
        </Grid>
        <HistoryCard/>
        <ButtonPanel />
        <BtcChart/>
      </Container>
    </>
  );
}

export default App;
