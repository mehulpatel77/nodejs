const scraperObject = {
	url: 'https://www.amazon.com/s?srs=5286335011',
	async scraper(browser){
		let page = await browser.newPage();
		await page.goto(this.url);
        await page.waitForSelector('div.s-title-instructions-style');
        const products = await page.$$eval("div.s-title-instructions-style", product => {
            product = product.map(el => el.querySelector("h2 > a > span").innerHTML);
            return product;
        })
        console.log(products)
		

        for (let index = 0; index < products.length; index++) {
            const product = products[index];
            //  Store data in the table 
        }

        return products;
	}
}

module.exports = scraperObject;