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



