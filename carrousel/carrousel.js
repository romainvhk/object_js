// fonction constructeur Carrousel
function Carrousel (array, htmlElement) {
    this.array = array;
    this.htmlElement = document.getElementById(`${htmlElement}`);
}

// Création du tableau d'images
let imagesArray = ['./image/image1.jpg','./image/image2.jpg','./image/image3.jpg'];

// Création de l'objet carrousel
let carrousel = new Carrousel(imagesArray, photo);

// let carrousel = {
//     array : imagesArray,
//     htmlElement : #photo,
// }

// Ajout de l'index qui affiche la première photo.
carrousel.indexActuel = 0;
// Ajout de la balise img dans le DOM.
let img = document.createElement('img');
photo.appendChild(img);

// Création de la méhtode suivant pour faire défiler les images + bouton suivant
img.setAttribute('src', imagesArray[carrousel.indexActuel]);

carrousel.suivant = () => {
    carrousel.indexActuel ++;
    img.setAttribute('src', imagesArray[carrousel.indexActuel])

    if (carrousel.indexActuel >= imagesArray.length) {
        carrousel.indexActuel = 0;
        img.setAttribute('src', imagesArray[carrousel.indexActuel]);
    };
};

let suivant = document.querySelector('#suivant');
suivant.addEventListener('click', () => {
    carrousel.suivant();
});

// Création de la méthode précedent + du bouton précédent
carrousel.precedent = () => {
    carrousel.indexActuel --;
    img.setAttribute('src', imagesArray[carrousel.indexActuel]);

    if (carrousel.indexActuel < 0) {
        carrousel.indexActuel = imagesArray.length-1;
        img.setAttribute('src', imagesArray[carrousel.indexActuel]);
    };
};

let precedent = document.querySelector('#precedent');
precedent.addEventListener('click', () => {
    carrousel.precedent();
});

// Ajout d'un défilement automatique de 3 secondes
setInterval("carrousel.suivant()", 3000);