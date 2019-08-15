let calculator = function(data) {
	let result = data || 0;
	
	var add =  function(number) {
		result = result + number;
		return this;
	}
	
	var subtract = function(number) {
		result = result - number;
		return this;
	}
	var print = function() {
		return result;
	}
	
	var mult = function (number) {
		result = result*number;
		return this;
	}
	
	return {
		add: add,
		subtract: subtract,
		print: print,
		mult: mult
	}
}

var calc =  new calculator(10)
console.log(calc.add(10).subtract(5).mult(4).print())