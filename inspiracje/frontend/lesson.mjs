export function setupLesson(form, questions, onComplete) {
  if (questions.length === 0) throw new Error('Lekcja wymaga co najmniej jednego zadania.')

  const task = form.querySelector('.lesson-task')
  const feedback = form.querySelector('.lesson-feedback')
  const action = form.querySelector('.course-button')
  const progress = form.querySelector('progress')
  let index = 0
  let checked = false
  let correctCount = 0

  function renderQuestion(moveFocus) {
    const question = questions[index]
    const fieldset = document.createElement('fieldset')
    const legend = document.createElement('legend')
    legend.textContent = question.prompt
    legend.tabIndex = -1
    fieldset.append(legend)

    for (const [choiceIndex, choice] of question.choices.entries()) {
      const tile = document.createElement('label')
      const input = document.createElement('input')
      tile.className = 'answer-tile'
      input.type = 'radio'
      input.name = 'answer'
      input.value = String(choiceIndex)
      tile.append(input, choice)
      fieldset.append(tile)
    }

    checked = false
    action.disabled = true
    action.textContent = 'Sprawdź'
    delete feedback.dataset.result
    feedback.textContent = ''
    task.replaceChildren(fieldset)
    task.removeAttribute('data-enter')
    void task.offsetWidth
    task.setAttribute('data-enter', '')
    if (moveFocus) legend.focus()
  }

  function handleChange(event) {
    if (!checked && event.target.name === 'answer') action.disabled = false
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (checked) {
      index += 1
      if (index === questions.length) {
        action.disabled = true
        dispose()
        onComplete({ correct: correctCount, total: questions.length })
      } else {
        renderQuestion(true)
      }
      return
    }

    const selected = form.querySelector('input[name="answer"]:checked')
    if (!selected) return

    const question = questions[index]
    const correct = Number(selected.value) === question.correct
    correctCount += Number(correct)
    checked = true
    selected.closest('fieldset').disabled = true
    progress.value = index + 1
    feedback.dataset.result = correct ? 'correct' : 'incorrect'
    feedback.textContent = correct
      ? 'Dobra odpowiedź!'
      : `Poprawna odpowiedź: ${question.choices[question.correct]}`
    action.textContent = index + 1 === questions.length ? 'Zobacz wynik' : 'Dalej'
    action.focus()
  }

  function dispose() {
    form.removeEventListener('change', handleChange)
    form.removeEventListener('submit', handleSubmit)
  }

  progress.max = questions.length
  progress.value = 0
  form.addEventListener('change', handleChange)
  form.addEventListener('submit', handleSubmit)
  renderQuestion(false)
  return dispose
}
