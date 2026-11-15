const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "فتح القائمة" : "إغلاق القائمة");
    mainNav.classList.toggle("is-open", !isExpanded);
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "فتح القائمة");
      mainNav.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "فتح القائمة");
      mainNav.classList.remove("is-open");
      menuToggle.focus();
    }
  });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

const projectForm = document.querySelector("#project-form");
if (projectForm instanceof HTMLFormElement) {
  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(projectForm);
    const propertyType = formData.get("propertyType");
    const projectStage = formData.get("projectStage");
    const projectArea = formData.get("projectArea");
    const projectLocation = formData.get("projectLocation");
    const details = [
      "أهلاً يا باشا، عايز أستفسر عن تشطيب مشروعي.",
      `نوع المكان: ${propertyType}`,
      `مرحلة التشطيب: ${projectStage}`,
      projectArea ? `المساحة التقريبية: ${projectArea}` : "",
      projectLocation ? `المنطقة: ${projectLocation}` : "",
    ].filter(Boolean).join("\n");

    window.open(
      `https://wa.me/201553160274?text=${encodeURIComponent(details)}`,
      "_blank",
      "noopener,noreferrer",
    );
  });
}
