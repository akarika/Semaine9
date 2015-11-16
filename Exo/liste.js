var texte = document.getElementById("texte")
var liste = document.getElementById("liste")
var ajouter= document.getElementById("ajouter")
var annuler=document.getElementById("annuler")
var tableau = ["Rémy", "Gaëtane", "Emilie"];

function afficherListe() {
    var elements = "";
    for (var i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    liste.innerHTML = elements;
}

afficherListe();


function ajouterElement(){
    tableau.push(texte.value);
    afficherListe()
}
ajouter.onclick = ajouterElement;
afficherListe();

function annulerElement(){
    tableau.pop();
    afficherListe()
}
annuler.onclick=annulerElement;
afficherListe()