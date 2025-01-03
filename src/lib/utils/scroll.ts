export function scrollToWaitlist() {
  const emailInput = document.getElementById('waitlist-email');
  if (emailInput) {
    const offset = 300; // Account for sticky navbar height and some padding
    const elementPosition = emailInput.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Focus after scrolling is complete
    setTimeout(() => {
      emailInput.focus();
    }, 500);
  }
}
