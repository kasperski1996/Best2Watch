


const fs = require('fs');

function read(type) {
    return JSON.parse(fs.readFileSync(`./data/${type}s.json`, 'utf-8'));
}

function readOneByQuery(type, filterFunc) {
    return read(type).find(filterFunc);
}

function readByQuery(type, filterFunc) {
    return read(type).filter(filterFunc);
}


function readOne(type, id) {
    return read(type).find(p => p.id == id);
}

function update(type, id, entity) {
    switch (type) {
        case 'movie':
            const movie = read('movie');
            const pIndex = movie.findIndex(p => p.id == id);
            players[pIndex] = { ...players[pIndex], ...entity }
            fs.writeFileSync('./data/movies.json', JSON.stringify(movie));
            return movie[pIndex];
        case 'actor':
            return JSON.parse(fs.readFileSync('./data/actors.json', 'utf-8')).find(t => t.id === id);;
    }
}

function add(type, entity) {
    const snap = read(type);
    snap.push(entity);
    fs.writeFileSync(`./data/${type}s.json`, JSON.stringify(snap));
    return true;
}


module.exports = {
    add,
    read,
    readByQuery,
    readOneByQuery,
    readOne,
    update
}