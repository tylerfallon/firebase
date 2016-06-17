$(document).ready(function() {

var dataRef = new Firebase("https://week7rcb.firebaseio.com/");
var trainList = dataRef.child('trainList');
var sessionRef = dataRef.child('trainTime')

	$('#submitbutton').on('click', function() {
		var name = $('#name').val();
		var destination = $('#role').val();
		var time = $('#startdate').val();
		var frequency = $('#monthlyrate').val();
		dataRef.push({
			name: name,
			destination: destination, 
			time: time,
			frequency: frequency
		});

		$('#name').val('');
		$('#role').val('');
		$('#startdate').val('');
		$('#monthlyrate').val('');
		return false;
	});


dataRef.on('child_added', function(snapshot) {

var tableRow = $('<tr>');
var trainInfo = [snapshot.val().name, snapshot.val().destination, snapshot.val().time, snapshot.val().frequency];

})
for (var i=0; i<dataRef.length; i++) {
	var tableData = $('<td>');
	tableData.html(trainInfo[i]);
	tableData.attr('id', i);
	tableRow.append(tableData)

$('#trainInfo > tBody:last-child').append(tableRow);
return false;

}
});