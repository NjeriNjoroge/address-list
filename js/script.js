function Contact(first,last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

//user interface logic
$(document).ready(function() {
  var to_be_run_on_server_response = function(weather_data){
  $('#container').append(weather_data.main.temp)
}

$.get('https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=9ac3780c32b060cc9ed0e6440da51dce').success(to_be_run_on_server_response)
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

    })
  });
});
