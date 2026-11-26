import axios from "axios"
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

export const fetchCoordinates = async (city) => {
    const res = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: city,
            limit: 1,
            appid: API_KEY
        }
    })
    if (!Array.isArray(res.data) || res.data.length === 0) {
        throw new Error('도시를 찾을 수 없어요. 도시 이름을 영어로도 입력해 보세요.')
    }

    const { lat, lon, name, local_names, country } = res.data[0]

    // 한국어 이름이 있으면 한국어로, 없으면 영어 이름으로
    return { lat, lon, name: local_names?.ko ?? name, country }
}