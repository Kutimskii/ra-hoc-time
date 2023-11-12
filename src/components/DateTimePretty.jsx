
export default function DateTimePretty({Component,date}) {
  const uploadDate = new Date(date).getTime()
  const dateNow = Date.now();
  let newDate;
  const differenceMin = Math.ceil((dateNow - uploadDate) / 60000);
  const differenceHours = Math.ceil(differenceMin/60);
  const differenceDays = Math.floor(differenceHours/24)
  console.log(differenceMin)
  if(differenceMin <= 60){
     newDate='12 минут назад'
  }
  if(differenceHours >= 1){
    newDate='5 часов назад'
  }
  if(differenceDays > 1){
    newDate=`${differenceDays} дней назад`
  }
  return (
    <Component
    date={newDate}
    />
  )
}