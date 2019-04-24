describe ('categoriesWidget Testing', function () {
    
    it('reaches the HP', function(){
        cy.visit('https://www.vashi.com')
    })

    it('clicks the first Discover More -engRings', function(){
        cy.contains('h3', 'Engagement Rings').scrollIntoView()
        cy.get('.widget--hero-category .button').eq(3).contains('Discover More').click()
            cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({ position: 'topLeft' });  
        
    })

    it('clicks the 2nd Discover More -wedRings', function(){
        cy.contains('h3', 'Wedding Rings').scrollIntoView()
        cy.get('.widget--hero-category .button').eq(4).contains('Discover More').click()
            cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({ position: 'topLeft' });
    })

    it('clicks the 2nd Discover More -Jewellery', function(){
        cy.contains('h3', 'Jewellery').scrollIntoView()
        cy.get('.widget--hero-category .button').eq(5).contains('Discover More').click()
            cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({ position: 'topLeft' });
    })
})