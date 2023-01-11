console.log("ACCORDION");
const accordionBtn = document.getElementsByClassName("accordion");
const accordionAnimatedBtn = document.getElementsByClassName(
	"accordion__animated",
);

for (const accordion of accordionBtn) {
	accordion.addEventListener("click", function () {
		accordion.classList.toggle("active");
		const panel = accordion.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

for (const accordion of accordionAnimatedBtn) {
	accordion.addEventListener("click", function () {
		const panel = accordion.nextElementSibling;
		console.log(panel.scrollHeight);
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
			panel.style.padding = "1rem";
		}
	});
}
