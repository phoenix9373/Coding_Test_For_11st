import generateTime from '../utils/generateTime.js'
import StatusBar from './StatusBar.js'

export default function App($app) {
  this.state = {
    time: generateTime(),
    apps: ['알람', '메모', '사진'],
  }

  this.statusBar = new StatusBar({ $app, initialState: this.state.time })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {}

  setInterval(() => {
    this.statusBar.setState(generateTime())
  }, 1000)
}
