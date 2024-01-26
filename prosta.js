document.addEventListener("DOMContentLoaded", function() {
    var sliderContainer = document.querySelector(".slider-container");
    var cards = document.querySelectorAll(".tarif-card");
    var cardWidth = cards[0].offsetWidth;
    var currentIndex = 0;
  
    sliderContainer.style.width = cardWidth * cards.length + "px";
  
    // Previous Button'ına tıklanınca
    document.getElementById("prevButton").addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateSlider();
    });
  
    // Next Button'ına tıklanınca
    document.getElementById("nextButton").addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateSlider();
    });
  
    // Slider'ı güncelle
    function updateSlider() {
      var translateValue = -currentIndex * cardWidth;
      sliderContainer.style.transform = "translateX(" + translateValue + "px)";
    }
  });
  