$(document).ready(function() {
  $("#formIn").submit(function(event) {
    var companyInput1 = $("#company1").val();
    var interestsInput = $("#interests").val();
    // var nameInput = $("#name").val();
    // var system = $("#whichOperatingSystem").val();
    var importantInput1 = $("#important1").val();
    var styleInput = parseInt($("input:radio[name=style]:checked").val());



  if (companyInput1 === "1" && interestsInput === "3" && styleInput) {
      $("#ruby").show();
      // $("#formInputs").hide();
    } else if (companyInput1 === "2" && interestsInput === "1" && styleInput  || interestsInput === "1" && styleInput === "1") {
      $("#csharp").show();
      // $("#formInputs").hide();
    } else if (companyInput1 === "2" && interestsInput === "4" && styleInput || importantInput1 === "1" && styleInput === "1" || interestsInput === "4" && styleInput === "1") {
      $("#java").show();
      // $("#formInputs").hide();
    } else if (interestsInput === "1" && companyInput1 === "4" || companyInput1 === "4" && importantInput1 === "3") {
      $("#design").show();
      // $("#formInputs").hide();
    } else {
      $("#error").show();
      // $("#formInputs").hide();
    }
      event.preventDefault();
    });
  });
