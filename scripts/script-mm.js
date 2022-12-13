let side = document.querySelector('#mobile-menu'),
	btn = document.querySelector('#mobile-menu-btn'),
	btnClose = document.querySelector('#mobile-menu-btn-close')

console.log(side)
console.log(btn)
console.log(btnClose)

btn.addEventListener('click', () => {
  side.classList.add('open-side')	
})

btnClose.addEventListener('click', () => {
  side.classList.remove('open-side')	
})


