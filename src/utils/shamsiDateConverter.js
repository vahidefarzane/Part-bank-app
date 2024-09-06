export default function shamsiDateConverter(time) {
  const data = new Date(time)
  return ` ${data.getMinutes()} : ${data.getHours()} ,${data.toLocaleDateString('fa-IR')}`
}
