import 'dotenv/config';

const config = {
      port: process.env.PORT || 8080,
    icon: {
        url: process.env.ICON_URL,
        apiKey: process.env.ICON_API_KEY,
    },

    smtp:{
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      password: process.env.SMTP_PASSWORD,
    }
}

export const jph = {
    url: process.env.JPH_URL,
}

export default config;
