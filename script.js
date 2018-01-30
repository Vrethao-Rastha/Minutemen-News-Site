fetch('http://localhost:3000/db')
.then(response => response.json())
.then(arr => {
  // console.log(arr)
    // static headlines and pictures
  document.addEventListener("DOMContentLoaded", newsPopulator);
  document.getElementById('main-blurb').addEventListener('click', learnMore)
  document.getElementById('main-blurb').innerHTML = arr.dcr[0].title
  document.getElementById('second-title-one').innerHTML = arr.Minutemen[8].title
  document.getElementById('reporter1').innerHTML = 'Piper Wright'
  document.getElementById('second-title-two').innerHTML = arr.Minutemen[2].title
  document.getElementById('reporter2').innerHTML = 'Travis Miles'
  document.getElementById('blog').addEventListener('click', blogPage)
  document.getElementById('piper').addEventListener('click', piperPage)
  document.getElementById('report').addEventListener('click', reportPage)
  console.log(arr.dcr[3].title)

// loop for dynamic story generation
  function newsPopulator(e){
  for (let i = 0; i < arr.dcr.length; i++){
    console.log(arr.dcr[i].title)

    document.getElementById(`dcr-headline-${i}`).innerHTML = arr.dcr[i].title
  }
}
// modal news object function
function learnMore(e){
console.log('click')
  document.getElementById('headlineModalContent').innerHTML = arr.dcr[0].story
  document.getElementById('headlineModalLabel').innerHTML = arr.dcr[0].title
  }
})
  // end of modal news object function
function blogPage(){
  console.log('click')
}
function piperPage(){
  console.log('click')
}
function reportPage(){
  console.log('click')
}
