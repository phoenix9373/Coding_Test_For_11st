import { setLocalStorage, getLocalStorage } from '../utils/localStorage.js'
import { memoInput, memoItem } from '../utils/template.js'

export default function MemoApp({ $target, initialState }) {
  this.$target = $target
  this.state = getLocalStorage('memo') ? getLocalStorage('memo') : initialState

  this.$target.addEventListener('click', (e) => {
    if (e.target.className !== 'memo-text') return
    const closestMemo = e.target.closest('.memo-container')

    const memos = document.querySelectorAll('.memo-container')
    memos.forEach((memo) => {
      if (memo !== closestMemo) memo.classList.add('memo-hidden')
    })

    closestMemo.classList.toggle('memo-hidden')
  })

  this.makeInputVisible = () => {
    this.$input.classList.remove('unVisible')
  }

  this.makeInputUnVisible = () => {
    this.$input.classList.add('unVisible')
  }

  this.setState = (nextState) => {
    setLocalStorage('memo', nextState)
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const htmlString = memoInput() + this.state.map((text) => memoItem(text)).join('')
    this.$target.innerHTML = htmlString

    this.$input = document.querySelector('.memo-input')
    this.$input.addEventListener('keyup', (e) => {
      if (e.key !== 'Enter') return

      this.setState([...this.state, e.target.value])
      this.makeInputUnVisible()
    })
  }
}
