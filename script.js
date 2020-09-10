/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

init()

function init()
{
    var url= "https://api.covid19api.com/summary"

    var data = ''

    $.get(url, function(data)
    {
      //   var aa=data
      //   var country_name=aa.filter(namee => (namee.CountryCode === "AF"))
        //  console.log(data.Countries[0].Country);
        data = `
         <td>${data.Global.NewConfirmed}</td>
         <td>${data.Global.NewDeaths}</td>
         <td>${data.Global.NewRecovered}</td>
         <td>${data.Global.TotalConfirmed}</td>
         <td>${data.Global.TotalDeaths}</td>
         <td>${data.Global.TotalRecovered}</td>
         `
      $("#data").html(data)
         
    })
}
function refreshData()
{
    clearData();
    init();
}
function clearData()
{
    $("#data").empty();
}

 // scrolltop button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}