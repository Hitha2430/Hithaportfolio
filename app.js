document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger');
	const navList = document.querySelector('.nav-list');
  
	hamburger.addEventListener('click', () => {
	  navList.classList.toggle('open');
	  hamburger.classList.toggle('toggle');
	});
  });
  