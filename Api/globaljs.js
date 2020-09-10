/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//   init()

//   function init()
//   {
//       var url= "https://api.covid19api.com/summary"

//       var data = ''

//       $.get(url, function(data)
//       {
//         //   var aa=data
//         //   var country_name=aa.filter(namee => (namee.CountryCode === "AF"))
//        //   console.log(data.Countries[0].Country);

//           for(i in data.Countries)
//           {

//           data = `
//           <td>${i + 1}</td>
//           <td>${data.Countries[i].Country}</td>
//           <td>${data.Countries[i].NewConfirmed}</td>
//           <td>${data.Countries[i].NewDeaths}</td>
//           <td>${data.Countries[i].NewRecovered}</td>
//           <td>${data.Countries[i].TotalConfirmed}</td>
//           <td>${data.Countries[i].TotalDeaths}</td>
//           <td>${data.Countries[i].TotalRecovered}</td>
//           `
//           $("#data").html(data)
//         }
//       })
//     }
// function refreshData()
// {
//    clearData();
//    init();
// }
// function clearData()
// {
//    $("#data").empty();
// }

init();
let countries = [];
function init() {
  var url = "https://api.covid19api.com/summary";

  $.get(url, function (data) {
    //   //   var aa=data
    //   //   var country_name=aa.filter(namee => (namee.CountryCode === "AF"))
    //  console.log(data.Countries);
    //  for (let i = 0; i < data.Countries.length; i++) {
    //    console.log(data.Countries[i]);
    //  }

    //      var newConfirmed=[];
    //      var country=[];
    for (i in data.Countries) {
      var country_data = `
           <tr class="countri">
           <td>${parseInt(i) + 1}</td>
           <td>${data.Countries[i].Country}</td>
           <td>${data.Countries[i].NewConfirmed}</td>
           <td>${data.Countries[i].NewDeaths}</td>
           <td>${data.Countries[i].NewRecovered}</td>
           <td>${data.Countries[i].TotalConfirmed}</td>
           <td>${data.Countries[i].TotalDeaths}</td>
           <td>${data.Countries[i].TotalRecovered}</td>
           </tr>
          `;
      // console.log(country_data)
      document.getElementById("data").innerHTML += country_data;
    }
  });
}

function functionCountries() {
  var url = "https://api.covid19api.com/summary";
  var mn = [];

  mn = $.get(url, function (data) {
    //   //   var aa=data
    //   //   var country_name=aa.filter(namee => (namee.CountryCode === "AF"))
    //  console.log(data.Countries);
    //  for (let i = 0; i < data.Countries.length; i++) {
    //    console.log(data.Countries[i]);
    //  }

    //      var newConfirmed=[];
    //      var country=[];
    var country_data = [];
    countries = data.Countries;
    for (i in data.Countries) {
      country_data[i] = data.Countries[i].Country;
      //  <tr class="countri">
      //  <td>${parseInt(i)+1}</td>
      //  <td>${data.Countries[i].Country}</td>
      //  <td>${data.Countries[i].NewConfirmed}</td>
      //  <td>${data.Countries[i].NewDeaths}</td>
      //  <td>${data.Countries[i].NewRecovered}</td>
      //  <td>${data.Countries[i].TotalConfirmed}</td>
      //  <td>${data.Countries[i].TotalDeaths}</td>
      //  <td>${data.Countries[i].TotalRecovered}</td>
      //  </tr>
      // ;
      // console.log(country_data)
      // document.getElementById("data").innerHTML+=country_data;
    }
    return country_data;
  });
  return mn;
}

// getting input
$("#myInput").on("keyup", function () {
  var value = $(this).val();
  // as you will type you will get your values printed
  // console.log(value)

  var ule = document.getElementById("data");
  // console.log(ule)
  // var liele = functionCountries();
  // console.log(liele)
  var data_get = searchTable(value);
  buildTable(data_get);
});
// console.log(country_data)
var uleq = document.getElementById("data");
// console.log(ule)
var lieleq = uleq.getElementsByClassName("countri");
// console.log(lieleq)
buildTable(lieleq);

// takes value of the input field
function searchTable(value) {
  // console.log(data_get);
  var filteredData = [];
  console.log(data);
  for (var i = 0; i < data.Countries.length; i++) {
    //   var abx;
    // abx=functionCountries();
    console.log(data.Countries[i].Country);
    value = value.toLowerCase();
    var name = data.Countries[i].Country.toLowerCase();
    console.log(name.substring(0, value.length - 1));
    // if (name.substring(0, value.length - 1)) {
    //   filteredData.push(data_get[i]);
    // }
  }
  console.log(filteredData);
  return filteredData;
}

function buildTable(data_get) {
  // var table= document.getElementById()
  for (var i = 0; i < data_get.length; i++) {
    var country_data = `
    <tr class="countri">
    <td>${parseInt(i) + 1}</td>
    <td>${data.Countries[i].Country}</td>
    <td>${data.Countries[i].NewConfirmed}</td>
    <td>${data.Countries[i].NewDeaths}</td>
    <td>${data.Countries[i].NewRecovered}</td>
    <td>${data.Countries[i].TotalConfirmed}</td>
    <td>${data.Countries[i].TotalDeaths}</td>
    <td>${data.Countries[i].TotalRecovered}</td>
    </tr>
   `;
    // console.log(country_data)
    document.getElementById("data").innerHTML += country_data;
  }
}

// search country
// function searchFunction() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue, me;

//   filter = input.value.toLowerCase();
//   ul = document.getElementById("data");
//   // console.log(ul)
//   li = ul.getElementsByClassName("countri");
//   // // me=$("li:nth-child(n)")
//   // console.log(li)
//   returnData(li)
//   }
// function returnData(array)
// {

// }

// scrolltop button
//Get the button
var mybutton = document.getElementById("myBtnd");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
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

// function refreshData()
// {
//     clearData();
//     init();
// }
// function clearData()
// {
//     $("#data").empty();
// }
