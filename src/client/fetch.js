export async function fetchResponse(url) {
  let result;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error, Response status: ${response.status}`);
    }

    result = await response.json();
  } catch (error) {
    console.log(error.message);
  }
  return result;
}
