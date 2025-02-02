function toggleDescription(metaNumber) {
    const description = document.getElementById(`meta-desc-${metaNumber}`);
    const button = description.previousElementSibling;
    
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        button.textContent = "-";  // Change "+" to "-"
    } else {
        description.style.display = "none";
        button.textContent = "+";  // Change "-" back to "+"
    }
}