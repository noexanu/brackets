module.exports = function check(str, bracketsConfig) {
	let brackets = ''
	for (subArr of bracketsConfig) {
		for (elem of subArr) {
			brackets += elem
		}
	}
	const antonym = (letter) => brackets.includes(letter) ? brackets[brackets.lastIndexOf(letter) - 1] : false
	let previousBracket = ''
	for (letter of str) {
		if (previousBracket.slice(-1) === antonym(letter)) {
			previousBracket = previousBracket.slice(0, -1)
		} else {
			previousBracket += letter
		}
	}
	return previousBracket.length != 0 ? false : true
}
