const states = document.querySelector("#state");
const sendButton = document.querySelector("#send");
const clearButton = document.querySelector("#clear");
let resultDiv = document.querySelector("#result");
let dataInicio = document.getElementById('data-inicio').DatePickerX.init();


statesLoad();

function validateAll(){
    
    const validate = new window.JustValidate('#form', {
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: {
          fontSize: '14px',
          color: '#dc3545',
        },
        focusInvalidField: true,
        lockForm: true,
        tooltip: {
            position: 'bottom'
        }
      });
    validate
    .addField('#full-name', [
        {
            rule: 'required',
            errorMessage: 'Preencher nome',
        },
        {
            rule: 'maxLength',
            value: 40,
        }
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Preencher e-mail',
        },
        {
            rule: 'maxLength',
            value: 50,
        },
        {
            rule:'email',
            errorMessage: 'Formato de e-mail inválido',
        }
    ])
    .addField('#cpf', [
        {
            rule: 'required',
            errorMessage: 'Preencher CPF',
        },
        {
            rule: 'maxLength',
            value: 11,
        }
    ])
    .addField('#city', [
        {
            rule: 'required',
            errorMessage: 'Preencher cidade',
        },
        {
            rule: 'maxLength',
            value: 28,
        }
    ])
    .addRequiredGroup('#residencia-group').onSuccess((event) => {
        console.log('Validation passes and form submitted', event);
    })
    .addField('#resume', [
        {
            rule: 'required',
            errorMessage: 'Preencher resumo do currículo',
        },
        {
            rule: 'maxLength',
            value: 1000,
        }
    ])
    .addField('#cargo', [
        {
            rule: 'required',
            errorMessage: 'Preencher cargo',
        },
        {
            rule: 'maxLength',
            value: 40,
        }
    ])
    .addField('#descricao-cargo', [
        {
            rule: 'required',
            errorMessage: 'Preencher descrição do cargo',
        },
        {
            rule: 'maxLength',
            value: 500,
        }
    ])
    .addField('#data-inicio', [
        {
            rule: 'required',
            errorMessage: 'Preencher data de início',
        },
        {
            rule: 'maxLength',
            value: 10,
        }
    ])    
    .onSuccess((event) => {
        event.preventDefault();
        resultDiv.innerHTML='RESULTADO';        
    });
}


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
function loadContent(){
    let conteudo = document.querySelectorAll(".field");
    let conteudo2 = conteudo[0].children;
    let conteudo3 = conteudo[1].children;
    for (let i=0;i<conteudo2.length; i+=1){
        
    }
}
validateAll();

clearButton.addEventListener('click', function(){
    resultDiv.innerHTML='';
})

dataInicio.DatePickerX.init();