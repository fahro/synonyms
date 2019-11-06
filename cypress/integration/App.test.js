describe('<App/>', () => {
	before(() => {
		cy.visit('http://localhost:3000');
	});

	it('Renders without crashing', () => {
		cy.get('h4').contains('Search Synonyms');
	});

	describe('The default UI', () => {
		it('Renders message', () => {
			cy.get('.result-message').contains('Please type in a word to show synonyms.');
		});

		it('Has an input field', () => {
			cy.get('.search-bar').should('have.length', 1);
		});

		it('Has an search button', () => {
			cy.get('.search-btn').should('have.length', 1);
		});
	});

	describe('Searching synonyms', () => {
		it('When the search button is pressed, if the input field is empty, prevent item from being added', () => {
			cy.get('.search-btn').click();
			cy.get('.keyword-text').should('have.length', 0);
		});

		it('When the search button is pressed, if the input field has text, it displays synonym not found message', () => {
			cy.get('.search-bar').type('Clean').should('have.value', 'Clean');
			cy.get('.search-btn').click();
			cy.get('.keyword-text').should('have.length', 1);
			cy.get('.result-message').contains('Sorry but there is no synonym found for the word: clean');
		});
	});

	describe('Adding synonyms', () => {
		it('When the add button is pressed, if the input field is empty, prevent item from being added', () => {
			cy.get('.btn-success').click();
			cy.get('.synonym-text').should('have.length', 0);
		});

		it('When the add button is pressed, if the input field has text, it displays synonyms', () => {
			cy.get('.synonym-input').type('Clear').should('have.value', 'Clear');
			cy.get('.btn-success').click();
			cy.get('.synonym-text ').contains('clear');
		});

		it('Adding more synonyms, it displays all synonyms', () => {
			cy.get('.synonym-input').type('blank').should('have.value', 'blank');
			cy.get('.btn-success').click();
			cy.get('.synonym-text ').should('have.length', 2);
			cy.get('.synonym-text ').contains('blank');
			cy.get('.synonym-text ').contains('clear');
		});

		it('When one synonym is clicked, it displays synonyms ', () => {
			cy.get('.synonym-text ').first().click();

			cy.get('.synonym-text ').should('have.length', 2);
			cy.get('.synonym-text ').contains('clear');
			cy.get('.synonym-text ').contains('clean');
		});

		it('Transitivity rule works', () => {
			cy.get('.synonym-input').type('dirt-free').should('have.value', 'dirt-free');
			cy.get('.btn-success').click();
			cy.get('.synonym-text ').contains('dirt-free');
			cy.get('.synonym-text ').should('have.length', 3);
			cy.get('.synonym-text ').contains('clear');
			cy.get('.synonym-text ').contains('clean');
			cy.get('.synonym-text ').first().click();
			cy.get('.synonym-text ').contains('clear');
			cy.get('.synonym-text ').should('have.length', 3);
			cy.get('.synonym-text ').contains('blank');
			cy.get('.synonym-text ').contains('clean');
		});
	});

	describe('Deleting synonym words', () => {
		it('When the delete button is pressed for the first synonym word, it unpairs word', () => {
			cy.get('.synonym-delete').first().click();
		});
		it('means that because the first synonym word blank was unpaired, the first word  should now be clear', () => {
			cy.get('.synonym-text').first().contains('clear');
		});

		it('unpaired words from dirt-free word should also be unpaired with other 2 clear and clean', () => {
			cy.visit('http://localhost:3000/#/browse/blank');
			cy.get('.synonym-text').should('have.length', 0);
		});
	});

	describe('404 page', () => {
		it('Accessing wrong url displays 404 message', () => {
			cy.visit('http://localhost:3000/#/randomurl');
			cy.get('.not-found').contains('404 - Page not found');
		});
	});
});
