describe ('slideModuleWidget Testing', function () {
    
    beforeEach(function() {
        cy.visit('https://www.vashi.com')
        cy.viewport('iphone-6')
        cy.wait(200)
    })

    it('reaches the slideModuleWidget and clicks each part', function(){


        
        cy.get('.mobile-only .dragdrop-slider .dragdrop-slider__images').scrollIntoView()
        .should('exist')
        .and('be.visible')

        //clicks on the First part of the slide module and checks for the CTA after click
        cy.get('.widget__content .mobile-only .dragdrop-slider .image__right').click({force: true })
        cy.get('.widget__content .mobile-only .dragdrop-slider .text__right .button').contains('Learn About Making').should('exist').and('be.visible')


        //clicks on the 2nd part of the slide module and checks for the CTA after click
        cy.get('.widget__content .mobile-only .dragdrop-slider .image__left').click({force: true })
        cy.get('.widget__content .mobile-only .dragdrop-slider .text__left').contains('Because ‘I made this for you’ always beats ‘I bought this for you’.').should('be.visible')
    })
    
    
})