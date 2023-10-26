describe('My First Test', () => {
  it('should have a button', () => {
    cy.visit('/react-questions')

    cy.get('button').should('have.text', 'еще')
  })
});
