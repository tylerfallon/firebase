$(document).ready(function() {

var dataRef = new Firebase("https://week7rcb.firebaseio.com/");
var trainList = dataRef.child('trainList');
var sessionRef = dataRef.child('trainTime')

	$('#submitbutton').on('click', function() {
		var name = $('#name').val();
		var destination = $('#destination').val();
		var time = $('#frequency').val();
		var frequency = $('#traintime').val();
		dataRef.push({
			name: name,
			destination: destination, 
			time: time,
			frequency: frequency
		});

		$('#name').val('');
		$('#destination').val('');
		$('#frequency').val('');
		$('#traintime').val('');
		return false;
	});


dataRef.on("child_added", function(snapshot) {


	// Create a new Table row. outside of the for loop 	
	var tableRow = $('<tr>');	

	// add all train information to an array for easy use 
	var trainInfo = [snapshot.val().name, snapshot.val().destination, snapshot.val().time, snapshot.val().frequency];
	console.log(trainInfo);

	//create a for loop to easily create a new table data with  the HTMl from the inputed value 
	for(var i = 0; i < trainInfo.length;i++){
		// create a new td
		var tableData = $('<td>');

		// add the information from the array to the HTMl of this td
		tableData.html(trainInfo[i]);

		// give it an attribute for save measure 
		tableData.attr('id', i);
		// append current td to table row 
		tableRow.append(tableData)
	}
	// append the new row to the last child of the table body
	$('#trainInfo > tBody:last-child').append(tableRow);
	// return false to prevent constant returning
	return false;

// Handle the errors
})
});