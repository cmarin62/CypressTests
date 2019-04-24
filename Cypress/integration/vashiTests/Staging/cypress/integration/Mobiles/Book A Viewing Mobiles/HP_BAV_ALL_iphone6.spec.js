describe('iphone 6 spec', function() {
    beforeEach(() => {
        cy.viewport('iphone-6')
        cy.visit('https://staging.vashi.com')
        
        cy.get('.mobile-nav-toggler .cross').eq(1).click()
        
    })    


        
        it('performs an appointment in London, Selfridges', ()=>{
            cy.get('.book-viewing-button')
            .click()
            cy.wait(500)

            //got the London City selected.
            cy.get('.city-picker > ul > li').eq(0).click()


            //got the Selfridges store selected.
            cy.get('.store-picker > ul > :nth-child(3)').click({force: true})
            cy.wait(500)
            //got May as the selected month
            cy.get('.month > ul > li').eq(1).click({force:true})
            cy.wait(500)

            //got the date
            cy.get('.date >ul >li').last().click({force:true})
            cy.wait(500)

            //gets the last hour available.
            cy.get('.slot-picker >ul >li').eq(4).click({force:true})
            

            //key in an email
            cy.get('.customer-email').type('est@test.com')

            //confirming the appointment
            cy.get('.btn-confirm').click()
            cy.wait(500)
            cy.get('.btn-confirm').click()
            cy.wait(500)
            cy.get('.btn-done').click()
        })

        it('performs an appointment in Manchester, Trafford', ()=>{
            cy.get('.book-viewing-button')
            .click()
            cy.wait(500)

            //got the Manchester City selected.
            cy.get('.city-picker > ul > li').eq(1).click()


            //got the Selfridges Trafford store selected.
            cy.get('.store-picker > ul > :nth-child(1)').click({force: true})
            cy.wait(500)
            //got May as the selected month
            cy.get('.month > ul > li').eq(1).click({force:true})
            cy.wait(500)

            //got the date
            cy.get('.date >ul >li').last().click({force:true})
            cy.wait(500)

            //gets the last hour available.
            cy.get('.slot-picker >ul >li').eq(6).click({force:true})
            

            //key in an email
            cy.get('.customer-email').type('est@test.com')

            //confirming the appointment
            cy.get('.btn-confirm').click()
            cy.wait(500)
            cy.get('.btn-confirm').click()
            cy.wait(500)
            cy.get('.btn-done').click()
        })
    


        



        

        

    })
