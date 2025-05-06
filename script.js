window.addEventListener('load', () => {
    const gateContainer = document.querySelector('.gate-container');
    const content = document.querySelector('.content');
  
    // Add open class to animate gate after small delay
    setTimeout(() => {
      gateContainer.classList.add('open');
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 500);
  
    // Show content slightly after gates open
    setTimeout(() => {
      content.classList.add('show');
    }, 2500);
  });
  