(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "2f45d0f796eb16820f9f6d0d1f955254"
},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor(){
}

// Doctor.prototype.getCount = function(medicalIssue, showCount) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//   // $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=head&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//    .then(function(result) {
//       console.log(result);
//       showCount(result.meta.count);
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };


Doctor.prototype.getDoctors = function(medicalIssue, showData) {
    var params = {
        query: medicalIssue,
        location: "45.5231,-122.6765, 20",
        user_location: "45.5231,-122.6765",
        skip: 0,
        limit: 20,
        user_key: apiKey
    }

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?'+ $.param(params))

   .then(function(result) {
      console.log(result);
      //for(var i = 0; i < result.meta.count; i++) {
      //showDoctors(result.data[i].profile.first_name, result.data[i].profile.last_name);}
       showData(result.meta.count, result.meta.total, result.data);
    })
   .fail(function(error){
      console.log("fail");
    });
};

module.exports = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"../js/doctor.js":2}]},{},[3]);
