export default function MemoApp({ $app, initialState }) {
  this.$app = $app
  this.$target = document.querySelector('.memo')
  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = ``
  }
}
