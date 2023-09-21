let calcScrollValue = ()=>{
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight-
  document.documentElement.clientHeight;
  let scrollValue = Math.round((pos*100)/calcHeight);
  if(pos>100){
      scrollProgress.style.display="grid";
  }
  scrollProgress.addEventListener("click", ()=>
  {
    document.documentElement.scrollTop=0;
  });
  scrollProgress.style.background=`conic-gradient(#03cc65
  ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}
document.querySelector('.popup .close-btn').addEventListener('click', togglePopup);

function toggleBtn(){
  const Btns = document.querySelector(".btns");
  const add = document.getElementById("add");
  const remove = document.getElementById("remove");
  const btn = document.querySelector(".btns").querySelectorAll("a");
  Btns.classList.toggle("open");
  if(Btns.classList.contains("open")){
    add.style.display="none";
    remove.style.display="block";
    btn.forEach((e,i)=>{
      setTimeout(()=>{
        bottom=40*i;
        e.style.bottom = bottom + "px";
      },100*i);
      });
  }
  else{
    add.style.display="block";
    remove.style.display="none";
    btn.forEach(e=>{
      e.style.bottom="0px";
    });
  }
}

// Add your company's email address here
const companyEmail = "easysolutions2k24@gmail.com";

// Function to open a new Gmail compose window with your company's email address
function redirectToGmail() {
    const emailSubject = "Regarding our services"; // You can change the default subject
    const emailBody = ""; // You can add a default body message if needed

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(gmailUrl, "_blank");
}

// Add a click event listener to the Gmail icon
document.getElementById("gmail-icon").addEventListener("click", redirectToGmail);
