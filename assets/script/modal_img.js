// Get the modal
let modal = document.getElementById("imgModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let imgCollection = document.getElementsByClassName("certificate-img");
let modalImg = document.getElementById("imgModalPlaceholder");
let captionText = document.getElementById("caption");

// Convert imgCollection to an array
let imgArray = Array.from(imgCollection);
imgArray.forEach(img => {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }  
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks on modal or outside, close the modal
modal.onclick = function() { 
  modal.style.display = "none";
}