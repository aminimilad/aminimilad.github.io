
    var header, nav, adidas, option24, juventus, h1, secheader, yPos, winWidth;
function yScroll() {
  header = document.getElementsByTagName('header')[0];
    nav = document.getElementsByTagName('nav')[0];
    adidas = document.getElementsByClassName('adidaslogo1')[0];
    option24 = document.getElementsByClassName('t24option')[0];
    juventus = document.getElementsByClassName('juventuslogo')[0];
    h1 = document.getElementsByTagName('h1')[0];
    secheader = document.getElementsByClassName('Secondary-Header')[0];
    yPos = window.pageYOffset;
  winWidth = window.innerWidth;

  if (yPos > 5 && winWidth > 768) {
    juventus.style.height = "4.0vw";
        juventus.style.width = "2.4595vw";
        h1.style.marginTop = "2vw";
        header.style.height = "4.4565vw";
        header.style.backgroundColor = "rgba(0,0,0,1)";
        secheader.style.opacity = "1";
        secheader.style.marginLeft = "7vw";
        adidas.style.height = "2.2vw";
        adidas.style.width = "3.2344vw";
        adidas.style.marginLeft = "60vw";
        option24.style.height = "0.772vw";
        option24.style.width = "3.4737vw";
        option24.style.marginTop = "2vw";
        option24.style.marginLeft = "82vw";
        nav.style.backgroundColor = "rgba(0,0,0,1)";
  } 
  else if (winWidth < 768) {
    header.style.backgroundColor = "rgba(0,0,0,1)";
    header.style.height= "53px";
    secheader.style.marginLeft = "-13vw";
    secheader.style.opacity = "0";
    juventus.style.height = "56px";
    juventus.style.width = "34px";
  }

  else if (yPos <5){
     juventus.style.height = "7.66vw";
        juventus.style.width = "4.71vw";
        h1.style.marginTop = "0vw";
        header.style.backgroundColor = "rgba(0,0,0,0.65)";
        header.style.height = "8.2vw";
        secheader.style.opacity = "0";
        secheader.style.marginLeft = "-13vw";
        adidas.style.height = "5.7vw";
        adidas.style.width = "8.38vw";
        adidas.style.marginLeft = "45vw";
        option24.style.height = "2vw";
        option24.style.width = "9vw";
        option24.style.marginTop = "3vw";
        option24.style.marginLeft = "86vw";
        nav.style.backgroundColor = "rgba(0,0,0,0.65)";
  }

}
window.addEventListener("resize", yScroll);
window.addEventListener("scroll", yScroll);

window.addEventListener("winWidth", yScroll);