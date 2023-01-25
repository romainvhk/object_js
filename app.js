// Exercice 1

function Voiture (marque, modèle, année) {
    this.marque = marque;
    this.modèle = modèle;
    this.année = année;
    this.conduire = () => {
        return `La voiture de marque ${this.marque}, modèle ${this.modèle} de l'année ${this.année} roule sur la route.`
    };
};

let voiture1 = new Voiture('Toyota', 'Camry', 2020);

// console.log(voiture1.conduire());

let voiture2 = new Voiture('BMW', 'M4', 2022);

// Exercice 2

let garage = {
    voitures: [voiture1, voiture2],
    afficherVoitures() {
        return this.voitures;
        // let result = [];
        // this.voitures.forEach((voiture) => {
        //     result.push(JSON.stringify(voiture))
        // });
        // return result.join("\n");
    },
};

// console.log(garage.afficherVoitures());

// let garage = {
//     voiture1,
//     voiture2,
//     afficherVoitures() {
//         for (key in garage) {
//             return garage[key];
//         };
//     },
// };

// console.log(garage.afficherVoitures());

// Exercice 3

function Personne (nom, âge) {
    this.nom = nom;
    this.âge = âge;
    this.sePrésenter = () => {
        return `Bonjour, je m'appelle ${this.nom} et j'ai ${this.âge} ans.`
    }
};

let personne1 = new Personne ('John', 30);
// console.log(personne1.sePrésenter());

// Exercice 4

function Etudiant (nom, âge, matricule) {
    Personne.call(this, nom, âge);
    this.matricule = matricule;
    this.etudier = () => {
        return `L'étudiant ${this.nom} avec le matricule ${this.matricule} étudie pour son examen.`;
    };
};

let etudiant1 = new Etudiant ('Jane', 22, 123456);
console.log(etudiant1.sePrésenter());
console.log(etudiant1.etudier());

