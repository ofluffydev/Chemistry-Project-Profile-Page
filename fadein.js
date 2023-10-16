const infoBoxes = document.querySelectorAll('.infoBox');

const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin around the root
  threshold: 0.1, // When 10% of the element is visible, trigger the callback
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing after it's visible
    }
  });
}, options);

infoBoxes.forEach((box) => {
  observer.observe(box);
});
