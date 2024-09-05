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

document.addEventListener("DOMContentLoaded", function () {
	const selectElement = document.getElementById("dateSelector");
	const customSelect = document.querySelector(".custom-date-select");
	const selected = document.createElement("div");
	selected.className = "date-selected";
	selected.textContent = selectElement.options[selectElement.selectedIndex].textContent;
	customSelect.appendChild(selected);

	const dropdown = document.createElement("div");
	dropdown.className = "custom-dropdown";

	Array.from(selectElement.options).forEach((option) => {
		const optionDiv = document.createElement("div");
		optionDiv.className = "custom-dropdown-item";
		optionDiv.textContent = option.textContent;
		optionDiv.dataset.value = option.value;

		optionDiv.addEventListener("click", () => {
			selectElement.value = option.value;
			selected.textContent = option.textContent;
			dropdown.style.display = "none";
			selectElement.dispatchEvent(new Event("change"));
		});

		dropdown.appendChild(optionDiv);
	});

	customSelect.appendChild(dropdown);

	selected.addEventListener("click", () => {
		dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
	});

	document.addEventListener("click", (e) => {
		if (!customSelect.contains(e.target)) {
			dropdown.style.display = "none";
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const selectElement = document.getElementById("dateSelector");
	const changelogContainer = document.querySelector(".changelogContainer");
	const changelogDates = Array.from(changelogContainer.getElementsByClassName("changelogDate"));

	function sortChangelogDates(order) {
		const sortedDates = changelogDates.sort((a, b) => {
			const dateA = new Date(a.dataset.date);
			const dateB = new Date(b.dataset.date);
			return order === "Newest" ? dateB - dateA : dateA - dateB;
		});

		// Temporarily disable scrolling
		const scrollTop = changelogContainer.scrollTop;
		changelogContainer.style.overflow = "hidden";

		// Clear the container and append sorted elements
		changelogContainer.innerHTML = "";
		sortedDates.forEach((dateElement) => {
			changelogContainer.appendChild(dateElement);
		});

		// Restore the scroll position and re-enable scrolling
		changelogContainer.scrollTop = scrollTop;
		changelogContainer.style.overflow = "auto";
	}

	// Initial sort based on the default selected option
	sortChangelogDates(selectElement.value);

	// Add event listener to sort when the select value changes
	selectElement.addEventListener("change", function () {
		sortChangelogDates(this.value);
	});
});
// tab 3 content
// document.addEventListener("DOMContentLoaded", function () {
// 	fetch("portfolio.html")
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw new Error("Network response was not ok");
// 			}
// 			return response.text();
// 		})
// 		.then((data) => {
// 			const parser = new DOMParser();
// 			const doc = parser.parseFromString(data, "text/html");
// 			const projectCard = doc.getElementById("latestProject");
// 			if (projectCard) {
// 				document.getElementById("tab-3-container").innerHTML = projectCard.innerHTML;
// 			} else {
// 				console.error('Element with ID "latestProject" not found.');
// 			}
// 		})
// 		.catch((error) => console.error("Error loading content:", error));
// });
