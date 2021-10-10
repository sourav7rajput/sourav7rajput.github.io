const home=document.getElementById("home");
const bio=document.getElementById("bio");
const skill=document.getElementById("skill");
const cont=document.getElementById("cont");

home.style.display="block";
bio.style.display="none";
skill.style.display="none";
cont.style.display="none";
const d=new Date();
document.getElementById("abc").innerHTML=d;

function homecontent(){
  home.style.display = "block";
  bio.style.display = "none";
  skill.style.display="none";
  cont.style.display="none";
}
function biography()
{
  home.style.display = "none";
  bio.style.display = "block";
  skill.style.display="none";
  cont.style.display="none";
}
function tech()
{
  home.style.display = "none";
  bio.style.display = "none";
  skill.style.display="block";
  cont.style.display="none";
}
function contacts()
{
  home.style.display = "none";
  bio.style.display = "none";
  skill.style.display="none";
  cont.style.display="block";
}
