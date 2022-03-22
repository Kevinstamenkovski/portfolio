var lastUsed;

function homeSectionActive() {
    document.getElementById("homeSection").style.display = "block";
    document.getElementById("aboutSection").style.display = "none";
    document.getElementById("portfolioSection").style.display = "none";
    document.getElementById("blogSection").style.display = "none";
    document.getElementById("contactSection").style.display = "none";


    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 1);            //lastUsed = 1;
}



function aboutSectionActive() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("aboutSection").style.display = "block";
    document.getElementById("portfolioSection").style.display = "none";
    document.getElementById("blogSection").style.display = "none";
    document.getElementById("contactSection").style.display = "none";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 2); 
}



function portfolioSectionActive() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("aboutSection").style.display = "none";
    document.getElementById("portfolioSection").style.display = "block";
    document.getElementById("blogSection").style.display = "none";
    document.getElementById("contactSection").style.display = "none";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";   
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 3); 
}





function blogSectionActive() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("aboutSection").style.display = "none";
    document.getElementById("portfolioSection").style.display = "none";
    document.getElementById("blogSection").style.display = "block";
    document.getElementById("contactSection").style.display = "none";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 4); 
}




function contactSectionActive() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("aboutSection").style.display = "none";
    document.getElementById("portfolioSection").style.display = "none";
    document.getElementById("blogSection").style.display = "none";
    document.getElementById("contactSection").style.display = "block";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(7, 119, 7)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 5); 
}
function wowWow(){
    let lUsed = sessionStorage.getItem("lastUsed");
    console.log(lUsed);
    lastSectionUsed(lUsed);
}

function lastSectionUsed(lUsed) {
    switch (lUsed) {
        case '1':
            homeSectionActive();
            break;
        case '2':
            aboutSectionActive();
            break;
        case '3':
            portfolioSectionActive();
            break;  
        case '4':
            blogSectionActive();
            break; 
        case '5':
            contactSectionActive();
            break;    
        default:
            homeSectionActive();
            break;             
    }
}