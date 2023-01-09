let images1 = document.querySelectorAll('.plato-img-1'),
    images2 = document.querySelectorAll('.plato-img-2'),
    wrpImgages = document.querySelectorAll('.plato-item__wrp-img')

console.log(images1)
console.log(images2)
console.log(wrpImgages)

wrpImgages.forEach((el,index) => {
    el.addEventListener('mouseover', () => {
        images2[index].classList.add('opacity-color-hover')
    })
    el.addEventListener('mouseout', () => {
        images2[index].classList.remove('opacity-color-hover')
    })
})
