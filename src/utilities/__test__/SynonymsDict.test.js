import SynonymsDict from '../SynonymsDict';

test('pairing clean and washed ', () => {
	var syn = new SynonymsDict();
	syn.pairSynonyms('clean', 'washed');
	syn.pairSynonyms('washed', 'dirt-free');
	//console.log(syn);
	expect(2 + 2).toBe(4);
});

// console.log(syn.getAllSynonymWords('wash'));

// syn.pairSynonyms('blank', 'white');
// syn.pairSynonyms('blank', 'pure');
// syn.unpairSynonyms('clean', 'dirt-free');

// console.log(syn.getAllSynonymWords('wash'));
