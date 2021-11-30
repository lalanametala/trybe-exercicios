
function ehPrimo (n) {
    let divisores=0;

    for (let i=1;i<=n;i++){
        if (n%i==0){
            divisores+=1;
        }
    }
    if (divisores>2){
        console.log("Esse número não é primo");
    } else {
        console.log("Esse número é primo");
    }
    return;
}

ehPrimo(8);
