// Modal logic for registration

document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const joinUsBtn = document.querySelector('a.btn[href="register.html"], a.btn[href="#"], a.btn.btn');
  const modal = document.getElementById('registerModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  const continueBtn = document.getElementById('continueBtn');
  const backBtn = document.getElementById('backBtn');
  const step1Form = document.getElementById('step1Form');
  const playerForm = document.getElementById('playerForm');

  // Open modal
  if (joinUsBtn) {
    joinUsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'block';
      step1Form.style.display = 'block';
      playerForm.style.display = 'none';
    });
  }

  // Close modal
  function closeModal() {
    modal.style.display = 'none';
    step1Form.reset();
    playerForm.reset();
  }
  closeModalBtn.onclick = closeModal;
  cancelBtn.onclick = closeModal;
  window.onclick = function(event) {
    if (event.target === modal) closeModal();
  };

  // Continue to player form
  continueBtn.onclick = function() {
    const regType = document.getElementById('regType').value;
    if (regType === 'player') {
      step1Form.style.display = 'none';
      playerForm.style.display = 'block';
      document.getElementById('playerName').value = document.getElementById('regName').value;
    } else if (regType === 'teacher') {
      alert('Teacher registration coming soon!');
    } else {
      alert('Fadlan dooro nooca!');
    }
  };

  // Back to step1
  backBtn.onclick = function() {
    playerForm.style.display = 'none';
    step1Form.style.display = 'block';
  };

  // Player form submit
  playerForm.onsubmit = function(e) {
    e.preventDefault();
    // TODO: Save player data to localStorage and update UI
    alert('Player registered! (Waxaan dhameystiri doonaa kaydinta iyo sawirka bogga players)');
    closeModal();
  };
}); 