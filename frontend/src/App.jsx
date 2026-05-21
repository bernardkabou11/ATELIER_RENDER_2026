import { useEffect, useState } from 'react'

const apiUrl = import.meta.env.VITE_API_URL

export default function App() {
  const [time, setTime] = useState('')
  const [health, setHealth] = useState('Non testé')

  useEffect(() => {
    const now = new Date()
    setTime(now.toLocaleTimeString())

    if (apiUrl) {
      fetch(`${apiUrl}/health`)
        .then((response) => response.json())
        .then((data) => {
          setHealth(data.status || JSON.stringify(data))
        })
        .catch(() => {
          setHealth('Erreur de connexion au backend')
        })
    }
  }, [])

  return (
    <div className="app">
      <main>
        <h1>Atelier Render Frontend</h1>
        <p>Votre application React est prête à être déployée sur Render.</p>
        <p>Service backend : <strong>flask-render-iac-bernardkabou11</strong></p>
        <p>Heure locale : {time}</p>
        <p>
          Backend health: <strong>{apiUrl ? health : 'Définissez VITE_API_URL dans frontend/.env'}</strong>
        </p>
      </main>
    </div>
  )
}
