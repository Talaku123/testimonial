




  let starCount = 0
  
  function stars(){

   document.querySelector(".card-text i").innerHTML =

    `  ${starCount}`

     document.querySelector(".card-text i").style.cssText = 'color: red; display: inline-block; font-size: 20px; margin-left: 5rem; padding: 0 30px; text-align: center; '

     starCount++
     
  }


