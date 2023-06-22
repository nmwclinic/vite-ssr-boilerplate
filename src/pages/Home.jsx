import { Link, useLocation } from 'react-router-dom'
import SEOConfiguration from '../config-meta'
import { useEffect, useState } from 'react';
import { countingValue } from '../store/countingValue'
import { getDataMeta } from '../components/data/MetaConfiguration'

export default function Home() {
  const isLocation = useLocation();
  const { count } = countingValue((state) => state.initial);
  const increment = countingValue((state) => state.increment);
  const decrement = countingValue((state) => state.decrement);
  const incrementByAmount = countingValue((state) => state.incrementByAmount)
  const [isMeta, setIsMeta] = useState(null)

  useEffect(() => {
    const defineMeta = async () => {
      await getDataMeta({
        path: '/home'
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
        <img src="/avataaars.png" className="h-40 w-40" />
        <h1 className="text-7xl">Home</h1>
        <div className="mt-4 space-x-5">
          <Link to="/about" className="">About</Link>
          <Link to="/products" className="">Products</Link>
        </div>
        <div className="mt-4 space-x-5">
          <button onClick={increment} className="bg-sky-500 text-white">Tambah</button>
          <button onClick={decrement} className="bg-sky-400 text-white">Kurang</button>
          <button onClick={() => incrementByAmount(10)} className="bg-sky-700 text-white">Tambah 10</button>
        </div>
        <div className="text-6xl mt-4">
          {count}
        </div>
      </div>
    </div>
  )
}
