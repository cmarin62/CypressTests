describe ('demoVashi', function () {
    
    
    it('checksout on iphone6', function(){
         //reaches the Home Page
        cy.viewport('iphone-6')
      cy.visit('https://staging.vashi.com')

      //clicks on the CTA that redirects to PLP
      cy.get('.widget__actions .button').eq(2).click()

      //clicks the \/ button 
      cy.get('.scroll-target .vashi-icon').click()

      //searches for a $5000 item and scrolls
      cy.get('.price').eq(4).scrollIntoView()

        //enters PDP for the item
            cy.get('.price').eq(4).click()
            //clicks add to cart in PDP
                cy.get('.add-to-cart').click()


      //checks the first state of the drawer\\
      
      //clicks cookie banner
        cy.get('.cookie-content .vashi-btn').click()
      
      //checks if 'customise' is displayed
        cy.get("h3").contains("Customise").should('be.visible')
      //checks if error message is displayed 
        cy.get('.drawer__error--message').should('be.visible')
      //checks if the price is displayed
        cy.get('.drawer__product-form__price').should('be.visible')
      //checks if ring sizes is available
        cy.get('body > div.drawer.active.drawer--customise > div.drawer__inner > div.drawer__contentcontainer > div > div.drawer__product-form__container > div.drawer__product-form__menu > ul > li').should('be.visible')
      //checks if add to basket is disabled w/o selecting any size
        cy.get('.btn-confirm').should('have.attr', 'disabled')
      //checks if Reset all is available
        cy.get('.btn-reset-all').should('be.visible')

      //end of first state drawer\\  


      //checks the 2nd state of the drawer\\ 

      //clicks ring sizes
        cy.get('body > div.drawer.active.drawer--customise > div.drawer__inner > div.drawer__contentcontainer > div > div.drawer__product-form__container > div.drawer__product-form__menu > ul > li').click()
      
      //checks that size guide is available and clickable
      cy.get('.drawer__helpers > .drawer-trigger').should('be.visible').click()
      //cy.get('.drawer__helpers > .drawer-trigger').click()

      //checks that data is displayed inside size guide
        cy.contains('Circumference').should('be.visible')
        cy.contains('& Australia').should('be.visible')
        cy.contains('& Canada').should('be.visible')
        cy.contains('Europe').should('be.visible')

      //closes the size guide and picks an actual ring side
            cy.get('.vashi-icon--close > .cross').click()
            cy.wait(1500)
            cy.get('.add-to-cart').click()
            cy.wait(500)
            cy.get('.drawer__list__item').eq(10).click({force: true})
                //hits update in the drawer
                cy.get('.btn-update').click({force: true})

      //ads the engagement ring to the basket
        cy.get('.btn-confirm').click({force: true})

        //end of 2nd state drawer\\ 
        
      //cheout page redirect\\

      //checks if the add to cart confirmation message is displayed
      cy.contains('Platinum Engagement ring with 0.8ct Round Diamond G/FL was added to your shopping basket.').should('be.visible')
      cy.contains('Your Basket').should('be.visible')
      

        

      


      
        
      

      

      

      

      
    
    })
   


    


})

