import { alarmInput, alarm } from '../utils/template.js'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js'

export default function AlarmApp({ $target, initialState, onHandleClick }) {
  this.$target = $target // content
  this.state = initialState

  const alarmItem = (meridiem, hour, min) => {
    return `${meridiem} ${hour}시 ${min}분`
  }

  const getSelectedValue = (selectElement) => {
    return selectElement.options[selectElement.selectedIndex].value
  }

  this.$target.addEventListener('click', (e) => {
    const target = e.target
    if (target.className !== 'alarm-remove') return

    const nextState = this.state.filter(({ id }) => {
      return id !== target.dataset.alarmId
    })

    this.setState(nextState)
  })

  this.setState = (nextState) => {
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

    const input = document.querySelector('.alarm-input')
    const saveBtn = document.querySelector('#select-btn')

    saveBtn.addEventListener('click', () => {
      const meridiem = getSelectedValue(document.querySelector('#select-meridiem'))
      const hour = getSelectedValue(document.querySelector('#select-hour'))
      const min = getSelectedValue(document.querySelector('#select-min'))
      const id = String(Date.now())

      this.setState([...this.state, { item: alarmItem(meridiem, hour, min), id: id }])
      input.classList.add('unVisible')
    })
  }
}
