let light = 1;
// document.getElementById("vr1").style.color = "black";
function myFunction() {
    if (light == 1) {
        document.body.style.backgroundColor = "black";
        document.getElementById("heading").style.color = "#08BCEB";
        document.getElementById("terms1").style.color = "#08BCEB";
        document.getElementById("terms2").style.color = "#08BCEB";
        document.getElementById("darkmode-btn").style.backgroundColor = "black";
        document.getElementById("vr1").style.color = "08BCEB";
        light = 0;
        return;
    }
    {
        document.body.style.backgroundColor = "white";
        document.getElementById("heading").style.color = "black";
        document.getElementById("terms1").style.color = "black";
        document.getElementById("terms2").style.color = "black";
        document.getElementById("darkmode-btn").style.backgroundColor = "white";
        document.getElementById("vr1").style.color = "black";
        light = 1;
    }

}


let size = 0;
function showhide() {

    icon = document.getElementById("eye");
    pw = document.getElementById("floatingPassword");
    if (size == 0) {
        pw.type = "text";
        icon.src = "/images/eye-slash.svg";
        size = 1;
    }
    else {
        pw.type = "password";
        icon.src = "/images/eye.svg";
        size = 0;

    }
}


function load() {
    document.getElementById("terms1").style.color = "black";
    document.getElementById("terms2").style.color = "black";
}
// // const load = ()=> {
// //     const phoneInputField = document.getElementsByClassName("phone");
// //     for(let i=0;i<phoneInputField.length;++i){
// //         const phoneInput = window.intlTelInput(phoneInputField[i], {
// //             utilsScript:
// //                 "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// //         });
// //     }
// //     let btn=document.getElementById('btn_modal');
// //     btn.setAttribute('data-bs-target','#exampleModal');
// //     btn.setAttribute('data-bs-toggle','modal');
// //     btn.click();
// // }


// // function load(){
