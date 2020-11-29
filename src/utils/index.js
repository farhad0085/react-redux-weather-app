export function createUUID() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (c) {
			var r = (Math.random() * 16) | 0,
				v = c === "x" ? r : r && 0x3 | 0x8;
			return v.toString(16);
		}
	);
}

export function getPreviousRecentLocations() {

	let recentLocations = JSON.parse(localStorage.getItem("recentLocations"));
	if (!recentLocations) {
		return [];
	}
	// const upperCaseLocations = [];
	// recentLocations.map((location) =>
	// 	upperCaseLocations.push(capitalizeFirstWord(location))
	// );
    // console.log("Upper case locations", upperCaseLocations);
	// return upperCaseLocations;
	return recentLocations;
}

export function addRecentLocation(location) {
	// make the location string lowercase
	// location = location.toLowerCase();

	const recentLocations = getPreviousRecentLocations();

    // let exist = recentLocations.includes(capitalizeFirstWord(location))
    let exist = recentLocations.includes(location)
    
	if (!exist) {
		recentLocations.push(location);
		localStorage.setItem(
			"recentLocations",
			JSON.stringify(recentLocations)
		);
	}
}


// function capitalizeFirstWord(mySentence) {
//     const words = mySentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }
//     return words.join(" ");
// }