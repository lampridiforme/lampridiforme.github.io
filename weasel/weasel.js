let weasel = function() {
	const DEBUG = false;
	const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

	let phrase = "";
	let phraseLen = 0;
	let chars = ALPHABET;
	let mutRate = 5;
	let genSize = 100;

	// array of all children per generation
	let generations = [];
	// array of "winning" children per generation 
	let fittest = [];

	// ----- INTERFACE ----- 
	// initializes problem
	function init(_phrase, _mutRate, _genSize) {
		// TODO: clean up phrase like in index.html for extra assurredness
		phrase = _phrase;
		phraseLen = _phrase.length;
		mutRate = _mutRate;
		genSize = _genSize;

		clear();

		console.log(phrase);
		console.log(phraseLen);
		console.log(mutRate);
		console.log(genSize);
	}

	// TODO: what if multiple strings are similar?
	function createNextGeneration() {
		if (generations.length === 0) {
			let progenitor = createProgenitor();
			generations.push([progenitor]);
			fittest.push(progenitor);

			debug("generations empty, initialized with progenitor " + progenitor);
		}
		else {
			let parent = fittest[fittest.length - 1];
			createGeneration(parent);
		}
	}

	// clears existing generation data
	function clear() {
		generations = [];
		fittest = [];
	}

	function getCurrentGeneration() {
		return generations[generations.length - 1];
	}

	function getCurrentFittest() {
		console.log(fittest[fittest.length - 1]);
		return fittest[fittest.length - 1];
	}

	function getCurrentGenCount() {
		return generations.length - 1;
	}

	function getMeanDiff() {
		let currGen = getCurrentGeneration();
		let sum = 0;
		for (let i = 0; i < currGen.length; i++) {
			sum += getSimilarity(currGen[i]);
		}

		return sum / currGen.length;
	}

	function getMeanSimPercent() {
		let percentSim = 1 - getMeanDiff() / phraseLen;
		return parseFloat(Math.round(percentSim * 100 * 100) / 100).toFixed(2);
	}

	// ----- HELPERS -----
	// find similarity between target and given string
	function getSimilarity(_str) {
		let diff = 0;
		for (let i = 0; i < phraseLen; i++) {
			if (_str.charAt(i) !== phrase.charAt(i)) 
				diff += 1;
		}

		return diff;
	}

	// create a single child by mutating a parent
	// TODO: there's something fishy here, figure it out later
	function createChild(_parent) {
		let child = "";
		for (let i = 0; i < phraseLen; i++) {
			let mutate = getRandomInt(0, 100);
			let newChar = _parent.charAt(i);

			if (mutate < mutRate) {
				let sample = chars.slice(0, chars.indexOf(newChar));
				sample += chars.slice(chars.indexOf(newChar) + 1, chars.length);

				debug("sample without letter " + newChar + ": " + sample);

				let newCharIdx = getRandomInt(0, sample.length);
				newChar = sample.charAt(newCharIdx);
			}

			child += newChar;
		}

		return child;
	}

	// generate an entire generation and push it to the generation array
	function createGeneration(_parent) {
		let currGeneration = [];
		let currFittest = "";
		let fitscore = phraseLen + 1; // arbitrarily high value

		for (let i = 0; i < genSize; i++) {
			let child = createChild(_parent);
			let diff = getSimilarity(child);

			if (diff < fitscore) {
				currFittest = child;
				fitscore = diff;
			}

			currGeneration.push(child);
		}

		debug("fittest this generation: " + currFittest);

		// push results
		generations.push(currGeneration)
		fittest.push(currFittest);
	}

	// create the first parent
	function createProgenitor() {
		let str = "";
		let charLen = chars.length;

		for (let i = 0; i < phraseLen; i++) {
			str += chars.charAt(getRandomInt(0, charLen));
		}

		return str;
	}

	// Mozilla's random int function
	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}

	// show debug messages
	function debug(_str) {
		if (DEBUG) 
			console.log("     DEBUG: " + _str);
	}

	return {
		init: init,
		clear: clear,
		createNextGeneration: createNextGeneration,
		getCurrentGeneration: getCurrentGeneration,
		getCurrentFittest: getCurrentFittest,
		getCurrentGenCount: getCurrentGenCount,
		getMeanDiff: getMeanDiff,
		getMeanSimPercent: getMeanSimPercent,
	};
}();


