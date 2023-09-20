function cesar(text, decalage){
        // Variable stockant l'alphabet
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        // Transformé le texte en array carractere
    let arrText = text.split('');
        // Boucle parcourant mon array texte
    for(let i = 0; i < arrText.length; i++){
            // Récuperer l'index des lettres de arrText dans alpha
        let index = alpha.indexOf(arrText[i]);
            // Ne rien changer sur les caracteres 
        if(index == -1){
            null;
        }else {
                // Si l'index + le decalage equivaut à plus que 25
            if(index+decalage > 25){
                // Tant que l'index + le décalage est plus grand que 25
                while(index+decalage > 25){
                        // Enlever 26 à l'index (= un tour d'alphabet)
                    index -= 26;
                }
            }
                // Ajouter le nb rentrer dans decalage a index
            index += decalage;
                // Modifier arrTexte par les carractere trouver dans alpha grace a l'index
            arrText[i] = alpha[index];
        }
    }
        // Retourner mon resultat
    return arrText.join('');
}

    // Afficher ma fonction
console.log(cesar('je mange', 1));