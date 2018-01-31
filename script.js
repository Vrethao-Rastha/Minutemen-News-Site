fetch('http://localhost:3000/db')
.then(response => response.json())
.then(arr => {
  // console.log(arr)
    // static headlines and pictures
  document.getElementById('main-blurb').addEventListener('click', learnMore)
  document.getElementById('main-blurb').innerHTML = arr.dcr[0].title
  document.getElementById('second-title-one').innerHTML = arr.Minutemen[8].title
  document.getElementById('reporter1').innerHTML = 'Piper Wright'
  document.getElementById('second-title-two').innerHTML = arr.dcr[7].title
  document.getElementById('reporter2').innerHTML = 'Travis Miles'
    // navbar buttons
  document.getElementById('blog').addEventListener('click', blogPage)
  document.getElementById('piper').addEventListener('click', piperPage)
  document.getElementById('report').addEventListener('click', reportPage)

  // modal checkbox function

  document.getElementById('exampleCheck1').addEventListener('click', nonSynth)
    function nonSynth(e){
      
      document.getElementById('submit-button').classList.remove('disabled');
    }
  // loop for dynamic story generation
  for (let i = 0; i < arr.Minutemen.length - 4; i++){

  document.getElementById(`minutemen-headline-${i+1}`).innerHTML = arr.Minutemen[i].title
  document.getElementById(`dcr-headline-${i+1}`).innerHTML = arr.dcr[i+1].title

  // document.getElementById('minutemen-headline-1').addEventListener('click', minutemenStory)
  // document.getElementById('minutemen-headline-2').addEventListener('click', minutemenStory)
  // document.getElementById('minutemen-headline-3').addEventListener('click', minutemenStory)
  // document.getElementById('minutemen-headline-4').addEventListener('click', minutemenStory)
  // document.getElementById('minutemen-headline-5').addEventListener('click', minutemenStory)

  // document.getElementById('dcr-headline-1').addEventListener('click', dcrStory)
  // document.getElementById('dcr-headline-2').addEventListener('click', dcrStory)
  // document.getElementById('dcr-headline-3').addEventListener('click', dcrStory)
  // document.getElementById('dcr-headline-4').addEventListener('click', dcrStory)
  // document.getElementById('dcr-headline-5').addEventListener('click', dcrStory)


  // function minutemenStory(){
  //   document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[0].story
  //   document.getElementById('side-story-modal-content').innerHTML = arr.dcr[0].title
  // }



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
