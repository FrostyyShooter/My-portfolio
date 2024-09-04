document.addEventListener("DOMContentLoaded", function () {
	const selectElement = document.getElementById("language-selector");
	const customSelect = document.querySelector(".custom-select");
	const selected = document.createElement("div");
	selected.className = "select-selected";
	customSelect.appendChild(selected);

	const optionsContainer = document.createElement("div");
	optionsContainer.className = "select-items";
	customSelect.appendChild(optionsContainer);

	Array.from(selectElement.options).forEach((option) => {
		const optionDiv = document.createElement("div");
		optionDiv.innerHTML = `<img src="${option.dataset.image}" alt="${option.value}"> ${option.text}`;
		optionDiv.addEventListener("click", () => {
			selectElement.value = option.value;
			selected.innerHTML = optionDiv.innerHTML;
			optionsContainer.style.display = "none";
		});
		optionsContainer.appendChild(optionDiv);
	});

	selected.innerHTML = `<img src="${
		selectElement.options[selectElement.selectedIndex].dataset.image
	}" alt="${selectElement.value}"> ${selectElement.options[selectElement.selectedIndex].text}`;
	selected.addEventListener("click", () => {
		optionsContainer.style.display =
			optionsContainer.style.display === "none" ? "flex" : "none";
	});

	document.addEventListener("click", (e) => {
		if (!customSelect.contains(e.target)) {
			optionsContainer.style.display = "none";
		}
	});
});
