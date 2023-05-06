const enter=document.querySelector('.field')
const form=document.querySelector('.form')
const finalvowel=document.querySelector('.vowel')
const finalconso = document.querySelector('.consonant')


 // let i = 0
let bad=form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let counter = 0
  let counterTwo = 0
    if (enter.value.trim() == '') {
      alert('please enter something :)')
      //the below is necessary so that input field will not be empty
      finalconso.textContent = ' '
      finalvowel.textContent = ' '
    }

  for (let i = 0; i < enter.value.trim().length; i++) {
    let vowels = 'aeiou'
    if (vowels.indexOf(enter.value[i].toLowerCase()) > -1) {
      counter++
    }
  }
  finalvowel.textContent = `There are ${counter} vowels and`

  for (let i = 0; i < enter.value.trim().length; i++) {
    let conso = 'bcdfghjklmnpqrstvwxyz'
    if (conso.indexOf(enter.value[i].toLowerCase()) >-1) {  //to count whether it is lower or uppercase
      counterTwo++
    }
  }
  finalconso.textContent = `${counterTwo} consonants`
  form.reset()
  //


})

