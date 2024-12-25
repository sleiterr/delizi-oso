// MODAL-ABOUT

(() => {
  const modal = {
    openModalBtn: document.getElementById("regstr-submit"),
    closeModalBtn: document.querySelector(".btt-regstr"),
    modal: document.getElementById("regstr-backdrop"),
    body: document.body,
  };

  if (!modal.openModalBtn || !modal.closeModalBtn || modal.modal) {
    console.log("Modal elements not found in the DOM.");
  }

  modal.openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  modal.closeModalBtn.addEventListener("click", closeModal);

  modal.modal.addEventListener("click", (e) => {
    if (e.target === modal.modal) closeModal();
  });

  function openModal() {
    modal.modal.classList.remove("is-hidden");
    modal.body.classList.add("no-scroll");
  }

  function closeModal() {
    modal.modal.classList.add("is-hidden");
    modal.body.classList.remove("no-scroll");
  }
})();
