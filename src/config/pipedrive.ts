import dotenv from "dotenv";

dotenv.config();

export const url_api = `https://${process.env.COMPANY_NAME}.pipedrive.com/api/v1`;
