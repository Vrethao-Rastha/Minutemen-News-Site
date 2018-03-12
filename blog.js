let arr = {
  "blogs": [
  {
    "id": "1",
    "blog": "\r\nI’m from here. I was born in the Commonwealth, but I’ve been away for a long time.\r\nWhen I first set eyes on my home again, I thought I was lost. Or dead.\r\nI guess time has a way of smoothing over the corners of memory, but as I stood on the western border of the Commonwealth that day, I wasn’t sure it was worth going any further.\r\nThen some fool raider decided to try to shoot my dog.\r\nSo now this place can burn, as far as I’m concerned.\r\nI don’t know if she was bloodthirsty and tried to kill everyone she met out here, or was just hungry.\r\nIt the end, it hardly mattered. She tried to kill me, so I killed her.\r\nJust another day in the Commonwealth.\r\nThere is a distant part of me that often wonders: there are so few of us left. A shade, clinging to the bones of its former glory.\r\nI don’t even know how many I’ve killed. No more than tried to kill me to be sure, but every death brings humanity one step closer to our inevitable end.\r\nThere are those who say that we can yet rebuild, that extinction isn’t inevitable.\r\nPersonally, I think we died 200 years ago, and the body hasn’t stopped twitching yet.\r\nI think I’ll end this here. Even I can’t maintain this level of melancholy forever.\r\nJust another day in the Commonwealth…\r\n"
  },
  {
    "id": "2",
    "blog": "An old pre war saying came to mind today: As the world fell, each of us in our own way was broken. It was hard to know who was more crazy... me... or everyone else.\r\nI no longer remember the context, but I find it comforting.\r\nI went home today. Or to what used to be my home.\r\nAn abandoned ruin, just dry bones.\r\nIt feels like someone else’s life now. Did I really used to live here, or have I cracked and created this comforting illusion?\r\nA mother seeking a lost son. Not a new tale, for humanity in general, or in the Commonwealth specifically.\r\nIt would be easy enough to just lie down, stop wandering and end it. There is some appeal in that. Another old quote: Hope is a mistake. If you can’t fix whats broken, you’ll go insane.\r\nAnd yet here I am, writing this journal on this battered old Pipboy.\r\nI found some food and water in an old cellar behind one of these ruined houses.\r\nWhen the sun rises I’ll set off for Concord.\r\n"
  },
  {
    "id": "3",
    "blog": "I found my way to the old cemetery behind the drive-in today.\r\nNot sure what led my feet that direction. Maybe I had intended to find an open grave and fill it.\r\nNot sure there was any plan at all.\r\nI used to find the stone benches and trees comforting, I do remember that.\r\nI found none of that serenity this visit.\r\nWhat I did find was another lost soul.  A woman named Heather who had lost her sister.\r\nI think that collective loss brought us together, not that there’s anyone in this hollow place that doesn’t wear loss and pain as we used to wear designer clothing.\r\nIts nice to have someone around.\r\nIn all honesty, before she saw me and called out to me, I’m not sure the last time I spoke.\r\nThe difficulty I had in making my voice work was telling.\r\nAll those raiders I killed in the Air Force base, and the ones in the Corvega plant the following day, I don’t think I said a thing. I don’t even talk to the dog anymore.\r\nShe agreed to come back with me to the Red Rocket I’ve been living in.\r\nAs the light failed, distant gunfire echoed around the countryside.\r\nStrange what a person can get used to.\r\n"
  },
  {
    "id": "4",
    "blog": "I killed a man with a sledge hammer today.\r\nThat would normally hold more weight than it does these days.\r\nMy pipegun jammed, he was running at me with a tire iron in hand.\r\nI hit him in the chest, noting the odd vibrations that traveled up the handle as his ribs and sternum shattered.\r\nAs he lay there, choking on his own blood, I felt nothing. I left him there, drowning in blood.\r\nThat distant part of me that screams at night in my dreams was calm. I know this place is stealing the last shreds of my humanity.\r\nAll I want is a safe place for Heather and me, where we can live in peace and be left alone.\r\nEvery day I spend in this place moves me closer to those mindless feral ghouls that aimlessly wander the countryside.\r\nWhere must we wander this wasteland, we who search for our better selves?\r\n"
  },
  {
    "id": "5",
    "blog": "I met a man today. A broken idealist, much like I hope I once was.\r\nHe believes that the Commonwealth can be turned around. I’m not sure I agree.\r\nI don’t know why I agreed to help him.\r\nEven if we could turn everything around and create this perfect world, what place would there be for me in it?\r\nI’m a monster. A fiend. \r\nPerhaps the only road to redemption left to me is to die trying to create this brave new world.\r\nWere I a religious woman, I would be a lot more concerned about what may be waiting for me when this body finally fails.\r\nSo this is my new purpose in life. I now dedicate myself to trying to build something lasting on the bones of my failure.\r\nMaybe that will be enough.\r\n"
  },
]
}


function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

// fetch('http://localhost:3000/db')
//   .then(response => response.json())
//   .then(arr => {

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

// })
