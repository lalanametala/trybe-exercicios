// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//   *
//  * *
// *   *
//*******

function emptyPyramid (n) {
    let centro=(n+1)/2;
    let espacoDireita=centro;
    let espacoEsquerda=centro;
    let linha="";

    for (let i=0;i<=centro;i++){
        
        for (let j=0; j<=n; j++){
            if (i==centro) {
                linha=" "+"*".repeat(n);
            } else if (j==espacoEsquerda || j==espacoDireita) {
                linha+="*";
            }
            else {           
                linha+=" ";
            }        
        }  
        console.log(linha);
        linha="";
        espacoDireita+=1;
        espacoEsquerda-=1;
    }
    return;
}

emptyPyramid(7);
