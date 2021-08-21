const generateTime = () => {
  const date = new Date()
  const time = {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),
  }

  return `${time.year}년 ${time.month}월 ${time.date}일 ${time.hour}시 ${time.min}분 ${time.sec}초`
}

export default generateTime
