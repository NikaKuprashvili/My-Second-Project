export function scrollToTop() {
  let arrowIcon = document.getElementById("arrow-up");
  arrowIcon.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}
