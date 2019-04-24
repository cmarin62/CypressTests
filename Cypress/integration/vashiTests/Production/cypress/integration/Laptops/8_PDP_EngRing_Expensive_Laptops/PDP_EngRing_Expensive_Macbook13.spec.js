describe('MacbookSpec15 pdp expensive"', function() {
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.vashi.com/18k-white-gold-engagement-ring-with-1-09ct-round-diamond-f-vvs2-0.html')
        cy.get('.js-click-acceptcookies').click()
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
        it('tests the Product View CSS / Dimenssions', ()=>{
            cy.get('.product__view')
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '1423px')
            .and('have.css','height', '1612px')

        })
        it('tests the CSS / Dimenssions of the inner container of the item', ()=>{
            cy.get('.container__inner--100vh')
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '1040px')
            .and('have.css','height', '780px')
        })
        it('tests the CSS / Dimenssions of the Product title, price, financing', ()=>{


            //PDP'S header as a whole
            cy.get('.product__heading')
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '1040px')
            .and('have.css','height', '104px')
            //PDP'S header as a whole

            //PDP Item Title
            cy.get('.product__heading__info')
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '1040px')
            .and('have.css','height', '44px')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            //PDP Item Title

            //PDP Item Price
            cy.get('.price')
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '106px')
            .and('have.css','height', '42px')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            //PDP Item Price

            //Finance Form Button
            cy.get('.drawer--finance-trigger')
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '206px')
            .and('have.css','height', '19px')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .contains('Payment options available')
            //Finance Form Button
        })


        it('Clicks the <3 icon <not logged in> and checks the signIn Drawer', ()=>{
            cy.get('.icon-heart-empty')
            .should('be.visible')
            .and('have.css', 'width','60px')
            .and('have.css','height', '60px')
            .click()


            cy.get('.drawer__inner')
            .should('be.visible')
            .and('have.css', 'width','416px')
            .and('have.css','height', '900px')

        })



        it('clicks the <> buttons', ()=>{
            cy.get('.icon-angle-left')
            .scrollIntoView()
            .click()
            cy.wait(200)
            cy.get('.icon-angle-right')
            .scrollIntoView()
            .click()
            cy.wait(200)
        })
        it('clicks the add to basket', ()=>{
            cy.contains('Add to Basket').click()
            cy.wait(2000)

            //checks if the drawer is opened after clicking add to basket
            cy.get('.drawer__inner')
            .should('be.visible')
            .and('have.css','height', '900px')
            .and('have.css','width', '412px')
            //header of drawer check
            cy.get('.drawer__headcontainer')
            .should('have.css', 'width','412px')
            .and('have.css','height', '124px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
            cy.get('.drawer__title')
            .contains('Configure')

            cy.get('.drawer__error')
            .contains('Please select all required options.')
            //end of header of drawer check


            //price check
            cy.get('.drawer__product-form__price')
            .should('be.visible')
            .and('have.css','height', '60px')
            .and('have.css','width', '412px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','30px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            //end of price check

            //Checking the ring size (not opening it)
            cy.get('.drawer__list__item').eq(0)
            .should('be.visible')
            .and('have.css','height', '61px')
            .and('have.css','width', '412px')
            .and('have.css','color', 'rgb(232, 232, 232)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
        })

        it('adds the item to the basket and proceeds with checkout',()=>{
            cy.contains('Add to Basket').click()
            cy.wait(2000)


            //checks that AddToBasket is initially disabled
            cy.contains('Add to basket').should('be.disabled')



            //clicks Ring Sizes and picks from the list
            cy.get('.drawer__list__item').eq(0).click()

                //checks that go back is visible
                cy.get('.btn-go-back')
                .should('be.visible')
                .and('have.css', 'width','412px')
                .and('have.css','height', '60px')
                .and('have.css','color', 'rgb(0, 0, 0)')
                .and('have.css', 'font-family', '"Work Sans", sans-serif')
                .and('have.css','font-size','16px')          
                .and('have.css','background-color', 'rgb(247, 247, 247)')




                    //picks a ring size and checks if the button updates
                    cy.get('.drawer__list__item').eq(10).click()
                    

                    //checks Update button and clicks it
                    cy.get('.btn-update')
                    .should('be.visible')
                    .and('have.css', 'width','412px')
                    .and('have.css','height', '60px')
                    .and('have.css', 'font-family', '"Work Sans", sans-serif')
                    .and('have.css','font-size','16px')          
                    .and('have.css','background-color', 'rgb(220, 80, 40)')
                    .click()
                    //checks Update button and clicks it






            //cheks if the reset All is visible and clickable
            cy.contains('Reset All').should('be.visible')
            .and('have.css', 'width','206px')
            .and('have.css','height', '60px')
            .and('have.css','color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgb(247, 247, 247)')
            .click()
            //cheks if the reset All is visible and clickable


            //clicks Ring Sizes and picks from the list
            cy.get('.drawer__list__item').eq(0).click()
            cy.get('.drawer__list__item').eq(7)
            .scrollIntoView()
            .click()

            cy.get('.btn-update').click()



            //clicks add to basket inside the drawer
            cy.get('.cta').eq(3).click()



        })
        




        it('Logs in and PDP', ()=>{
            cy.get('.TextLink').eq(1)
            .click()


            cy.get('.icon-email').click()
            cy.get('.Input').eq(0).type('exp@pdp.com')
            cy.get('.Input').eq(1).type('vashi123')
            cy.get('.vashi-btn').eq(10).click()
            cy.wait(1500)
            cy.url().should('eq', 'https://www.vashi.com/wishlist')
        })
        



        

    
     













    

        

        

    })
