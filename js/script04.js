
/////////////////////////////////////////////////////////////////////
// Provide logic to main toolbar buttons to open secondary toolbar //
/////////////////////////////////////////////////////////////////////

function giveLogicToBttn(n) {
	document.querySelector(`#bttn-0${n}-00`).onclick = function () {
		const toolbar = document.querySelector(`#toolbar-0${n}`);
		initialDisplayValue = toolbar.style.display;

		[...document.querySelectorAll(".secondary-toolbar")].map(toolbar => {
			console.log(toolbar);
			toolbar.style.display = "none";
		});
		[...document.querySelector("#main-toolbar").children].map(toolbar => {
			toolbar.style.borderBottom = "0px solid black";
			toolbar.style.opacity = 0.7;
		});

		if (initialDisplayValue === "none" || initialDisplayValue === "") {
			toolbar.style.display = "flex";
			this.style.borderBottom = "3px solid black";
			this.style.opacity = 1.0;
		}
	};
}

giveLogicToBttn(1);
giveLogicToBttn(2);
giveLogicToBttn(3);
giveLogicToBttn("a");