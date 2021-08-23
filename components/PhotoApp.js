export default function PhotoApp({ $target, initialState }) {
  this.$target = $target
  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = ``
  }
}
