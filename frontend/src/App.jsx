import { useEffect, useState } from 'react'

export default function App() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const now = new Date()
    setTime(now.toLocaleTimeString())
  }, [])

  return (
    <div className="app">
      <main>
        <h1>Atelier Render Frontend</h1>
        <p>Votre application React est prête à être déployée sur Render.</p>
        <p>Service backend : <strong>flask-render-iac-bernardkabou11</strong></p>
        <p>Heure locale : {time}</p>
      </main>
    </div>
  )
}
