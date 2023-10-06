function numInStr(tab){
    let result = [];

    tab.forEach(element => {
        let num = "";
        element.split("").forEach(char=>{
            if(char>= "0" && char<="9"){
                num+= char;
            }
        })
        if (num !== ""){
            result.push(element);
        }
    });

    return result;
}

console.log(numInStr(["1a","a","2b","b"]));
console.log(numInStr(["abc", "abc10"])); // [ 'abc10' ]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // [ 'ab10c', 'a10bc' ]
console.log(numInStr(["this is a test", "test1"])); //