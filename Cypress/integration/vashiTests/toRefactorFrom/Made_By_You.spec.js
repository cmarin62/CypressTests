describe ('madeByYou Widget testing', function () {
    
    it('reaches the HP', function(){
        cy.visit('https://www.vashi.com')
    })

    it('clicks the Made By You CTA then returns to HP', function(){
            cy.contains('Made').scrollIntoView()
            cy.wait(2500)
            cy.get('.widget--make-your-own .button').click()  
            
    })
    
})