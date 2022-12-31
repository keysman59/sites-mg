let img1 = document.querySelector('.plato-img-1'),
    img2 = document.querySelector('.plato-img-2')

console.log(img1)
console.log(img2)

img1.addEventListener('mouseover', () => {
    img2.classList.add('opacity-color-hover')
})