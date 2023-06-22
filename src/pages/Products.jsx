import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import SEOConfiguration from '../config-meta'
import { arrayStore } from '../store/updateArray'
import { getDataMeta } from '../components/data/MetaConfiguration';

export default function Products() {
  const isLocation = useLocation();
  const { array } = arrayStore((state) => state.initial);
  const isUpdated = arrayStore((state) => state.updateArray);
  const [isMeta, setIsMeta] = useState(null)
  const handleUpdateArray = () => {
    isUpdated(['berhasil', 'tambah', 'new array'])
  }

  useEffect(() => {
    const defineMeta = async () => {
      await getDataMeta({
        path: '/products'
      }).then(({ result, status }) => {
        if (!status) return;

        setIsMeta(result)
      })
    }

    defineMeta()
  }, [isLocation])

  return (
    <div>
      <SEOConfiguration data={isMeta} />
      <div className="flex flex-col justify-center items-center">
        <img src="/avataaars2.png" className="h-40 w-40" />
        <h1 className="text-7xl">Products</h1>
        <div className="mt-4 space-x-5">
          <Link to="/" className="">Home</Link>
          <Link to="/about" className="">About</Link>
        </div>
        <div className="mt-4">
          <button onClick={handleUpdateArray}>Tambah Array</button>
        </div>
        <div className="mt-4">{array.join(' ')}</div>
      </div>
    </div>
  )
}