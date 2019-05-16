describe('iPad Air 2', function() {
    beforeEach(() => {
        cy.visit('https://staging.vashi.com')
        cy.viewport('ipad-2')
        
    })

    it('checks if displays the mobile menu', function() {

        cy.get('.mobile-header').should('be.visible')
        cy.get('.mobile-header .mobile-nav-toggler').click()
        cy.get('.slide-menu').should('be.visible')
        cy.get('.mobile-nav-toggler .cross').eq(0).click()
    })
    
    it('Dreams do come true', ()=> {
        //cookies click
        
    

    //container
    cy.get('.slide ').eq(0)
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '751px')
        .and('have.css','height', '920px')  

    
    //Slide Title
    cy.get('.widget__head').eq(0)
        .should('be.visible').scrollIntoView()
        .contains('Dreams do come true')

    cy.get('.widget__head').eq(0)
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '751px')
        .and('have.css','height', '79px')
    

    //paragraph
    cy.get('.widget__content').eq(0)
        .should('be.visible')
        .scrollIntoView()
        .contains('Craft an entirely bespoke ring for the love of your life in any of our stores.')

    cy.get('.widget__content').eq(0)
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '383px')
        .and('have.css','height', '63px')
    
    
    //check the background image URL of the first slider
    cy.get('.widget__background').first()
        .should('have.css', 'background-image', 'url("https://staging.vashi.com/skin/frontend/default/vashi/images/theme/homepage-hero/slide1/Slide1_Ring_Tablet.png")')
    
    
    //Button
    cy.get('.button').eq(0)
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '200px')
        .and('have.css','height', '50px')
        .should('have.css', 'font-family')
        .and('match', /serif/)


    cy.get('.button').eq(0)
        .should('have.attr', 'href','/engagement-rings/preset/')
        .contains('Shop engagement rings')
    
    
})

    it('It takes two', ()=> {
        //cookies click
        
        

        //container
        cy.get('.slide ').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '751px')
            .and('have.css','height', '920px') 
          

        //Slide Title
        cy.get('.widget__head').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .contains('It takes two')
        cy.get('.widget__head').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '751px')
            .and('have.css','height', '79px')
        

        //paragraph
        cy.get('.widget__content').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .contains('Design your perfect piece from our range of carefully selected styles, stones, metals and more.')

        cy.get('.widget__content').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '410px')
            .and('have.css','height', '63px')
        
        
        //check the background image URL of the 2nd slider
        cy.get('.widget__background').eq(1)
            .should('have.css', 'background-image', 'url("https://staging.vashi.com/skin/frontend/default/vashi/images/theme/homepage-hero/slide2/Slide2_Ring_Tablet.png")')
        
        
        //Button
        cy.get('.button').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '200px')
            .and('have.css','height', '50px')
            .should('have.css', 'font-family')
            .and('match', /serif/)


        cy.get('.button').eq(1)
            .should('have.attr', 'href','/make-your-own-jewellery/engagement-ring/')
            .contains('Make Your Own')
        
        
    })

    it('Find Inspiration', ()=> {
        //cookies click
        
        

        //container
        cy.get('.slide ').eq(2)
            .scrollIntoView()
            .should('be.visible')
            .should('have.css', 'width', '751px')
            .and('have.css','height', '920px') 
          

        //Slide Title
        cy.get('.widget__head').eq(2)
            .scrollIntoView()
            .should('be.visible')
            .contains('Find Inspiration')

        cy.get('.widget__head').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '751px').and('have.css','height', '83px')
        

        //paragraph
        cy.get('.widget__content').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .contains('From our handpicked collection.')

        cy.get('.widget__content').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '245px')
            .and('have.css','height', '39px')
        
        
        //check the background image URL of the 3rd slider
        cy.get('.widget__background').eq(2)
            .should('have.css', 'background-image', 'url("https://staging.vashi.com/skin/frontend/default/vashi/images/theme/homepage-hero/slide3/Slide3_Ring_Tablet.png")')
        
        
        //Button
        cy.get('.button').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '200px')
            .and('have.css','height', '50px')
            .should('have.css', 'font-family')
            .and('match', /serif/)


        cy.get('.button').eq(2)
            .should('have.attr', 'href','/engagement-rings/preset')
            .contains('Shop Collection')
        
        
    })

    it('Made by you', ()=> {
        //cookies click
        
        

        //container
        cy.get('.widget--make-your-own')
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '751px')
        .and('have.css','height', '600px') 
          

        //Slide Title
        cy.get('.widget__head').eq(3)
        .should('be.visible').scrollIntoView()
        .should('have.css', 'width', '550px')
        .and('have.css','height', '117px')
        .contains('Made by you')
       
        

        //paragraph
        cy.get('.widget__head > p').should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '550px')
        .and('have.css','height', '48px')
        .contains('Design and make your own ring in any of our stores or start by customising your own right here.')
        
        
        
        //check the background image URL of the 3rd slider
        cy.get('.widget--make-your-own')
        .scrollIntoView()
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')

        
        
        //Button
        cy.get('.button').eq(3)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '200px')
            .and('have.css','height', '50px')
            .should('have.css', 'font-family')
            .and('match', /serif/)


        cy.get('.button').eq(3)
        .should('have.attr', 'href','/create-your-own-jewellery/engagement-ring/')
        .contains('Make your own')
        
        
    })

    it('Engagement Rings block', ()=> {
        //cookies click
        
        

        //container
        cy.get('.no-content').eq(0)
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '751px')
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
        .should('have.css', 'width', '337px')
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
        .should('have.css', 'width', '751px')
        .and('have.css','height', '500px') 
          

        //Slide Title
        cy.get('.widget__head').eq(5)
        .should('be.visible').scrollIntoView()
        .should('have.css', 'width', '601px')
        .and('have.css','height', '64px')
        .contains('Wedding Rings')
       
        

        /*// doesn't have aparagraph so this can be skipped
        cy.get('.widget__head > p').should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '337px')
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
        
        

        //container
        cy.get('.no-content').eq(2)
        .should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '751px')
        .and('have.css','height', '500px') 
          

        //Slide Title
        cy.get('.widget__head').eq(6)
        .should('be.visible').scrollIntoView()
        .should('have.css', 'width', '601px')
        .and('have.css','height', '64px')
        .contains('Jewellery')
       
        

        /*// doesn't have aparagraph so this can be skipped
        cy.get('.widget__head > p').should('be.visible')
        .scrollIntoView()
        .should('have.css', 'width', '337px')
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
 
