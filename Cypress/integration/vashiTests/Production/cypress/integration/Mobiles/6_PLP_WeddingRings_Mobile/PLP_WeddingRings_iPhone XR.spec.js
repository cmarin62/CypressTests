describe('iPhone XR', function() {
    beforeEach(() => {
        cy.viewport(414 , 896)
        cy.visit('https://www.vashi.com/wedding-rings/diamond-wedding-rings/')
        
        
    })

    

    it('checks if displays the mobile menu', function() {

        cy.get('.mobile-header').should('be.visible')
        cy.get('.mobile-header .mobile-nav-toggler').click()
        cy.get('.slide-menu').should('be.visible')
        cy.get('.mobile-nav-toggler .cross').eq(0).click()
    })

        it('COP Wedding Rings', ()=>{
            cy.get('.widget--category-header')
            .should('be.visible')
            .and('have.css', 'background-image', 'url("https://www.vashi.com/skin/frontend/default/vashi/images/theme/plp/hero/wedding-rings/hero.png")')
            .and('have.css','height', '816px')
            .and('have.css','width', '397px')
        })
        it('COP wedding Title and Paragraph CSS', ()=>{
            cy.get('.widget__head')
            .should('be.visible')
            .and('have.css','background-color','rgba(0, 0, 0, 0)')
            .and('have.css', 'height', '175px')
            .and('have.css','width', '337px')
        })
        it('COP wedding Title and Paragraph Text', ()=>{
            cy.get('.widget__head >h1')
            .should('be.visible')
            .contains('Diamond Wedding Rings')


            cy.get('.widget__head >p')
            .should('be.visible')
            .contains('Let us tick another thing off your wedding list. ')

            cy.get('.widget__head > p > a')
            .should('have.attr','href','mailto:service@vashi.com')
            .contains('Send us a snap')
        })
        it('tests PLP containers css', ()=>{
            cy.get('.plp-product-list ')
            .scrollIntoView()
            .should('be.visible')
            .and('have.css','background-color','rgba(0, 0, 0, 0)')
            .and('have.css', 'height', '6270px')
            .and('have.css','width', '397px')

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
