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

  const callbackNewButton = (currentAppName) => {
    // new button에 대한 callback function
    // 현재 app에 따라 실행하는 함수가 다름.
    if (currentAppName === 'alarm') {
      console.log('alarm')
    } else if (currentAppName === 'memo') {
      console.log('alarm')
    } else {
      console.log('alarm')
    }
  }

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

  // back, new는 App에서 관리함. -> 버튼은 눌렀을 때, 아래 함수를 실행시키는 것으로
  // 아래 함수는 현재 current 상태를 참고해서 실행할 함수를 반환.

  this.statusBar = new StatusBar({
    initialState: this.state.isActive,
  })

  this.home = new Home({
    initialState: this.state.homeStatus,
    onHandleClick: this.renderApp,
    changeAppName: (appName) => this.setState({ ...this.state, currentApp: appName }),
  })

  this.alramApp = new AlarmApp({
    $target: this.$content,
    initialState: this.state.alarmStatus,
    onHandleClick: () => {},
  })

  this.memoApp = new MemoApp({
    initialState: this.state.memoStatus,
    onHandleClick: () => {},
  })

  this.photoApp = new PhotoApp({
    initialState: this.state.photoStatus,
    onHandleClick: () => {},
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.renderApp()
  }
}
