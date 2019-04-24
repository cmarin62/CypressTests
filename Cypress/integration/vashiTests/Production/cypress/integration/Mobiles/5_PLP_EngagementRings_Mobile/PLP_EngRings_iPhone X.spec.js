describe('iPhone X spec', function() {
    beforeEach(() => {
        cy.viewport(375, 812)
        cy.visit('https://www.vashi.com/engagement-rings/preset/')
        
        
    })

    

    it('checks if displays the mobile menu', function() {

        cy.get('.mobile-header').should('be.visible')
        cy.get('.mobile-header .mobile-nav-toggler').click()
        cy.get('.slide-menu').should('be.visible')
        cy.get('.mobile-nav-toggler .cross').eq(0).click()
    })

        it('COP Engagement Rings', ()=>{
            cy.get('.widget--category-header')
            .should('be.visible')
            .and('have.css', 'background-image', 'url("https://www.vashi.com/skin/frontend/default/vashi/images/theme/plp/hero/engagement-rings/hero.png")')
            .and('have.css','height', '732px')
            .and('have.css','width', '358px')
        })
        it('COP engagement Title and Paragraph CSS', ()=>{
            cy.get('.widget__head')
            .should('be.visible')
            .and('have.css','background-color','rgba(0, 0, 0, 0)')
            .and('have.css', 'height', '175px')
            .and('have.css','width', '328px')
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
            .and('have.css', 'height', '30444px')
            .and('have.css','width', '358px')

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