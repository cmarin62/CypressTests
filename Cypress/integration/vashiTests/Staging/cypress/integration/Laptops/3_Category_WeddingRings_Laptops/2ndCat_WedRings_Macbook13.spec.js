describe('MacbookSpec13"', function() {
    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('https://staging.vashi.com/wedding-rings/')
        
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

        it('Wedding Rings HERO ', ()=> {     
        
    
        //container
        cy.get('.widget--hero-buttons')
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '1263px')
            .and('have.css','height', '680px')
            
    
        
        //Slide Title
        cy.get('.widget__head').eq(0)
            .should('be.visible').scrollIntoView()
            .contains('Wedding Rings')
    
        /*cy.get('.widget__head').eq(0)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '520px')
            .and('have.css','height', '117px')*/
        
    
        //paragraph
        cy.get('.widget__head > p').eq(0)
            .should('be.visible')
            .scrollIntoView()
            .contains('Make your own classic band or shop from our diamond wedding band collection.')
        
        
        //check the background image URL of the first slider
        cy.get('.widget--hero').eq(0)
            .should('have.css', 'background-image', 'url("https://staging.vashi.com/skin/frontend/default/vashi/images/theme/cat-landing-page/hero/wedding-rings/COP_WeddingRingx3.png")')
            
        
        
        //Button1
        cy.get('.button').eq(0)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '250px')
            .and('have.css','height', '50px')
            .should('have.css', 'font-family')
            .and('match', /serif/)
    
    
        cy.get('.button').eq(0)
            .should('have.attr', 'href','/plain-wedding-rings.html')
            .contains('Plain Wedding Rings')



        //Button2
        cy.get('.button').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width', '250px')
            .and('have.css','height', '50px')
            .should('have.css', 'font-family')
            .and('match', /serif/)
    
    
        cy.get('.button').eq(1)
            .should('have.attr', 'href','/wedding-rings/diamond-wedding-rings/')
            .contains('Diamond Wedding Rings')    


        
        
    })

    //2nd USP BLOCK ITEM
    it('Checks the Free Returns Container', ()=>{
        cy.get('.widget--hero-usp__item').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '311px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
        
    })
    it('Check font/css @Free Returns paragraph', ()=>{     
        cy.get('.widget__head').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '73px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check paragraph title text @Free Returns', ()=>{     
        cy.get('.widget__head > h3').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '19px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check Free Returns paragraph  text', ()=>{     
        cy.get('.widget__head > p').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '24px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            .contains('30 days to be totally sure.')
            
     })
     //2nd USP BLOCK ITEM


     //1ST USP Block item
     it('Checks the Free Resizing Container', ()=>{
        cy.get('.widget--hero-usp__item').eq(0)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '311px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
        
    })

    it('Check font/css @Free Resizing paragraph', ()=>{     
        cy.get('.widget__head').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '97px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check paragraph title text @Free Resizing', ()=>{     
        cy.get('.widget__head > h3').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '19px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check Free Resizing paragraph  text', ()=>{     
        cy.get('.widget__head > p').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '48px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            .contains('Free resizing. Doesn’t fit? We fix it')
            
     })
     //1ST USP Block item


     //3rd USP block item
     it('Checks the DISCRETE PACKAGING Container', ()=>{
        cy.get('.widget--hero-usp__item').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '311px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
        
    })

    it('Check font/css @DISCRETE PACKAGING paragraph', ()=>{     
        cy.get('.widget__head').eq(3)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '97px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check paragraph title text @DISCRETE PACKAGING', ()=>{     
        cy.get('.widget__head > h3').eq(3)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '19px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check DISCRETE PACKAGING paragraph  text', ()=>{     
        cy.get('.widget__head > p').eq(3)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','397px')
            .and('have.css','height', '48px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            .contains('Your secret is safe. Discrete packaging')
            
     })
     













    

        

        

    })
