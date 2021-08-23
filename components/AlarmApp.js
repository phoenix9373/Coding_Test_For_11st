import { alarmInput, alarm } from '../utils/template.js'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js'

export default function AlarmApp({ $target, initialState, onHandleClick }) {
  this.$target = $target // content
  this.state = getLocalStorage("alarm") ? getLocalStorage("alarm") : initialState

  const alarmItem = ({meridiem, hour, min}) => {
    return `${meridiem} ${hour}시 ${min}분`
  }

  const getSelectedValue = (selectElement) => {
    return selectElement.options[selectElement.selectedIndex].value
  }

  this.makeInputHidden = () => {
    this.$input.classList.remove('unVisible')
  }

  this.$target.addEventListener('click', (e) => {
    const target = e.target
    if (target.className !== 'alarm-remove') return

    const nextState = this.state.filter(({ id }) => {
      return id !== target.dataset.alarmId
    })

    this.setState(nextState)
  })

  this.setAlarm = () => {}

  this.removeAlarm = () => {}

  this.setState = (nextState) => {
    setLocalStorage("alarm", nextState)
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

      this.setState([...this.state, { item: alarmItem({...info}), id: String(Date.now()) }])
      this.$input.classList.add('unVisible')
    })
  }
}
