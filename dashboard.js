function myFunction()
{
    var w=window.innerWidth;
    var Section = document.querySelector("section");
    if(w>1150)
    {
        Section.style.visibility="visible";
    }
}
var Status=true;
function clickevent()
{
    var Aside=document.querySelector("aside");
    var Section = document.querySelector("section");
    if(Status)
    {
        Section.style.visibility="visible";
        Aside.style.visibility="hidden";
        Status=false;
    }
    else
    {
        Section.style.visibility="hidden";
        Aside.style.visibility="visible";
        Status=true;       
    }
}