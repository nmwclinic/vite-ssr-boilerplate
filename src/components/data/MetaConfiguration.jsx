import axios from "axios";

export async function getDataMeta({ path }) {
  try {
    const response = await axios.get('https://api-sandbox.nmwclinic.co.id/seo', {
      params: {
        path: path
      }
    })

    return response.data
  } catch (error) {

    return error
  }
}