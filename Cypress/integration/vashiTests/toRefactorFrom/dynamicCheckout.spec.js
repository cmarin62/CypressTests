const sizes = ['iphone-6', 'ipad-2', 'macbook-15']

describe('Dynamic Checkout', () => {
  sizes.forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    it(`Go add an item to cart and checkout ${size}`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
      


      //reaches the Home Page      
      cy.visit('https://staging.vashi.com')  
        //clicks on the CTA that redirects to PLP
          cy.get('.widget__actions .button').eq(2).click()
            //clicks the \/ button          
              cy.get('.scroll-target .vashi-icon').click() 
                //searches for a $5000 item and scrolls to it             
                  cy.get('.price').eq(9).scrollIntoView()
                    //enters PDP for the item
                      cy.get('.price').eq(9).click()
                        //clicks add to cart in PDP
                          cy.get('.add-to-cart').click()
                          cy.wait(1500)      

      //checks the first state of the drawer\\  
      cy.get('.cookie-content .vashi-btn').click() 
        cy.get("h3").contains("Configure").should('be.visible')
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

//////////////end of first state drawer\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 

     


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
            cy.wait(1500)
            cy.get('.drawer__list__item').eq(0).click()
              cy.wait(1500)
                cy.get('.drawer__list__item').eq(10).click()
                //hits update in the drawer
                cy.get('.btn-update').click()

      //ads the engagement ring to the basket
        cy.get('.btn-confirm').click()

        //end of 2nd state drawer\\ 
        
      //cheout page redirect\\

      //checks redirect towards checkout page and checkout page elements
      cy.contains('Your Basket').should('be.visible')
      //cy.contains('Platinum Engagement ring with 0.72ct Round Diamond G/FL was added to your shopping basket.').should('be.visible')
      cy.get('.product-quantity').should('be.visible')
      cy.get('.product-price').should('be.visible')
      cy.get('.vashi-btn').should('be.visible')
      cy.get('.paypal-logo').should('be.visible')

      //proceeds through 2nd checkout page
      cy.get('.vashi-btn').eq(0).should('be.visible').click()
      cy.get('.input-box .vashi-input').eq(0).type('WC2N 5DU')
      cy.get('.pcalist .pcaitem').first().click({force: true})
      cy.get('.input-telephone .vashi-input').eq(0).type('0748828468')
      cy.get('.input-email .vashi-input').eq(0).type('dynamic@checkout.com')
      cy.get('.input-firstname .input-text').eq(0).type('Dynamic')
      cy.get('.input-lastname .input-text').eq(0).type('Checkout')
      cy.get('.payment-methods [type="radio"]').check('banktransfer', {force : true})
      cy.get('#onestepcheckout-place-order').click()
      cy.wait(1000)
      cy.get("h1").contains("Your order has been received.").should('be.visible')


      /*it('reads the order# and stores it for future reference', function () {

           const orderNumber = Cypress.$('.order-summary-page > :nth-child(3)').val()
        cy.log(xyz)
        })
      */
        

    




        

      


      
        
      

      

      

      

      
    })
  })
})