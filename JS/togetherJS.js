var slideIndex = 1;

// Place holder for the message array
const message = 
["This one holds near to my heart, the day we finally got together. I still remember how you made me walk in circles hehe. I honestly didn’t expect it, I was ready to court you for a couple more months. This was after your trip, I missed you so much while you were away. But when you finally got back and made us official, it really melted my heart away. I got to kiss you for the first time too, something I still crave to this day. May it be in your forehead, cheeks, hands, or lips, I still can’t get enough of it. I love you.",
"I think I’ve stated this before but you really were so beautiful and cute this day. I remember I kept looking at you, I can’t explain why but I just wanna hug you tightly, even now I still want to hug you tightly. Us winning Sandurot really was the cherry on top, it makes me wanna experience it with you hehe. I do apologize for making you walk a lot, I promise if I get my own motorcycle then you won’t have to walk miles on dates. I love you tamtamtam.",
"This one was when you had your MAPEH digital art group work. This was also the day we almost died, it still gives me chills thinking about that van. When we went to the carnival and we rode the viking, the way you held onto me is a feeling I still wish I could experience again. You have a magic touch hehe. Maybe we could ride other less intense rides in the future hehe. I love you.",
"You really are the Jeanette to my Simon, you looked really good in that costume even if as you said “jejemon” gamay hehe. To the other girl who wore the same? I don’t think it's even a competition, you set the standard of being Jeanette baby. You gave some of the hair ties you had on, I still have them if you ever want to be Jeanette again. I love you.",
"This day was a real highlight for the both of us in our junior high school journey hehe, the last christmas party as a junior. I still think you did a really good job managing everything, I also apologize that I couldn’t help in making the decorations. Though I did have a reason as you may have known, and it paid off as you loved the flowers hehe, I wish I’ll get more chances to make those for you again. The after party was really relaxing, we should maybe go for a swim together and just let the water carry our worries away, especially you, you need the rest the most. I love you.",
"This day was a highlight for me, I got to go to church with not only you but your family as well. To me, it’s a really big honor to dine with the people you grew up with and raised by. Maybe I could do the same with you? Dinner with my mom and dad, I’ll cook some of the dishes of course, you eating them would in of itself be a massive complement. You riding the pony is still one of the cutest things ever hehe. I love you.",
"If I could kiss you everyday, I would. Your soft skin is something I wanna feel and hold, especially combined with your gorgeous face and bright smile. It was sad it was short, I hope God can take better care of you more as you don’t deserve to be sick on special days. But still, this was our first valentines together and I hope there will be more. I love you.",
"This was your sweet 16 my baby, that dress really fitted you nicely. I hope I can see you in it in person too hehe, I bet it looks even more pretty seeing you in  the angles. I apologize I didn’t get you flowers, I really did try but for reasons I can’t tell I couldn’t. You’re such a cutie in the photos too, getting to hold you as always, feels really good. I love you.",
"I hope this is still your favorite because it’s now one of mine. That dress is just gorgeous, it makes me really appreciate how good looking and sexy you are. And that smile always shines brighter than the lights at the venue. All though it took a lot of courage and some help from Maam Pino, getting to dance with you is still a memory I will hold near my heart. Even if it was short, it’s something I always come back to when I miss you. It's one of the things I’ve always really wanted and would want to try again. Dancing with you made me feel something I can’t describe fully but I know feels good.",
"This day was when you and I graduated Junior High, I am so proud for not only managing to do so but also doing it with flying colors. I am so proud of you, being able to witness it with my very own two eyes is an experience I want to feel every time you achieve something. You got High Honors, medals, and new knowledge I know you worked hard to obtain. And I hope I will also be able to witness all of this again when we graduate high school. You’re one in a million, being your boyfriend is an achievement. I love you.",
"This day you may not be fond of, we did things that you really didn’t think were you and I apologize for how things went. I hope we remember this day by the fun we did have and the moments where we were genuine instead of the lustful actions we committed. I know I’ve said sorry before but I’ll repeat it here, I’m sorry. Those feelings were just temporary as most of the time I only remember the conversations we had while we ate. Those felt real, you’re real, you make me realize my flaws and change for the better, we’re real. I love you.",
"This wasn’t a date, but a time with friends. Although not much happened, it felt gloomy to me. Not only at the start of the day but especially at the end, I don’t hold it against you. I still have a key moment that puts a smile on my face, when we played in the arcade games. Something about it felt different, it was special in a way. It makes me realise that we are both human, prone to joy and anger, unpredictable. I had fun with you on that day, especially at the arcade, makes me want to do dates with the same vibe. Where we don’t worry about a thing and just have fun together. This is the last letter of this section, and I wanna end it on a happy note. Now that we’ve had less time together, it doesn’t make me lose hope, it gives me more in fact. It makes me appreciate the time we do have together more, it makes me look forward to it more. It motivates me to be better and make the most of everything, make the best of the love we have for each other. I love you with all my heart, 12 times and more, Mia."];

window.onload = function() {
  showDivs(slideIndex);
};

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("picsTogether");
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
    msgElem.innerText = y[slideIndex - 1] || "No message available";
  }
}

// Buttons
function redirectToHome() {
    window.location.href = "home.html"; 
}

function redirectToFav() {
    window.location.href = "favOfYou.html"; 
}

function redirectToVid() {
    window.location.href = "video.html"; 
}

