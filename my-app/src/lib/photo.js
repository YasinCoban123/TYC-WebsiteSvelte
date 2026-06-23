// @ts-nocheck

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".gallery-image").forEach((img) => {
    img.addEventListener("click", () => {
        modalImage.setAttribute("src", img.getAttribute("src") || "");
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    });
});

function closeImage() {
    modal.classList.add("hidden");
    modalImage.setAttribute("src", "");
    document.body.style.overflow = "auto";
}

closeModal.addEventListener("click", closeImage);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeImage();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeImage();
    }
});