export const setAlert = ({
  alertText,
  alertStatus
}: {
  alertText: string,
  alertStatus: string
}) => {
  return {
    alertText, alertStatus
  }
}