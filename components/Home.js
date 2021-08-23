export default function Home({ initialState, onHandleClick, changeAppName }) {
  const $target = document.querySelector('.content')

  this.$target = $target
  this.state = initialState

  const generateIcon = (appName, idx) => {
    return `
    <div class="app-container" id="app-drag-${idx}" draggable="true" data-name="${appName}">
      <span class="app-name">${appName}</span>
    </div>`
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const appIcons = this.state
      .map((appName, idx) => {
        return generateIcon(appName, idx)
      })
      .join('')
    this.$target.innerHTML = appIcons

    const apps = document.querySelectorAll('.app-container')
    apps.forEach((app) => {
      app.addEventListener('click', () => {
        const appName = app.dataset.name
        changeAppName(appName)
        onHandleClick(appName)
      })
    })
  }
}
