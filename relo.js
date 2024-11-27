// Abre a modal com a imagem clicada
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = img.src; // Atribui a imagem clicada à modal
}

// Fecha a modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
