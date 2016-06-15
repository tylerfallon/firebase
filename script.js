$(document).ready(function() {
$('#submitbutton').on('click', function() {
	var dataRef = new Firebase("https://week7rcb.firebaseio.com/");
	var employeename = $('#name').val();
	var role = $('#role').val();
	var startdate = $('#startdate').val();
	var monthlyrate = $('#monthlyrate').val();
	dataRef.push({
		employeename: name,
		role: role, 
		startdate: startdate,
		monthlyrate: monthlyrate
	})
	return false;
});
});