describe('Product page', () => {
  beforeEach(() => {
    cy.visit('/en/US');
  });

  it('should contain all products', () => {
    // @fixme Replace this with actual implementation, and add more
    cy.get('[data-testid="welcome-message"]').contains('Welcome to BLU!');
  });
});
