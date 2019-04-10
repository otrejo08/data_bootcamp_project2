// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [25.9548, -80.2366],
  name: "Sun Life Stadium",
  date: "June 25th 2014",
  attendance: "49,980",
  sales: "$5,450,026",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-06-25%20until%3A2014-06-26&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/63jXKgBiHv/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [39.091832966, -84.503997984],
  name: "Great American Ball Park",
  date: "June 28th 2014",
  attendance: "37,863",
  sales: "$4,250,931",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-06-28%20until%3A2014-06-29&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/p4ZMsZhJlJ/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [42.087832982, -71.258665632],
  name: "Gillette Stadium",
  date: "July 1st 2014",
  attendance: "52,802",
  sales: "$5,738,114",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-01%20until%3A2014-07-02&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/p8ujq8zZqL/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [39.903496386, -75.159832694],
  name: "Citizens Bank Park",
  date: "July 5th 2014",
  attendance: "40,634",
  sales: "$5,141,381",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-05%20until%3A2014-07-06&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qHWZe4y3Mu/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [39.273498906, -76.620330852],
  name: "M&T Bank Stadium",
  date: "July 7th 2014",
  attendance: "51,212",
  sales: "$5,016,036",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-07%20until%3A2014-06-08&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qO27HwLDES/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [43.638164114, -79.386831786],
  name: "Rogers Centre",
  date: "July 9th 2014",
  attendance: "48,029",
  sales: "$4,943,390",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-09%20until%3A2014-07-10&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qUUHJ5Bx-Q/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [43.638164114, -79.386831786],
  name: "MetLife Stadium",
  date: "July 11th & 12th 2014",
  attendance: "89,165",
  sales: "$11,544,187",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-11%20until%3A2014-07-13&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qWo5qERU6O/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [33.754496982, -84.400498398],
  name: "Georgia Dome",
  date: "July 15th 2014",
  attendance: "48,938",
  sales: "$5,210,602",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-15%20until%3A2014-07-16&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qkBkG9A9vf/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [29.75416365, -95.35333192],
  name: "Minute Maid Park",
  date: "July 18th 2014",
  attendance: "40,103",
  sales: "$5,235,438",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-18%20until%3A2014-07-19&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qpUXeIDARX/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [29.950496198, -90.075333032],
  name: "Mercedes-Benz Superdome",
  date: "July 20th 2014",
  attendance: "42,374",
  sales: "$4,943,390",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-20%20until%3A2014-07-21&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/q0euTDoZJs/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [32.741997032, -97.088999644],
  name: "AT&T Stadium",
  date: "July 22nd 2014",
  attendance: "41,463",
  sales: "$5,050,479",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-22%20until%3A2014-07-23&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/shr-7pqEBj/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [41.85749657, -87.6166642],
  name: "Soldier Field",
  date: "July 24th 2014",
  attendance: "42,374",
  sales: "$4,943,390",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-24%20until%3A2014-07-25src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/shr-7pqEBj/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [49.804663448, -97.13916611],
  name: "Investors Group Field",
  date: "July 27th 2014",
  attendance: "29,542",
  sales: "$3,187,580",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-27%20until%3A2014-07-28&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/rATElkJshQ/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [47.588164314, -122.326165362],
  name: "Safeco Field",
  date: "July 30th 2014",
  attendance: "40,615",
  sales: "$4,339,642",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-30%20until%3A2014-07-31&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/BokZsIKl65k/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [34.156832706, -118.167165998],
  name: "Rose Bowl",
  date: "August 2nd & 3rd 2014",
  attendance: "96,994",
  sales: "$10,993,245",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-08-02%20until%3A2014-08-03&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/rRGfG-pp_j/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [37.773663572, -122.386998452],
  name: "AT&T Park",
  date: "August 5th 2014",
  attendance: "73,020",
  sales: "$8,887,539",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-08-05%20until%3A2014-08-06&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/riZkz-mFeH/' target='_blank'>WATCH THE SHOW!</a>"
},
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Date: " + city.date +"</h3> <h3>Attendance: " + city.attendance +"</h3> <h3>Sales: " + city.sales +"</h3> <h3>" + city.Twitter + "</h3> <h3>" + city.website + "</h3>")
    .addTo(myMap);

}
