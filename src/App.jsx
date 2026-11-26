
import './App.css'
import WeatherCard from './components/WeatherCard'
import { useState,useRef,useEffect,useMemo } from 'react'
import { fetchCoordinates } from './api/geo'
import { fetchWeatherByCoords } from './api/weather'
import { getColorByWeatherId } from './api/bgColor'

const CITIES = ['Seoul', 'Busan', 'Jeju City', 'Tokyo', 'New York']
function App() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const inputRef = useRef(null)

  const searchCity = async (name) => {
    const q = name.trim()
    if (!q) return

    try {
      setLoading(true)
      setErr('')
      const { lat, lon } = await fetchCoordinates(q)
      const data = await fetchWeatherByCoords(lat, lon)
      setWeather(data)
      setCity('')
    } catch (error) {
      console.log(error)
      setErr('도시를 찾을 수 없어요. 영어 이름으로도 검색해 보세요.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    inputRef.current.focus()
    searchCity('Seoul')
  }, [])




 const handleSearch = () => searchCity(city)
  const onChangeInput = (e) => setCity(e.target.value)
  const onKeyup = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

const bg = weather?.weather?.[0]?.id
  ? `url(${getColorByWeatherId(weather.weather[0].id)}) center / cover no-repeat`
  : 'linear-gradient(135deg, #98b8ff 0%, #60a5fa 100%)'
  return (
  <section style={{ background: bg }}>
      <div className='app'>
        <h1>☁️ 오늘의 날씨</h1>
        <div className="input-wrap">
          <input
            ref={inputRef}
            value={city}
            onChange={onChangeInput}
            onKeyUp={onKeyup}
            type="text"
            placeholder='도시 이름을 입력하세요' />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "검색중..." : "검색"}
          </button>
        </div>
        <div className="chips">
          {CITIES.map((name) => (
            <button key={name} onClick={() => searchCity(name)}>
              {name}
            </button>
          ))}
        </div>
        {err && <p className='error'>{err}</p>}
        {loading && <p className='info'>불러오는 중...</p>}
        <WeatherCard weather={weather} />
      </div>
    </section>)
}

export default App
