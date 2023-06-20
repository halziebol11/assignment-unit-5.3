console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished){
    let Object = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(Object);
    return Object
}//end of addToCollection

//test addToCollection function
console.log(addToCollection('Happy Bops', 'Bopper', 1990));
console.log(addToCollection('Bippity Boppity', 'Bopper', 1991));
console.log(addToCollection('Boogy Woogy', 'Bopper', 1992));
console.log(addToCollection('Sad Bops for Sad Boppers', 'Bopper', 1993));
console.log(addToCollection('R We Boppin?', 'Bopper', 1994));
console.log(addToCollection('Cats R Sick', 'Cat Dudes', 1989));
console.log(collection)