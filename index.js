/*const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});*/




var number = document.getElementById("pnumber");
var span = document.getElementsByTagName("span");
var val = document.getElementById("value")
var email = document.getElementById("email");
var pattern = /^[A-Za-z.0-9]{3,}\.[a-z]{1}\.[0-9]{4}\.[a-z]{3,4}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,4}[a-z]{2}$/;
var msg=document.getElementById("showmsg");
var num = document.getElementById("shownum");
var numberpattern=/^[0-9]{10}$/


function myfunc(){
    var email = document.getElementById("email");
    var pattern = /^[A-Za-z.0-9]{3,}\.[a-z]{1}\.[0-9]{4}\.[a-z]{3,4}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,4}[a-z]{2}$/;
    var msg=document.getElementById("showmsg");
    if (pattern.test(email.value)){
        msg.innerHTML="You're correct";
        msg.style.color = "lime"
    }else{
        document.getElementById("showmsg").innerHTML="You're not correct";
        msg.style.color = "red"
    }
}

email.onkeydown= function(){
    if(pattern.test(email.value)){
        msg.innerHTML="You're correct";
        msg.style.color = "lime"
    }else{
        msg.innerHTML="u r not correct";
        msg.style.color= "red";
    }
}
number.onkeydown=function(){
    if(numberpattern.test(number.value)){
        num.innerHTML="You're correct";
        num.style.color = "lime"
    }else{
        num.innerHTML="u r not correct";
        num.style.color= "red";
    }
}




    // const regex= /^([\.\_a-zA-A0-9]+)@([a-zA-Z]+)\.([a-zA-z]){2,8}$/;
    // const regexo = /^([\.\_a-zA-z0-9]=)@([a-zA-z]+)\.(a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/

    // if(regex.test(email.value) || regexo.test(email.value)){
    //     span[0].innerText = "Your email is valid";
    //     span[0].style.color = "lime";
    //     val.innerText = "hello"
    // }else{
    //     span[0].innerText = "Your email is Invalid";
    //     span[0].style.color = "red";
    //     val.innerText = "hello"
    // }

