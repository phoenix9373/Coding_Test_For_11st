export default function StatusBar({ $app, initialState }) {
  const $target = document.createElement('header')
  this.$target = $target
  this.state = initialState

  $app.appendChild(this.$target)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = `<time>${this.state}</time>`
  }
}
