
let matrix = document.querySelector('.matrix');
let mas = [];
for(let i = 0; i<10;i++){
    mas[i]=[];
}

let sort = function(mas){
    for (let i=0; i < mas.length-1; i++){
        let max = i;
        for (let j=i; j < mas.length;j++){
            if(mas[max]*1<mas[j]){
                max = j;
            } 
        }
        let t = mas[i];
        mas[i] = mas[max];
        mas[max]=t;
    }
}

let makeText = function(){
    let newText = document.createElement('input');
    newText.type='text';   
    newText.classList.add('text-field') 
    newText.size=2
    return newText
}

for(let i = 0; i<10;i++){
    for (let j=0;j<10;j++){
        text = makeText()
        matrix.appendChild(text);
    }
    let br = document.createElement('br');
    matrix.appendChild(br)
}

let textFields = document.querySelectorAll('.text-field')
let generateButton = document.createElement('input')
generateButton.type='button'
generateButton.classList.add('generate-button')
generateButton.value = 'Сгенирировать'
generateButton.onclick=function(){
    
    console.log(textFields) 
    for(let i = 0; i<textFields.length;i++){
        let field = textFields[i];
        field.value = Math.floor(Math.random()*100)
    }
    
};

matrix.appendChild(generateButton)
let sortButton = document.createElement('input')
sortButton.type='button'
sortButton.classList.add('sort-button')
sortButton.value = 'Сортировка'
sortButton.onclick=function(){
    for(let i = 0; i<10;i++){
        for (let j=0;j<10;j++){
            mas[i][j]=textFields[i*10+j].value
        }
    }
    for(let i = 0; i<10;i++){
            sort(mas[i]);
            if(i%2){
                mas[i].reverse();
            }
    }
    for(let i = 0; i<10;i++){
        for (let j=0;j<10;j++){
            textFields[i*10+j].value=mas[i][j]
        }
    }
    };
matrix.appendChild(sortButton)



