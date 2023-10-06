function sentenceSearcher(phrase, mot){
    const phrases = phrase.split(".");

    let resulat = "";
    //j'ai cree un tableau car je n'ai pas trouve de moyen pour quitter
    //la boucle une fois un resultat trouve, car resultat change si le mot qu'on cherche apparait a plusieurs phrases
    let tab = [];

    phrases.forEach(element => {
        if(element.toLowerCase().includes(mot.toLowerCase())){
            resulat = `"${element.trim() + "."}"`;
            tab.push(resulat);
        }
    });
    if(tab.length > 0){
        return tab[0];
    } else{
        return `""`;
    }
}

const str = "I have a cat. I have a mat. Things are going swell.";

console.log(sentenceSearcher(str , "have"));  

console.log(sentenceSearcher(str , "MAT"));

console.log(sentenceSearcher(str , "things"));

console.log(sentenceSearcher(str , "flat"));