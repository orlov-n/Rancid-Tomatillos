describe('Selected Movie', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/694919');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'money-plane'});
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', { fixture: 'money-plane-trailer'})
  })

  it('should have Money Plane information', () => {
    cy.contains('Money Plane')
    cy.get('.poster-2')
    .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  })
  it('should have a trailer',  () => {
    cy.get('iframe')
    .should('have.attr', 'src', 'https://www.youtube.com/embed/aETz_dRDEys')
  })
  it('should have a way to go back to movie gallery page', () => {
    cy.get('button')
    .should('have.text', 'HOME')
    .click()
    cy.url()
    .should('eq', 'http://localhost:3000/')
  })
})
