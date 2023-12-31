import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEOConfiguration({ path }) {
  const isLocation = useLocation();
  const [isMeta, setIsMeta] = useState(null)

  useEffect(() => {
    async function APIMetaConfiguration() {
      try {
        const response = await fetch(`https://api-sandbox.nmw.clinic/seo?path=${path}`)
        const data = await response.json();

        if (!data.status) return;

        setIsMeta(data.result)
      } catch (error) {
        console.log(error)
        return error
      }
    }

    APIMetaConfiguration()
  }, [path, isLocation])

  return isMeta && (
    <Helmet>
      <title>{isMeta.title}</title>
      <meta name="title" content={isMeta.title} />
      <meta name="description" content={isMeta.description} />
      <meta name="twitter:title" content={isMeta.title} />
      <meta name="twitter:description" content={isMeta.description} />
      <meta name="twitter:image" content={isMeta.image} />
      <meta property="og:title" content={isMeta.title} />
      <meta property="og:description" content={isMeta.description} />
      <meta property="og:image" content={isMeta.image} />
      <meta property="og:image:alt" content={isMeta.description} />
      <meta property="og:url" content={isMeta.url} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}

