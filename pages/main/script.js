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
/*
const btnLeft = document.querySelector('.arrow-eclipse1');
const btnRight = document.querySelector('.arrow-eclipse2');
const carousel1 = document.querySelector('.cards1');
const carousel2 = document.querySelector('.cards2');
const cardLeft = document.querySelector('.item-left');
const cardRight = document.querySelector('.card-right')

const createCardTemplate = () => {
  const card = document.createElement('.foto-card');
  card.classList.add('.foto-card');
  return card;
}
const fotoCard1 = document.getElementById('foto1')
const fotoCard2 = document.getElementById('foto2')
const fotoCard3 = document.getElementById('foto3')
const fotoCard4 = document.getElementById('foto4')
const fotoCard5 = document.getElementById('foto5')
const fotoCard6 = document.getElementById('foto6')
const fotoCard7 = document.getElementById('foto7')
const fotoCard8 = document.getElementById('foto8')
const arr = [fotoCard1, fotoCard2, fotoCard3, fotoCard4, fotoCard5, fotoCard6, fotoCard7, fotoCard8];
let n;
n = Math.floor(Math.random() - 1) && n >= 0;


const moveLeft = () => {
  carousel1.classList.add('transition-left');
  btnLeft.removeEventListener('click', moveLeft);
  btnRight.removeEventListener('click', moveRight);
}
const moveRight = () => {
  carousel1.classList.add('transition-right');
  btnRight.removeEventListener('click', moveRight);
  btnLeft.removeEventListener('click', moveLeft);
}

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

carousel1.addEventListener('animationend', (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    carousel1.classList.remove('transiton-left');
    changedItem = cardLeft;
    carousel1.classList.remove('transition-right');
    document.querySelector('.card-active').innerHTML = cardLeft.innerHTML;
  } else {
    carousel1.classList.remove('transition-right');
    changedItem = cardRight;
    carousel1.classList.remove('transiton-left');
    const rightItems = cardRight.innerHTML;
    document.querySelector('.card-active').innerHTML = cardRight.innerHTML;
  }
  const card1 = createCardTemplate();
  card1.innerHTML = arr[n].innerHTML;
  const card2 = createCardTemplate();
  card2.innerHTML = arr[n].innerHTML;
  const card3 = createCardTemplate();
  card3.innerHTML = arr[n].innerHTML;
  changedItem.innerHTML ='';
  changedItem.replaceChild(card1);
  changedItem.replaceChild(card2);
  changedItem.replaceChild(card3);

  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight);
});*/


/*Попап на testimonials*/
/*1 карта*/
const testCard = document.getElementById('textCard1');
const popupik1 =document.querySelector('.pop-up2')
testCard.addEventListener('click', () => {
  popupik1.classList.toggle('hidden')
})

const cancelTwo = document.querySelector('.cancelTest');
cancelTwo.addEventListener('click', () => {
  popupik1.classList.toggle('hidden')
})

popupik1.addEventListener('click', (event) => {
  if (event.target.classList.contains('pop-up2')) {
    popupik1.classList.toggle('hidden')
  }
})
/*2 карта*/
const cardTest2 = document.getElementById('textCard3');
const popupik2 =document.querySelector('.pop-up3')
cardTest2.addEventListener('click', () => {
  popupik2.classList.toggle('hidden')
})

const cancelThree = document.querySelector('.cancelTest2');
cancelThree.addEventListener('click', () => {
  popupik2.classList.toggle('hidden')
})

popupik2.addEventListener('click', (event) => {
  if (event.target.classList.contains('pop-up3')) {
    popupik2.classList.toggle('hidden')
  }
})
/*3 карта */
const cardTest3 = document.getElementById('textCard4');
const popupik3 =document.querySelector('.pop-up4')
cardTest3.addEventListener('click', () => {
  popupik3.classList.toggle('hidden')
})

const cancelFour = document.querySelector('.cancelTest3');
cancelFour.addEventListener('click', () => {
  popupik3.classList.toggle('hidden')
})
popupik3.addEventListener('click', (event) => {
  if (event.target.classList.contains('pop-up4')) {
    popupik3.classList.toggle('hidden')
  }
})