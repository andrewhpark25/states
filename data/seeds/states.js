exports.seed = function (knex) {
	return knex("states")
		.del()
		.then(function () {
			return knex("states").insert([
				{
					state: "alabama",
					latitude: 32.31823,
					longitude: -86.902298,
				},
				{
					state: "alaska",
					latitude: 66.160507,
					longitude: -153.369141,
				},
				{
					state: "arizona",
					latitude: 34.048927,
					longitude: -111.093735,
				},
				{
					state: "arkansas",
					latitude: 34.799999,
					longitude: -92.199997,
				},
				{
					state: "california",
					latitude: 36.778259,
					longitude: -119.417931,
				},
				{
					state: "colorado",
					latitude: 39.113014,
					longitude: -105.358887,
				},
				{
					state: "connecticut",
					latitude: 41.599998,
					longitude: -72.699997,
				},
				{
					state: "delaware",
					latitude: 39.0,
					longitude: -75.5,
				},
				{
					state: "florida",
					latitude: 27.994402,
					longitude: -81.760254,
				},
				{
					state: "georgia",
					latitude: 33.247875,
					longitude: -83.441162,
				},
				{
					state: "hawaii",
					latitude: 19.741755,
					longitude: -155.844437,
				},
				{
					state: "idaho",
					latitude: 44.068203,
					longitude: -114.742043,
				},
				{
					state: "illinois",
					latitude: 40.0,
					longitude: -89.0,
				},
				{
					state: "indiana",
					latitude: 40.273502,
					longitude: -86.126976,
				},
				{
					state: "iowa",
					latitude: 42.032974,
					longitude: -93.581543,
				},
				{
					state: "kansas",
					latitude: 38.5,
					longitude: -98.0,
				},
				{
					state: "kentucky",
					latitude: 37.839333,
					longitude: -84.27002,
				},
				{
					state: "louisiana",
					latitude: 30.39183,
					longitude: -92.329102,
				},
				{
					state: "maine",
					latitude: 45.367584,
					longitude: -68.972168,
				},
				{
					state: "maryland",
					latitude: 39.045753,
					longitude: -76.641273,
				},
				{
					state: "massachussetts",
					latitude: 42.407211,
					longitude: -71.382439,
				},
				{
					state: "michigan",
					latitude: 44.182205,
					longitude: -84.506836,
				},
				{
					state: "minnesota",
					latitude: 46.39241,
					longitude: -94.63623,
				},
				{
					state: "mississippi",
					latitude: 33.0,
					longitude: -90.0,
				},
				{
					state: "missouri",
					latitude: 38.573936,
					longitude: -92.60376,
				},
				{
					state: "montana",
					latitude: 46.96526,
					longitude: -109.533691,
				},
				{
					state: "nebraska",
					latitude: 41.5,
					longitude: -100.0,
				},
				{
					state: "nevada",
					latitude: 39.876019,
					longitude: -117.224121,
				},
				{
					state: "new hampshire",
					latitude: 44.0,
					longitude: -71.5,
				},
				{
					state: "new jersey",
					latitude: 39.833851,
					longitude: -74.871826,
				},
				{
					state: "new mexico",
					latitude: 34.307144,
					longitude: -106.018066,
				},
				{
					state: "new york",
					latitude: 43.0,
					longitude: -75.0,
				},
				{
					state: "north carolina",
					latitude: 35.782169,
					longitude: -80.793457,
				},
				{
					state: "north dakota",
					latitude: 47.650589,
					longitude: -100.437012,
				},
				{
					state: "ohio",
					latitude: 40.367474,
					longitude: -82.996216,
				},
				{
					state: "oklahoma",
					latitude: 36.084621,
					longitude: -96.921387,
				},
				{
					state: "oregon",
					latitude: 44.0,
					longitude: -120.5,
				},
				{
					state: "pennsylvania",
					latitude: 41.203323,
					longitude: -77.194527,
				},
				{
					state: "rhode island",
					latitude: 41.700001,
					longitude: -71.5,
				},
				{
					state: "south carolina",
					latitude: 33.836082,
					longitude: -81.163727,
				},
				{
					state: "south dakota",
					latitude: 44.5,
					longitude: -100.0,
				},
				{
					state: "tennesse",
					latitude: 35.860119,
					longitude: -86.660156,
				},
				{
					state: "texas",
					latitude: 31.0,
					longitude: -100.0,
				},
				{
					state: "utah",
					latitude: 39.41922,
					longitude: -111.950684,
				},
				{
					state: "vermont",
					latitude: 44.0,
					longitude: -72.699997,
				},
				{
					state: "virginia",
					latitude: 37.926868,
					longitude: -78.024902,
				},
				{
					state: "washington",
					latitude: 47.751076,
					longitude: -120.740135,
				},
				{
					state: "west virginia",
					latitude: 39.0,
					longitude: -80.5,
				},
				{
					state: "wisconsin",
					latitude: 44.5,
					longitude: -89.5,
				},
				{
					state: "wyoming",
					latitude: 43.07597,
					longitude: -107.290283,
				},
			]);
		});
};
