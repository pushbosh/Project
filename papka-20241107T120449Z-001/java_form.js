const vvod = document.getElementById('vvod');

vvod.addEventListener('submit', function(e){
    e.preventDefault();
    const gmail = document.getElementById('gmail');
    const password = document.getElementById('password');
    const name = document.getElementById('name');
    const button = document.getElementById('knopka');
    let r = gmail.value;
    let b = name.value;
    let a = password.value;

    

    musthave = /@.*\./;
    if(!r.match(musthave)){
        alert("you should enter gmail!")
        return;
    }
    if(!b){
        alert("you should enter name!")
        return ;

    }
    
    if(a.length < 8){
        alert("password should contain at least 8 characters!")
        return;
    }
    alert('Access granted!')
    alert(`${b}, you have successfully registered under the email ${r}`);
})