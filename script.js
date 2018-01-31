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

    // modal form validation function

    document.getElementById('exampleCheck1').addEventListener('click', nonSynth)

    function nonSynth(e) {
      document.getElementById('submit-button').classList.remove('disabled');
    }
    // loop for dynamic story generation
    for (let i = 0; i < arr.Minutemen.length - 4; i++) {
      // main headline assignment
      document.getElementById(`minutemen-headline-${i+1}`).innerHTML = arr.Minutemen[i].title
      document.getElementById(`dcr-headline-${i+1}`).innerHTML = arr.dcr[i + 1].title
      // secondary headlines
      document.getElementById('second-title-one').addEventListener('click', secondaryStoryOne)
      document.getElementById('second-title-two').addEventListener('click', secondaryStoryTwo)
    function secondaryStoryOne(){
      document.getElementById('secondary-modal-headline').innerHTML = arr.Minutemen[8].title
      document.getElementById('secondary-modal-content').innerHTML = arr.Minutemen[8].story
      }
    function secondaryStoryTwo(){
      document.getElementById('secondary-modal-headline').innerHTML = arr.dcr[7].title
      document.getElementById('secondary-modal-content').innerHTML = arr.dcr[7].story
    }
      // minutemen side story block
      document.getElementById('minutemen-headline-1').addEventListener('click', minutemenStory1)
      document.getElementById('minutemen-headline-2').addEventListener('click', minutemenStory2)
      document.getElementById('minutemen-headline-3').addEventListener('click', minutemenStory3)
      document.getElementById('minutemen-headline-4').addEventListener('click', minutemenStory4)
      document.getElementById('minutemen-headline-5').addEventListener('click', minutemenStory5)

      function minutemenStory1() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.Minutemen[0].title
        document.getElementById('side-story-modal-content').innerHTML = arr.Minutemen[0].story
      }

      function minutemenStory2() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.Minutemen[1].title
        document.getElementById('side-story-modal-content').innerHTML = arr.Minutemen[1].story
      }

      function minutemenStory3() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.Minutemen[2].title
        document.getElementById('side-story-modal-content').innerHTML = arr.Minutemen[2].story
      }

      function minutemenStory4() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.Minutemen[3].title
        document.getElementById('side-story-modal-content').innerHTML = arr.Minutemen[3].story
      }

      function minutemenStory5() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.Minutemen[4].title
        document.getElementById('side-story-modal-content').innerHTML = arr.Minutemen[4].story
      }

      // diamond city radio side story block
      document.getElementById('dcr-headline-1').addEventListener('click', dcrStory1)
      document.getElementById('dcr-headline-2').addEventListener('click', dcrStory2)
      document.getElementById('dcr-headline-3').addEventListener('click', dcrStory3)
      document.getElementById('dcr-headline-4').addEventListener('click', dcrStory4)
      document.getElementById('dcr-headline-5').addEventListener('click', dcrStory5)


      function dcrStory1() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[1].title
        document.getElementById('side-story-modal-content').innerHTML = arr.dcr[1].story
      }

      function dcrStory2() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[2].title
        document.getElementById('side-story-modal-content').innerHTML = arr.dcr[2].story
      }

      function dcrStory3() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[3].title
        document.getElementById('side-story-modal-content').innerHTML = arr.dcr[3].story
      }

      function dcrStory4() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[4].title
        document.getElementById('side-story-modal-content').innerHTML = arr.dcr[4].story
      }

      function dcrStory5() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[5].title
        document.getElementById('side-story-modal-content').innerHTML = arr.dcr[5].story
      }



    }

    // modal news object function
    function learnMore(e) {
      console.log('click')
      document.getElementById('headlineModalContent').innerHTML = arr.dcr[0].story
      document.getElementById('headlineModalLabel').innerHTML = arr.dcr[0].title
    }
  })
// end of modal news object function


// post function
let newReport = {
  report: `A Deathclaw ate my homework!`

}
document.getElementById('submit-button').addEventListener('click', post)
  function post(e){
    e.preventDefault()
    fetch(`http://localhost:3000/reports`, {
        method: 'post',
        body: JSON.stringify(newReport),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(response => {
        console.log('the server response', response)
        return response.json()
      })
      .then(data => {
        window.alert('Your report will be reviewed by Ronnie Shaw in the order it was recieved');
        console.log('data', data)
      })
    }
