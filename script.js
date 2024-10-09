let opt = [1,2,3];

function updateOTP(){
    for(let q = 0; q<6;q++){
if(opt[q]){
inputs[q].value = opt[q];
}
else{
    inputs[q].value = '';
}
    
}

let inputs = document.querySelectorAll('.otp-area input');
updateOTP();