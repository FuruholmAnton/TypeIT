
window.addEventListener('WebComponentsReady', function() {
	// imports are loaded and elements have been registered

	document.querySelector('.add-note__button').addEventListener("click", openNoteAdder);
});

app.openNoteAdder = function() {
	var elem = document.getElementById('#addNote');
	elem.$.open();
}

function addNote() {

}
