import dayjs from "dayjs";

export function formatDateDots(date: Date) {
  return dayjs(date).format("DD.MM.YYYY");
}
export function formatDate(date: Date) {
  return dayjs(date).format("DD/MM/YYYY");
}
export function formatTime(date: Date) {
  return dayjs(date).format("HH:mm");
}
