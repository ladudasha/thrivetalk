function test(a, b) {
    return a + b
}

console.log(test(5, 2));
console.log(test(2, 4));
console.log(test(9, 1));


// плавный скролл



  let anchors = document.querySelectorAll("a[href*='#']")
  console.log(anchors);
  for(let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault()
      
      let blockID  = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }


//# sourceMappingURL=script.js.map
