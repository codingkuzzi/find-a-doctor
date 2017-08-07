var Doctor = require('../js/doctor.js');

//var showDoctorsCount = function(count) {
//   $('.count').text("We have found " + count + " doctors for you." );
// };

//var showDoctors = function(doctorFirstName, doctorLastName) {
//    $('.results').append('<li>' + doctorFirstName + " " + doctorLastName + '</li>');
//  };

var showDoctors2 = function (count, total, data) {
    if (count < total) {
        $('.count').text("We have found " + total + " doctors for you, " + count + " of them are shown below.");
    }
    else {
        $('.count').text("We have found " + total + " doctors for you.");
    }
    $('.results').empty();
    data.forEach(function(element){
        $('.results').append('<li>' + element.profile.first_name + " " + element.profile.last_name + '</li>');
    });

};

$(document).ready(function() {
  $('#issue-form').click(function() {
     var medicalIssue = $('#issue').val();
     console.log(medicalIssue);
     var doctor = new Doctor();
     //doctor.getCount(medicalIssue, showDoctorsCount);
     doctor.getDoctors(medicalIssue, showDoctors2);
  });

});
