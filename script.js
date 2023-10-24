// script.js

document.addEventListener("DOMContentLoaded", function() {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const middleSection = document.querySelector('.middle-section');
  
    let video1Playing = false;
    let video2Playing = false;
  
    function updateVideoPlayback() {
      const scrollPosition = window.scrollY;
      const middleSectionPosition = middleSection.getBoundingClientRect().top;
  
      if (scrollPosition >= middleSectionPosition && !video1Playing) {
        video1.play();
        video1Playing = true;
      } else if (scrollPosition < middleSectionPosition && video1Playing) {
        video1.pause();
        video1Playing = false;
      }
  
      if (scrollPosition >= middleSectionPosition && !video2Playing) {
        video2.play();
        video2Playing = true;
      } else if (scrollPosition < middleSectionPosition && video2Playing) {
        video2.pause();
        video2Playing = false;
      }
    }
  
    window.addEventListener('scroll', updateVideoPlayback);
  });
  
