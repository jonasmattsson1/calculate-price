
import {calculatePrice} from '../src/index.js' 

describe('price-calculator', function(){

	it('should calculate right for: normal user, new product and today', function(){
		const userType = 0;
		const productType = 0;
		const price = 1;
		const publishedDate = new Date();

		const expected = 16;
		const actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});


	it('should calculate right for: normal user, old product and today', function(){
		const userType = 0;
		const productType = 1;
		const price = 1;
		const publishedDate = new Date();

		const expected = 36;
		const actual = calculatePrice(userType, productType, price, publishedDate);

		expect(expected).to.equal(actual);
	});

	it('should calculate right for: normal user, new product and old date', function(){
		const userType = 0;
		const productType = 0;
		const price = 1;
		const publishedDate = new Date('2019-01-01');

		const expected = 26;
		const actual = calculatePrice(userType, productType, price, publishedDate);

		expect(expected).to.equal(actual);
	});

	it('should calculate right for: company, new product and today', function(){
		const userType = 1;
		const productType = 0;
		const price = 1;
		const publishedDate = new Date();

		const expected = 11;
		const actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});


	it('should calculate right for: company, old product and today', function(){
		const userType = 1;
		const productType = 1;
		const price = 1;
		const publishedDate = new Date();

		const expected = 31;
		const actual = calculatePrice(userType, productType, price, publishedDate);

		expect(expected).to.equal(actual);
	});

	it('should calculate right for: company, new product and old date', function(){
		const userType = 1;
		const productType = 0;
		const price = 1;
		const publishedDate = new Date('2019-01-01');

		const expected = 21;
		const actual = calculatePrice(userType, productType, price, publishedDate);

		expect(expected).to.equal(actual);
	})

	it('should threat a empty publishedDate as old date', function(){
		const userType = 0;
		const productType = 0;
		const price = 1;
		const publishedDate = undefined;

		const expected = 26;
		const actual = calculatePrice(userType, productType, price, publishedDate);

		expect(expected).to.equal(actual);
	})
});