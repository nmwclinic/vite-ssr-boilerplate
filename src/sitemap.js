import routes from "./router"
import env from "../sample-env.json"
export default function sitemap() {
  return routes.map((data) => {
    data = {
      url: env.app_url + data.path,
      lastModified: new Date(),
    }

    return data;
  })
}