// Create a map object
// var myMap = L.map("map", {
//   center: [37.09, -95.71],
//   zoom: 5
// });

// Add a tile layer
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(myMap);

// An array containing each city's name, location, and population


var cities = [
{
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
  location: [40.808163434, -74.071333048],
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

var otrlogo = L.icon({
  iconUrl: 'otr2.png',
  iconSize: [85, 90], // size of the icon
  popupAnchor: [0,-15]
  });

var cityMarkers = [];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  cityMarkers.push(
  L.marker(cities[i].location)
    .bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Date: " + cities[i].date +"</h3> <h3>Attendance: " + cities[i].attendance +"</h3> <h3>Sales: " + cities[i].sales +"</h3> <h3>" + cities[i].Twitter + "</h3> <h3>" + cities[i].website + "</h3>")
    );
  }

  var citiesj = [
    {
      location: [33.804663448, -117.872663176],
      name: "Honda Center (Anaheim, CA)",
      date: "October 27th 2017",
      attendance: "12,153",
      sales: "$1,228,306",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-10-27%20until%3A2017-10-28&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BdBOivZFS1h/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [32.787663516, -96.806163442],
      name: "American Airlines Center (Dallas, TX)",
      date: "November 7th 2017",
      attendance: "14,497",
      sales: " $1,330,471",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-11-07%20until%3A2017-11-08&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BbOV4UPnNOG/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [29.942662896, -90.07583303],
      name: "Smoothie King Center (New Orleans, LA)",
      date: "November 9th 2017",
      attendance: "12,731",
      sales: " $1,072,797",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-11-07%20until%3A2017-11-08&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/p8ujq8zZqL/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [25.775496898, -80.186165922],
      name: "American Airlines Arena (Miami, FL)",
      date: "November 12th 2017",
      attendance: "15,735",
      sales: " $1,770,249",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-11-12%20until%3A2017-11-13&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BbVkRMXnTD2/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [33.754330316, -84.391165102],
      name: "Philips Arena (Atlannta, GA)",
      date: "November 14th 2017",
      attendance: "14,118",
      sales: " $1,832,255",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-11-14%20until%3A2017-11-15&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BbiqO_ZFAYv/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [36.155499378, -86.773830238],
      name: "Bridgestone Arena (Nashville, TN)",
      date: "November 15th 2017",
      attendance: "14,128",
      sales: "$1,064,008",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-11-14%20until%3A2017-11-15&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BbTjYJxDbGt/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [35.2251426, -80.8392351],
      name: "Spectrum Center (Charlotte, NC)",
      date: "November 16th 2017",
      attendance: "15,558",
      sales: "$1,563,821",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-11-16%20until%3A2017-11-17&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/Bb_KSGCFnyQ/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [43.639330776, -79.37416517],
      name: "Air Canada Centre (Toronto, Canada)",
      date: "November 22nd 2017",
      attendance: "25,270",
      sales: " $2,301,650",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-11-27%20until%3A2017-11-28&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BdY2d2uDtDM/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [38.8981251, -77.0208804],
      name: "Capital One Arena (Washington, DC)",
      date: "November 29th 2017",
      attendance: "18,147",
      sales: "$2,199,885",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-11-29%20until%3A2017-11-30&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/Bb_VMbwhafj/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [29.950496198, -90.075333032],
      name: "Nassau Coliseum (East Garden, NY)",
      date: "December 2nd 2016",
      attendance: "13,292",
      sales: " $1,315,634.00",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-12-02%20until%3A2017-12-03&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BcOWtsmlMjy/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [43.638164114, -79.386831786],
      name: "Rogers Arena (Vancover, CA) ",
      date: "December 11th 2017",
      attendance: "14,386",
      sales: "$5,050,479",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-12-11%20until%3A2017-12-12&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/shr-7pqEBj/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [47.61999752, -122.35249859],
      name: "Key Arena (Seattle, WA)",
      date: "December 13th 2017",
      attendance: "9,200",
      sales: "$862,000",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-12-13%20until%3A2017-12-14&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BcrT7iKF8V8/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [49.804663448, -97.13916611],
      name: "Moda Center (Portland, OR)",
      date: "December 14th 2017",
      attendance: "10,840",
      sales: "$803,170",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-12-14%20until%3A2017-12-15&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BcBvO3dg2Kq/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [47.588164314, -122.326165362],
      name: "Oracle Arena (Oakland, CA)",
      date: "December 16th 2017",
      attendance: "14,853",
      sales: "$1,511,245",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-12-16%20until%3A2017-12-17&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BczJwW0F4Gg/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [38.5806415, -121.4996191],
      name: "Golden 1 Center (Sacramento, CA)",
      date: "December 17th 2017",
      attendance: "11,459",
      sales: "$954,552",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-12-17%20until%3A2017-12-18&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BbtH0_LjYJY/' target='_blank'>WATCH THE SHOW!</a>"
    },
    {
      location: [33.954829514, -118.338498646],
      name: "The Forum (Inglewood, CA)",
      date: "December 21st 2014",
      attendance: "16,084",
      sales: "$2,012,730",
      Twitter: "<a href='https://twitter.com/search?q=%23jayz%20%20OR%20%23444tour%20OR%20%23rocnation%20since%3A2017-12-21%20until%3A2017-12-22&src=typd&lang=en' target='_blank'>Fan Feed</a>",
      website: "<a href='https://www.instagram.com/p/BazLfVZlOKl/' target='_blank'>WATCH THE SHOW!</a>"
    },
    ];
    
    var jayzlogo = L.icon({
      iconUrl: 'jayz.png',
      iconSize: [75, 60], // size of the icon
      popupAnchor: [0,-15]
      });
    
    var cityMarkersj = [];
    
    // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
    for (var i = 0; i < citiesj.length; i++) {
      cityMarkersj.push(
      L.marker(citiesj[i].location)
        .bindPopup("<h1>" + citiesj[i].name + "</h1> <hr> <h3>Date: " + citiesj[i].date +"</h3> <h3>Attendance: " + citiesj[i].attendance +"</h3> <h3>Sales: " + citiesj[i].sales +"</h3> <h3>" + citiesj[i].Twitter + "</h3> <h3>" + citiesj[i].website + "</h3>")
        );
      }

var citiesf = [
  {
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
    location: [33.754496982, -84.4],
    name: "Georgia Dome",
    date: "May 1st 2016",
    attendance: "46,321",
    sales: "$5,801,725",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-01%20until%3A2016-05-02&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BK27DQXgjKU/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [35.800496798, -78.71833046],
    name: "Carter–Finley Stadium",
    date: "May 3rd 2016",
    attendance: "38,292",
    sales: "$4,810,620",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-03%20until%3A2016-05-04&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BE-NFodsVjs/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [29.68416393, -95.4],
    name: "NRG Stadium",
    date: "May 7th 2016",
    attendance: "43,871",
    sales: "$6,412,280",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-07%20until%3A2016-05-08&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/Bkx9lxXDL27/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [32.741997032, -97.088999644],
    name: "AT&T Stadium",
    date: "May 9th 2016",
    attendance: "48,029",
    sales: "$4,943,390",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-09%20until%3A2016-05-10&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BFPKKxXDlyz/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [32.776496894, -117.11833286],
    name: "Qualcomm Stadium",
    date: "May 12th 2016",
    attendance: "45,885",
    sales: "$6,028,115",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-12%20until%3A2016-05-13&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BFXq04dLZlh/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [34.156832706, -118.167165998],
    name: "Rose Bowl",
    date: "May 14th 2016",
    attendance: "55,736",
    sales: "$7,138,685",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-14%20until%3A2016-05-15&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BuYG7yRoPiA/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [37.4020148919, -121.968869091],
    name: "Levi's Stadium",
    date: "May 16th 2016",
    attendance: "44,252",
    sales: "$6,201,845",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-16%20until%3A2016-05-17&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BFhSVW4khja/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [47.590497638, -122.325665364],
    name: "CenturyLink Field",
    date: "May 18th 2016",
    attendance: "46,529",
    sales: "$5,415,810",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-18%20until%3A2016-05-19&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BFywo2UynBu/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [53.55583111, -113.472331444],
    name: "Commonwealth Stadium",
    date: "May 20th 2016",
    attendance: "39,299",
    sales: "$3,723,830",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-20%20until%3A2016-05-21&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BItdNLHhSQ5/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [44.97249611, -93.221332448],
    name: "TCF Bank Stadium",
    date: "May 23rd 2016",
    attendance: "37,203",
    sales: "$4,174,270",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-23%20until%3A2016-05-23&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/shr-7pqEBj/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [43.638164114, -79.386831786],
    name: "Rogers Centre",
    date: "May 25th 2016",
    attendance: "45,009",
    sales: "$4,440,554",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-25%20until%3A2016-05-26&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/rATElkJshQ/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [47.588164314, -122.326165362],
    name: "Soldier Field",
    date: "May 27th & 28th 2016",
    attendance: "89,270",
    sales: "$11,279,890",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-27%20until%3A2016-05-29&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BF9U6gtElMG/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [40.441331568, -80.009499962],
    name: "Heinz Field",
    date: "May 31st 2016",
    attendance: "36,325",
    sales: "$3,927,805",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-31%20until%3A2016-06-01&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BGJ767IIZt8/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [42.087832982, -71.258665632],
    name: "Gillette Stadium",
    date: "June 3rd 2016",
    attendance: "48,304",
    sales: "$6,008,698",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-06-03%20until%3A2016-06-04&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BGN_BAtMxDE/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [39.900496398, -75.167165998],
    name: "Lincoln Financial Field",
    date: "June 5th 2016",
    attendance: "47,223",
    sales: "$5,563,435",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-06-05%20until%3A2016-06-06&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BGUbY3Anm35/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [40.75416365, -73.84082997],
    name: "Citi Field",
    date: "June 7th & 8th 2016",
    attendance: "73,486 ",
    sales: "$11,461,340",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-06-07%20until%3A2016-06-09&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BGchwy7yERW/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [39.273498906, -76.620330852],
    name: "M&T Bank Stadium",
    date: "June 10th 2016",
    attendance: "47,819",
    sales: "$5,770,660",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-06-10%20until%3A2016-06-11&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BGhHjBQABgM/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [40.29012, -76.658134],
    name: "Hershey Park Stadium",
    date: "June 12th 2016",
    attendance: "26,662",
    sales: "$3,474,695",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-06-12%20until%3A2016-06-13&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BGlLGSNFzIY/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [40.441331568, -80.009499962],
    name: "Ford Field",
    date: "June 14th 2016",
    attendance: "41,524",
    sales: "$5,471,395",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-06-14%20until%3A2016-06-14&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BGsV8h2ExoM/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [38.626330828, -90.186499254],
    name: "Edward Jones Dome",
    date: "September 10th 2016",
    attendance: "38,256",
    sales: "$3,953,445",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-09-10%20until%3A2016-09-11&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BKOWp43BSVE/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [40.441331568, -80.009499962],
    name: "Dodger Stadium",
    date: "Septemmber 14th 2016",
    attendance: "47,440",
    sales: "$6,736,700",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-09-14%20until%3A2016-09-15&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BKYksjwhNEH/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [37.4020148919, -121.968869091],
    name: "Levi's Stadium",
    date: "September 17th 2016",
    attendance: "44,015",
    sales: "$4,898,690",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-09-17%20until%3A2016-09-18&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/Bh65rOKBD-v/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [29.68416393, -95.4],
    name: "NRG Stadium",
    date: "September 22nd 2016",
    attendance: "42,635",
    sales: "$5,107,065",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-09-22%20until%3A2016-09-23&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BkgLw5XlOQV/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [29.950496198, -90.0753330322],
    name: "Mercedes-Benz Superdome",
    date: "Septemmber 24th 2016",
    attendance: "46,474",
    sales: "$5,349,960",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-09-24%20until%3A2016-09-25&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BLSB-Z9AL7v/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [33.754496982, -84.400498398],
    name: "Georgia Dome",
    date: "September 26th 2016",
    attendance: "45,126",
    sales: "$5,374,615",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-05-07%20until%3A2016-05-08&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BE629Mhgh2N/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [39.900496398, -75],
    name: "Lincoln Financial Field",
    date: "September 29th 2016",
    attendance: "44,693",
    sales: "$3,353,627",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-09-29%20until%3A2016-09-30&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/riZkz-mFeH/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [36.166479, -86.7712898],
    name: "Nissan Stadium",
    date: "October 2nd 2016",
    attendance: "43,013",
    sales: "$5,182,345",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-10-02%20until%3A2016-10-03&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BLOUwAugomA/' target='_blank'>WATCH THE SHOW!</a>"
  },
  {
    location: [40.812840, -74.074209],
    name: "MetLife Stadium",
    date: "October 7th 2016",
    attendance: "50,703",
    sales: "$6,064,625",
    Twitter: "<a href='https://twitter.com/search?l=&q=%23formationworldtour%20OR%20%23beyonce%20OR%20%23beyhive%20%40beyonce%20since%3A2016-10-07%20until%3A2016-10-08&src=typd&lang=en' target='_blank'>Fan Feed</a>",
    website: "<a href='https://www.instagram.com/p/BLTc5-hBODv/'' target='_blank'>WATCH THE SHOW!</a>"
  },
];

var formation = L.icon({
  iconUrl: '../png/beyonce.png',
  iconSize: [50, 45], // size of the icon
  popupAnchor: [0,-15]
  });

    var cityMarkersf = [];
    
    // for (var i = 0; i < cities.length; i++) {
    //   // loop through the cities array, create a new marker, push it to the cityMarkers array
    //   cityMarkers.push(
    //     L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>")
    //   );
    
    // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
    for (var i = 0; i < citiesf.length; i++) {
      cityMarkersf.push(
      L.marker(citiesf[i].location)
        .bindPopup("<h1>" + citiesf[i].name + "</h1> <hr> <h3>Date: " + citiesf[i].date +"</h3> <h3>Attendance: " + citiesf[i].attendance +"</h3> <h3>Sales: " + citiesf[i].sales +"</h3> <h3>" + citiesf[i].Twitter + "</h3> <h3>" + citiesf[i].website + "</h3>")
        );
      }


// // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
// for (var i = 0; i < cities.length; i++) {
//   var city = cities[i];
//   L.marker(city.location)
//     .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Date: " + city.date +"</h3> <h3>Attendance: " + city.attendance +"</h3> <h3>Sales: " + city.sales +"</h3> <h3>" + city.Twitter + "</h3> <h3>" + city.website + "</h3>")
//     .addTo(myMap);




// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var cityLayer = L.layerGroup(cityMarkers);
var cityLayerf = L.layerGroup(cityMarkersf);
var cityLayerj = L.layerGroup(cityMarkersj);

// Define variables for our tile layers
var streets = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  "Beyhive vs RocNation" : streets,
  // Dark: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  "ON THE  RUN": cityLayer,
  "FORMATION": cityLayerf,
  "4:44": cityLayerj
};


// Create map object and set default layers
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4,
  layers: [streets, cityLayer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
