describe ('asFeaturedInWidget Testing', function () {
    
    it('reaches the HP', function(){
            cy.visit('https://www.vashi.com')     
    })

    it('reaches the As featured in block and checks CSS for the items', function(){
        cy.contains('As Featured In').scrollIntoView()

        //checks "The Guardian"'s CSS
        cy.get('.widget--hero-as-featured .widget__content .as-featured-item .image ').eq(2).should('have.css', 'width').and('equal', '106px')
        cy.get('.widget--hero-as-featured .widget__content .as-featured-item .image ').eq(2).should('have.css', 'height').and('equal', '38px')

        //checks "GQ"'s CSS
        cy.get('.widget--hero-as-featured .widget__content .as-featured-item .image ').eq(1).should('have.css', 'width').and('equal', '76px')
        cy.get('.widget--hero-as-featured .widget__content .as-featured-item .image ').eq(1).should('have.css', 'height').and('equal', '43px')
        
        //checks "The Daily Telegraph"'s CSS
        cy.get('.widget--hero-as-featured .widget__content .as-featured-item .image ').eq(3).should('have.css', 'width').and('equal', '236px')
        cy.get('.widget--hero-as-featured .widget__content .as-featured-item .image ').eq(3).should('have.css', 'height').and('equal', '42px')
        
        //checks "Vogue"'s CSS
        cy.get('.widget--hero-as-featured .widget__content .as-featured-item .image ').eq(0).should('have.css', 'width').and('equal', '119px')
        cy.get('.widget--hero-as-featured .widget__content .as-featured-item .image ').eq(0).should('have.css', 'height').and('equal', '33px')
    })
    
    
})