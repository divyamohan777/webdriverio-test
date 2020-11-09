const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get carMenu() {return  $('/html/body/div[3]/div/div/div[3]/nav/div[2]/button')}
    get mainMenu() {return $('div.w:nth-child(4) > button:nth-child(2)')}
    get imageXC90 () {return $('#site-nav-cars-menu-section-panel-1 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(2) > picture:nth-child(1) > img:nth-child(1)')}
    get pageVisibleTitle (){return  $('/html/body/div[3]/div/div/main/div[1]/section/h1')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('a-million-more');
    }
}

module.exports = new HomePage();
