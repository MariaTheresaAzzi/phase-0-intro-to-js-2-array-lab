// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
let name;
beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name) {
    return cats.push(name);
}
console.log(destructivelyAppendCat(maria));


function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
console.log(destructivelyPrependCat(cat));

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
}
cats;

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats
}
destructivelyPrependCat('cat')

function appendCat(name) {
    var newArray = cats.slice();
    // var newArray = [...cats];
    newArray.push(name)
    return newArray
}

function prependCat(name) {
    var newArray = [...cats];
    newArray.unshift('Arnold')
    return newArray
}

function removeLastCat() {
    var newArray = cats.slice();
    newArray.pop()
    return newArray
}

function removeFirstCat() {
    var newArray = [...cats];
    newArray.splice(0, 1);
    return newArray
}