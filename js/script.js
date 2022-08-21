
function findPin(){
    let pin =  generatePin();
    let pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{ 
        return findPin();
    }
}

function generatePin(){
    let random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('btn-generate').addEventListener('click', function(){
    let Pin = findPin();
    let generate_inpt = document.getElementById('generate-inpt');
    generate_inpt.value = Pin;
})


// _____________________________________

document.getElementById('calculator').addEventListener('click', function(event){
    let number = event.target.innerText;
    let typed_inpt_field = document.getElementById('typed-inpt');
    let perv_typed_inpt_field = typed_inpt_field.value;
    if(isNaN(number)){
        if(number === 'C'){
            typed_inpt_field.value = '';
        }
        else if(number === '<'){
            let num = perv_typed_inpt_field.split('');
            num.pop();
            let re_num = num.join('');
            typed_inpt_field.value = re_num;
        }
    }
    else
    {
        let new_typed_inpt_field = perv_typed_inpt_field + number;
        typed_inpt_field.value = new_typed_inpt_field;
    }
})


// ________________________________________

document.getElementById('btn-submit').addEventListener('click', function(){
    let generate_field = document.getElementById('generate-inpt');
    let generate_value = generate_field.value;
    

    let typed_field = document.getElementById('typed-inpt');
    let typed_value = typed_field.value;
    
    let failur = document.getElementById('failur');
    let success = document.getElementById('success');

    if(generate_value === typed_value){
        success.style.display = 'block';
        failur.style.display = 'none';
    }
    else{
        failur.style.display = 'block';
        success.style.display = 'none';
    }
})