import { TitleS } from "@components/TitleS";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const Header = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const BackButton = styled.TouchableOpacity``;

export const Section = styled.ScrollView`
  padding: 20px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px 10px 0 0;
  display: flex;
`;

export const Footer = styled.View`
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  gap: 8px;
`;

export const FormControl = styled.View`
  flex: 1;
  margin-top: 14px;
  display: flex;
  gap: 6px;
`;

export const ViewCollumn = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

export const Overlay = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const ModalContent = styled.View`
  width: 320px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 20px;
`;
export const ModalTitle = styled(TitleS)`
  text-align: center;
  padding: 10px 0 20px;
`;
export const ModalFooter = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
