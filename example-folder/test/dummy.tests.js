var expect = require('chai').expect;

describe('Checking booleans', function() {
		it('should equal true to true', function() {
			const theTruth = true;
			expect(theTruth).to.equal(true);
		});

	it('should equal true to false', function() {
		const falseyValue = false;
		expect(falseyValue).to.equal(true);
	});
});


describe('Checking sums', () => {
	it('should match 3 and 3', () => {
		expect(3+3).to.equal(6);
	});

	it('should fail based on bad math', () => {
		expect(9+3).to.equal(6);
	});

	it.skip('should be skipped', () => {
		expect(9+3).to.equal(6);
	});
});
