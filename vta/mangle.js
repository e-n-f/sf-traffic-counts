var locs = require("./geo_export_a0808aa0-f39d-4f3f-a4e6-74cfcb3271a2.json");
var features = locs.features;

for (var i = 0; i < features.length; i++) {
	var p = features[i].properties;

	var count = p.total_ped / 4;

	var out =
		p.id + "," +
		p.intersecti + "," +
		p.location + " (extrapolated)," +
		"2014" + "," +
		"14:00-16:00" + "," +
		",,,,,,,,,,,," +
		count + "," +
		count + "," +
		count + "," +
		count + "," +
		",,,," +
		features[i].geometry.coordinates[1] + "," +
		features[i].geometry.coordinates[0];

	console.log(out);
}
