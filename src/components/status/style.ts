import styled from "styled-components";

export const Card = styled.div`
  background: #1e2329;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Value = styled.p<{ running: boolean }>`
  color: ${props => (props.running ? "#0ecb81" : "#f6465d")};
  font-weight: bold;
`;