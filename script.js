const noviRed = document.createElement("br");
let clickCounter=0;

function openEnvelope() {
  document.querySelector(".koverta").classList.add("otvaranje");
  document.querySelector(".vrata").classList.add("kliknutaKov");
}

function openDoor() {
  document.querySelector(".vrata").classList.add("otvori");
  document.querySelector(".zid").classList.add("posleVrata");
}



function breakWall() {
  const zid = document.querySelector(".zid");

  zid.addEventListener("click", () => {
    clickCounter++;
    console.log(clickCounter);
    if(clickCounter === 2) {
      zid.classList.add("sruseno");
      document.querySelector(".pitanje").classList.add("posleVrata");
      return;
    }
  })

   
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("srca");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.append(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function celebrate1() {
  const tekst = document.createElement("p");
  const btn1 = document.querySelector(".da1");
  const btn2 = document.querySelector(".da2");

  btn1.disabled = true;
  btn2.disabled = true;

  tekst.classList.add("selebrati");
  document.body.append(tekst);

  const tekstZaKucanje = "Good choice! I knew you'd say that... ❤️";
  let i = 0;

  function kucaj() {
    if (i < tekstZaKucanje.length) {
      tekst.innerHTML += tekstZaKucanje.charAt(i);
      i++;
      setTimeout(kucaj, 100);
    }
  }
  kucaj();

  setInterval(() => {
    createHeart();
  }, 300);
}

function celebrate2() {
  const tekst = document.createElement("p");
  const btn1 = document.querySelector(".da1");
  const btn2 = document.querySelector(".da2");

  btn1.disabled = true;
  btn2.disabled = true;

  tekst.classList.add("selebrati");
  document.body.append(tekst);

  const tekstZaKucanje = "I knew it! You're my favorite person ever. ❤️";
  let i = 0;

  function kucaj() {
    if (i < tekstZaKucanje.length) {
      tekst.innerHTML += tekstZaKucanje.charAt(i);
      i++;
      setTimeout(kucaj, 100);
    }
  }
  kucaj();

  setInterval(() => {
    createHeart();
  }, 300);
}

breakWall();
const audio = document.querySelector(".zvuk");
audio.volume = 0.5;
document.body.addEventListener("click",skloniMute)
function skloniMute() {
  audio.muted = false;
  audio.play();
}




