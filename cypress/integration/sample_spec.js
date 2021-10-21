describe('First teste', () => {
    it('Enters the site', () => {
        cy.visit('http://localhost:3000/')

        cy.contains('Robert Fox').click()

        cy.url().should('include', '/patient-list/patient')

        cy.get('.from').click().type('2021-11-07').should('have.value', '2021-11-07')

        cy.get('.to').click().type('2021-07-21').should('have.value', '2021-07-21')

        cy.get('.react-calendar').children('.react-calendar__navigation').children('.react-calendar__navigation__prev-button').click().then(() => {
            cy.get('.react-calendar').children('.react-calendar__navigation').children('.react-calendar__navigation__label').contains('setembro de 2021')
        })
    })
})