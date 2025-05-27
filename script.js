const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function showSlide(i) {
      slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        if (idx === i) slide.classList.add('active');
      });
    }

    prev.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });

    next.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });