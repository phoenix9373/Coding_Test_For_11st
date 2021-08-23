const optionTemplate = (values) => {
  const res = values
    .map((value) => {
      return `<option value="${value}">${value}</option>`
    })
    .join('')

  return res
}

export const alarm = (text, id) => {
  return `
    <div class="alarm-item">
      <span>${text}</span>
      <button class="alarm-remove" data-alarm-id="${id}"}">삭제</button>
    </div>
  `
}

export const alarmInput = () => {
  const hours = Array.from({ length: 12 }, (_, idx) => idx + 1)
  const mins = Array.from({ length: 6 }, (_, idx) => idx * 10)

  return `
    <div class="alarm-input">
      <select id="select-meridiem">
        <option value="오전">오전</option>
        <option value="오후">오후</option>
      </select>
      <select id="select-hour">
        ${optionTemplate(hours)}
      </select>
      <label for="select-hour">시</label>
      <select id="select-min">
      ${optionTemplate(mins)}
      </select>
      <label for="select-min">분</label>
      <button id="select-btn">저장</button>
    </div>
  `
}
