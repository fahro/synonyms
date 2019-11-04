import SynonymsDict from '../SynonymsDict';

test('pairing two words ', () => {
	let syn = new SynonymsDict();
	syn.pairSynonyms('clean', 'washed');
	expect(syn.getAllSynonymWords('clean')).toStrictEqual([ 'washed' ]);
});

test('pairing many words ', () => {
	let syn = new SynonymsDict();
	syn.pairSynonyms('clean', 'washed');
	syn.pairSynonyms('washed', 'blank');
	syn.pairSynonyms('blank', 'pure');
	expect(syn.getAllSynonymWords('clean')).toStrictEqual([ 'washed', 'blank', 'pure' ]);
});

test('unpairing  ', () => {
	let syn = new SynonymsDict();
	syn.pairSynonyms('clean', 'washed');
	syn.pairSynonyms('washed', 'blank');
	syn.pairSynonyms('blank', 'pure');
	syn.unpairSynonyms('washed', 'blank');
	expect(syn.getAllSynonymWords('clean')).toStrictEqual([ 'washed', 'pure' ]);
	expect(syn.getAllSynonymWords('blank')).toStrictEqual([]);
	expect(syn.getAllSynonymWords('washed')).toStrictEqual([ 'pure', 'clean' ]);
});
