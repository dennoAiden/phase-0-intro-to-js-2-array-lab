const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    return cats.push ("Ralph")
}
function destructivelyPrependCat(){
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    return cats.pop("Ralph");
}
function destructivelyRemoveFirstCat(){
    return cats.shift("Bob");
}
function  appendCat(Broom){
    const modified =[...cats, "Broom"];
    return modified
    
}
function prependCat(Arnold){
    const prepend=["Arnold",...cats];
    return prepend;
}
function removeLastCat(){
    return cats.slice(0,2)
}
function removeFirstCat(){
    return cats.slice(1);
}