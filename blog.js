function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

fetch('http://localhost:3000/db')
  .then(response => response.json())
  .then(arr => {

    // document.addEventListener("DOMContentLoaded", blogPopulator)



document.getElementById('story-one').addEventListener('click', storyOne)
document.getElementById('story-two').addEventListener('click', storyTwo)
document.getElementById('story-three').addEventListener('click', storyThree)
document.getElementById('story-four').addEventListener('click', storyFour)
document.getElementById('story-five').addEventListener('click', storyFive)


function storyOne(){
openNav()
document.getElementById('the-story').innerHTML = arr.blogs[0].blog
}
function storyTwo(){
openNav()
document.getElementById('the-story').innerHTML = arr.blogs[1].blog
}
function storyThree(){
openNav()
document.getElementById('the-story').innerHTML = arr.blogs[2].blog
}
function storyFour(){
openNav()
document.getElementById('the-story').innerHTML = arr.blogs[3].blog
}
function storyFive(){
openNav()
document.getElementById('the-story').innerHTML = arr.blogs[4].blog
}

})
