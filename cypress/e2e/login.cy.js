describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login')
  })

  it('If the email is not valid, it must return an error message', () => {
    cy.get('#email').type('a@a {enter}')
    cy.get('#email').next().should('have.text', 'El email no es válido')
  })

  it('If the password length is greater than 20, it must return an error message', () => {
    cy.get('#password').type('R8BjAtFuu%83*6lcY1LWmkQ$RA4jBwq4r7qRDX*LZZU84BR*D^ {enter}')
    cy.get('#password').next().should('have.text', 'La contraseña debe contener un máximo de 20 caracteres')
  })

  it('If the password length is lower than 8, it must return an error message', () => {
    cy.get('#password').type('e8!6T1 {enter}')
    cy.get('#password').next().should('have.text', 'La contraseña debe contener un mínimo de 8 caracteres')
  })

  it('Logging in via form submission', () => {
    cy.get('#email').type('engnvxfizrcknopqvy@kvhrr.com')
    cy.get('#password').type('pedropicapiedra')
    cy.get('#login-btn').click()
    cy.url().should('eq', 'http://localhost:5173/')

    cy.get('[aria-label=menu]').click()
    cy.get('[data-id=logout-test]').click().should('not.exist')
  })

  it('Users can go to /register', () => {
    cy.get('[data-id=register-link]').click()
    cy.url().should('contain', '/register')
  })
})
