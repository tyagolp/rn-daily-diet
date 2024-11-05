import styled from "styled-components/native";

export const Content = styled.TextInput`
  height: 120px;
  padding: 7px;
  border-radius: 6px;
  justify-content: flex-start;
  border: 1px solid ${(x) => x.theme.COLORS.GRAY5};
  color: ${({ theme }) => theme.COLORS.GRAY1};
`;
