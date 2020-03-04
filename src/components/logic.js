/**
 *
 * Calculator data object contains:
 *   hist:String      the expression to evaluate
 *   input:String     the next number to be added to the expression
 *   result:String    the outcome of an evaluated expression
 *
 * Updates the data object as necessary after each button click.
 * Accepts a button name and a data object, return an updated
 * calculator data object.
*/

export default function calculate(obj, buttonName) {
	if(buttonName === "AC"){
		return {
			result: "",
			hist: "",
			input: "",
		};
	}
	
	if(buttonName === "=" && obj.hist) {
		//add the last entered number saved in 'input'
		const exp = obj.hist + obj.input;
		//get the last character of the history
		const last = exp.charAt(exp.length - 1);
		//check if history exists and does not end with an operator, then evaluate result
		if(!(last === "+" || last === "-")) {
			const cal = eval(exp);
			return {
				result: cal,
				hist: "",
				input: cal,
			};
		}
		else {
			return {};
		}
	}
	
	if(buttonName === ".") {
		//if any digits have been entered
		if(obj.input){
			//if '.' is already there in the number, ignore the second
			if(obj.input.includes(".")) {
				return {};
			}
			return { input: obj.input + buttonName }
		}
		//if no digit has been entered
		return { input: "0" + buttonName}
	}
	
	//if a digit is entered, it will append to the exisiting number
	if(!isNaN(buttonName)) {
		return {
			input: obj.input + buttonName
		};
	}
	
	if(buttonName === "+" || buttonName === "-") {
		if(obj.hist){
			//add the last entered number to the history
			const exp = obj.hist + obj.input;
			//if same operator has been clicked twice, it will be ignored
			if(exp.charAt(exp.length - 1) === buttonName) {
				return { 
				};
			}
			else{
				return {
					hist: exp + buttonName,
					input: "",
				}
			}
		}
		else {
			return {
				result: "", //display 0 after '+' or '-', when the result is added to calculate again
				hist: obj.input + buttonName,
				input: "",
			};			
		}
	}
}

