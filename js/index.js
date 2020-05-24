/**
 * permet de récupérer l'id de la class
 * @param {String} idName l'id a selection d'une balise
 * @param {String} name le texte a changer
 */
function elementId(idName, name) {
	document.getElementById(idName).innerHTML = name
}

/**
 * Permet d'activer le dark mode
 * @param {String} name nom de la class
 */
function darkMode(name) {
	let element = document.body
	let dark = element.classList.toggle(name)


		dark ? elementId(name, 'Light') :
		elementId(name, 'Dark')
}
