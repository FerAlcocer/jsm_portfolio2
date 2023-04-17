import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skTKi1uqlQ9boJ2HmWMmQa6Wlonmp3nm7r292na4qjcFYwkCMjWIQECfMT1Kka6OWOnWYXtNbt35EBhF8X66LxLmb8haJVIiCI6evF67huyYVRrFkb0qE61EIyeRI8k5Tr2pwyvS4WJLqRG5Pvkd9xAAH4HmRhsKR8AmXXaWzsCWiESmnyph",
});
