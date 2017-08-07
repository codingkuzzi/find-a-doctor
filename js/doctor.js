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
