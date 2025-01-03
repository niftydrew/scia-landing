export function scrollToWaitlist() {
  const emailInput = document.getElementById('waitlist-email');
  if (emailInput) {
    emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    emailInput.focus();
  }
}
