function dataSend(event){
    event.preventDefault()

    let name= document.getElementById('name').value;
    let email= document.getElementById('email').value;
    let remarks= document.getElementById('remarks').value;
    let gender= document.querySelector('input[name="gender"]:checked');
    let course= document.querySelectorAll('input[name="course"]:checked');
    let location= document.getElementById('location').value;

    let courseValue=[];
    for (let i=0;i<course.length;i++){
        courseValue.push(course[i].value);
    }

    let output= 
    'name: '+name+'\n'+
    'email: '+email+'\n'+
    'remakrs: '+remarks+'\n'+
    'gender: '+gender.value+'\n'+
    'course: '+courseValue+'\n'+
    'location: '+location + '\n';

    let newWindow=window.open('','_blank');
    newWindow.document.writeln('<pre>'+output+'</pre>');
}
let myForm=document.getElementById('myForm');
myForm.addEventListener('submit',dataSend);

// Email validation

// let email= prompt('enter mail');
// let pattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

// if(pattern.test(email)){
//     document.writeln('Email Address Is Correct');
// }
// else{
//     document.writeln('Email Address Is Wrong');
// }

// factorial
// let userInput=parseInt(prompt('Enter Number'));
// let factorial=1;

// for(let i=1;i<=userInput;i++){
//     factorial= factorial*i;
// }
// document.writeln('factorial for '+ userInput + 'is ' + factorial)