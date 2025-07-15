// import { neon } from "@neondatabase/serverless";
// import dotenv from "dotenv";

// dotenv.config();

// const {PGHOST,PGDATABASE,PGUSER,PGPASSWORD} =process.env;

// export const sql = neon(
//   `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
// );
import postgres from 'postgres';
import dotenv from 'dotenv';

// ✅ Load environment variables
dotenv.config();

const sql = postgres(process.env.DATABASE_URL, {
  ssl: 'require' // ✅ required for Neon
});

export { sql };
