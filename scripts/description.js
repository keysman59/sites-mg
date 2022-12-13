let el1 = document.querySelector('.hero-tubes-1'),
    el2 = document.querySelector('.hero-tubes-3'),
    el3 = document.querySelector('.hero-tubes-4'),
    el4 = document.querySelector('.hero-water-1'),
    el5 = document.querySelector('.hero-water-2'),
    el6 = document.querySelector('.hero-mask-1'),
    desc1 = document.querySelector('.hero-desc-1'),
    desc2 = document.querySelector('.hero-desc-2'),
    desc3 = document.querySelector('.hero-desc-3'),
    desc4 = document.querySelector('.hero-desc-4'),
    desc5 = document.querySelector('.hero-desc-5'),
    desc6 = document.querySelector('.hero-desc-6');
// метрогил а
el1.addEventListener('mouseover', () => {
  desc1.classList.remove('hidden')
  setTimeout(()=> {
    desc1.classList.remove('visuallyhidden')
  }, 20)
})
// лосьон
el2.addEventListener('mouseover', () => {
  desc2.classList.remove('hidden')
  setTimeout(()=> {
    desc2.classList.remove('visuallyhidden')
  }, 20)
})
// очищающий гель
el3.addEventListener('mouseover', () => {
  desc3.classList.remove('hidden')
  setTimeout(()=> {
    desc3.classList.remove('visuallyhidden')
  }, 20)
})
// эмульсия
el4.addEventListener('mouseover', () => {
  desc4.classList.remove('hidden')
  setTimeout(()=> {
    desc4.classList.remove('visuallyhidden')
  }, 20)
})
// мицеллярная вода
el5.addEventListener('mouseover', () => {
  desc5.classList.remove('hidden')
  setTimeout(()=> {
    desc5.classList.remove('visuallyhidden')
  }, 20)
})
// маска
el6.addEventListener('mouseover', () => {
  desc6.classList.remove('hidden')
  setTimeout(()=> {
    desc6.classList.remove('visuallyhidden')
  }, 20)
})

el1.addEventListener('mouseout', () => {
  clearDescription()
})
el2.addEventListener('mouseout', () => {
  clearDescription()
})
el3.addEventListener('mouseout', () => {
  clearDescription()
})
el4.addEventListener('mouseout', () => {
  clearDescription()
})
el5.addEventListener('mouseout', () => {
  clearDescription()
})
el6.addEventListener('mouseout', () => {
  clearDescription()
})

function clearDescription() {
  desc1.classList.add('hidden')
  desc2.classList.add('hidden')
  desc3.classList.add('hidden')
  desc4.classList.add('hidden')
  desc5.classList.add('hidden')
  desc6.classList.add('hidden')
  desc1.classList.add('visuallyhidden')
  desc2.classList.add('visuallyhidden')
  desc3.classList.add('visuallyhidden')
  desc4.classList.add('visuallyhidden')
  desc5.classList.add('visuallyhidden')
  desc6.classList.add('visuallyhidden')
}