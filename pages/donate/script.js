const burger = document.getElementById('burger');
const popup =document.querySelector('.pop-up')
burger.addEventListener('click', () => {
  popup.classList.toggle('hidden')
})

const cancel = document.querySelector('.cancelbtn');
cancel.addEventListener('click', () => {
  popup.classList.toggle('hidden')
})

popup.addEventListener('click', (event) => {
  if (event.target.classList.contains('pop-up')) {
    popup.classList.toggle('hidden')
  }
})
/***************************************************/