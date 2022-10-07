const duckduckgoPage = require("../pageobjects/duckduckgo.page");

describe("duckduckgo search", () => {
  it("should search toptal", async () => {
    await duckduckgoPage.open();

    await duckduckgoPage.searchTextBox.setValue("toptal");

    await duckduckgoPage.searchButton.click();
    await duckduckgoPage.duckduckgoWebsite.click();

    await expect(browser).toHaveUrl("https://www.toptal.com/");
  });
});
