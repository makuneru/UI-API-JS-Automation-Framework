const Page = require("./page");
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Duckduckgo extends Page {
  get searchTextBox() {
    return $('//input[@name="q"]');
  }

  get searchButton() {
    return $('//button[@aria-label="Search"]');
  }

  get duckduckgoWebsite() {
    return $('//span[normalize-space()="https://www.toptal.com"]');
  }
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open() {
    return super.open(`https://duckduckgo.com/`);
  }
}

module.exports = new Duckduckgo();
