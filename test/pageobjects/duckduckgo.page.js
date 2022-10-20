const Page = require("./page");

class Duckduckgo extends Page {
  get searchTextBox() {
    return $("//input[@id='searchbox_input']");
  }

  get searchButton() {
    return $("//button[@aria-label='Search']");
  }

  get toptalWebsite() {
    return $("//span[normalize-space()='Toptal - Hire Freelance Talent from the Top 3%']");
  }

  open() {
    return super.open(`https://duckduckgo.com/`);
  }
}

module.exports = new Duckduckgo();
