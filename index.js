<script>
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".heroImage");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");
    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    leftArrow.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    rightArrow.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });

    // Initialize
    showSlide(current);
  });
</script>
