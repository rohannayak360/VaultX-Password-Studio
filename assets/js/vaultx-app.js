// Main controller

const copyBtn =
document.getElementById("copyBtn");

const toast =
document.querySelector(".toast");

copyBtn.addEventListener("click",()=>{

    toast.style.display="block";

    setTimeout(()=>{

        toast.style.display="none";

    },2000);

});