describe ('love story unit ', function () {
    
    beforeEach(function() {
        cy.visit('https://staging.vashi.com')
        cy.viewport('iphone-6')
        cy.wait(200)
        cy.clearCookies()
    })

    it('reaches the slideModuleWidget and clicks each part', function(){
        cy.get('.cross').eq(1).click()

        cy.contains('The Experience').click()

        cy.contains('Create Your Story').click()

        cy.contains('Create your love story').click()

        cy.get('.icon-email').click()

        cy.get('.Input  ').eq(0).type('jfpar@mailfs.com')

        cy.get('.Input  ').eq(1).type('vashi123')

        cy.get('.js-click-acceptcookies').click()

        cy.get('.vashi-btn').eq(6).click()

        
        cy.get('#lovestoryApp > div > header > h1 > div:nth-child(1) > input').type('testtest')
        cy.wait(500)


        cy.get('.question').eq(5).click({force:true})

        cy.get('.ls-textarea-wrap').type('test worked')

        //cy.get('.enabled').click()

        //cy.contains('Next').click()
      


    })
    
    
})