export const scrollToElement = (ref: HTMLDivElement) => {
  const refTop = ref.offsetTop
  const additionalPixels = window.innerHeight * 0.06
  const targetPosition = refTop - additionalPixels
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
}
