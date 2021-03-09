context('Display', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display the title', () => {
    cy.get('h1').contains('URL Shortener')
  })

  it('should display existing shortened URLs', () => {
    cy.get('section').find('div[class=url]').should('have.length', 1)
  })

  it('should display the form with proper inputs', () => {
    cy.get('form').find('input').should('have.length', 2)
    cy.get('input[name=title]').should('exist')
    cy.get('input[name=urlToShorten]').should('exist')
  })

  it('When a user fills out the form, the information is reflected in the input fields', () => {
    cy.get('input[name=title]').type('boogers').should('have.value', 'boogers')
    cy.get('input[name=urlToShorten]').type('www.example.com').should('have.value', 'www.example.com')
  })

  
})
