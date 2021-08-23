const localStorage = window.localStorage

export const setLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
}

// error 처리 추가 후 주석 삭제
export const getLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    console.error(e)
  }
}
