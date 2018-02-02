var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// code to autoload the modal
$('#pipers-modal').modal()

// post function
let newReport = {
  report: `A Deathclaw ate my homework!`
}

document.getElementById('exampleCheck1').addEventListener('click', nonSynth)

function nonSynth(e) {
  document.getElementById('submit-button').classList.remove('disabled');
}
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
