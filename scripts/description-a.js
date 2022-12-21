let el5 = document.querySelector('.hero-tubes-5'),
    el6 = document.querySelector('.hero-rack-5'),
    el7 = document.querySelector('.hero-tubes-9'),
    el8 = document.querySelector('.hero-water-3'),
    el9 = document.querySelector('.hero-water-4'),
    el10 = document.querySelector('.hero-tubes-8'),
    el12 = document.querySelector('.hero-tubes-6'),
    el11 = document.querySelector('.hero-tubes-7'),
    el6m = document.querySelector('.hero-tubes-6-mob'),
    el7m = document.querySelector('.hero-tubes-7-mob'),
    el8m = document.querySelector('.hero-tubes-8-mob'),
    desc7 = document.querySelector('.hero-desc-7'),
    desc8 = document.querySelector('.hero-desc-8'),
    desc9 = document.querySelector('.hero-desc-9'),
    desc10 = document.querySelector('.hero-desc-10'),
    desc11 = document.querySelector('.hero-desc-11'),
    desc12 = document.querySelector('.hero-desc-12'),
    desc13 = document.querySelector('.hero-desc-13'),
    desc14 = document.querySelector('.hero-desc-14');

el5.addEventListener('mouseover', () => {
  desc7.classList.remove('hidden')
  setTimeout(()=> {
    desc7.classList.remove('visuallyhidden')
  }, 20)
})

el6.addEventListener('mouseover', () => {
  desc8.classList.remove('hidden')
  setTimeout(()=> {
    desc8.classList.remove('visuallyhidden')
  }, 20)
})

el7.addEventListener('mouseover', () => {
  desc9.classList.remove('hidden')
  setTimeout(()=> {
    desc9.classList.remove('visuallyhidden')
  }, 20)
})

el8.addEventListener('mouseover', () => {
  desc10.classList.remove('hidden')
  setTimeout(()=> {
    desc10.classList.remove('visuallyhidden')
  }, 20)
})

el9.addEventListener('mouseover', () => {
  desc11.classList.remove('hidden')
  setTimeout(()=> {
    desc11.classList.remove('visuallyhidden')
  }, 20)
})

el10.addEventListener('mouseover', () => {
  desc12.classList.remove('hidden')
  setTimeout(()=> {
    desc12.classList.remove('visuallyhidden')
  }, 20)
})

el11.addEventListener('mouseover', () => {
  desc13.classList.remove('hidden')
  setTimeout(()=> {
    desc13.classList.remove('visuallyhidden')
  }, 20)
})
el12.addEventListener('mouseover', () => {
  desc14.classList.remove('hidden')
  setTimeout(()=> {
    desc14.classList.remove('visuallyhidden')
  }, 20)
})

el6m.addEventListener('mouseover', () => {
  console.log('гавели')
  desc14.classList.remove('hidden')
  setTimeout(()=> {
    desc14.classList.remove('visuallyhidden')
  }, 20)
})

el7m.addEventListener('mouseover', () => {
  desc13.classList.remove('hidden')
  setTimeout(()=> {
    desc13.classList.remove('visuallyhidden')
  }, 20)
})

el8m.addEventListener('mouseover', () => {
  desc12.classList.remove('hidden')
  setTimeout(()=> {
    desc12.classList.remove('visuallyhidden')
  }, 20)
})

el5.addEventListener('mouseout', () => {
  clearDescription()
})
el6.addEventListener('mouseout', () => {
  clearDescription()
})
el7.addEventListener('mouseout', () => {
  clearDescription()
})
el8.addEventListener('mouseout', () => {
  clearDescription()
})
el9.addEventListener('mouseout', () => {
  clearDescription()
})
el10.addEventListener('mouseout', () => {
  clearDescription()
})
el11.addEventListener('mouseout', () => {
  clearDescription()
})
el12.addEventListener('mouseout', () => {
  clearDescription()
})
el6m.addEventListener('mouseout', () => {
  clearDescription()
})
el7m.addEventListener('mouseout', () => {
  clearDescription()
})
el8m.addEventListener('mouseout', () => {
  clearDescription()
})

function clearDescription() {
  desc7.classList.add('hidden')
  desc8.classList.add('hidden')
  desc9.classList.add('hidden')
  desc10.classList.add('hidden')
  desc11.classList.add('hidden')
  desc12.classList.add('hidden')
  desc13.classList.add('hidden')
  desc14.classList.add('hidden')
  desc7.classList.add('visuallyhidden')
  desc8.classList.add('visuallyhidden')
  desc9.classList.add('visuallyhidden')
  desc10.classList.add('visuallyhidden')
  desc11.classList.add('visuallyhidden')
  desc12.classList.add('visuallyhidden')
  desc13.classList.add('visuallyhidden')
  desc14.classList.add('visuallyhidden')
}