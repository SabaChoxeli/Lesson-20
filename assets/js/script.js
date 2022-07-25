const regModal = document.querySelector("#reg-modal"),
  regModalClose = document.querySelector(".modal-close");

function dynamicOpenModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.add("open");

    regModalClose.addEventListener("click", () => {
      dynamicClosemodal(selector);
    });
  }
}

function dynamicClosemodal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.remove("open");
  }
}

regModal.addEventListener("click", () => {
  dynamicOpenModal("#registration-modal");
});
