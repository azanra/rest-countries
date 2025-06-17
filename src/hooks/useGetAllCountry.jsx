import { fetchResponse } from "../client/fetch.js";

export async function useGetAllCountry(fields) {
  const url = `https://restcountries.com/v3.1/all?fields=${fields}`;
  const response = await fetchResponse(url);
  console.log(response);
  return response;
}
