import img1 from '../assets/1.png' // 맑음
import img2 from '../assets/2.png' // 기본(예외)
import img3 from '../assets/3.png' // 구름
import img4 from '../assets/4.png' // 안개·먼지
import img5 from '../assets/5.png' // 눈
import img6 from '../assets/6.png' // 비
import img7 from '../assets/7.png' // 이슬비
import img8 from '../assets/8.png' // 뇌우

const bgImage = (img) => `url(${img}) center / cover no-repeat`

export const getColorByWeatherId = (weatherId) => {
    if (weatherId === 800) return bgImage(img1)

    const group = Math.floor(weatherId / 100)

    switch (group) {
        case 2: return bgImage(img8) // 뇌우
        case 3: return bgImage(img7) // 이슬비
        case 5: return bgImage(img6) // 비
        case 6: return bgImage(img5) // 눈
        case 7: return bgImage(img4) // 안개·먼지
        case 8: return bgImage(img3) // 구름
        default: return bgImage(img2) // 기본
    }
}

// weatherId: OpenWeather 코드 (예: 500, 801, 611, 800 등)
// export const getColorByWeatherId = (weatherId) => {
//     if (weatherId === 800) // 맑음: 쨍한 하늘 → 햇살
//         return 'linear-gradient(135deg, #4FACFE 0%, #FFD86F 100%)';

//     const group = Math.floor(weatherId / 100);

    switch (group) {
        case 2: // 뇌우: 먹구름 → 번개 보라
            return 'linear-gradient(135deg, #0F172A 0%, #3B2F63 60%, #7C5CFF 100%)';
        case 3: // 이슬비: 물기 먹은 회청색
            return 'linear-gradient(135deg, #8EA7B8 0%, #C9D9E3 100%)';
        case 5: // 비: 짙은 비구름 → 젖은 파랑
            return 'linear-gradient(135deg, #2C3E50 0%, #4C7A9E 100%)';
        case 6: // 눈: 차가운 흰색 → 아이스 블루
            return 'linear-gradient(135deg, #E6F0FA 0%, #B8D4EC 100%)';
        case 7: // 안개/먼지: 뿌연 베이지 회색
            return 'linear-gradient(135deg, #B8B2A7 0%, #DCD6CC 100%)';
        case 8: // 구름: 흐린 은회색 하늘
            return 'linear-gradient(135deg, #7F8FA6 0%, #C4CED9 100%)';
        default:
            return 'linear-gradient(135deg, #64748B 0%, #94A3B8 100%)';
    }
// };