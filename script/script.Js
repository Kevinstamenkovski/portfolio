var lastUsed;

function homeSectionActive() {
    document.getElementById("homeSection").style.visibility = "visible";
    document.getElementById("aboutSection").style.visibility = "hidden";
    document.getElementById("portfolioSection").style.visibility = "hidden";
    document.getElementById("blogSection").style.visibility = "hidden";
    document.getElementById("contactSection").style.visibility = "hidden";


    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 1);            //lastUsed = 1;
}



function aboutSectionActive() {
    document.getElementById("homeSection").style.visibility = "hidden";
    document.getElementById("aboutSection").style.visibility = "visible";
    document.getElementById("portfolioSection").style.visibility = "hidden";
    document.getElementById("blogSection").style.visibility = "hidden";
    document.getElementById("contactSection").style.visibility = "hidden";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 2); 
}



function portfolioSectionActive() {
    document.getElementById("homeSection").style.visibility = "hidden";
    document.getElementById("aboutSection").style.visibility = "hidden";
    document.getElementById("portfolioSection").style.visibility = "visible";
    document.getElementById("blogSection").style.visibility = "hidden";
    document.getElementById("contactSection").style.visibility = "hidden";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";   
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 3); 
}





function blogSectionActive() {
    document.getElementById("homeSection").style.visibility = "hidden";
    document.getElementById("aboutSection").style.visibility = "hidden";
    document.getElementById("portfolioSection").style.visibility = "hidden";
    document.getElementById("blogSection").style.visibility = "visible";
    document.getElementById("contactSection").style.visibility = "hidden";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 4); 
}




function contactSectionActive() {
    document.getElementById("homeSection").style.visibility = "hidden";
    document.getElementById("aboutSection").style.visibility = "hidden";
    document.getElementById("portfolioSection").style.visibility = "hidden";
    document.getElementById("blogSection").style.visibility = "hidden";
    document.getElementById("contactSection").style.visibility = "visible";

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