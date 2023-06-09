function cesar(text, nb){
    const alpha = [',', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'];
    let arrText = text.split('');
    console.log(arrText);
    for(let i = 0; i < alpha.length; i++){
        for(let j = 0; j < arrText.length; j++){
            if(alpha[i] === arrText[j]){
                console.log('egal');
                // alpha[i++];
                arrText[i++];
                alpha[i = 0];
            } else{
                alpha[i++];
            }
        }
    }
}

console.log(cesar('bonjour', 1));




































// function cesar(text , nb){
//     const alpha = [',', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z']; // L'alphabet
//     let arrSplit = []; // Stocker le text split
//     let result = [];
//     let finalres = [];
//     let index = [];
//     arrSplit = text.split('');
//     console.log(arrSplit);
//     for(let i = 0; i < arrSplit.length; i++){
//         index = alpha.indexOf(arrSplit[i]);
//         result.push(index + nb);
//         console.log(index);
//     }
//     for(let i = 0; i < alpha.length; i++){
//         if(index[i] == alpha.length - 1){
//             finalres.push(alpha[0 + 1]);
//             console.log('abc');
//         }
//         if(alpha[result[i]] !== undefined){
//             if(alpha.indexOf(result[i]) == 0){
//                 finalres.push(',');
//             } 
//             else if(result[i] == ' '){
//                 finalres.push(' ');
//             } 
//             else{
//                 finalres.push(alpha[result[i]]);
//             }
//         }

//     }
//     return finalres.join('');
// }

// console.log(cesar('bonjour, je suis ziyad', 1)); 























