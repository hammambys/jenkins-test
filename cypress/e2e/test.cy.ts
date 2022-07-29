import addContext from 'mochawesome/addContext';

describe('test', () => {
  Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
      addContext({ test }, screenshot);
    }
  });
  it('increment counter (success)', () => {
    cy.visit('http://localhost:4200/');
    cy.get('#counter').should('contain', '0');
    cy.get('#increment').click();
    cy.get('#counter').should('contain', '1');
  });
  it('increment counter (fail)', () => {
    cy.visit('http://localhost:4200/');
    cy.get('#counter').should('contain', '0');
    cy.get('#increment').click();
    cy.get('#counter').should('contain', '9');
  });
});
