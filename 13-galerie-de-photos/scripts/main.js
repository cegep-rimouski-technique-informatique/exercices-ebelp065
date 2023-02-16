const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Déclarer une liste avec les chemins des images*/

listeChemins = [
    "images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"
    ];

/* Déclarer le texte alternative pour chaque image*/

/* traverser les images */

var thumb = document.getElementsByClassName("thumb-bar")[0];
var fullimg = thumb.parentNode.getElementsByClassName('full-img')[0];
var trucbouton = fullimg.getElementsByClassName('dark')[0];
var dimg = fullimg.getElementsByClassName('displayed-img')[0];

trucbouton.addEventListener("click", toggleDark);

var image;
var isDark = 0;

for (let i = 0; i < listeChemins.length; i++)
{
    image = document.createElement('img');
    image.src = listeChemins[i];
    image.addEventListener("click", remplacerFocus);
    thumb.appendChild(image);
}

function remplacerFocus()
{
    dimg.src = this.src;
    image.addEventListener("click", remplacerFocus);
}

function toggleDark()
{
    isDark = !isDark;
    if (isDark)
    {
        fullimg.getElementsByClassName("overlay")[0].style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else
    {
        fullimg.getElementsByClassName("overlay")[0].style.backgroundColor = "rgba(0,0,0,0)";
    }
    this.addEventListener("click", toggleDark);
}

/* sombre/clair bouton */
