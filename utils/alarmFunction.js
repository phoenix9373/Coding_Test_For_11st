export const getSecond = ({ meridiem, hour, min }) => {
  const now = new Date(Date.now())
  const nowHour = now.getHours()
  const nowMin = now.getMinutes()
  const nowSec = now.getSeconds()

  hour = meridiem === '오전' ? hour : Number(hour) + 12

  const beforeAlarmSec = new Date((nowHour * 3600 + nowMin * 60 + nowSec) * 1000)
  const alarmSec = new Date((hour * 3600 + min * 60) * 1000)

  if (alarmSec > beforeAlarmSec) {
    return alarmSec - beforeAlarmSec
  } else {
    return new Date(3600 * 24 * 1000) - (beforeAlarmSec - alarmSec)
  }
}
