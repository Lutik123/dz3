
(function() {

  setTimeout(function func1() {

    Promise.resolve().then(() => {
      console.log('lalala')
    })
    
    Promise.resolve().then(() => {
      const textColor = document.querySelector('.box__text')
      textColor.style.color = 'black';
      console.log(textColor)
    })
  },3000)

  setTimeout(function func2() {

    Promise.resolve().then(() => {
      console.log('lalala1')
    })
    
    Promise.resolve().then(() => {
      console.log('lalala2')
    })
  },4000) 
  
  setTimeout(function func1() {

    Promise.resolve().then(() => {
      console.log('lalala3')
    })
    
    Promise.resolve().then(() => {
      const boxColor = Array.from(document.querySelectorAll('.box__block'))
      boxColor.forEach(el => {
        el.style.backgroundColor = 'white';
      })
      console.log(boxColor)
    })
  },5000)
})()

