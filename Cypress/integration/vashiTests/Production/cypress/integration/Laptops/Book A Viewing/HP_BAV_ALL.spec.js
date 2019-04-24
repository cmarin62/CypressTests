describe('MacbookSpec13"', function() {
    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('https://www.vashi.com')
       
        
    })    


        
        it('performs an appointment in London, Selfridges', ()=>{
            cy.get('.book-viewing')
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
            cy.get('.slot-picker >ul >li').last().click({force:true})
            

            //key in an email
            cy.get('.customer-email').type('est@test.com')

            cy.get('.js-click-acceptcookies').click()

            //confirming the appointment
            cy.get('.btn-confirm').eq(0).click()
            cy.wait(500)
            cy.get('.btn-confirm').eq(0).click()
            cy.wait(500)
            cy.get('.btn-done').eq(0).click()
        })

        it('performs an appointment in Manchester, Trafford', ()=>{
            cy.get('.book-viewing')
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
            cy.get('.slot-picker >ul >li').last().click({force:true})
            

            //key in an email
            cy.get('.customer-email').type('est@test.com')

            cy.get('.js-click-acceptcookies').click()

            //confirming the appointment
            cy.get('.btn-confirm').eq(0).click()
            cy.wait(500)
            cy.get('.btn-confirm').eq(0).click()
            cy.wait(500)
            cy.get('.btn-done').eq(0).click()
        })
    


        



        

        

    })
