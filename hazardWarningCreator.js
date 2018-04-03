function hazardWarningCreator(typeOfWarning) {
	let warningCounter = 0;
	return function(location) {
		warningCounter++;
		let time = warningCounter === 1 ? 'time' : 'times';
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`)
	}
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const hurricaneWarning = hazardWarningCreator('Hurricane');
const tornadoWarning = hazardWarningCreator('Cat 5 Tornado');

rocksWarning('Arizona');
rocksWarning('Colorado');
rocksWarning('Wyoming');

hurricaneWarning('Florida');
hurricaneWarning('Louisiana');

tornadoWarning('Kansas');