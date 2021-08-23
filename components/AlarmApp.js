import { alarmInput, alarm, alarmItem } from '../utils/template.js'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js'
import { getSecond } from '../utils/alarmFunction.js'

export default function AlarmApp({ $target, initialState }) {
  this.$target = $target
  this.state = getLocalStorage('alarm') ? getLocalStorage('alarm') : initialState

  const getSelectedValue = (selectElement) => {
    return selectElement.options[selectElement.selectedIndex].value
  }

  this.makeInputVisible = () => {
    this.$input.classList.remove('unVisible')
  }

  this.$target.addEventListener('click', (e) => {
    const target = e.target
    if (target.className !== 'alarm-remove') return

    this.removeAlarm(target.dataset.alarmId)
    const nextState = this.state.filter(({ id }) => {
      return id !== target.dataset.alarmId
    })

    this.setState(nextState)
  })

  this.setAlarm = (info) => {
    const alarmTime = getSecond({ ...info })
    const timeId = setTimeout(() => {
      alert(alarmItem({ ...info }))
    }, alarmTime)

    setTimeout(() => {
      const nextState = this.state.filter(({ id }) => {
        return id !== timeId
      })
      this.state = nextState
    }, alarmTime)

    return timeId
  }

  this.removeAlarm = (timeId) => {
    clearTimeout(timeId)
  }

  this.setState = (nextState) => {
    setLocalStorage('alarm', nextState)
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const alarmItems = this.state
      .map(({ item, id }) => {
        return alarm(item, id)
      })
      .join('')
    const htmlString = alarmInput() + alarmItems

    this.$target.innerHTML = htmlString

    this.$input = document.querySelector('.alarm-input')
    const saveBtn = document.querySelector('#select-btn')

    saveBtn.addEventListener('click', () => {
      const info = {
        meridiem: getSelectedValue(document.querySelector('#select-meridiem')),
        hour: getSelectedValue(document.querySelector('#select-hour')),
        min: getSelectedValue(document.querySelector('#select-min')),
      }

      const timeId = this.setAlarm(info)
      this.setState([...this.state, { item: alarmItem({ ...info }), id: timeId }])
      this.$input.classList.add('unVisible')
    })
  }
}
