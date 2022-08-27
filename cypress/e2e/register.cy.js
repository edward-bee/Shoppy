describe('Register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register')
  })

  it('If the email is not valid, it must return an error message', () => {
    cy.get('#email').type('a@a {enter}')
    cy.get('#email').next().should('have.text', 'El email no es válido')
  })

  it('If the name do not contain 3 characters, it must return an error message', () => {
    cy.get('#name').type('an {enter}')
    cy.get('#name').next().should('have.text', 'El nombre debe contener un mínimo de 3 caracteres')
  })

  it('If the name contains more than 20 characters, it must return an error message', () => {
    cy.get('#name').type('engnvxfizrcknopqvyengnvxfizrcknopqvy {enter}')
    cy.get('#name').next().should('have.text', 'El nombre debe contener un máximo de 20 caracteres')
  })

  it('The passwords must be equal', () => {
    cy.get('#confirmPassword').type('pedropicapiedra')
    cy.get('#password').type('pedropicapiedraasf')

    cy.get('[data-id=register-btn]').click()
    cy.get('#password').next().should('have.text', 'Las contraseñas deben coincidir')
    cy.get('#confirmPassword').next().should('have.text', 'Las contraseñas deben coincidir')

    cy.get('#confirmPassword').clear()
    cy.get('#password').clear()

    cy.get('#confirmPassword').type('pedropicapiedra')
    cy.get('#password').type('pedropicapiedra')

    cy.get('[data-id=register-btn]').click()
    cy.get('#password').next().should('have.text', '')
    cy.get('#confirmPassword').next().should('have.text', '')
  })

  it('Register via API must fail', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3009/api/v1/user/register',
      failOnStatusCode: false,
      body: {
        name: 'Jorge',
        email: 'engnvxfizrcknopqvy@kvhrr.com',
        password: 'pedropicapiedra'
      }
    }).then((res) => {
      expect(res.status).to.eq(409)
      expect(res.body).to.haveOwnProperty('error')
    })
  })

  it('Users can go to /login', () => {
    cy.get('[data-id=login-link]').click()
    cy.url().should('contain', '/login')
  })
})
