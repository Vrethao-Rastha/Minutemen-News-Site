function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

document.getElementById('story-one').addEventListener('click', storyOne)
document.getElementById('story-two').addEventListener('click', storyTwo)
document.getElementById('story-three').addEventListener('click', storyThree)
document.getElementById('story-four').addEventListener('click', storyFour)
document.getElementById('story-five').addEventListener('click', storyFive)

function storyOne(){
openNav()
document.getElementById('the-story').innerHTML = 'blah'
}
function storyTwo(){
openNav()
}
function storyThree(){
openNav()
}
function storyFour(){
openNav()
}
function storyFive(){
openNav()
}
