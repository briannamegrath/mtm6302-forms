const forms = [
  `
  <form id='thank-you-card'>
    <p>Who do you wish to thank?</p>
    <input type='text' name='recipient'>
    <button type='submit'>Send</button>
    </form>
  `,
  `
  <form id='invitation-card'>
    <p>Who is invited?</p>
    <input type='text'name'recipient'>
    <button id='submit' type='submit'>Send</button>
    </form>
  `
]
const cards = [
  `
  <h1> Thank you card</h1>
  <p> Thank you <span id='name'></span>!</p>
  `,
  `
  <h1>Invitation Card</h1>
  <p>Hey <span id='name'></span>, you're invited!'</p>
  `
]

function addForm (type) {
  if (type === 'thankYou') {
    document.getElementById('form-container').innerHTML = forms[0]

    const $form = document.getElementById('thank-you-card')

    $form.addEventListener('submit', function (event) {
      console.log('thank you card submitted!')

      document.getElementById('card-container').innerHTML = cards[0]

      document.getElementById('name').textContent = $form.elements[0].value

      event.preventDefault()
    })
  } else if (type === 'invitation') {
    document.getElementById('form-container').innerHTML = forms[1]

    const $form = document.getElementById('invitation-card')

    $form.addEventListener('submit', function (event) {
      document.getElementById('card-container').innerHTML = cards[1]

      document.getElementById('name').textContent = $form.elements[0].value

      event.preventDefault()
    })
  }
}
document.getElementById('thank-you').addEventListener('click', function (event) {
  addForm('thankYou')
})

document.getElementById('invitation').addEventListener('click', function (event) {
  addForm('invitation')
})
