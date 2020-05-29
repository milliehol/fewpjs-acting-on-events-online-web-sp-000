// Your code here

    let dodger = document.getElementById("dodger");

        document.addEventListener("keydown", function(e) {
      console.log(e.key);
    });
    
        function moveDodgerLeft() {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
     
      if (left > 0) {
        dodger.style.left = `${left - 1}px`;
      }
    }