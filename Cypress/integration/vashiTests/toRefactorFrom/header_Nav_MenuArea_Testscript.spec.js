describe ('hpTestScriptAutomation', function () {
    
    it('reaches the HP', function(){
        cy.visit('https://www.vashi.com')
    })     
    //setup finished^above^


   it('has the right title', function(){
    cy.title().should('contain', 'Vashi');
   })
   
   it('clicks the button at top left to ensure it is present', function(){
     cy.get('.mobile-logo > a > #headerLogo')
     .should('be.visible')
     .click({ position: 'topLeft' });  
   })

   it('scrolls downwards the page and check for sticky header', function(){
     cy.contains('It takes').scrollIntoView().should('exist')
     cy.get('.mobile-header').should('be.visible');
    
    })


    it('scrolls upwards the page and check for sticky header', function(){
        cy.contains('Make Your Own').scrollIntoView()
        cy.get('.mobile-header').should('be.visible');
        
    })


       //for mobile / tablets only - opens the menu enters engagement rings
        it('opens the menu enters engagement rings', function(){
        cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
          cy.get('[data-menu="engagement"] > a').click()
        cy.get('.widget__actions > .secondary').should('be.visible')
        })


        //returns to hp after entering a category
        it('clicks the button at top left to ensure it is present', function(){
        cy.get('.mobile-logo > a > #headerLogo')
        .should('be.visible')
        .click({ position: 'topLeft' });  
        })


       //for mobile / tablets only - opens the menu enters Engagement rings
        it('opens the menu enters wedding rings', function(){
        cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
           cy.get('[data-menu="wedding-rings"] > a').click()
        cy.contains('Plain Wedding Rings').should('be.visible')
        })

   
         //returns to hp after entering a category
        it('clicks the button at top left to ensure it is present', function(){
        cy.get('.mobile-logo > a > #headerLogo')
        .should('be.visible')
        .click({ position: 'topLeft' });  
        })

        //for mobile / tablets only - opens the menu enters Jewellry
        it('opens the menu enters Jewellry', function(){
        cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
            cy.get('[data-menu="jewellery"] > a').click()
        cy.contains('View Collection').should('be.visible')
        })

        //returns to hp after entering a category
        it('clicks the button at top left to ensure it is present', function(){
            cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({ position: 'topLeft' });  
        })
        
        //for mobile / tablets only - opens the menu enters The Experience page
        it('opens the menu enters The Experience page', function(){
            cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
            cy.get('[data-menu="experience"] > a').click()
            cy.get("h2").contains("In-Store Experience").should('be.visible')
        })

        //returns to hp after entering a category
        it('clicks the button at top left to ensure it is present', function(){
            cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({ position: 'topLeft' });  
        })
        
        //for mobile / tablets only - opens the menu enters The Visit Us page
        it('opens the menu enters The Visit Us page', function(){
            cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
            cy.get('[data-menu="visitus"] > a').click()
            cy.get("h1").contains("Visit Us").should('be.visible')
        })

        //returns to hp after entering a category
        it('clicks the button at top left to ensure it is present', function(){
            cy.get('.mobile-logo > a > #headerLogo')
            .should('be.visible')
            .click({ position: 'topLeft' });  
        })


        
        //check if the user is sign in
        it('checks the signIn status of the user', function(){
            cy.get('.mobile-header > .mobile-nav-toggler > .cross').click({ force: true })
            cy.contains('I Agree').should('exist').click()
            if(cy.contains('Sign In').should('exist')){
                cy.contains('Sign In').click()
                cy.contains('Email').click()
                cy.get('.ModalWrapper-content > [type="email"]').type('cypress@aut.com')
                cy.get('.ModalWrapper-content > [type="password"]').type('vashi123')
                cy.get('#wa-target-ModalWrapper > div > span > div > span > div > div.ModalWrapper-content.EmailSignin > div.Button.primary').should('exist').click()
                cy.wait(3000)
            }
            else { 
                cy.contains('Sign Out').should('exsist').click()
              }
            
        })
        //not actually booking an appointment because of prod environment
        it('clicks book a viewing after logging in', function(){
            cy.contains('Book a Viewing').should('exist').click()
            cy.contains('Selfridges Trafford').should('exist').click()
            cy.wait(2000)
            cy.contains('Pick a time').scrollIntoView().should('be.visible')
            cy.get('#select-time').select('13:30')
            cy.contains('Call').should('exist').click()
            cy.get('#viewings-dialog-wrapper > div > div.viewings-content.col-md-12 > div.contactInterest.row > div.js-select-interest.col-sm-6.col-md-6 > div:nth-child(3) > div')
            .should('have.text',"Jewellery").click()
            cy.get('#viewings-dialog > div.ui-dialog-titlebar.ui-widget-header.ui-corner-all.ui-helper-clearfix.ui-draggable-handle > button > span.ui-button-icon-primary.ui-icon.ui-icon-closethick')
            .click()
        })
        //signs out 
        it('signs out',function(){
            cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
            cy.get('.TextLink > a').should('have.text', "Sign Out").click()
            cy.get('.ModalWrapper-close-button').click()
        })

        //checks if login modal is triggered when book a viewing is clicked
        it('checks if login modal is triggered when book a viewing is clicked',function(){
            cy.get('.mobile-header > .mobile-nav-toggler > .cross').click()
            cy.contains('I Agree').should('exist').click()
            cy.get('.book-viewing-button').click()
            cy.get('#ajaxlogin-2').should('exist')
            
        })


        //this covers the header and nav menu area
   

})


