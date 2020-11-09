const HomePage = require('../pageobjects/HomePage.page');
describe('a-million-more', () => {

    // // Boundary Value Analysis of currently rendered homepage
        
    // it('Validate the presence of car Menu and click', () => {
    
    //    expect( HomePage.carMenu).toBeVisible
    //    HomePage.carMenu.click()
    //    browser.saveFullPageScreen('carMenu', {});
    //    diff=browser.checkFullPageScreen('carMenu', {})
    //    expect(diff).toEqual(0)
    //    browser.saveElement(HomePage.imageXC90,'imageXC90')
    //    browser.checkElement(HomePage.imageXC90,'imageXC90')

    
    //  })

    //  // Equivalance partioning  - Rendering of the CarMenu page tested by sub element image validations

    //  it('Validate XC90 image', () => {
    
    //     expect( HomePage.carMenu).toBeVisible
    //     HomePage.carMenu.click()
    //     browser.saveElement(HomePage.imageXC90,'imageXC90')
    //     browser.checkElement(HomePage.imageXC90,'imageXC90')
 
     
    //   })

    //   // Functional Tests - clickability of Main Menu
    // it('Validate clickability of Main Menu', () => {
    //    expect( HomePage.mainMenu).toBeVisible
    //     HomePage.mainMenu.waitForDisplayed()
    //     HomePage.mainMenu.click()
    //     browser.saveFullPageScreen('mainMenu', {});
    //     diff=browser.checkFullPageScreen('mainMenu', {})
    //     expect(diff).toEqual(0)
        
         
    //  })
    // Non Functional Tests - web content validation
    it('Validate the presense of Main Menu and click', () => {
       // expect( HomePage.pageVisibleTitle).toBeVisible
       //  HomePage.pageVisibleTitle.waitForDisplayed()
         console.log('..display..')
         console.log(HomePage.pageVisibleTitle.getText())
         
         
          
      })
 

 })