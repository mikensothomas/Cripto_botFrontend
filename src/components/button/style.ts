import styled from "styled-components";

export const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Button = styled.button<{ variant: "start" | "stop" }>`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  background: ${props =>
    props.variant === "start" ? "#0ecb81" : "#f6465d"};

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;