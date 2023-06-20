console.log('***** Music Collection *****')
let collection = [];

//function to add albums to collection
function addToCollection(title, artist, yearPublished) {
    let Object = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(Object);
    return Object
}//end of addToCollection

//test addToCollection function
console.log(addToCollection('Happy Bops', 'Early Boppers', 1990));
console.log(addToCollection('Bippity Boppity', 'Bopper', 1991));
console.log(addToCollection('Boogy Woogy', 'Bopper', 1992));
console.log(addToCollection('Sad Bops for Sad Boppers', 'Bopper', 1993));
console.log(addToCollection('R We Boppin?', 'Bopper', 1994));
console.log(addToCollection('Cats R Sick', 'Cat Dudes', 1989));
console.log(collection);

//function to show albums in collection
function showCollection(array) {
    console.log(collection.length);
    for (let i = 0; i<collection.length; i++){
        console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}`);
    }
}// end of showCollection

//test showCollection
showCollection(collection);

//function to show albums by a given artist
function findByArtist(artist) {
    let resultsByArtist = [];
    for (i=0; i<collection.length; i++){
        if (collection[i].artist == artist){
            resultsByArtist.push(collection[i])
        }
    }
    return resultsByArtist;
} //end of findByArtist

//test findByArtist
console.log(findByArtist("Bopper"));
console.log(findByArtist("Dog Dudes"));
