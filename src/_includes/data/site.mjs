const isDev = process.env.ENV === "development";

const baseUrl = isDev ? "localhost:8080" : "https://github.com"; // your website url goes here
const site = {
  baseUrl,
  title: "flightdeck",
  description: "An opinionated starter project for Eleventy.",
  tagline: "you're in the captain's chair",
  authorName: "Ed Heltzel",
  social: [
    {
      name: "Github",
      profile: "edheltzel",
    },
    {
      name: "LinkedIn",
      profile: "edheltzel",
    },
    {
      name: "Instagram",
      profile: "edheltzel",
    },
  ],
  gtag: "0000000000",
  env: process.env.ENV,
};

export default site;
