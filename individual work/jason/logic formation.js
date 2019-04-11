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

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Date: " + city.date +"</h3> <h3>Attendance: " + city.attendance +"</h3> <h3>Sales: " + city.sales +"</h3> <h3>" + city.Twitter + "</h3> <h3>" + city.website + "</h3>")
    .addTo(myMap);
      
}
