describe('LoveStory', function() {
    

    context('Macbook15" Check', function() {
        beforeEach(function() {
            cy.viewport('macbook-15')
            cy.wait(200)
        }) 


        it('reaches the HP', function() {
            cy.visit('https://staging.vashi.com')
    
        })

      
        it('creates an account', ()=> {
            cy.get('.login-details').eq(1).click()
            cy.contains('Sign up here').click()
            cy.get('.signup-first-name').type('testnAme')
            cy.get('.signup-last-name').type('testnAme')
            cy.get('.signup-email').type('test@test25.com')
            cy.get('.signup-telephone').type('0748828468')
            cy.get('.signup-password').type('vashi123')
            cy.get('.signup-confirm').type('vashi123')
            cy.get('[type="checkbox"]').eq(1).check({force:true})
            cy.get('.signup-submit').click()
            cy.wait(5000) 
            
            //LOGIN TEMPLATE
        })
        it('clicks on my account', ()=> {
            cy.get('.users-name').click()
            cy.get('.myAccountDropdown .myAccount').click()

        })
       

       /* it('goes through the checkout', () =>{
            cy.get('.level0').eq(2).click()
            cy.get('.widget__actions .button ').eq(1).click()
            cy.get('.scroll-target .vashi-icon').click()
            cy.wait(200)
            cy.get('.price').eq(7).click()
            cy.wait(200)
            cy.get('.add-to-cart').click()
            cy.get('.vashi-btn').eq(1).click()
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

        })*/
        
       
    })

    })
