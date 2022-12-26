
let determinant = (matrix)=>{
    let detdeterminant = matrix[0][0]*matrix[1][1]*matrix[2][2]+matrix[0][2]*matrix[1][0]*matrix[2][1]+matrix[0][1]*matrix[1][2]*matrix[2][0]-matrix[0][2]*matrix[1][1]*matrix[2][0]-matrix[0][0]*matrix[1][2]*matrix[2][1]-matrix[0][1]*matrix[1][0]*matrix[2][2];
    return detdeterminant;
}

let body = document.querySelector('body')
console.log(body);
body.onload = ()=>{
    createForm(); 
    let generateButton = document.querySelector('.generate-button-kramer');
    
    let inputsX = document.querySelectorAll('.input-kramer');
    generateButton.onclick = ()=>{
        for(let input of inputsX){
            input.value = Math.floor(Math.random()*10-5);
        }
    }

    let solutionButtom = document.querySelector('.solution-button-kramer')
    let inputReturns = document.querySelectorAll('.input-kramer-return')
    solutionButtom.onclick = ()=>{
        let mas;
        mas = new Array(4);
        for(let i = 0;i<4;i++){
            mas[i]= new Array(3);
            for(let j=0;j<3;j++){
                mas[i][j]=inputsX[j*4+i].value;
            }
        }
        let det = determinant([mas[0],mas[1],mas[2]]);
        console.log(det)
        if(det!=0){
          inputReturns[0].value = determinant([mas[3],mas[1],mas[2]])/det;
          inputReturns[1].value = determinant([mas[0],mas[3],mas[2]])/det;
          inputReturns[2].value = determinant([mas[0],mas[1],mas[3]])/det;
        }
    }

}
