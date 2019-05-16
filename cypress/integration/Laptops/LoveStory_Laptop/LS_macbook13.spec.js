describe('MacbookSpec13"', function() {
    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('https://staging.vashi.com/lovestory')
        it('sign In')
    })
            
        
    it.skip('Sign In ', ()=> {
        //cookies click
        //cy.get('.js-click-acceptcookies').click()
        

        //container
        cy.get('.no-content').eq(2)
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '631px')
        .and('have.css','height', '600px') 
          

        //Slide Title
        cy.get('.widget__head').eq(6)
        .should('be.visible').scrollIntoView()
        .should('have.css', 'width', '632px')
        .and('have.css','height', '64px')
        .contains('Jewellery')
       
        

        /*// doesn't have aparagraph so this can be skipped
        cy.get('.widget__head > p').should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '298px')
        .and('have.css','height', '96px')
        .contains('Design and make your own ring in any of our stores or start by customising your own right here.')
        */
        
        
        //check the background image URL of the 3rd slider
        cy.get('.no-content').eq(2)
        .scrollIntoView()
        .should('have.css', 'background-image', 'url("https://staging.vashi.com/skin/frontend/default/vashi/images/theme/homepage-hero-jewellery/hero.png")')

        
        
        //Button
        cy.get('.button').eq(6)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '200px')
            .and('have.css','height', '50px')
            .should('have.css', 'font-family')
            .and('match', /serif/)


        cy.get('.button').eq(6)
        .should('have.attr', 'href','/jewellery')
        .contains('Discover More')     
    })

        

        

    })
