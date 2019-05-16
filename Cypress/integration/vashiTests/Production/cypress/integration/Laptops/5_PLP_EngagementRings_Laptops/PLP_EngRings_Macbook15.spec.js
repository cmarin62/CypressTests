describe('MacbookSpec15"', function() {
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.vashi.com/engagement-rings/preset/')
        
    })

    

        it('displays full header', function() {

            cy.get('#headerLogo').should('be.visible').and('exist')
            cy.get('.nav-1').should('be.visible').contains('Engagement Rings')
            cy.get('.nav-2').should('be.visible').contains('Wedding Rings')
            cy.get('.nav-3').should('be.visible').contains('Jewellery')
            cy.get('.nav-4').should('be.visible').contains('The experience')
            cy.get('.nav-5').should('be.visible').contains('Visit Us')
            cy.get('.top-menu-uk .navBookViewing').should('be.visible').contains('Book')
            cy.get('.mobile-header').should('not.be.visible')
            cy.get('.login-details').should('be.visible')
        })

        it('COP Engagement Rings', ()=>{
            cy.get('.widget--category-header')
            .should('be.visible')
            .and('have.css', 'background-image', 'url("https://www.vashi.com/skin/frontend/default/vashi/images/theme/plp/hero/engagement-rings/hero.png")')
            .and('have.css','height', '780px')
            .and('have.css','width', '1423px')
        })
        it('COP engagement Title and Paragraph CSS', ()=>{
            cy.get('.widget__head')
            .should('be.visible')
            .and('have.css','background-color','rgba(0, 0, 0, 0)')
            .and('have.css', 'height', '117px')
            .and('have.css','width', '520px')
        })
        it('COP engagement Title and Paragraph Text', ()=>{
            cy.get('.widget__head >h1')
            .should('be.visible')
            .contains('Engagement Rings')


            cy.get('.widget__head >p')
            .should('be.visible')
            .contains('Don’t be blinded by choice, we’re here to help you find the perfect engagement ring and ')

            cy.get('.underline-text-colour')
            .should('have.attr','href','/wedding-rings')
            .contains('wedding ring')
        })
        it('tests PLP containers css', ()=>{
            cy.get('.plp-product-list ')
            .scrollIntoView()
            .should('be.visible')
            .and('have.css','background-color','rgba(0, 0, 0, 0)')
            .and('have.css', 'height', '7692px')
            .and('have.css','width', '1260px')

        })
        it('tests PLP Product container', ()=>{
            cy.get('.plp-product').eq(10).scrollIntoView()
            .should('be.visible')
            .and('have.css','background-color','rgb(255, 255, 255)')
            .and('have.css', 'height', '460px')
            .and('have.css','width', '300px')
            .and('have.css','font-family', '"Work Sans", sans-serif')

            //checks that price is displayed for all products
            cy.get('.plp-product .price')
            .should('be.visible')
        })
        
        
        

       
     













    

        

        

    })
