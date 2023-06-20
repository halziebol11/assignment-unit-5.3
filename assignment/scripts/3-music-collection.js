console.log('***** Music Collection *****')
let collection = [];

//function to add albums to collection
function addToCollection(title, artist, yearPublished, tracks) {
    let Object = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    collection.push(Object);
    return Object
}//end of addToCollection

//test addToCollection function
console.log(addToCollection('Happy Bops', 'Early Boppers', 1990, [{name: "t1", duration: 12}, {name: "t2", duration: 8}]));
console.log(addToCollection('Bippity Boppity', 'Bopper', 1991));
console.log(addToCollection('Boogy Woogy', 'Bopper', 1992));
console.log(addToCollection('Sad Bops for Sad Boppers', 'Bopper', 1993, [{name: "BopOnTop", duration: 12}, {name: "t2", duration: 8}]));
console.log(addToCollection('R We Boppin?', 'Bopper', 1994));
console.log(addToCollection('Cats R Sick', 'Cat Dudes', 1989));
console.log(collection);

//function to show albums in collection
function showCollection(array) {
    console.log(collection.length);
    for (let i = 0; i<collection.length; i++){
        if (collection[i].tracks == undefined){
            console.log(`${(collection[i].title)} by ${collection[i].artist} published in ${collection[i].yearPublished}`);
        }
        else{
            console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}:`);
            for (j = 0; j<collection[i].tracks.length; j++) {
                console.log(`${j+1}. ${collection[i].tracks[j].name}: ${collection[i].tracks[j].duration}`);
            }
        }
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

//function to search collection
function search(searchObject) {
    let searchResults = [];
    if (Object.keys(searchObject).length == 0) {
        return collection;
    }
    else if (searchObject.trackName !== "") {
        for (i=0; i<collection.length; i++) {
            if(collection[i].tracks !== undefined) {
                for (j = 0; j<collection[i].tracks.length; j++) {
                    if (collection[i].tracks[j].name == searchObject.trackName){
                    searchResults.push(collection[i])
                    }
                }
            }
        }
        return searchResults;
    }
    else {
        for (i=0; i<collection.length; i++){
            if (collection[i].artist == searchObject.artist && collection[i].yearPublished == searchObject.year){
                searchResults.push(collection[i])
            }
        }
        return searchResults;
    }
}//end of search function

//test search function
console.log(search({artist: 'Bopper', year: 1992, trackName: "t2"}));
console.log(search({artist: 'Goober', year: 1992}));
console.log(search({}));
console.log(search({trackName: "t2"}));