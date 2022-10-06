function onButtonClick(e){

    if(e.innerHTML == "Follow Nickolas"){
    e.style.backgroundColor = "#C0392B";
    e.style.color = "white";
    e.innerHTML = "Following";
    e.style.transition = "0.7s";
    } else {
    e.style.backgroundColor = "white";
    e.style.color = "midnightblue";
    e.innerHTML = "Follow Nickolas";
        
    }
}

function onStarClick(e){

    const x1 = document.getElementById("star1");
    const x2 = document.getElementById("star2");
    const x3 = document.getElementById("star3");
    const x4 = document.getElementById("star4");
    const x5 = document.getElementById("star5");



    if(e == star1){
        x1.style.color = "yellow";
        x2.style.color = "gray";
        x3.style.color = "gray";
        x4.style.color = "gray";
        x5.style.color = "gray";
    }

    if(e == star2){
        x1.style.color = "yellow";
        x2.style.color = "yellow";
        x3.style.color = "gray";
        x4.style.color = "gray";
        x5.style.color = "gray";
    }

    if(e == star3){
        x1.style.color = "yellow";
        x2.style.color = "yellow";
        x3.style.color = "yellow";
        x4.style.color = "gray";
        x5.style.color = "gray";
    }

    if(e == star4){
        x1.style.color = "yellow";
        x2.style.color = "yellow";
        x3.style.color = "yellow";
        x4.style.color = "yellow";
        x5.style.color = "gray";
    }

    if(e == star5){
        x1.style.color = "yellow";
        x2.style.color = "yellow";
        x3.style.color = "yellow";
        x4.style.color = "yellow";
        x5.style.color = "yellow";
    }

}

var i = 0;

function moreButton(){
    const dropbar = document.createElement("div");
    const contactButton = document.createElement("button");
    const reportButton = document.createElement("button");

    dropbar.setAttribute("id","dropbar");
    contactButton.setAttribute("id", "contactbtn");
    reportButton.setAttribute("id", "reportbtn");
    contactButton.innerHTML = "CONTACT";
    reportButton.innerHTML = "REPORT";

    dropbar.appendChild(contactButton);
    dropbar.appendChild(reportButton);
    const currentDiv = document.getElementById("header");

    if (i === 0){
        document.body.insertBefore(dropbar, currentDiv);
        i += 1;    
    } else {
        document.getElementById("dropbar").remove();
        i = 0;
    }

}

n = 0;

function userOptions(){
    
    const icon = document.getElementById("icone");

    const dropbar = document.createElement("div");
    const profileButton = document.createElement("button");
    const getOut = document.createElement("button");

    dropbar.setAttribute("id", "userDropbar");
    profileButton.setAttribute("id", "profileButton");
    getOut.setAttribute("id", "getOut");

    profileButton.innerHTML = "PROFILE";
    getOut.innerHTML = "LOGOUT";

    getOut.setAttribute("onclick", "redirectTo('Home')");
    profileButton.setAttribute("onclick", "redirectTo('UserPage')");

    dropbar.appendChild(profileButton);
    dropbar.appendChild(getOut);

    const currentDiv = document.getElementById("header");

    if (n === 0){
        document.body.insertBefore(dropbar, currentDiv);
        n += 1;    
    } else {
        document.getElementById("userDropbar").remove();
        n = 0;
    }

}

function redirectTo(e){
    window.location.href = e + ".html";
}

function fileSelector(){
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = e => { 
        var file = e.target.files[0]; 
    
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = readerEvent => {
            var content = readerEvent.target.result; 
            document.getElementById("user").setAttribute("src", content);
        }
    }

    input.click();
}

function bannerSelector(){
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = e => { 
        var file = e.target.files[0]; 
    
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = readerEvent => {
            var content = readerEvent.target.result; 
            document.getElementById("banner").setAttribute("src", content);
        }
    }

    input.click();

}
