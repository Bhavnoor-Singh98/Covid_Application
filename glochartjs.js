/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }





  $(document).ready(function(){
    // getting json data from api
    $.get("https://api.covid19api.com/summary", function(data)
    {
        var states=[];
        var confirmed=[];
        var recovered=[];
        var deaths=[];

        var total_confirmed;
        var total_active;
        var total_recovered;
        var total_deaths;

        total_confirmed=data.Countries[0].Country;
        total_active=data.Countries[0].TotalConfirmed;
        total_recovered=data.Countries[0].recovered;
        total_deaths=data.Countries[0].deaths;

        // adding the fetched values in html
        // $("#confirmed").append(total_confirmed);
        // $("#active").append(total_active);
        // $("#recovered").append(total_recovered);
        // $("#deaths").append(total_deaths);

        // console.log(data.statewise);

        // accessing each data
        $.each(data.Countries, function(id, obj)
        {
            // statewise aaray contains id's and objects
            // states local array type variable
                // obj.state will take the name of the state and add it to array
            if(obj.CountryCode=="US" || obj.CountryCode=="BR" || obj.CountryCode=="IN" || obj.CountryCode=="RU" || obj.CountryCode=="PE" || obj.CountryCode=="ZA" || obj.CountryCode=="CO" || obj.CountryCode=="MX" || obj.CountryCode=="ES" || obj.CountryCode=="CL" || obj.CountryCode=="IR" || obj.CountryCode=="GB" || obj.CountryCode=="SA" || obj.CountryCode=="BD" || obj.CountryCode=="PK" || obj.CountryCode=="FR" || obj.CountryCode=="TR" || obj.CountryCode=="IT" || obj.CountryCode=="CA" || obj.CountryCode=="DE" || obj.CountryCode=="IQ" || obj.CountryCode=="PH" || obj.CountryCode=="ID" || obj.CountryCode=="AR" || obj.CountryCode=="AU")
            {
            states.push(obj.Country);
            confirmed.push(obj.TotalConfirmed);
            recovered.push(obj.TotalRecovered);
            deaths.push(obj.TotalDeaths);
            }    
            
        });

        //  console.log(states);

        // Since first element is total and we have to remove that
        // shift ftn to remove first ele

        // states.shift();
        // confirmed.shift();
        // recovered.shift();
        // deaths.shift();      
        // console.log(states);
        
        
        // chart js
        var myChart=document.getElementById("myChartjs").getContext('2d');

        // passing data to amke chart

        // Chart() = constructor
        var chart = new Chart(myChart, {
            type:"bar",
            data: {
                // states in variable containing all the names of states
                labels: states,
                datasets:[
                    // three objects
                    {
                        label: "confirmed",
                        data: confirmed,
                        backgroundColor: "#fbc531", 
                    },
                    {
                        label: "recovered",
                        data: recovered,
                        backgroundColor: "#2ecc71",
                    },
                    {
                        label: "deceased",
                        data: deaths,
                        backgroundColor: "#eb2f06",
                        // minBarLength: 10,
                    }
                ]
            },
            options:{
                layout:{
                    padding:{
                         left:10,
                         right:10,
                         bottom:0,
                         top:0
                    }
                }
            } 
        })
    });
});


    


 // scrolltop button
//Get the button
// var mybutton = document.getElementById("myBtnd");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("myBtnd").style.display = 'block';
  } else {
    document.getElementById("myBtnd").style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}  