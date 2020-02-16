document.addEventListener("DOMContentLoaded",function(){
  var body = document.body;
  setInterval(createStars,50);
  function createStars(){
    var colorList = ['red', 'green', 'blue', 'yellow','orange', 'black'];
    var colorStar = (colorList[Math.floor(Math.random() * 5)]);
    var star = document.createElement('div');
    star.classList.add("star");
    body.appendChild(star);
    var right = Math.floor(Math.random() * 500);
    var top = Math.floor(Math.random() * screen.height);
    star.style.background = colorStar;   
    star.style.top = top + "px";
    setInterval(runStar,10);
    function runStar(){
      if(right >= screen.width)
        star.remove();
      right += 3;
      star.style.right = right + "px";
    }    
  };
});
  