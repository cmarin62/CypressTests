describe('iPhone XR spec', function() {
    beforeEach(() => {
        cy.viewport(414, 896)
        cy.visit('https://www.vashi.com/jewellery/collection?filter=All')
        
    })

    

    it('checks if displays the mobile menu', function() {

        cy.get('.mobile-header').should('be.visible')
        cy.get('.mobile-header .mobile-nav-toggler').click()
        cy.get('.slide-menu').should('be.visible')
        cy.get('.mobile-nav-toggler .cross').eq(0).click()
    })

        it('COP Jewellery', ()=>{
            cy.get('.widget--category-header')
            .should('be.visible')
            .and('have.css', 'background-image', 'url("https://www.vashi.com/skin/frontend/default/vashi/images/theme/plp/hero/jewellery/hero.png")')
            .and('have.css','height', '816px')
            .and('have.css','width', '397px')
        })
        it('COP Jewellery Title and Paragraph CSS', ()=>{
            cy.get('.widget__head')
            .should('be.visible')
            .and('have.css','background-color','rgba(0, 0, 0, 0)')
            .and('have.css', 'height', '131px')
            .and('have.css','width', '337px')
        })
        it('COP Jewellery Title and Paragraph Text', ()=>{
            cy.get('.widget__head >h1')
            .should('be.visible')
            .contains('Collection')


            cy.get('.widget__head >p')
            .should('be.visible')
            .contains('The perfect gift for any occasion. Can’t find what you’re after? Create your own jewellery')

            cy.get('.widget__head > p > a')
            .should('have.attr','href','/create-your-own-jewellery')
            .contains('here')
        })
        it('tests PLP containers css', ()=>{
            cy.get('.plp-product-list ')
            .scrollIntoView()
            .should('be.visible')
            .and('have.css','background-color','rgba(0, 0, 0, 0)')
            .and('have.css', 'height', '30444px')
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
