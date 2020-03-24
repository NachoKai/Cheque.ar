let checkear = document.querySelector('#checkear');
let checkeo = document.querySelector('#checkeo');

checkear.addEventListener('click', clickCheck);
checkeo.addEventListener('click', clickCheckBar);

function clickCheck() {
	randomize();
	checkeo.className = 'visible';
}

function clickCheckBar() {
	randomize();
	checkeo.className = 'oculto';
}

function randomize() {
	$('.progressBar').each(function(index, progressBar) {
		let percentage = $(progressBar).find('.percentage-check');
		let progress = $(progressBar).find('.progress-check');
		randNum = Math.floor(Math.random() * 100);
		$(percentage).text(randNum + '%');
		$(progress).width(randNum + '%');
	});
}
