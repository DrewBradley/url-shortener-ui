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
    cy.intercept('http://localhost:3001/useshorturl/1', {
      statusCode: 200,
      method: "POST",
      body: JSON.stringify({
        id: 2, 
        long_url: "https://images.unsplash.com/photo...", short_url: "http://localhost:3001/useshorturl/2", title: 'Awesome photo'
      }),
      headers: {"Content-type": "application/json"},
    })

    cy.request('POST', 'http://localhost:3001/useshorturl/1')
    .then((response) => {
      expect(response).property('status').to.equal(200)
      expect(response).to.include.keys('id', 'long_url', 'short_url', 'title')
    })
  })

})
