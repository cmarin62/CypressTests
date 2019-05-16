describe ('demoVashi', function () {
    
    it('visits the homepage', function () {
        
        cy.visit('https://staging.vashi.com')
        cy.contains('Vashi');
        
        
    });

    it('clicks the cookies banner', function(){
        
        cy.get('#wrapper > div.allow-cookies-banner.vashi-banner > div > div.row.content > div > button').click()
    });
    it('opens the Hamburger menu', function(){
        
        cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
    });
    /*it('clicks on sign in button', function(){
        cy.contains('Sign In').click()
    });*/

    /*it('clicks the sign up button', function(){
        cy.contains('Sign up here.').click()
    })*/
    /*it('creates a new account with email option', function(){
        cy.get('.signup-first-name').type('Automation')
        cy.get('.signup-last-name').type('Testing')
        cy.get('.signup-email').type('automation@testingemail4.com')
        cy.get('.signup-telephone').type('0748828468')
        cy.get('.signup-receive > label').click()
        cy.get('.signup-password').type('vashi123')
        cy.get('.signup-confirm').type('vashi123')
        cy.get('.signup-privacy > label').click()
        cy.get('#wa-target-ModalWrapper > div > span > div > span > div > div.ModalWrapper-content.Signup > div.Button.primary.signup-submit').click()
    })*/
    it('closes the hamburger menu after the account creation', function(){
        cy.get('.mobileNavTop > .mobile-nav-toggler > .cross').click()
    })

    it('clicks the Frist HP CTA', function(){
        
        cy.get('#widget_5c86887c38bd6 > .widget__actions > .button').click()
        
    })
    it('Checks if the page is working after clicking the 1st CTA', function(){
        
        cy.get('.js-new-journey > h1').should('be.visible').and('contain', 'Make your own')
    })
    it('returns to HP after clicking the 1st CTA', function(){
        cy.get('.mobile-logo > a > #headerLogo').click()
    })

    it('clicks the 2nd HP CTA', function(){
        cy.get('#widget_5c86887c399af > .widget__actions > .button').click()
    })
    it('Checks if the page is working after clicking the 2nd CTA', function(){
        
        cy.get('.js-new-journey > h1').should('be.visible').and('contain', 'Make your own')
    })
    it('returns to HP after clicking the 2nd CTA', function(){
        cy.get('.mobile-logo > a > #headerLogo').click()
    })

    it('clicks the 3rd HP CTA', function(){
        cy.get('#widget_5c86887c399af > .widget__actions > .button').scrollIntoView().click()
    })
    it('Checks if the page is working after clicking the 3rd CTA', function(){
        
        cy.get('h1').should('be.visible').and('contain', 'Engagement Rings')
    })
    it('returns to HP after clicking the 3rd CTA', function(){
        cy.get('.mobile-logo > a > #headerLogo').click()
    })
    //4thCTA
    it('clicks the 4th HP CTA', function(){
        cy.get('#widget_5c86887c38bd6 > .widget__actions > .button').scrollIntoView().click()
    })
    it('Checks if the page is working after clicking the 4th CTA', function(){
        
        cy.get('h1').should('be.visible').and('contain', 'Engagement Rings')
    })
    it('returns to HP after clicking the 4th CTA', function(){
        cy.get('.mobile-logo > a > #headerLogo').click()
    })
    //5thCTA

    it('clicks the 5th HP CTA', function(){
        cy.get('#widget_5c86887c38bd6 > .widget__actions > .button').scrollIntoView().should('be.visible').click()
    })
    it('Checks if the page is working after clicking the 5th CTA', function(){
        
        cy.get('.widget__head > p').should('be.visible').and('contain', 'choice')
    })
    it('returns to HP after clicking the 5th CTA', function(){
       cy.getbByAltText('Vashi').should('exist').click()
    })


})

