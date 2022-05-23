describe('Home page, movie gallery', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movie-gallery' })
    cy.visit('http://localhost:3000/')

  })

  it('has a heading Rancid Tomatillos', () => {
    cy.get('h1').should('have.text', 'Rancid Tomatillos')
  })

  it('displays all movie posters', () => {
    cy.get('.movie-card-title')
    .should('have.length', 9)

    cy.get('.movie-card-title')
    .first()
    .should('have.text', 'Money Plane (2020)')

    cy.contains('Ava (2020)').should('exist')
    cy.contains('Snakes on a Plane (2008)').should('not.exist')
  })
  it('should display movie details when a movie is clicked', () => {
    cy.get('.poster')
    .first()
    .click()
    cy.url().should('eq', 'http://localhost:3000/694919')

    cy.contains('runtime: 82')
  })
})
