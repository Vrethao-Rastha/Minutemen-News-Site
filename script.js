fetch('http://localhost:3000/db')
.then(response => response.json())
.then(arr => {
  console.log(arr)
  document.getElementById('main-blurb').addEventListener('click', learnMore)
  document.getElementById('main-blurb').innerHTML = arr.dcr[0].title
  document.getElementById('second-title-one').innerHTML = arr.Minutemen[8].title
  document.getElementById('reporter1').innerHTML = 'Piper Wright'
  document.getElementById('second-title-two').innerHTML = arr.Minutemen[2].title
  document.getElementById('reporter2').innerHTML = 'Travis Miles'
// modal news object
function learnMore(e){
console.log('click')
  document.getElementById('headlineModalContent').innerHTML = arr.dcr[0].story
  document.getElementById('headlineModalLabel').innerHTML = arr.dcr[0].title
  }
})
