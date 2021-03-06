{
	'use strict';

	function toggleMenu() {
	  const sidebar = document.querySelector('.section--sidebar');
	  const elemsToHide = document.querySelectorAll('.to-hide');
	  const avatar = document.querySelector('.avatar');
	  const main = document.querySelector('.section--main');

	  sidebar.classList.toggle('wide');

	  for(let elem of elemsToHide){
	  	elem.classList.toggle('hidden');
	  };

	  avatar.classList.toggle('mini');

	  main.classList.toggle('jump');
	}

	document.querySelector('.hamburger').addEventListener('click', function(event) {
	  event.preventDefault();
	  toggleMenu();
	});
}