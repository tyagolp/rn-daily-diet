import React, { useState } from "react";
import { Content, Title } from "./styles";
import { ButtonProps, TouchableOpacityProps } from "react-native";
import dayjs from "dayjs";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type Props = TouchableOpacityProps & {
  date: Date;
  changeDate: (date: Date) => void;
  type?: "date" | "time";
};

export function ButtonInputDate({
  date,
  changeDate,
  type = "date",
  ...rest
}: Props) {
  const [open, setOpen] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setOpen(false);
    changeDate(currentDate);
  };

  return (
    <>
      <Content {...rest} onPress={() => setOpen(true)}>
        <Title>
          {type === "date"
            ? dayjs(date).format("DD/MM/YYYY")
            : dayjs(date).format("HH:mm")}
        </Title>
      </Content>

      {open && (
        <RNDateTimePicker
          mode={type}
          value={date}
          onChange={onChange}
          locale="pt-BR"
        />
      )}
    </>
  );
}
