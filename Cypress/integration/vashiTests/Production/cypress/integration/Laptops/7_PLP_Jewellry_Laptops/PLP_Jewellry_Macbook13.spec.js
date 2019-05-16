describe('MacbookSpec13"', function() {
    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('https://www.vashi.com/jewellery/collection?filter=All')
        
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

        it('COP Jewellery', ()=>{
            cy.get('.widget--category-header')
            .should('be.visible')
            .and('have.css', 'background-image', 'url("https://www.vashi.com/skin/frontend/default/vashi/images/theme/plp/hero/jewellery/hero.png")')
            .and('have.css','height', '680px')
            .and('have.css','width', '1263px')
        })
        it('COP Jewellery Title and Paragraph CSS', ()=>{
            cy.get('.widget__head')
            .should('be.visible')
            .and('have.css','background-color','rgba(0, 0, 0, 0)')
            .and('have.css', 'height', '117px')
            .and('have.css','width', '520px')
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
