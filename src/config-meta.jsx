import { Helmet } from "react-helmet-async";

export default function SEOConfiguration({ data }) {
  const isMeta = data ?? {
    title: 'NMW Clinic Official',
    description: 'Official NMW Clinic sejak 2007 Klinik Kecantikan, Klinik Aesthetic',
    image: 'https://dummyimage.com/300.png/09f/fff',
    url: 'https://nmwclinic.co.id'
  }

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
      <meta property="og:url" content={isMeta.url} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}

