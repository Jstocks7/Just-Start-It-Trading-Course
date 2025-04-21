function unlockModule(moduleId) {
  const module = document.getElementById(moduleId);
  if (module) {
    module.classList.remove('locked');
    module.style.opacity = 1;
    module.style.pointerEvents = 'auto'; // Allow clicking on unlocked modules
    alert(`Congratulations! ${moduleId.replace('module', 'Module ')} is now unlocked.`);
  }
}

function completeTask(moduleId) {
  const quizForm = document.getElementById('quiz1');
  if (quizForm) {
    quizForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const answer = document.getElementById('q1').value;
      if (answer.toLowerCase().includes('stock')) { // Simple validation
        unlockModule('module2');
      } else {
        alert('Incorrect answer. Please try again.');
      }
    });
  }
}