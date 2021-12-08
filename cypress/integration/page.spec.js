describe('Page', () => {
  it('should test page', () => {
    cy.visit('/page');
    cy.findByText('page');
  });
});
