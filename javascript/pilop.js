
const mybutton = document.getElementById("myBtn");

const buttonMessages = ["Top", "Scroll Up", "To the Top"];
const buttonStyles = {
  display: 'block',
  position: 'fixed',
  bottom: '20px',
  right: '30px',
  zIndex: 99,
  fontSize: '18px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'red',
  color: 'white',
  cursor: 'pointer',
  padding: '15px',
  borderRadius: '4px'
};

let scrollThreshold = 500; 
let messageIndex = 0;

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
    mybutton.style.display = buttonStyles.display;
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    const scrollStep = -window.scrollY / (1000 / 30); 
    const scrollInterval = setInterval(function(){
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep); 
      } else {
        clearInterval(scrollInterval); 
      }
    }, 15); 
  }

function cycleButtonText() {
  setInterval(() => {
    mybutton.textContent = buttonMessages[messageIndex];
    messageIndex = (messageIndex + 1) % buttonMessages.length;
  }, 2000);
}

scrollFunction();
cycleButtonText();

mybutton.addEventListener('click', topFunction);