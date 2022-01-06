const states = document.querySelector("#state");
const clearButton = document.querySelector("#clear");
let resultDiv = document.querySelector("#result");
let allFields = document.querySelectorAll('.field');
let dataInicio = document.getElementById('data-inicio').DatePickerX.init({
    format: 'dd/mm/yyyy'
});
     
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
    .addField('#address', [
        {
            rule: 'required',
            errorMessage: 'Preencher endereço',
        },
        {
            rule: 'maxLength',
            value: 200,
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
        loadContent();        
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
    for (let i=0;i<allFields.length; i+=1){        
        switch(allFields[i].id){
            case 'full-name':
                makeParagraph('Nome Completo: '+allFields[i].value);
                break;
            case 'email':
                makeParagraph('E-mail: '+allFields[i].value);
                break;
            case 'cpf':
                makeParagraph('CPF: '+allFields[i].value);
                break;
            case 'address':
                makeParagraph('Endereço: '+allFields[i].value);
                break;
            case 'city':
                makeParagraph('Cidade: '+allFields[i].value);
                break;
            case 'state':
                makeParagraph('Estado: '+allFields[i].value);
                break;
            case 'casa':
                if (allFields[i].checked){
                    makeParagraph('Residência: '+allFields[i].value);
                }
                break;
            case 'apartamento':
                if (allFields[i].checked){
                    makeParagraph('Residência: '+allFields[i].value);
                }
                break;
            case 'resume':
                makeParagraph('Resumo do currículo: '+allFields[i].value);
                break; 
            case 'cargo':
                makeParagraph('Cargo: '+allFields[i].value);
                break;
            case 'descricao-cargo':
                makeParagraph('Descrição do cargo: '+allFields[i].value);
                break;
            case 'data-inicio':
                let data = document.getElementById('data-inicio').DatePickerX.getValue();
                console.log(data);
                makeParagraph('Data de início: '+ data);
                break;                                                
        } 
    }
}
validateAll();

clearButton.addEventListener('click', function(){
    resultDiv.innerHTML='';
})

function makeParagraph(text){
    let newP = document.createElement('p');
    newP.innerText = text;
    resultDiv.appendChild(newP);
}

