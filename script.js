fetch('http://localhost:3000/db')
  .then(response => response.json())
  .then(arr => {
    // static headlines and pictures
    document.getElementById('main-blurb').addEventListener('click', learnMore)
    document.getElementById('main-blurb').innerHTML = arr.dcr[0].title
    document.getElementById('second-title-one').innerHTML = arr.Minutemen[8].title
    document.getElementById('reporter1').innerHTML = 'Piper Wright'
    document.getElementById('second-title-two').innerHTML = arr.dcr[7].title
    document.getElementById('reporter2').innerHTML = 'Travis Miles'

    // modal news headline object function
    function learnMore(e) {
      document.getElementById('headlineModalContent').innerHTML = arr.dcr[0].story
      document.getElementById('headlineModalLabel').innerHTML = arr.dcr[0].title
    }


    // loop for dynamic story generation
    for (let i = 0; i < arr.Minutemen.length - 4; i++) {
      // main headline assignment
      document.getElementById(`minutemen-headline-${i+1}`).innerHTML = arr.Minutemen[i].title
      document.getElementById(`dcr-headline-${i+1}`).innerHTML = arr.dcr[i + 1].title
      let theHeadlinePicture = `<img class="img-fluid" src="Images/377160_screenshots_20180130180042_1.jpg" alt="">`
      document.getElementById('primary-picture-bin').innerHTML = theHeadlinePicture

      // secondary headline creation
      document.getElementById('second-title-one').addEventListener('click', secondaryStoryOne)
      document.getElementById('second-title-two').addEventListener('click', secondaryStoryTwo)

      function secondaryStoryOne() {
        document.getElementById('secondary-modal-headline').innerHTML = arr.Minutemen[8].title
        document.getElementById('secondary-modal-content').innerHTML = arr.Minutemen[8].story
        let thePicture = `<img class="img-fluid" src="Images/1200px-Fo4_Mama_Murphy.png" alt="">`
        document.getElementById('secondary-picture-bin').innerHTML = thePicture
      }

      function secondaryStoryTwo() {
        document.getElementById('secondary-modal-headline').innerHTML = arr.dcr[7].title
        document.getElementById('secondary-modal-content').innerHTML = arr.dcr[7].story
        let thePicture = `<img class="img-fluid" src="Images/Fallout+4+DLC-ed.jpg" alt="">`
        document.getElementById('secondary-picture-bin').innerHTML = thePicture
      }
      // minutemen side story creation
      document.getElementById('minutemen-headline-1').addEventListener('click', minutemenStory1)
      document.getElementById('minutemen-headline-2').addEventListener('click', minutemenStory2)
      document.getElementById('minutemen-headline-3').addEventListener('click', minutemenStory3)
      document.getElementById('minutemen-headline-4').addEventListener('click', minutemenStory4)
      document.getElementById('minutemen-headline-5').addEventListener('click', minutemenStory5)

      function minutemenStory1() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.Minutemen[0].title
        document.getElementById('side-story-modal-content').innerHTML = arr.Minutemen[0].story
        let thePicture = `<img class="img-fluid" src="Images/slog.jpg" alt="">`
        document.getElementById('side-story-picture-bin').innerHTML = thePicture
      }

      function minutemenStory2() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.Minutemen[1].title
        document.getElementById('side-story-modal-content').innerHTML = arr.Minutemen[1].story
        let thePicture = `<img class="img-fluid" src="Images/abernathy.jpg" alt="">`
        document.getElementById('side-story-picture-bin').innerHTML = thePicture
      }

      function minutemenStory3() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.Minutemen[2].title
        document.getElementById('side-story-modal-content').innerHTML = arr.Minutemen[2].story
        let thePicture = `<img class="img-fluid" src="Images/red_rocket.jpg" alt="">`
        document.getElementById('side-story-picture-bin').innerHTML = thePicture
      }

      function minutemenStory4() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.Minutemen[3].title
        document.getElementById('side-story-modal-content').innerHTML = arr.Minutemen[3].story
        let thePicture = `<img class="img-fluid" src="Images/greentop.jpg" alt="">`
        document.getElementById('side-story-picture-bin').innerHTML = thePicture
      }

      function minutemenStory5() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.Minutemen[4].title
        document.getElementById('side-story-modal-content').innerHTML = arr.Minutemen[4].story
        let thePicture = `<img class="img-fluid" src="Images/mr_gutsy.jpg" alt="">`
        document.getElementById('side-story-picture-bin').innerHTML = thePicture
      }

      // diamond city radio side story creation
      document.getElementById('dcr-headline-1').addEventListener('click', dcrStory1)
      document.getElementById('dcr-headline-2').addEventListener('click', dcrStory2)
      document.getElementById('dcr-headline-3').addEventListener('click', dcrStory3)
      document.getElementById('dcr-headline-4').addEventListener('click', dcrStory4)
      document.getElementById('dcr-headline-5').addEventListener('click', dcrStory5)


      function dcrStory1() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[1].title
        document.getElementById('side-story-modal-content').innerHTML = arr.dcr[1].story
        let thePicture = `<img class="img-fluid" src="Images/corvega.jpg" alt="">`
        document.getElementById('side-story-picture-bin').innerHTML = thePicture
      }

      function dcrStory2() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[2].title
        document.getElementById('side-story-modal-content').innerHTML = arr.dcr[2].story
        let thePicture = `<img class="img-fluid" src="Images/arcjet.jpg" alt="">`
        document.getElementById('side-story-picture-bin').innerHTML = thePicture
      }

      function dcrStory3() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[3].title
        document.getElementById('side-story-modal-content').innerHTML = arr.dcr[3].story
        let thePicture = `<img class="img-fluid" src="Images/Soul_survivor.jpg" alt="">`
        document.getElementById('side-story-picture-bin').innerHTML = thePicture
      }

      function dcrStory4() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[4].title
        document.getElementById('side-story-modal-content').innerHTML = arr.dcr[4].story
        let thePicture = `<img class="img-fluid" src="Images/university_point.jpg" alt="">`
        document.getElementById('side-story-picture-bin').innerHTML = thePicture
      }

      function dcrStory5() {
        document.getElementById('side-story-modal-headline').innerHTML = arr.dcr[5].title
        document.getElementById('side-story-modal-content').innerHTML = arr.dcr[5].story
        let thePicture = `<img class="img-fluid" src="Images/piper.jpg" alt="">`
        document.getElementById('side-story-picture-bin').innerHTML = thePicture
      }
    }

// form validation function
document.getElementById('exampleCheck1').addEventListener('click', nonSynth)

function nonSynth(e) {
  document.getElementById('submit-button').classList.remove('disabled');
}

// post function
let newReport = {
  report: `A Deathclaw ate my homework!`
}
// submission button
document.getElementById('submit-button').addEventListener('click', post)

function post(e) {
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
})
