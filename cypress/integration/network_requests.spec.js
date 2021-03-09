context('Network Requests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('make a get request', () => {
    cy.request('http://localhost:3001/useshorturl/1')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })

  it.only('make a post request', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
        body: {
          long_url: 'https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK',
          title: 'title 1'
        }
      });

      cy.get('input[name=title]').type('title 1')
      cy.get('input[name=urlToShorten]').type('https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK')
      cy.get('button').click()
      cy.get('section').find('div').should('have.length', 2)
  })

})
