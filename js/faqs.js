const faqs = document
  .querySelectorAll(".container__faqs-faq")
  .forEach(openQuestion);
function openQuestion(item) {
  item.addEventListener("click", () => {
    let arrow = item.childNodes[1].childNodes[3];
    /*  item.nextElementSibling.classList.toggle("showedAnswer")
        item.children[1].classList.toggle("openedArrow")
        item.classList.toggle("activeQuestion") */
    if (arrow.classList.contains("transition-arrow")) {
      arrow.classList.remove("transition-arrow");
      item.childNodes[3].style.display = "none";
    } else {
      arrow.classList.add("transition-arrow");
      item.childNodes[3].style.display = "block";
    }
  });
}
