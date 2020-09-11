exports.up = function (knex) {
	return knex.schema.createTable("states", (tbl) => {
		tbl.increments("id").primary();
		tbl.text("state", 250).notNullable();
		tbl.decimal("latitude", 250).notNullable();
		tbl.decimal("longitude", 250).notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("states");
};
