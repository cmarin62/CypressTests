describe('MacbookSpec15"', function() {
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://staging.vashi.com/18k-white-gold-engagement-ring-with-1-09ct-round-diamond-f-vvs2-0.html')
        
    })

    

        

    //2nd USP BLOCK ITEM
    it('Checks the Free Returns Container', ()=>{
        cy.get('.widget--hero-usp__item').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','410px')
            .and('have.css','height', '311px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
        
    })
    it('Check font/css @Free Returns paragraph', ()=>{     
        cy.get('.widget__head').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','409px')
            .and('have.css','height', '097px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check paragraph title text @Free Returns', ()=>{     
        cy.get('.widget__head > h3').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','409px')
            .and('have.css','height', '19px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check Free Returns paragraph text', ()=>{     
        cy.get('.widget__head > p').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','409px')
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
            .should('have.css', 'width','409px')
            .and('have.css','height', '311px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
        
    })

    it('Check font/css @Free Resizing paragraph', ()=>{     
        cy.get('.widget__head').eq(0)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','409px')
            .and('have.css','height', '73px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check paragraph title text @Free Resizing', ()=>{     
        cy.get('.widget__head > h3').eq(1)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','409px')
            .and('have.css','height', '19px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check Free Resizing paragraph text', ()=>{     
        cy.get('.widget__head > p').eq(0)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','409px')
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
            .should('have.css', 'width','409px')
            .and('have.css','height', '311px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
        
    })

    it('Check font/css @DISCRETE PACKAGING paragraph', ()=>{     
        cy.get('.widget__head').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','409px')
            .and('have.css','height', '97px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','14px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check paragraph title text @DISCRETE PACKAGING', ()=>{     
        cy.get('.widget__head > h3').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','409px')
            .and('have.css','height', '19px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            
     })
     it('Check DISCRETE PACKAGING paragraph  text', ()=>{     
        cy.get('.widget__head > p').eq(2)
            .should('be.visible')
            .scrollIntoView()
            .should('have.css', 'width','409px')
            .and('have.css','height', '48px')
            .and('have.css','color', 'rgb(37, 39, 52)')
            .and('have.css', 'font-family', '"Work Sans", sans-serif')
            .and('have.css','font-size','16px')          
            .and('have.css','background-color', 'rgba(0, 0, 0, 0)')
            .contains('Your secret is safe. Discrete packaging')
            
     })
     













    

        

        

    })
