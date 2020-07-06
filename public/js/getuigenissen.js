import Getuigenis  from './classes/Getuigenis.js';
const getuigenissen = getuigenissenCall();
const centra = centraCall();
const buttons = [];


$(function(){
    loadGetuigenissenInHTML(getuigenissen)
});

function loadGetuigenissenInHTML(lijst){
    let container = document.getElementById('getuigenissenContainer')
    lijst.forEach(g => {
       
        container.append( createGetuigenisThumbnail(g))
    })
}



function centraCall(){
    var centraArray;
    $.ajax({
        url: '/API/centra',
        dataType: 'JSON',
        method: 'GET',
        async: false
    }).done(function(data){
        var centra = data.centra;
        centraArray = centra;
    }).fail(function(a,b){
        console.log(a, b);
    });
    return centraArray;
}

function getuigenissenCall(){
    var getuigenissen;
    $.ajax({
        url: '/API/getuigenissen',
        dataType: 'JSON',
        method: 'GET',
        async: false
    }).done(function(data){
        getuigenissen = data;
    }).fail(function(a,b){
        console.log(a, b);
    });
    return getuigenissen;
}


function dubbeleWaardesVerwijderen(array){
    var seen = {};
    var ret_arr = [];
    for (var i = 0; i < array.length; i++) {
        if (!(array[i] in seen)) {
            ret_arr.push(array[i]);
            seen[array[i]] = true;
        }
    }
    return ret_arr;
}

function loadCentrumData(centrumID){
    var returnData;
    centra.forEach(centrum => {
        if(centrumID == centrum.centra_ID){
            returnData = centrum;
        }
    });
    return returnData;
}

function createGetuigenisThumbnail(data){
    let newGetuigenis = document.createElement('article')
    let title = document.createElement('h3')
    title.innerHTML = data.auteur
    let teaser = document.createElement('p')
    teaser.innerHTML = data.body
    let doorLeesBtnContainer = document.createElement('div')
    doorLeesBtnContainer.classList.add('linkButton')
    let doorLeesBtn = document.createElement('a')
    doorLeesBtn.innerText = "Lees verder"
    doorLeesBtn.setAttribute('href', `/getuigenis/${data.getuigenisID}`)
    doorLeesBtnContainer.append(doorLeesBtn)

    newGetuigenis.append(title, teaser, doorLeesBtnContainer)


    return newGetuigenis
}