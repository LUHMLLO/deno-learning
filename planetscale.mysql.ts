import { connect } from "npm:@planetscale/database@^1.4";

const config = {
    host: "aws.connect.psdb.cloud",
    username: "hqz5agx2cgdvt6o2pz7m",
    password: "pscale_pw_B1Xb9O8f2uGM5JLd2EkTsQRQThkZhn4MoxpDrwDST8E",
};

const conn = connect(config);

await conn.execute(
    "CREATE TABLE IF NOT EXISTS dinosaurs (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, description varchar(255) NOT NULL);",
);

// await conn.execute(
//     "INSERT INTO `dinosaurs` (id, name, description) VALUES (1, 'Aardonyx', 'An early stage in the evolution of sauropods.'), (2, 'Abelisaurus', 'Abels lizard has been reconstructed from a single skull.'), (3, 'Deno', 'The fastest dinosaur that ever lived.')",
// );

const resultsAll = await conn.execute("SELECT * FROM `dinosaurs`");
console.log(resultsAll.rows);

const resultsSingle = await conn.execute(
    "SELECT * FROM `dinosaurs` WHERE `name` = 'Deno'",
);
console.log(resultsSingle.rows);
