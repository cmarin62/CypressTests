describe('smokeTest', function() {
    
    context('iphone6 Check', function() {
        beforeEach(function() {
            cy.viewport('iphone-6')
            cy.wait(200)
        })


    it('reaches the HP', function() {
        cy.visit('https://staging.vashi.com')

    })

    it('has the right title', function() {
        cy.title().should('contain', 'Vashi');
    })

    it('clicks the cookies banner', function() {

        cy.get('#wrapper > div.allow-cookies-banner.vashi-banner > div > div.row.content > div > button').click()
    });

    it('clicks the button at top left to ensure it is present', function() {
        cy.get('.strapline > a > #headerLogo')
            .should('be.visible')
            .click({
                position: 'topLeft'
            });
    })




    //first CTA testing and returning to hp
    it('clicks the Frist HP CTA', function() {

        cy.get('.center .button').click()

    })
    it('Checks if the page is working after clicking the 1st CTA', function() {

        cy.get('.js-new-journey > h1').should('be.visible').and('contain', 'Make your own')
    })

    it('returns to HP after clicking the 1st CTA', function() {
        cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
    })



    //second CTA testing and returning to hp 
    it('clicks the 2nd HP CTA', function() {
        cy.get('.left.white .button').scrollIntoView().click()
    })
    it('Checks if the page is working after clicking the 2nd CTA', function() {

        cy.get('.js-new-journey > h1').should('be.visible').and('contain', 'Make your own')
    })
    it('returns to HP after clicking the 2nd CTA', function() {
        cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
    })




    //3rd CTA testing and returning to hp
    it('clicks the 3rd HP CTA', function() {
        cy.get('.right.black .button').scrollIntoView().click()
    })
    it('Checks if the page is working after clicking the 3rd CTA', function() {

        cy.get('h1').should('be.visible').and('contain', 'Engagement Rings')
    })
    it('returns to HP after clicking the 3rd CTA', function() {
        cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
    })



    //4th CTA testing and returning to hp
    it('clicks the 4th HP CTA', function() {
        cy.get('.alignment-center .button').scrollIntoView().click()
    })
    it('Checks if the page is working after clicking the 4th CTA', function() {

        cy.get('p').should('exist').and('contain', 'Choose your diamond, setting and ')
    })
    it('returns to HP after clicking the 4th CTA', function() {
        cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
    })


    //5th CTA testing and returning to hp

    it('clicks the 5th HP CTA', function() {
        cy.get('.widget--category-hero-single.no-content .button').scrollIntoView().should('be.visible').click()
    })
    it('Checks if the page is working after clicking the 5th CTA', function() {

        cy.get('.widget__head > p').should('be.visible').and('contain', 'choice')
    })
    it('returns to HP after clicking the 5th CTA', function() {
        cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
    })

    //end of HP CTA testing


    //for mobile / tablets only - opens the menu enters EngRings
    it('opens the menu enters engagement rings', function() {
        cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
        cy.get('[data-menu="engagement"] > a').click()
        cy.get('.widget__actions > .secondary').should('be.visible')
    })


    //returns to hp after entering a category
    it('clicks the button at top left to ensure it is present', function() {
        cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({
                position: 'topLeft'
            });
    })


    //for mobile / tablets only - opens the menu enters WedRings
    it('opens the menu enters wedding rings', function() {
        cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
        cy.get('[data-menu="wedding-rings"] > a').click()
        cy.contains('Plain Wedding Rings').should('be.visible')
    })


    //returns to hp after entering a category
    it('clicks the button at top left to ensure it is present', function() {
        cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({
                position: 'topLeft'
            });
    })


    //for mobile / tablets only - opens the menu enters Jewellry
    it('opens the menu enters Jewellry', function() {
        cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
        cy.get('[data-menu="jewellery"] > a').click()
        cy.contains('View Collection').should('be.visible')
    })

    //returns to hp after entering a category
    it('clicks the button at top left to ensure it is present', function() {
        cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({
                position: 'topLeft'
            });
    })

    //for mobile / tablets only - opens the menu enters The Experience page
    it('opens the menu enters The Experience page', function() {
        cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
        cy.get('[data-menu="experience"] > a').click()
        cy.get("h2").contains("In-Store Experience").should('be.visible')
    })

    //returns to hp after entering a category
    it('clicks the button at top left to ensure it is present', function() {
        cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({
                position: 'topLeft'
            });
    })

    //for mobile / tablets only - opens the menu enters The Visit Us page
    it('opens the menu enters The Visit Us page', function() {
        cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
        cy.get('[data-menu="visitus"] > a').click()
        cy.get("h1").contains("Visit Us").should('be.visible')
    })

    //returns to hp after entering a category
    it('clicks the button at top left to ensure it is present', function() {
        cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({
                position: 'topLeft'
            });
    })

    it('openns the hamburger menu and creates an account with email', function() {
        cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
        cy.get('#wrapper > div.allow-cookies-banner.vashi-banner > div > div.row.content > div > button').click()
        cy.get('.wa-target-CustomerAccount .TextLink ').contains('Sign In').click()
        cy.get('.SigninLanding .icon-email ').should('be.visible').and('exist').click()
        cy.get('.ModalWrapper-content > :nth-child(6) > a').click()
        cy.get('.signup-first-name').type('automation')
        cy.get('.signup-last-name').type('testing')
        cy.get('.signup-email').type('automation@cypress0ef.com')
        cy.get('.signup-telephone').type('0748828468')
        cy.get('.signup-receive').click()
        cy.get('.signup-password').type('vashi123')
        cy.get('.signup-confirm').type('vashi123')
        cy.get('.signup-privacy > label').click()
        cy.get('.signup-submit').click()
    })

    //checks if elements(header, Paragraph, slide module etc) are available inside engagement rings from hamburger menu
    it('checks if elements(header, Paragraph, slide module etc) are available in engagement rings', function() {
        cy.get('[data-menu="engagement"] > a').click()
        cy.get("h3").contains("Engagement Rings").should('be.visible').and('exist')
        cy.get("p").contains("Make your own ring, design one from scratch in-store, or choose from our handmade collection.").should('be.visible')
        cy.get('.widget__actions .secondary').should('be.visible')
        cy.get('.widget__actions .button').contains('View Collection').should('be.visible')

    })
    it('reaches the slideModuleWidget and clicks each part', function() {
        cy.get('.mobile-only .dragdrop-slider .dragdrop-slider__images').scrollIntoView().should('exist').and('be.visible')

        //clicks on the First part of the slide module and checks for the CTA after click
        cy.get('.widget__content .mobile-only .dragdrop-slider .image__right').click({
            force: true
            
        })
        cy.wait(200)
        cy.get('.widget__content .mobile-only .dragdrop-slider .text__right .button').contains('Learn About Making').should('exist').and('be.visible')

        //clicks on the 2nd part of the slide module and checks for the CTA after click
        cy.get('.widget__content .mobile-only .dragdrop-slider .image__left').click({force: true})
        cy.get('.widget__content .mobile-only .dragdrop-slider .text__left').contains('Because ‘I made this for you’ always beats ‘I bought this for you’.').should('exist').and('be.visible')
    })

    //
    it('checks if the USP block is displayed', function() {
        cy.get('.widget--hero-usp__icon').eq(0).scrollIntoView().should('exist').and('be.visible')
        cy.get('.widget--hero-usp__icon').eq(1).scrollIntoView().should('exist').and('be.visible')
        cy.get('.widget--hero-usp__icon').eq(2).scrollIntoView().should('exist').and('be.visible')
    })

    it('enters view collection in Engagement Rings', function() {
        cy.get('.widget__actions .button').eq(1).scrollIntoView()
            .contains('View Collection').should('be.visible').click()
        //clicks the "\/" button
        cy.get('.icon-angle-down').should('exist').and('be.visible').click()
    })
    it('opens the filter drawer inside plp Engagement Rings', function() {
        cy.get('.price').eq(8).scrollIntoView()  
        cy.get('.category-filter-buttons').click({force : true})
        //clicks Metal in filters
        cy.contains('Metal').should('be.visible').click()
        //clicks a metal option
        cy.get('.container-option .selection').eq(1).click()
        cy.contains('I Agree').click()
        //updates the filtering
        cy.contains('Update').click()


    })


})
})