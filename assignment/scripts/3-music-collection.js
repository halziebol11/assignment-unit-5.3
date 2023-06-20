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
}

addToCollection('Happy Bops', 'Bopper', 1990);
console.log(collection)