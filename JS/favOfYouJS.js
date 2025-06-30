var slideIndex = 1;

// Place holder for the message array
const message = 
["Beautiful girl in blue <br> I wish you read this with love <br> Love full of the red hue <br> Love as pure as a white dove.",
"Beautiful girl in yellow <br> Let the light shine your beauty <br> As I admire from below <br> Thinking of you cutie.",
"I dream of you and me in this forest <br> Longing for that sweet embrace <br> Let's take that time and let our mind rest <br> And love each other full of grace.", 
"Our love is not always sunshine and rainbow <br> As we both have shown our flaws <br>I accept you, as my heart is dough <br> Not like a block of ice as it thaws.",
"I want to feel your affection <br> As sometimes I need it when I’m down <br> I feel comfort through our connection <br> And it puts a smile onto my frown.",
"Beautiful girl in beige <br> You sleep in my mind all day <br> Thinking one day we can dance on a stage <br> Hands locked tight with a kiss without delay.",
"You’re the girl I want the most <br> You’re the girl that gives me joy <br> You’re the girl I can boast <br> You're the girl I’d never toy.",
"Smile with me with flowers in your ears <br> Laugh with me, in jokes that we share <br> Cry with me, in moments full of tears <br> Be mad with me to show that we care.",
"I love you even if you make me cry <br> I love you even if we both can lack <br> I love you in all the lows and highs <br> With all my heart, beautiful girl in black."
];

window.onload = function() {
  showDivs(slideIndex);
};

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("picsOfYou");
  var y = message;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} 
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  if (x.length > 0) {
    x[slideIndex-1].style.display = "block";
  }
  var msgElem = document.getElementsByClassName("message")[0];
  if (msgElem) {
    msgElem.innerHTML = y[slideIndex - 1] || "No message available";
  }
}

// Buttons
function redirectToHome() {
    window.location.href = "home.html"; 
}

function redirectToTogether() {
    window.location.href = "together.html"; 
}

function redirectToVid() {
    window.location.href = "video.html"; 
}

// MUSIC
  const music = document.getElementById("bgMusic");
  music.volume = 0.9; // 30% loudness