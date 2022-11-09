const scraperObject = {
	url: 'https://www.amazon.com/s?srs=5286335011',
	async scraper(browser){
		let page = await browser.newPage();
		await page.goto(this.url);
        await page.waitForSelector('div.s-title-instructions-style');

        
        let TestData = await page.$$eval("[data-csa-c-type='item']", (product) => {

            let image = product.map(el => el.querySelector("div.s-card-container > div > div.s-product-image-container > span > a > div > img").src);
            let name = product.map(el => el.querySelector("div.s-card-container > div > div.s-product-image-container > span > a > div > img").alt);

            // let price = product.map(el => el.querySelector("div.s-card-container > div > div.a-section > div.s-price-instructions-style > ")?.innerHTML);

            return {
                image: image,
                name: name
                // price: price
            };
        })

        console.log(TestData)
        
        const products = await page.$$eval("div.s-title-instructions-style", product => {
            product = product.map(el => el.querySelector("h2 > a > span").innerHTML);
            return product;
        })
        

        for (let index = 0; index < products.length; index++) {
            const product = products[index];
            //  Store data in the table 
        }

        return products;
	}
}

module.exports = scraperObject;