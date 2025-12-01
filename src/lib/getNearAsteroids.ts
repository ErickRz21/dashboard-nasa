import type { NearEarthObject } from "../types/NearEarthObject";

export async function fetchAsteroids(
  API_KEY: string,
): Promise<NearEarthObject[]> {
  const today = new Date().toISOString().split("T")[0];

  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error fetching asteroid data");
  }

  const data = await response.json();
  return data.near_earth_objects[today] as NearEarthObject[];
}
