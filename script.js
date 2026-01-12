/* Floating hearts */
const heartsContainer = document.querySelector('.hearts');

function createHeart(){
  const heart = document.createElement('span');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random()*100 + 'vw';
  heart.style.animationDuration = (Math.random()*3 + 3) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart,300);

/* Typewriter text (Home only) */
const textElement = document.getElementById("typewriter");
if(textElement){
  const text = "Muntaha, you are my calm in chaos, my smile in sadness, my forever in every heartbeat 💖";
  let i = 0;
  function type(){
    if(i < text.length){
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}
