var apiKey = require('./../.env').apiKey;

exports.getDoctors = function() {
  //$.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=rash&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)

   .then(function(result) {
      console.log(result);
      passedUIFunction(result.meta.item_type);
    })
   .fail(function(error){
      console.log("fail");
    });
};


https://api.betterdoctor.com/2016-03-01/doctors?query=rash&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=2f45d0f796eb16820f9f6d0d1f955254
