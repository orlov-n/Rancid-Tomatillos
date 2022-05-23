describe('Home page, movie gallery', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie-gallery' })
    cy.visit('http://localhost:3000/')

  })
  it('should have a search bar that can search for movies', () => {
    cy.get('.search')
    .type('m')

    cy.get('.movie-card-title')
    .should('have.length', 3)
  })
  it('should be able to take lowercase or upper case', () => {
    cy.get('.search')
    .type('b')

    cy.get('.movie-card-title')
    .should('have.length', 1)

    cy.get('.search').type('{backspace}')

    cy.get('.search')
    .type('B')

    cy.get('.movie-card-title')
    .should('have.length', 1)
  })
  it('should not have a seachbar on the selected movie page', () => {
    cy.get('.search').type('money')

    cy.get('#694919').click()

    cy.contains('.search').should('not.exist')
  })
  it('should have a search bar after clicking the home button on the selected movie page', () => {
    cy.visit('http://localhost:3000/694919')

    cy.get('button').click()

    cy.get('.search')
  })
})
