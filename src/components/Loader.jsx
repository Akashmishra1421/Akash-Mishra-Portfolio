import { useEffect, useState } from 'react'
import './Loader.css'

const Loader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-logo">
          <span className="logo-text">A</span>
          <span className="logo-dot">.</span>
        </div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
