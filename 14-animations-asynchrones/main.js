const st = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const si = {
  duration: 800,
  iterations: 1,
  fill: "forwards",
};

const spade1 = document.querySelector("#spade1");
const spade2 = document.querySelector("#spade2");
const spade3 = document.querySelector("#spade3");


spade1.animate(st, si).finished.then(() =>
  {
    spade2.animate(st, si).finished.then(() => 
      {
        spade3.animate(st, si);
      }
    )
  }
)

/*
let spades = {spade1, spade2, spade3};


spade1.animate(st, si);
spade2.animate(st, si);
spade3.animate(st, si);


async function animationSpades(spades)
{
  for(i = 0; i < spades.length; i++)
  {
    await spades[i].animation(st, si);
  }
}
*/