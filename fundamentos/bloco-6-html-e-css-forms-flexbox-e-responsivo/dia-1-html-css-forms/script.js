const states = document.querySelector("#state");
const sendButton = document.querySelector("#send");
const clearButton = document.querySelector("#clear");
let allInputs = document.querySelectorAll("input");
let resultDiv = document.querySelector("#result");
let dataInicio = document.querySelector("#data-inicio");

function statesLoad (){
    const statesArray = [
        { value: 'AC', label: 'Acre' },
        { value: 'AL', label: 'Alagoas' },
        { value: 'AP', label: 'Amapá' },
        { value: 'AM', label: 'Amazonas' },
        { value: 'BA', label: 'Bahia' },
        { value: 'CE', label: 'Ceará' },
        { value: 'DF', label: 'Distrito Federal' },
        { value: 'ES', label: 'Espírito Santo' },
        { value: 'GO', label: 'Goías' },
        { value: 'MA', label: 'Maranhão' },
        { value: 'MT', label: 'Mato Grosso' },
        { value: 'MS', label: 'Mato Grosso do Sul' },
        { value: 'MG', label: 'Minas Gerais' },
        { value: 'PA', label: 'Pará' },
        { value: 'PB', label: 'Paraíba' },
        { value: 'PR', label: 'Paraná' },
        { value: 'PE', label: 'Pernambuco' },
        { value: 'PI', label: 'Piauí' },
        { value: 'RJ', label: 'Rio de Janeiro' },
        { value: 'RN', label: 'Rio Grande do Norte' },
        { value: 'RS', label: 'Rio Grande do Sul' },
        { value: 'RO', label: 'Rondônia' },
        { value: 'RR', label: 'Roraíma' },
        { value: 'SC', label: 'Santa Catarina' },
        { value: 'SP', label: 'São Paulo' },
        { value: 'SE', label: 'Sergipe' },
        { value: 'TO', label: 'Tocantins' },
    ];    
    for (let index=0; index<statesArray.length; index+=1){
        let newState = document.createElement("option");
        newState.value = statesArray[index].value;
        newState.text = statesArray[index].label;
        states.appendChild(newState);
    }
}

statesLoad();



function dateCheck (){
    const dateText = dataInicio.value;
    const dateArray = dataInicio.value.match(/\d+/g);
    if (dateText[2]!='/' || dateText[5]!='/'){
        window.alert('Data inválida!');
        return true;
    } else if (dateArray===null){
        window.alert('Data inválida!');
        return true;
    } else if (dateArray[0]<=0||dateArray[0]>31){
        window.alert('Dia inválido!');
        return true;
    } else if (dateArray[1]<0||dateArray[1]>12){
        window.alert('Mês inválido!');
        return true;
    } else if (dateArray[2]<0){
        window.alert('Ano inválido!');
        return true;
    } else {
        return false;
    }

}

function loadContent(){
    let conteudo = document.querySelectorAll(".field");
    let conteudo2 = conteudo[0].children;
    let conteudo3 = conteudo[1].children;
    for (let i=0;i<conteudo2.length; i+=1){
        
    }
}

sendButton.addEventListener('click', function(event){
    event.preventDefault();
    for (let i=0;i<allInputs.length;i+=1){
        if (allInputs[i].value==""){
            resultDiv.innerHTML='Favor preencher todos os campos!'
        } else if (allInputs[i].id=='data-inicio' && dateCheck()){
            resultDiv.innerHTML='Data inválida'            
        } else {
            resultDiv.innerHTML='RESULTADO'
        }
    }
})

clearButton.addEventListener('click', function(){
    resultDiv.innerHTML='';
})

dataInicio.addEventListener('keyup', function(event){

})
