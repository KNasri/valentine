const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

let yesScale = 1;

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".card").innerHTML = `
    <div class="emoji">🎉💖</div>
    <h1>YAY!!!</h1>
    <p>You Just Made My Whole Day Babes 😭❤️</p>
    <img src="https://media.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif" width="200"/>
  `;
});
