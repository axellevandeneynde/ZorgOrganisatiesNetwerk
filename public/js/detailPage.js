
const url = "http://localhost:8000"
const pathToIcons = url + "/images/assets/home_icons/";


function placeIcons(doelgroepen){
  let container = document.getElementById('iconsList')
  doelgroepen = doelgroepen.split(',')
  doelgroepen.forEach(groep => {
    let newIcon = document.createElement('li');
    newIcon.classList.add("icon")
    container.append(newIcon)
    newIcon.style.setProperty('mask', `url(/images/assets/home_icons/${groep}.svg) no-repeat center / contain`)
    newIcon.style.setProperty('-webkit-mask', `url(/images/assets/home_icons/${groep}.svg) no-repeat center / contain`)
  })
}

function beautifyArray(array){
  let newArray = array.split(',')
  console.log(newArray.length)
  if(newArray.length < 2){
    return array;
  } else if(newArray.length == 2) {
    let lastIndex = newArray.pop();
    let firstIndex= newArray.pop()
   
    return firstIndex + ' & '+ lastIndex;
  } else {
    
    let lastIndex = newArray.pop();
    let sndLastIndex = newArray.pop()
    let lastTwoIndexes = `${sndLastIndex} & ${lastIndex}`
  
    let restOfArray = newArray.join(', ');
    return restOfArray + ', '+ lastTwoIndexes;
  }
 
}