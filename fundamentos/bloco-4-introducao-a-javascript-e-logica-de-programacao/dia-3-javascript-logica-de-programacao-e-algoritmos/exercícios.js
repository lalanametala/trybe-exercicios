function square (n) {
    let linha="";
    for (let i=0;i<n;i++){
        linha+='*';
    }
    for (let j=0; j<n; j++){
        console.log (linha);
    }
    return;
}

square(5);
