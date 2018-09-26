
import {calculatePrice} from '../src/index.js' 

describe('price calculator', function(){
	
	it('should calc price right', function(){
		const userType = 0;
		const productType = 0;
		const price = 1;
		const publishedDate = new Date();

		const expected = 16;
		const actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});


	it('should return 1 if productType dose not exist', function(){
		const userType = 0;
		const productType = 2;
		const price = 1;
		const publishedDate = new Date();

		const expected = 1;
		const actual = calculatePrice(userType, productType, price, publishedDate);

		expect(expected).to.equal(actual);
	});

	it('should return 0 if no parameters are passed', function(){

		const expected = 0;
		const actual = calculatePrice();

		expect(expected).to.equal(actual);
	});

});