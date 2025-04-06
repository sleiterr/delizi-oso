// MODAL
(() => {
  // object
  const modal = {
    openModalBtn: document.querySelector(".conf-bttn"),
    closeModalBtn: document.querySelector(".btt-shipping"),
    modal: document.getElementById("regstr-backdrop"),
    body: document.body,
  };

  // if (!modal.openModalBtn || !modal.closeModalBtn || !modal.modal) {
  //   console.log("Modal elements not found in the DOM.");
  //   return
  // }

  modal.openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  modal.closeModalBtn.addEventListener("click", closeModal);

  modal.modal.addEventListener("click", (e) => {
    if (e.target === modal.modal) closeModal();
  });

  function openModal() {
    modal.modal.classList.add("active");
    modal.body.classList.add("no-scroll");
    modal.modal.scrollTop = 0;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  function closeModal() {
    modal.modal.classList.remove("active");
    modal.body.classList.remove("no-scroll");
  }
})();
