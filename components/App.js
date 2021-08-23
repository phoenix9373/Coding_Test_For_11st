import StatusBar from './StatusBar.js'
import Home from './Home.js'
import AlarmApp from './AlarmApp.js'
import MemoApp from './MemoApp.js'
import PhotoApp from './PhotoApp.js'

export default function App() {
  this.state = {
    isActive: {
      back: false,
      new: false,
    },
    currentApp: 'home',
    homeStatus: ['알람', '메모', '사진'],
    alarmStatus: [],
    memoStatus: [],
    photoStatus: [],
  }
  this.$content = document.querySelector('.content')

  this.renderApp = () => {
    switch (this.state.currentApp) {
      case '알람':
        this.alramApp.render()
        break
      case '메모':
        this.memoApp.render()
        break
      case '사진':
        this.photoApp.render()
        break
      case 'home':
        this.home.render()
        break
    }
  }

  this.statusBar = new StatusBar({
    initialState: this.state.isActive,
    onHandleClickBack: () => {
      this.setState({
        ...this.state,
        isActive: { back: false, new: false },
        currentApp: 'home',
      })
    },
    onHandleClickNew: () => {
      if (this.state.currentApp === '알람') {
        this.alramApp.makeInputVisible()
      } else if (this.state.currentApp === '메모') {
        this.memoApp.makeInputVisible()
      }
    },
  })

  this.home = new Home({
    initialState: this.state.homeStatus,
    onHandleClick: (appName) => {
      const isActive = appName === '사진' ? { back: true, new: false } : { back: true, new: true }
      this.setState({ ...this.state, currentApp: appName, isActive })
    },
    changeAppName: (appName) => this.setState({ ...this.state, currentApp: appName }),
  })

  this.alramApp = new AlarmApp({
    $target: this.$content,
    initialState: this.state.alarmStatus,
  })

  this.memoApp = new MemoApp({
    $target: this.$content,
    initialState: this.state.memoStatus,
  })

  this.photoApp = new PhotoApp({
    $target: this.$content,
    initialState: this.state.photoStatus,
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.statusBar.setState(nextState.isActive)
    this.render()
  }

  this.render = () => {
    this.renderApp()
  }
}
