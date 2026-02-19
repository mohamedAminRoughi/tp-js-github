function infoEtudiant(nom,note){
    let resultat;
    if (note>=10) {
        resultat="Admis"
    }
    else{
        resultat="Ajourné"
    }
    return nom+": "+ (note+"/20") +" est "+resultat;
}

