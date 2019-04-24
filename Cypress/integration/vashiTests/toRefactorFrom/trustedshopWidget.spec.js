describe ('trustedWidget Testing', function () {
    
    it('reaches the HP', function(){
            cy.visit('https://www.vashi.com')     
    })

    it('reaches the trustedWidget and checks the review rating is present', function(){

        //first review module element
        cy.get('.widget--slider__item').first().scrollIntoView()
        cy.get('.widget--slider__item .review-stars').eq(1).should('exist').and('be.visible')
        
    })
    
    
})