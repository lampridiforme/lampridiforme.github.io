// Reproduction of Dawkin's Weasel Program.
// - Generated strings will always be same length as target
// - String characters are limited to capital chars and spaces
// - Using the classic "Methinks it is like a weasel" target
// - Mutation rate is 5%
// - Try using 'ATCG' as CHARS and 'GATTACA' as PHRASE

let weasel = function(){
	const DEBUG = false;
	const PHRASE = "DAWKINS WEASEL IS A THOUGHT EXPERIMENT MEANT TO ILLUSTRATE HOW NONRANDOM SELECTION OF RANDOM ELEMENTS SUCH AS NATURAL SELECTION STILL IS DIFFERENT FROM A PURELY RANDOM SYSTEM  THE TRAIT BEING SELECTED IS SIMILARITY TO A TARGET PHRASE USUALLY METHINKS IT IS LIKE A WEASEL, AND THE ELEMENTS BEING SELECTED ARE SERIES OF RANDOMLY GENERATED LETTERS  EACH GENERATION A PARENT PHRASE GENERATES A NUMBER OF MUTANT COPIES AND OF THOSE CHILD PHRASES THE ONE MOST SIMILAR TO THE TARGET BECOMES THE NEW PARENT  EVENTUALLY THE TARGET PHRASE WILL EMERGE  TRY IT YOURSELF BY TYPING IN A PHRASE AND SEEING HOW MANY GENERATIONS IT TAKES TO GET TO THE TARGET FROM A RANDOMLY GENERATED PARENT  YOU CAN ALSO ADJUST OTHER PAREMENTERS AND SEE THE EFFECTS THEY HAVE ON THE GENERATION COUNT";
	//const PHRASE = "METHINKS IT IS A WEASEL";
	const PHRASE_LEN = PHRASE.length;
	const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "; // lol what is regex
	const MUT_RATE = 5;
	const GEN_SIZE = 100;

	// find similarity between target and given string
	function getSimilarity(_str) {
		let diff = 0;
		for (let i = 0; i < PHRASE_LEN; i++) {
			if (_str.charAt(i) !== PHRASE.charAt(i)) 
				diff += 1;
		}

		return diff;
	}

	// generate a child by mutating the parent string
	function createChild(_parent) {
		let child = "";
		for (let i = 0; i < PHRASE_LEN; i++) {
			let mutate = getRandomInt(0, 100);
			let newChar = _parent.charAt(i);

			if (mutate < MUT_RATE) {
				// don't want to accidentally select the same character
				let sample = CHARS.slice(0, CHARS.indexOf(newChar));
				sample += CHARS.slice(CHARS.indexOf(newChar) + 1, CHARS.length);
				debug("sample without letter " + newChar + ": " + sample);

				let newCharIdx = getRandomInt(0, sample.length);
				newChar = sample.charAt(newCharIdx);
			}
			
			child += newChar;
		}

		return child;
	}

	// find the fittest (most similar to target) string generated from a parent
	function createGeneration(_parent, _generations) {
		let fittest = "";
		let fitscore = PHRASE_LEN + 1; // arbitrary high value, just make sure it's greater than PHRASE_LEN

		for (let i = 0; i < GEN_SIZE; i++) {
			let child = createChild(_parent);
			let diff = getSimilarity(child);

			if (diff < fitscore) {
				fittest = child;
				fitscore = diff;
			}
		}
		
		debug("fittest this generation: " + fittest);
		_generations.push(fittest)

		return _generations;
	}

	// create the first parent
	function createProgenitor() {
		let str = "";
		let charLen = CHARS.length;

		for (let i = 0; i < PHRASE_LEN; i++) {
			str += CHARS.charAt(getRandomInt(0, charLen));
		}

		return str;
	}

	function getNextGeneration() {
		
	}

	// run program and print results
	function run() {
		let generations = [];
		let latestDiff = PHRASE_LEN + 1;
		let counter = 1;

		generations.push(createProgenitor());

		// not at goal yet
		while (latestDiff !== 0) {
			generations = createGeneration(generations[generations.length - 1], generations);
			latestDiff = getSimilarity(generations[generations.length - 1]);

			//console.log("Generation " + counter + ": " + generations[generations.length - 1]);

			counter++;
		}

		console.log("DONE, took " + (counter - 1) + " generations.");
	}

	// HELPERS
	// Mozilla's random int function
	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}

	// turn on debug
	function debug(_str) {
		if (DEBUG) 
			console.log("     DEBUG: " + _str);
	}

	return {
		run: run,
		getNextGeneration: getNextGeneration,
	};
}();

weasel.run();