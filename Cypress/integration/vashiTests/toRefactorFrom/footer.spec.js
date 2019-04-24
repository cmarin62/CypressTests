describe ('footer Testing', function () {
    
    it('reaches the HP', function(){
            cy.visit('https://staging.vashi.com')
            cy.viewport('iphone-6')    
    })

    it('reaches the footer ', function(){
       cy.get('.footer').scrollIntoView().should('exist').and('be.visible')       
    })

    it('clicks Expert Advice', function(){
        cy.get('#cExpertAdviceHeader').click()
        cy.get()
    })
    
    
})