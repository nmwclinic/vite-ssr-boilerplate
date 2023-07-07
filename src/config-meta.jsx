import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import config from "/sample-env.json"
import { useLocation } from "react-router-dom";
import { getDataMeta } from "./components/data/MetaConfiguration";

export default function SEOConfiguration({ path }) {
  const isLocation = useLocation();
  const [isMeta, setIsMeta] = useState({
    title: 'NMW Clinic Official',
    description: 'Official NMW Clinic sejak 2007 Klinik Kecantikan, Klinik Aesthetic',
    image: 'https://dummyimage.com/300.png/09f/fff',
    url: config.app_url + path
  })

  useEffect(() => {
    async function APIMetaConfiguration() {
      await getDataMeta({ path: path }).then(({ result, status }) => {
        if (!status) return;

        setIsMeta(result)
      })
    }

    APIMetaConfiguration()
  }, [path, isLocation])

  return (
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

