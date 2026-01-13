// function dataSend(event){
//     event.preventDefault()

//     let name=document.getElementById('name').value;
//     let contact=document.getElementById('contact').value;
//     let remarks=document.getElementById('remarks').value;
//     let sex=document.querySelector('input[name="sex"]:checked');
//     let education=document.querySelectorAll('input[name="education"]:checked');
//     let location=document.getElementById('location').value;
    
//     let educationValue=[];
//     for(let i=0;i<education.length;i++){
//         educationValue.push(education[i].value);
//     }

//     let output = 
//     'name: '+ name + '\n'+
//     'contact: '+ contact + '\n'+
//     'remarks: '+ remarks + '\n'+
//     'sex: '+ sex.value + '\n'+
//     'education: '+ educationValue + '\n'+
//     'location: '+ location + '\n';

//     let newWindow= window.open('','_blank');
//     newWindow.document.writeln('<pre>'+ output +'</pre>');
// }
// let myform=document.getElementById('myform');
// myform.addEventListener('submit',dataSend);

// factorial

let factorial=1;
for(let i=1 ; i<=5 ;i++){
    factorial= factorial*i
}
document.writeln('factorial of 5 is = '+ factorial);

// email check
let email=prompt('enter email');
let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
if(pattern.test(email)){
    document.writeln('correct email');
}
else{
    document.writeln('wrong mail');
};