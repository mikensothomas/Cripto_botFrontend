import { Card, Title, Value } from "./style";

type Props = {
  running: boolean;
};

export function StatusCard({ running }: Props) {
  return (
    <Card>
      <Title>Status do Bot</Title>
      <Value running={running}>
        {running ? "ATIVO" : "PARADO"}
      </Value>
    </Card>
  );
}