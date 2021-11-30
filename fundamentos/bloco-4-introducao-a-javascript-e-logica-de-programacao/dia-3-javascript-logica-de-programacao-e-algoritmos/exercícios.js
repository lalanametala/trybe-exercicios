function pyramid (n) {
    let centro=(n+1)/2;
    let espacoDireita=centro;
    let espacoEsquerda=centro;
    let linha="";

    for (let i=0;i<=centro;i++){
        
        for (let j=0; j<=n; j++){
            if (j>espacoEsquerda && j<espacoDireita){
                linha+="*";
            } else {
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

pyramid(5);
