function invertedTriangle (n) {
    for (let i=0;i<n;i++){
        let linha="";
        for (let j=0; j<n; j++){
            if (j<(n-i-1)){
                linha+=" ";
            } else {
                linha+="*";
            }
        }  
        console.log(linha);
    }
    return;
}

invertedTriangle(5);
