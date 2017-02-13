//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
	txt = txt.toLowerCase();
    return {
        nChars: txt.length,
        nWords: txt.trim().split(/[\s,]+/).length,
        nLines: txt.split(/\r\n|\r|\n/).length,
        nNonEmptyLines: txt.match(/^\s*\S/gm || "").length,
        averageWordLength: txt.length / txt.split(' ').length,
        maxLineLength: longestLine(txt),
        palindromes: getPalindromes(txt),
        longestWords: findLongestWords(txt),
        mostFrequentWords: mostFrequentWordsFunc(txt)
    };
}

function longestLine(txt){
	var maxLength = 0;
	var lineArray = txt.split('\n');

	for (var i = 0; i < lineArray.length; i++) {
		if (lineArray[i].length > maxLength) {
			maxLength = lineArray[i].length;
		}
	}

	return maxLength;
}

function getPalindromes(txt) {
	var wordArray = txt.trim().split(/[\s,]+|\+|\:|\-/);
	var pallyArray = [];

	for (var i = 0; i < wordArray.length; i++) {
		if(wordArray[i] === wordArray[i].split('').reverse().join('')) {
			pallyArray.push(wordArray[i]);
		}
	}

	return pallyArray;
}

function findLongestWords(txt) {
	var wordArray = txt.split(/[\s,]+|\+|\:|\-/);
	var lengthCounter = 0;
	var currLongest = {};

	for (var i = 0; i < wordArray.length; i++ ) {
		if (lengthCounter < wordArray[i].length) {
			lengthCounter = wordArray[i].length;
			currLongest.push(wordArray[i]);
		}
	}

	arr.sort(function(a, b){
		// ASC  -> a.length - b.length
		// DESC -> b.length - a.length
		return b.length - a.length;
	});

	return currLongest;
}

function mostFrequentWordsFunc(txt) {
	var wordArray = txt.split(/[\s,]+|\+|\:|\-|\/n/);
	var wordCounts = { };

	for (var i = 0; i < wordArray.length; i++) {
		wordArray[i] = wordArray[i].toLowerCase();
		wordCounts["_" + wordArray[i]] = (wordCounts["_" + wordArray[i]] || 0) + 1;
	}

	return wordCounts;
}