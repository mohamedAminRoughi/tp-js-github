let tab=[12, 8, 15, 10, 7];

// la moyenne
let somme=0;
let moyenne;
for(let i=0;i<tab.length();i++){
    somme+=tab[i];
}
moyenne=somme/tab.length();

//la meilleure note

let meilleureNote=0;
for(let i=0;i<tab.length();i++){
    if(tab[i]>meilleureNote){
        meilleureNote=tab[i];
    }
}

//le nombre de notes ≥ 10
let noteValide=[];
for(let i=0;i<tab.length();i++){
    if(tab[i] >=10){
        noteValide.push(tab[i]);
    }
}

