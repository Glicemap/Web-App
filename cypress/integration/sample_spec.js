describe('Actions', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000/')
    })
    it('Test patient page', () => {
        cy.contains('Robert Fox').click()

        cy.url().should('include', '/patient-list/patient')

        cy.get('.from').click().type('2021-11-07').should('have.value', '2021-11-07')

        cy.get('.to').click().type('2021-07-21').should('have.value', '2021-07-21')

        cy.get('.react-calendar').children('.react-calendar__navigation').children('.react-calendar__navigation__prev-button').click().then(() => {
            cy.get('.react-calendar').children('.react-calendar__navigation').children('.react-calendar__navigation__label').contains('setembro de 2021')
        })
    })
    it('Test new patient', () => {
        cy.contains('Novo Paciente').click()

        cy.get('.new-patient-code').click()

        cy.get('.new-patient-code').should('be.visible')
    })
    it('Test settings', () => {
        cy.contains('Configurações').click()

        cy.get('input[name=email]').clear().type('abcd')

        cy.get('input[name=name]').clear().type('abc')

        cy.get('input[name=crm]').clear().type('abcd')

        cy.get('input[name=password]').clear().type('abcd')
        
        cy.get('input[name=password_confirm]').clear().type('abcdeee')

        cy.get('body').click('right')

        cy.contains('E-mail inválido')

        cy.contains('O campo não deve ter menos que 4 caracteres')

        cy.contains('O campo deve conter apenas dígitos')

        cy.contains('A confirmação deve ser igual à senha digitada')

    })
    it('Test notifications', () => {
        cy.contains('Notificações').click()

        cy.get('#selectAll').check()

        cy.get('#01').should('be.checked')
    })

})