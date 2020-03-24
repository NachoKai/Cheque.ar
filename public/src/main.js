let checkear = document.querySelector('#checkear');
let checkeo = document.querySelector('#checkeo');
let webText = document.querySelector('#web-text');

checkear.addEventListener('click', clickCheck);
checkeo.addEventListener('click', clickCheckBar);

function clickCheck() {
	if (webText.value === '') {
		webText.classList.add('error');
	} else {
		randomize();
		webText.classList.remove('error');
		webText.value = '';
		checkeo.className = 'visible';
	}
}

function clickCheckBar() {
	randomize();
	checkeo.className = 'oculto';
}

function randomize() {
	$('.progressBar').each(function (index, progressBar) {
		let percentage = $(progressBar).find('.percentage-check');
		let progress = $(progressBar).find('.progress-check');
		randNum = Math.floor(Math.random() * 100);
		$(percentage).text(randNum + '%');
		$(progress).width(randNum + '%');
	});
}
