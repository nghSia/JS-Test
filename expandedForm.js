function expandedForm(nb){
    let listeChiffresDeNb = nb.toString().split("");
    let tab = [];

    listeChiffresDeNb.forEach(element => {
        if(element !== 0){
            tab.push(element + "0".repeat(listeChiffresDeNb.length - 1 - listeChiffresDeNb.indexOf(element)));
        }
    });
    return tab.join(" + ");
}

console.log(expandedForm(70304));
console.log(expandedForm(42));
console.log(expandedForm(12));

console.log("hello".length);
console.log(1200);
let v = 1200;
console.log(v.toString().length);