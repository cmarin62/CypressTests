
context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://staging.vashi.com')
  })
///////////////////////////////////////////////////Start Of Apple Phones\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    it('changes VP to iPhone X', () =>{
    //switches viewport to iPhone X from default base url
      cy.viewport(375, 812)
          cy.get('.mobile-logo').should('be.visible').and('exist').click({ position: 'topLeft' });  
    })

    it('changes VP to iPhone XR' , () =>{
      //switches viewport to iPhone XR from default base url
        cy.viewport(414, 896)
          cy.get('.mobile-logo').should('be.visible').and('exist').click({ position: 'topLeft' });
    })

    it('changes VP to iPhone Xs Max' , () =>{
      //switches viewport to iPhone Xs Max from default base url
        cy.viewport(414, 896)
          cy.get('.mobile-logo').should('be.visible').and('exist').click({ position: 'topLeft' });
    })


    it('changes VP to iPhone 6', () => {   
    //switches viewport to iphone-6 from default base url
      cy.viewport('iphone-6')
          cy.get('.mobile-logo').should('be.visible').and('exist').click({ position: 'topLeft' });
        
    })

    it('changes VP to iPhone 6+', () => {   
      //switches viewport to iphone-6+ from default base url
      cy.viewport('iphone-6+')
          cy.get('.mobile-logo').should('be.visible').and('exist').click({ position: 'topLeft' });   
    })

    it('changes VP to iPhone 5', () => {   
      //switches viewport to iphone 5 from default base url
      cy.viewport('iphone-5')
          cy.get('.mobile-logo').should('be.visible').and('exist').click({ position: 'topLeft' });
    })
///////////////////////////////////////////////////End Of Apple Phones\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////Start of iPads\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    it('changes VP to iPad2 Portrait', () => {   
    //switches viewport to ipad 2 portrait from default base url
      cy.viewport('ipad-2')
          cy.get('.mobile-header').should('be.visible')
          cy.get('.mobile-logo > a > #headerLogo').should('be.visible').click({ position: 'topLeft' }); 
    })
    it('changes VP to iPad2 Landscape', () => {   
      //switches viewport to ipad 2 landscape from default base url
      cy.viewport('ipad-2' , 'landscape')
          cy.get('.mobile-header').should('be.visible')
          cy.get('.mobile-logo > a > #headerLogo').should('be.visible').click({ position: 'topLeft' }); 
    })
    it('changes VP to iPad Mini Portrait', () => {   
        //switches viewport to ipad 2 landscape from default base url
      cy.viewport('ipad-mini')
          cy.get('.mobile-header').should('be.visible')
          cy.get('.mobile-logo > a > #headerLogo').should('be.visible').click({ position: 'topLeft' }); 
    })  
    it('changes VP to iPad Mini Landscape', () => {   
        //switches viewport to iPad Mini landscape from default base url
      cy.viewport('ipad-mini' , 'landscape')
          cy.get('.mobile-header').should('be.visible')
          cy.get('.mobile-logo > a > #headerLogo').should('be.visible').click({ position: 'topLeft' }); 
    })
///////////////////////////////////////////////////End of Tablets\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////Start Of Apple Laptops\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    it('changes VP to macbook 15"', () =>{
      //switches viewport to macbook-15" from default base url
    cy.viewport('macbook-15')
          cy.get('.mobile-header').should('not.be.visible')
          cy.get('.login-details').should('be.visible')
          cy.get('.top-menu-uk .navBookViewing').should('be.visible').contains('Book')
          cy.get('.nav-1').should('be.visible').contains('Engagement Rings')
          cy.get('.nav-2').should('be.visible').contains('Wedding Rings')
          cy.get('.nav-3').should('be.visible').contains('Jewellery')
          cy.get('.nav-4').should('be.visible').contains('The experience')
          cy.get('.nav-5').should('be.visible').contains('Visit Us')
          cy.get('#headerLogo').should('be.visible').and('exist').click()
    })
    
    it('changes VP to macbook 13"', () =>{
      //switches viewport to macbook-13" from default base url
    cy.viewport('macbook-13')
          cy.get('.mobile-header').should('not.be.visible')
          cy.get('.top-menu-uk .navBookViewing').should('be.visible').contains('Book')
          cy.get('.nav-1').should('be.visible').contains('Engagement Rings')
          cy.get('.nav-2').should('be.visible').contains('Wedding Rings')
          cy.get('.nav-3').should('be.visible').contains('Jewellery')
          cy.get('.nav-4').should('be.visible').contains('The experience')
          cy.get('.nav-5').should('be.visible').contains('Visit Us')
          cy.get('#headerLogo').should('be.visible').and('exist').click()  
    })
///////////////////////////////////////////////////End Of Apple Laptops\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\    

})









// cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height

    // We added a cy.wait() between each viewport change so you can see
    // the change otherwise it is a little too fast to see :)
    /*
    cy.viewport('macbook-15')
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('macbook-11')
    cy.wait(200)
    
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('iphone-6')
    cy.wait(200)
    cy.viewport('iphone-5')
    cy.wait(200)
    cy.viewport('iphone-4')
    cy.wait(200)
    cy.viewport('iphone-3')
    cy.wait(200)

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport('ipad-2', 'portrait')
    cy.wait(200)
    cy.viewport('iphone-4', 'landscape')
    cy.wait(200)

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
    */