// temp: 섭씨 기온(숫자) → 옷차림 문구
export const getOutfit = (temp) => {
    if (temp >= 28) return '🩳 민소매, 반바지'
    if (temp >= 23) return '👕 반팔, 얇은 셔츠'
    if (temp >= 17) return '👔 긴팔, 얇은 가디건'
    if (temp >= 12) return '🧥 자켓, 니트'
    if (temp >= 5) return '🧥 코트, 히트텍'
    return '🧣 패딩, 목도리 필수'
}