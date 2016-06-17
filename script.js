$(document).ready(function() {

var dataRef = new Firebase("https://week7rcb.firebaseio.com/");
var trainList = dataRef.child('trainList');
var sessionRef = dataRef.child('trainTime')

	$('#submitbutton').on('click', function() {
		var name = $('#name').val();
		var destination = $('#destination').val();
		var time = $('#frequency').val();
		var frequency = $('#traintime').val();
		var minaway = $('#minaway').val();
		dataRef.push({
			name: name,
			destination: destination, 
			time: time,
			frequency: frequency,
			minaway: minaway
		});

		$('#name').val('');
		$('#destination').val('');
		$('#frequency').val('');
		$('#traintime').val('');
		$('#minaway').val('');
		return false;
	});


dataRef.on("child_added", function(snapshot) { 	
	var tableRow = $('<tr>');	
	var trainInfo = [snapshot.val().name, snapshot.val().destination, snapshot.val().time, snapshot.val().frequency, snapshot.val().minaway];
	console.log(trainInfo);
	for (var i = 0; i < trainInfo.length;i++){
		var tableData = $('<td>');
		tableData.html(trainInfo[i]);
		tableData.attr('id', i);
		tableRow.append(tableData)
	}
	$('#trainInfo > tBody:last-child').append(tableRow);
	return false;

// Handle the errors
})
});