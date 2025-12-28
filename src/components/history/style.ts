import styled from "styled-components";

export const Card = styled.div`
  background: #111;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  max-height: 300px;
  overflow-y: auto;
`;

export const Row = styled.div<{ action: string }>`
  display: grid;
  grid-template-columns: 1fr 80px 120px;
  margin-top: 8px;
  color: ${({ action }) => (action === "BUY" ? "#0f0" : "#f55")};
`;