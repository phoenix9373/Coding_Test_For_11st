export default function PhotoApp({ $app, initialState }) {
  this.$app = $app
  this.$target = document.querySelector('.photo')
  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = ``
  }
}
