import Getuigenis  from './classes/Getuigenis.js';
const getuigenissen = getuigenissenCall();
const centra = centraCall();
const buttons = [];


$(function(){
    
});

export function loadGetuigenissenInHTML(lijst, container){
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

export function getuigenissenCall(){
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
    let container = document.createElement('div')
    container.classList.add('thumbnailContainer')
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

    container.append(title, teaser, doorLeesBtnContainer)
    newGetuigenis.append(container)

    return newGetuigenis
}

export function pickRandomGetuigenissen(container, amnt, shownID){
    //TO-DO: Ervoor zorgen dat diegene dat op de pagina staat, niet getoond wordt in deze lijst.
    let list = getuigenissenCall();
    let newList = []; 
    for(let i = 0; i < list.length; i++){
        if(list[i].getuigenisID == shownID){
            console.log(list[i].getuigenisID)
            list.splice(i, 1);
            break;
        }
    }
    for(let i = 0; i < 3; i++){

        let randomNbr = Math.floor( Math.random()*list.length)
        let random = list[randomNbr]
        
        list.splice(randomNbr, 1)
        newList.push(random)
        
    }
    console.log(list, newList)
     loadGetuigenissenInHTML(newList, container)
}