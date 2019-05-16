

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://staging.vashi.com')
  })

  it('cy.window() - get the global window object', () => {
    // https://staging.vashi.com
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', () => {
    // https://staging.vashi.com
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    // https://staging.vashi.com
    cy.title().should('include', 'Vashi')
  })
})
