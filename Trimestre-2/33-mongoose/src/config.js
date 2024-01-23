import 'dotenv/config';

const config = {
    port: process.env.PORT || 8080,
    icon: {
        url: process.env.ICON_URL,
        apiKey: process.env.ICON_API_KEY,
    },

    database: {
      host: process.env.MONGODB_HOST,
      port: process.env.MONGODB_PORT,
      dbName: process.env.MONGODB_DBNAME,
      user: process.env.MONGODB_USER,
      password: process.env.MONGODB_PASSWORD,
    },
}

export const jph = {
    url: process.env.JPH_URL,
}

export default config;
