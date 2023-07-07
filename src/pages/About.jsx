import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import SEOConfiguration from '../config-meta'

export default function About() {
  const isLocation = useLocation();

  useEffect(() => { }, [isLocation])

  return (
    <div>
      <SEOConfiguration path="/path" />
      <div className="flex flex-col justify-center items-center">
        <img src="/avataaars2.png" className="h-40 w-40" />
        <h1 className="text-7xl">About</h1>
        <div className="mt-4 space-x-5">
          <Link to="/" className="">Home</Link>
          <Link to="/products" className="">Products</Link>
        </div>
      </div>
    </div>
  )
}