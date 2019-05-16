


describe('Regression', function() {
    before(() => {
        cy.visit('https://staging.vashi.com')
    })

    context('Macbook15" Check', function() {
        beforeEach(function() {
            cy.viewport('macbook-15')
            cy.wait(200)
        })

        it('displays full header', function() {

            cy.get('#headerLogo').should('be.visible').and('exist').click()
            cy.get('.nav-1').should('be.visible').contains('Engagement Rings')
            cy.get('.nav-2').should('be.visible').contains('Wedding Rings')
            cy.get('.nav-3').should('be.visible').contains('Jewellery')
            cy.get('.nav-4').should('be.visible').contains('The experience')
            cy.get('.nav-5').should('be.visible').contains('Visit Us')
            cy.get('.top-menu-uk .navBookViewing').should('be.visible').contains('Book')
            cy.get('.mobile-header').should('not.be.visible')
            cy.get('.login-details').should('be.visible')
        })

        it('clicks the Frist HP CTA', function() {

            cy.get('.center .button').click()
            cy.get('.strapline > a > #headerLogo').should('be.visible').click()
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('not.be.visible')
        })
        it('clicks the 2nd HP CTA PC', function() {

            cy.get('.left.white .button').scrollIntoView().click()
            cy.get('.intro-text').eq(1).should('be.visible').and('contain', 'Make your own')
            cy.get('.strapline > a > #headerLogo').should('be.visible').click()
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('not.be.visible')
        })
        
})

    context('Macbook13" Check', function() {
        beforeEach(function() {
            cy.viewport('macbook-13')
            cy.wait(200)
        })

        it('displays full header', function() {

            cy.get('#headerLogo').should('be.visible').and('exist').click()
            cy.get('.nav-1').should('be.visible').contains('Engagement Rings')
            cy.get('.nav-2').should('be.visible').contains('Wedding Rings')
            cy.get('.nav-3').should('be.visible').contains('Jewellery')
            cy.get('.nav-4').should('be.visible').contains('The experience')
            cy.get('.nav-5').should('be.visible').contains('Visit Us')
            cy.get('.top-menu-uk .navBookViewing').should('be.visible').contains('Book')
            cy.get('.mobile-header').should('not.be.visible')
            cy.get('.login-details').should('be.visible')
        })

        it('clicks the Frist HP CTA', function() {

            cy.get('.center .button').click()
            cy.get('.strapline > a > #headerLogo').should('be.visible').click()
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('not.be.visible')

        })
        it('clicks the 2nd HP CTA PC', function() {

            cy.get('.left.white .button').scrollIntoView().click()
            cy.get('.intro-text').eq(1).should('be.visible').and('contain', 'Make your own')
            cy.get('.strapline > a > #headerLogo').should('be.visible').click()
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('not.be.visible')
        })
    })




    context('iPhone XR Check', function() {
        beforeEach(function() {
            cy.viewport(414, 896)
            cy.wait(200)
        })

        it('checks if displays the mobile menu', function() {

            cy.get('.mobile-header').should('be.visible')
            cy.get('.mobile-header .mobile-nav-toggler').click()
            cy.get('.slide-menu').should('be.visible')
            cy.get('.mobile-nav-toggler .cross').eq(0).click()
        })
        it('clicks the Frist HP CTA On mobiles', function() {

            cy.get('.center .button').click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 2nd HP CTA On mobiles', function() {

            cy.get('.left.white .button').scrollIntoView().click()
            cy.get('.js-new-journey > h1').should('be.visible').and('contain', 'Make your own')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 3rd HP CTA On mobiles', function() {

            cy.get('.right.black .button').scrollIntoView().click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })

        it('clicks the 4th HP CTA on mobile', function() {
            cy.get('.alignment-center .button').scrollIntoView().click()
            cy.get('p').should('exist').and('contain', 'Choose your diamond, setting and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click() 
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')        
        })

        it('clicks the 5th HP CTA on mobile', function() {
            cy.get('.widget--category-hero-single.no-content .button').scrollIntoView().should('be.visible').click()
            cy.get('.widget__head > p').should('be.visible').and('contain', 'Don’t be blinded by choice, we’re here to help you find the perfect engagement ring and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
        })

        it('clicks the 6th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(5).scrollIntoView().should('be.visible').click()
            cy.get("h3").contains("Wedding Rings").and('be.visible')
            cy.get("p").should('be.visible').and('contain', 'Make your own classic band or shop from our diamond wedding band collection.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })
        it('clicks the 7th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(6).scrollIntoView().should('be.visible').click()
            cy.get("h1").eq(1).contains("Jewellery").and('be.visible')
            cy.get("p").eq(2).should('be.visible').and('contain', 'Shop eternity rings and jewellery, or design the perfect gift.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })

    })


    context('iPhone Xs Max Check', function() {
        beforeEach(function() {
            cy.viewport(414, 896)
            cy.wait(200)
        })

        it('checks if displays the mobile menu', function() {

            cy.get('.mobile-header').should('be.visible')
            cy.get('.mobile-header .mobile-nav-toggler').click()
            cy.get('.slide-menu').should('be.visible')
            cy.get('.mobile-nav-toggler .cross').eq(0).click()
        })
        it('clicks the Frist HP CTA On mobiles', function() {

            cy.get('.center .button').click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        
        it('clicks the 2nd HP CTA On mobiles', function() {

            cy.get('.left.white .button').scrollIntoView().click()
            cy.get('.js-new-journey > h1').should('be.visible').and('contain', 'Make your own')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 3rd HP CTA On mobiles', function() {

            cy.get('.right.black .button').scrollIntoView().click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })

        it('clicks the 4th HP CTA on mobile', function() {
            cy.get('.alignment-center .button').scrollIntoView().click()
            cy.get('p').should('exist').and('contain', 'Choose your diamond, setting and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click() 
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')        
        })

        it('clicks the 5th HP CTA on mobile', function() {
            cy.get('.widget--category-hero-single.no-content .button').scrollIntoView().should('be.visible').click()
            cy.get('.widget__head > p').should('be.visible').and('contain', 'Don’t be blinded by choice, we’re here to help you find the perfect engagement ring and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
        })

        it('clicks the 6th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(5).scrollIntoView().should('be.visible').click()
            cy.get("h3").contains("Wedding Rings").and('be.visible')
            cy.get("p").should('be.visible').and('contain', 'Make your own classic band or shop from our diamond wedding band collection.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })


        it('clicks the 7th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(6).scrollIntoView().should('be.visible').click()
            cy.get("h1").eq(1).contains("Jewellery").and('be.visible')
            cy.get("p").eq(2).should('be.visible').and('contain', 'Shop eternity rings and jewellery, or design the perfect gift.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })

    })

    context('iPhone X Check', function() {
        beforeEach(function() {
            cy.viewport(375, 812)
            cy.wait(200)
        })

        it('checks if displays the mobile menu', function() {

            cy.get('.mobile-header').should('be.visible')
            cy.get('.mobile-header .mobile-nav-toggler').click()
            cy.get('.slide-menu').should('be.visible')
            cy.get('.mobile-nav-toggler .cross').eq(0).click()
        })
        it('clicks the Frist HP CTA On mobiles', function() {

            cy.get('.center .button').click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 2nd HP CTA On mobiles', function() {

            cy.get('.left.white .button').scrollIntoView().click()
            cy.get('.js-new-journey > h1').should('be.visible').and('contain', 'Make your own')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 3rd HP CTA On mobiles', function() {

            cy.get('.right.black .button').scrollIntoView().click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })

        it('clicks the 4th HP CTA on mobile', function() {
            cy.get('.alignment-center .button').scrollIntoView().click()
            cy.get('p').should('exist').and('contain', 'Choose your diamond, setting and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click() 
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')        
        })

        it('clicks the 5th HP CTA on mobile', function() {
            cy.get('.widget--category-hero-single.no-content .button').scrollIntoView().should('be.visible').click()
            cy.get('.widget__head > p').should('be.visible').and('contain', 'Don’t be blinded by choice, we’re here to help you find the perfect engagement ring and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
        })

        it('clicks the 6th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(5).scrollIntoView().should('be.visible').click()
            cy.get("h3").contains("Wedding Rings").and('be.visible')
            cy.get("p").should('be.visible').and('contain', 'Make your own classic band or shop from our diamond wedding band collection.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })

        it('clicks the 7th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(6).scrollIntoView().should('be.visible').click()
            cy.get("h1").eq(1).contains("Jewellery").and('be.visible')
            cy.get("p").eq(2).should('be.visible').and('contain', 'Shop eternity rings and jewellery, or design the perfect gift.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })

    })

    context('iPhone 6+ Check', function() {
        beforeEach(function() {
            cy.viewport('iphone-6+')
            cy.wait(200)
        })

        it('checks if displays the mobile menu', function() {

            cy.get('.mobile-header').should('be.visible')
            cy.get('.mobile-header .mobile-nav-toggler').click()
            cy.get('.slide-menu').should('be.visible')
            cy.get('.mobile-nav-toggler .cross').eq(0).click()
        })
        it('clicks the Frist HP CTA On mobiles', function() {

            cy.get('.center .button').click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 2nd HP CTA On mobiles', function() {

            cy.get('.left.white .button').scrollIntoView().click()
            cy.get('.js-new-journey > h1').should('be.visible').and('contain', 'Make your own')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 3rd HP CTA On mobiles', function() {

            cy.get('.right.black .button').scrollIntoView().click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })

        it('clicks the 4th HP CTA on mobile', function() {
            cy.get('.alignment-center .button').scrollIntoView().click()
            cy.get('p').should('exist').and('contain', 'Choose your diamond, setting and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click() 
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')        
        })

        it('clicks the 5th HP CTA on mobile', function() {
            cy.get('.widget--category-hero-single.no-content .button').scrollIntoView().should('be.visible').click()
            cy.get('.widget__head > p').should('be.visible').and('contain', 'Don’t be blinded by choice, we’re here to help you find the perfect engagement ring and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
        })
        it('clicks the 6th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(5).scrollIntoView().should('be.visible').click()
            cy.get("h3").contains("Wedding Rings").and('be.visible')
            cy.get("p").should('be.visible').and('contain', 'Make your own classic band or shop from our diamond wedding band collection.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })

        it('clicks the 7th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(6).scrollIntoView().should('be.visible').click()
            cy.get("h1").eq(1).contains("Jewellery").and('be.visible')
            cy.get("p").eq(2).should('be.visible').and('contain', 'Shop eternity rings and jewellery, or design the perfect gift.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })

    })

    context('iPhone 6 Check', function() {
        beforeEach(function() {
            cy.viewport('iphone-6')
            cy.wait(200)
        })

        it('checks if displays the mobile menu', function() {

            cy.get('.mobile-header').should('be.visible')
            cy.get('.mobile-header .mobile-nav-toggler').click()
            cy.get('.slide-menu').should('be.visible')
            cy.get('.mobile-nav-toggler .cross').eq(0).click()
        })
        it('clicks the Frist HP CTA On mobiles', function() {

            cy.get('.center .button').click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 2nd HP CTA On mobiles', function() {

            cy.get('.left.white .button').scrollIntoView().click()
            cy.get('.js-new-journey > h1').should('be.visible').and('contain', 'Make your own')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 3rd HP CTA On mobiles', function() {

            cy.get('.right.black .button').scrollIntoView().click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })

        it('clicks the 4th HP CTA on mobile', function() {
            cy.get('.alignment-center .button').scrollIntoView().click()
            cy.get('p').should('exist').and('contain', 'Choose your diamond, setting and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click() 
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')        
        })

        it('clicks the 5th HP CTA on mobile', function() {
            cy.get('.widget--category-hero-single.no-content .button').scrollIntoView().should('be.visible').click()
            cy.get('.widget__head > p').should('be.visible').and('contain', 'Don’t be blinded by choice, we’re here to help you find the perfect engagement ring and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
        })

        it('clicks the 6th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(5).scrollIntoView().should('be.visible').click()
            cy.get("h3").contains("Wedding Rings").and('be.visible')
            cy.get("p").should('be.visible').and('contain', 'Make your own classic band or shop from our diamond wedding band collection.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })

        it('clicks the 7th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(6).scrollIntoView().should('be.visible').click()
            cy.get("h1").eq(1).contains("Jewellery").and('be.visible')
            cy.get("p").eq(2).should('be.visible').and('contain', 'Shop eternity rings and jewellery, or design the perfect gift.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })

    })

    context('iPhone 5', function() {
        beforeEach(function() {
            cy.viewport('iphone-5')
            cy.wait(200)
        })
        it('checks if displays the mobile menu', function() {

            cy.get('.mobile-header').should('be.visible')
            cy.get('.mobile-header .mobile-nav-toggler').click()
            cy.get('.slide-menu').should('be.visible')
            cy.get('.mobile-nav-toggler .cross').eq(0).click()
        })
        it('clicks the Frist HP CTA On mobiles', function() {

            cy.get('.center .button').click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 2nd HP CTA On mobiles', function() {

            cy.get('.left.white .button').scrollIntoView().click()
            cy.get('.js-new-journey > h1').should('be.visible').and('contain', 'Make your own')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })
        it('clicks the 3rd HP CTA On mobiles', function() {

            cy.get('.right.black .button').scrollIntoView().click()
            cy.get("h1").contains("Engagement Rings").and('be.visible')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')
                        
        })

        it('clicks the 4th HP CTA on mobile', function() {
            cy.get('.alignment-center .button').scrollIntoView().click()
            cy.get('p').should('exist').and('contain', 'Choose your diamond, setting and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click() 
            cy.get('.strapline > a > #headerLogo').should('not.be.visible')        
        })

        it('clicks the 5th HP CTA on mobile', function() {
            cy.get('.widget--category-hero-single.no-content .button').scrollIntoView().should('be.visible').click()
            cy.get('.widget__head > p').should('be.visible').and('contain', 'Don’t be blinded by choice, we’re here to help you find the perfect engagement ring and ')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
        })
        it('clicks the 6th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(5).scrollIntoView().should('be.visible').click()
            cy.get("h3").contains("Wedding Rings").and('be.visible')
            cy.get("p").should('be.visible').and('contain', 'Make your own classic band or shop from our diamond wedding band collection.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })

        it('clicks the 7th HP CTA on mobile', function() {
            cy.get('.widget__actions').eq(6).scrollIntoView().should('be.visible').click()
            cy.get("h1").eq(1).contains("Jewellery").and('be.visible')
            cy.get("p").eq(2).should('be.visible').and('contain', 'Shop eternity rings and jewellery, or design the perfect gift.')
            cy.get('.mobile-logo > a > #headerLogo').should('exist').and('be.visible').click()
            cy.get('.strapline > a > #headerLogo').should('not.be.visible') 
        })



       

    })
})