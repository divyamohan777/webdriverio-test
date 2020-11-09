/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
   get acceptCookies (){
    browser.getCookies()
    const acceptCookies = $('/html/body/div[1]/div[2]/div[4]/div[2]/div/button')
    acceptCookies.click()
    }
    open (path) {
         browser.url(`intl/v/car-safety/${path}`)


    }
  
}
