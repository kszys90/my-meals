/* eslint-disable indent */
export const calcBreakpoints = () => {
    const elements = {
        0: {
            slidesPerView: 2.6
        }
    }
    for (let i = 350; i < 4000; i = i + 50) {
        elements[i] = { slidesPerView: i < 1200 ? i / 120 : 10 }
    }
    return elements
}

export default calcBreakpoints
