var Doctor = require('../js/doctor.js');

var showDoctorsCount = function(count) {
   $('.count').text("We have found " + count + " doctors for you." );
 };

var showDoctors = function(doctorFirstName, doctorLastName) {
    $('.results').append('<li>' + doctorFirstName + " " + doctorLastName + '</li>');
  };

$(document).ready(function() {
  $('#issue-form').click(function() {
     var medicalIssue = $('#issue').val();
     console.log(medicalIssue);
     var doctor = new Doctor();
     doctor.getCount(medicalIssue, showDoctorsCount);
     doctor.getDoctors(medicalIssue, showDoctors);
  });

});
