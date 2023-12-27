import { DataTypes, Model } from "sequelize";
import { UserInstance } from "./User";
import { CourseInstance } from "./Course";
import { database } from "../database";

export interface Favorite {
  userId: number;
  courseId: number;
}

export interface FavoriteInstance extends Model<Favorite>, Favorite {
  course?: CourseInstance;
  user?: UserInstance;
}

export const Favorite = database.define<FavoriteInstance, Favorite>(
  "Favorite",
  {
    userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    courseId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: { model: "courses", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  }
);
