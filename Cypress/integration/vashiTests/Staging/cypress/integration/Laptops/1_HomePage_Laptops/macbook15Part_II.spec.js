describe('MacbookSpec15"', function() {
    before(() => {
        cy.visit('https://staging.vashi.com')
        
    }) 



    it('Engagement Rings block', ()=> {
        //cookies click
       
        

        //container
        cy.get('.no-content').eq(0)
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '1423px')
        .and('have.css','height', '750px') 
          

        //Slide Title
        cy.get('.widget__head').eq(4)
        .should('be.visible').scrollIntoView()
        .should('have.css', 'width', '405px')
        .and('have.css','height', '64px')
        .contains('Engagement Rings')
       
        

        /*// doesn't have aparagraph so this can be skipped
        cy.get('.widget__head > p').should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '298px')
        .and('have.css','height', '96px')
        .contains('Design and make your own ring in any of our stores or start by customising your own right here.')
        */
        
        
        //check the background image URL of the 3rd slider
        cy.get('.no-content').eq(0)
        .scrollIntoView()
        .should('have.css', 'background-image', 'url("https://staging.vashi.com/skin/frontend/default/vashi/images/theme/homepage-hero-single/hero.png")')

        
        
        //Button
        cy.get('.button').eq(4)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '200px')
            .and('have.css','height', '50px')
            .should('have.css', 'font-family')
            .and('match', /serif/)


        cy.get('.button').eq(4)
        .should('have.attr', 'href','/engagement-rings/preset/')
        .contains('Discover More')
        
        
    })
        
    it('Wedding Rings block', ()=> {
        //cookies click
       
        

        //container
        cy.get('.no-content').eq(1)
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '712px')
        .and('have.css','height', '600px') 
          

        //Slide Title
        cy.get('.widget__head').eq(5)
        .should('be.visible').scrollIntoView()
        .should('have.css', 'width', '712px')
        .and('have.css','height', '64px')
        .contains('Wedding Rings')
       
        

        /*// doesn't have aparagraph so this can be skipped
        cy.get('.widget__head > p').should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '298px')
        .and('have.css','height', '96px')
        .contains('Design and make your own ring in any of our stores or start by customising your own right here.')
        */
        
        
        //check the background image URL of the 3rd slider
        cy.get('.no-content').eq(1)
        .scrollIntoView()
        .should('have.css', 'background-image', 'url("https://staging.vashi.com/skin/frontend/default/vashi/images/theme/homepage-hero-wedding-rings/hero.png")')

        
        
        //Button
        cy.get('.button').eq(5)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '200px')
            .and('have.css','height', '50px')
            .should('have.css', 'font-family')
            .and('match', /serif/)


        cy.get('.button').eq(5)
        .should('have.attr', 'href','/wedding-rings/')
        .contains('Discover More')            
    })
        
        
    it('Jewellery  block', ()=> {
        //cookies click
        //cy.get('.js-click-acceptcookies').click()
        

        //container
        cy.get('.no-content').eq(2)
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '711px')
        .and('have.css','height', '600px') 
          

        //Slide Title
        cy.get('.widget__head').eq(6)
        .should('be.visible').scrollIntoView()
        .should('have.css', 'width', '712px')
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
