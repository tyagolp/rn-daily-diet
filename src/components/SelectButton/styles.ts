import { DotIcon } from "lucide-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 16px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const ContainerSelectedGreen = styled(Container)`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border: 1px solid ${({ theme }) => theme.COLORS.GREEN_DARK};
`;
export const ContainerSelectedRed = styled(Container)`
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  border: 1px solid ${({ theme }) => theme.COLORS.RED_DARK};
`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;

export const DotRed = styled(Dot)`
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`;
