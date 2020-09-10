// window.onload(alert("Click on the Confirmed/Recovered/Deaths buttons above to see the chart individually"))
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
    $.getJSON("https://api.covid19india.org/data.json", function(data)
    {
        var states=[];
        var confirmed=[];
        var recovered=[];
        var deaths=[];

        var total_confirmed;
        var total_active;
        var total_recovered;
        var total_deaths;

        total_confirmed=data.statewise[0].confirmed;
        total_active=data.statewise[0].active;
        total_recovered=data.statewise[0].recovered;
        total_deaths=data.statewise[0].deaths;

        // adding the fetched values in html
        $("#confirmed").append(total_confirmed);
        $("#active").append(total_active);
        $("#recovered").append(total_recovered);
        $("#deaths").append(total_deaths);

        // console.log(data.statewise);
        
        // accessing each data
        $.each(data.statewise, function(id, obj)
        {
            // statewise aaray contains id's and objects
            // states local array type variable
                // obj.state will take the name of the state and add it to array
            states.push(obj.state);
            confirmed.push(obj.confirmed);
            recovered.push(obj.recovered);
            deaths.push(obj.deaths);
        });

        //  console.log(states);

        // Since first element is total and we have to remove that
        // shift ftn to remove first ele

        states.shift();
        confirmed.shift();
        recovered.shift();
        deaths.shift();      
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
// var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("myBtnd").style.display = "block";
  } else {
    document.getElementById("myBtnd").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
