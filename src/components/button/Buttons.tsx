import { startBot, stopBot } from "../../api/botApi";
import { Button, Panel } from "./style";

export function ButtonPanel() {
  return (
    <Panel>
      <Button variant="start" onClick={startBot}>
        ▶ START
      </Button>
      <Button variant="stop" onClick={stopBot}>
        ⏹ STOP
      </Button>
    </Panel>
  );
}