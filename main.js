var diceResult = document.querySelector('.cube2');
var content = document.querySelector(".image");

  window.onkeydown = function (e) {
    if (!diceResult.hasAttribute('disabled')) {
        if (e.keyCode == 13 || e.keyCode == 32) {
            rolldice();

            const playSound = document.querySelector('.playSound');
            setTimeout(function() { 
              playSound.play();

            }, 1500) 
          }
      }
  }

  // ad show  
  function adShow() {
  var changeImg = document.getElementById("adImg");

  var images = ["add-image/2.png","add-image/3.png","add-image/4.png","add-image/5.png","add-image/1.png"];
  var imgContinue = 0;

  function changeImage(){
  changeImg.setAttribute("src", images[imgContinue]);
  imgContinue++;

  if(imgContinue >= images.length)
  {
    imgContinue = 0;
  }
}

setInterval(changeImage, 5000);
}

adShow()

  // ============ # call main functionality # =================
  diceResult.addEventListener('click', (e)=>{
    rolldice();

    const playSound = document.querySelector('.playSound');
    setTimeout(function() { 
      playSound.play();

    }, 1500)  
  });


// =========== # main functionality # ==============
function rolldice() {

    diceResult.style.animation = "animright 1s linear";
    
  var rollResult = Math.floor(Math.random() * 6) + 1;
  diceResult.innerHTML = '<img src="img/' + rollResult + '.png">';
  
  
  
  // ============= # dice animation position change # =============
  let animPosition = ['animright', 'animleft']; 
  let curentPosition = Math.floor(Math.random() * animPosition.length);

  // ============= # console.log(animPosition[curentPosition]) # =============
  if(rollResult%2 == 0){
    
    diceResult.style.animation = 'animate 3s linear';  
  }else{

    diceResult.style.animation = `${animPosition[curentPosition]} 3s linear`
  }

  // ============= # animation end position # =============
  let rollPosition = [242,-242];
  diceResult.style.transition = "0s linear";

  diceResult.addEventListener("animationend", function (e) {

    diceResult.style.animation = "";

    if(rollResult%2 ==0){

      diceResult.style.transform = 'translateX(0px)';

    }else{
      diceResult.style.transform = `translateX(${rollPosition[curentPosition]}px)`;
    }

    //  ========== # responsive dice # ===============
    if(window.innerWidth < 769) {
      rollPosition = [150,-150]
      diceResult.style.transform = `translateX(${rollPosition[curentPosition]}px)`;
    }

    if (window.innerWidth < 769 && rollResult%2 ==0) {
      diceResult.style.transform = 'translateX(0px)';
    }

    if(window.innerWidth < 571) {
      rollPosition = [122,-122]
      diceResult.style.transform = `translateX(${rollPosition[curentPosition]}px)`;
    }

    if (window.innerWidth < 571 && rollResult%2 ==0) {
      diceResult.style.transform = 'translateX(0px)';
    }

    if(window.innerWidth < 426) {
      rollPosition = [82,-82]
      diceResult.style.transform = `translateX(${rollPosition[curentPosition]}px)`;
    }

    if (window.innerWidth < 426 && rollResult%2 ==0) {
      diceResult.style.transform = 'translateX(-10px)';
    }
    
    if(window.innerWidth < 376) {
      rollPosition = [70, -70]
      diceResult.style.transform = `translateX(${rollPosition[curentPosition]}px)`;
    }

    if (window.innerWidth < 376 && rollResult%2 ==0) {
      diceResult.style.transform = 'translateX(-10px)';
    }
    
    
  });
   
  };