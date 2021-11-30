function invertedTriangle (n) {
    let centro=(n+1)/2;
    let espacoDireita=centro;
    let espacoEsquerda=centro;
    
    for (let i=0;i<=centro;i++){
        let linha="";
        for (let j=0; j<=n; j++){
            if (j>espacoEsquerda && j<espacoDireita){
                linha+="*";
            } else {
                linha+=" ";
            }
        }  
        console.log(linha);
        espacoDireita+=1;
        espacoEsquerda-=1;
    }
    return;
}

invertedTriangle(5);
