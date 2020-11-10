var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ] 
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Litte Red Covette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords (id, property, value){
    if (value === "") {
        delete collection[id][property];
    } else if (property === "tracks"){
        collection[id][property] === collection[id][property] || [];
        collection[id][property].push(value);
    } else {
        collection[id][property] = value;
    }
return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
