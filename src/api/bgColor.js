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