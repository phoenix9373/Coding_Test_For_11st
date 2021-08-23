import generateTime from '../utils/generateTime.js'
import Button from './Button.js'

export default function StatusBar({ initialState, onHandleClickBack, onHandleClickNew }) {
  const $nav = document.querySelector('.nav')
  const $target = document.createElement('time')
  $target.className = 'time'
  $target.innerText = generateTime()

  this.$nav = $nav
  this.$target = $target
  this.state = initialState

  this.$backBtn = new Button({ $target: this.$nav, innerText: 'BACK', onHandleClick: onHandleClickBack })
  this.$backBtn.setClass('nav-btn')
  this.$backBtn.setClass('unVisible')

  this.$nav.appendChild(this.$target)

  this.$newBtn = new Button({ $target: this.$nav, innerText: 'NEW', onHandleClick: onHandleClickNew })
  this.$newBtn.setClass('nav-btn')
  this.$newBtn.setClass('unVisible')

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  const renderButton = (isVisible, posCallback, nagCallback) => {
    if (isVisible) {
      posCallback()
    } else {
      nagCallback()
    }
  }

  this.render = () => {
    renderButton(
      this.state.back,
      () => this.$backBtn.removeClass('unVisible'),
      () => this.$backBtn.setClass('unVisible')
    )

    renderButton(
      this.state.new,
      () => this.$newBtn.removeClass('unVisible'),
      () => this.$newBtn.setClass('unVisible')
    )
  }

  setInterval(() => {
    this.$target.innerText = generateTime()
  }, 1000)
}
