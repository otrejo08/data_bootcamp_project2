// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4
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
  location: [25.773496906, -80.218499126],
  name: "Marlins Park",
  date: "April 27th 2016",
  attendance: "36,656",
  sales: "$5,252,615",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-04-27%20until%3A2016-04-28&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/BE-CH8KL8Bu/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [27.972162778, -82.501997992],
  name: "Raymond James Stadium",
  date: "April 29th 2016",
  attendance: "40,818",
  sales: "$4,803,295",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-04-29%20until%3A2016-04-30&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/BE1ezUxyy-j/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [33.754496982, -84.400498398],
  name: "Georgia Dome",
  date: "May 1st 2016",
  attendance: "46,321",
  sales: "$5,801,725",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-01%20until%3A2014-07-02&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/p8ujq8zZqL/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [35.800496798, -78.71833046],
  name: "Carter–Finley Stadium",
  date: "May 3rd 2016",
  attendance: "38,292",
  sales: "$4,810,620",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-05%20until%3A2014-07-06&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qHWZe4y3Mu/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [29.68416393, -95.406498374],
  name: "NRG Stadium",
  date: "May 7th 2016",
  attendance: "43,871",
  sales: "$6,412,280",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-07%20until%3A2014-06-08&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qO27HwLDES/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [32.741997032, -97.088999644],
  name: "AT&T Stadium",
  date: "May 9th 2016",
  attendance: "48,029",
  sales: "$4,943,390",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-09%20until%3A2014-07-10&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qUUHJ5Bx-Q/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [32.776496894, -117.11833286],
  name: "Qualcomm Stadium",
  date: "May 12th 2016",
  attendance: "45,885",
  sales: "$6,028,115",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-11%20until%3A2014-07-13&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qWo5qERU6O/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [34.156832706, -118.167165998],
  name: "Rose Bowl",
  date: "May 14th 2016",
  attendance: "55,736",
  sales: "$7,138,685",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-15%20until%3A2014-07-16&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qkBkG9A9vf/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [37.4020148919, -121.968869091],
  name: "Levi's Stadium",
  date: "May 16th 2016",
  attendance: "44,252",
  sales: "$6,201,845",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-18%20until%3A2014-07-19&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/qpUXeIDARX/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [47.590497638, -122.325665364],
  name: "CenturyLink Field",
  date: "July 20th 2014",
  attendance: "46,529",
  sales: "$5,415,810",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-20%20until%3A2014-07-21&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/q0euTDoZJs/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [53.55583111, -113.472331444],
  name: "Commonwealth Stadium",
  date: "May 20th 2016",
  attendance: "39,299",
  sales: "$3,723,830",
  Twitter: "<a href='https://twitter.com/search?l=&q=%23beyonce%20OR%20%23otr%20OR%20%23ontheruntour%20OR%20%23ontherun%20OR%20%23jayz%20OR%20%23beehive%20OR%20%23beyhive%20since%3A2014-07-22%20until%3A2014-07-23&src=typd&lang=en' target='_blank'>Fan Feed</a>",
  website: "<a href='https://www.instagram.com/p/shr-7pqEBj/' target='_blank'>WATCH THE SHOW!</a>"
},
{
  location: [41.85749657, -87.6166642],
  name: "TCF Bank Stadium",
  date: "May 23rd 2016",
  attendance: "37,203",
  sales: "$4,174,270",
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
