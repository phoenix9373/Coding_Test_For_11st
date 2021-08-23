export default function Button({ $target, innerText, onHandleClick }) {
  const $button = document.createElement('button')
  this.$button = $button

  $target.appendChild(this.$button)

  this.$button.innerText = innerText
  this.$button.addEventListener('click', () => {
    onHandleClick()
  })

  this.setClass = (className) => {
    this.$button.classList.add(className)
  }

  this.removeClass = (className) => {
    this.$button.classList.remove(className)
  }
}
