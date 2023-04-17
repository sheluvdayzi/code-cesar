function cesar(text, nb){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'];
    let newTab = [];
    let result = [];
    newTab = text.split('');
    console.log(newTab);
    for(let i = 0; i < newTab.length; i++){
        if(newTab = alphabet){
            result = newTab + nb;
        }
        return result;
    }
}

console.log(cesar('bonjour je suis ziyad', 2));