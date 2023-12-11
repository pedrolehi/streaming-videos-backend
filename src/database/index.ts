import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "streaming_videos_development",
  username: "pedro",
  password: "pedro",
  define: {
    underscored: true, //facilitates converting SQL snake_case pattern to camelCase on JS.
  },
});
