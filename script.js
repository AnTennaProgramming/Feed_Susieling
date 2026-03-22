let actChlk = 0;
const fullChlk = 200;
function growth() {
  if (actChlk >= fullChlk) return;
  let img = document.getElementById("Susieling");
  let currentHeight = img.clientHeight;
            let currentWidth = img.clientWidth;
  img.style.width= (currentWidth + 1) + "px";
img.style.height= (currentHeight + 1) + "px";
                   actChlk = actChlk + 1;
                    document.getElementById("food").innerText= actChlk;                 
if (actChlk === fullChlk) {setTimeout(function(){window.location.href="https://youtu.be/yzGvfeMHAsk";}, 5000); 
                      document.getElementById("celebrate").innerText="Celebrating in 5 seconds...";
    document.getElementById("full").innerHTML = "I'm full!";
                          }
