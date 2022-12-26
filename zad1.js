
let doc = document.querySelector('.documentInf')
let loc = document.querySelector('.locationInf')
let nav = document.querySelector('.navigatorInf')

let printInfo = function(type, place){
    for(let inf in type){
        let newP = document.createElement('li');
        newP.textContent = inf;
        place.appendChild(newP)
    }
}

printInfo(document,doc);
printInfo(location,loc);
printInfo(navigator,nav);


