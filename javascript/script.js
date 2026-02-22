function formAlert(){
    quizConfirm();
     
}

function quizConfirm(){
    if (!infoRemplies()){
        alert("Veuillez remplir tous les champs !");
        return;
    }
    else{
        alert("Votre formulaire a bien été envoyé ! Vous serez reconctaté sous peu !");
    }
}

function infoRemplies(){
    var nom = document.getElementById("nom").value.trim();
    var prenom = document.getElementById("prenom").value.trim();
    var date = document.getElementById("email").value.trim();
    var mail =  document.getElementById("message").value.trim();

    if(nom =="" || prenom == "" || email == "" || message == ""){
        return false;
    }
    return true;
}


let SlideActive = 0;

function changeImg(direction) {
    const slides = document.querySelectorAll(".slide");
    
    slides[SlideActive].classList.remove("active");
    
    SlideActive = (SlideActive + direction + slides.length) % slides.length;
    
    slides[SlideActive].classList.add("active");
}