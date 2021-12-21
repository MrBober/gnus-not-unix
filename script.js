const container = document.getElementById('container');

function listener() {
	let gnu = document.getElementById('gnu');
	gnu.addEventListener("click", e => {
		container.innerHTML += '<span class="letter letter-color letter-no-anim"><span>\'s</span></span>&nbsp;<span class="letter letter-color letter-no-anim">N<span>o</span><span>t</span></span>&nbsp;<span class="letter letter-color letter-no-anim">U<span>N</span><span>I</span><span>X</span></span>';
		listener();
	});
}

let gnu = document.getElementById('gnu');
gnu.addEventListener("click", e => {
	container.innerHTML += '<span class="letter letter-color letter-animation letter-animation-u"><span>\'s</span></span>&nbsp;<span class="letter letter-color letter-animation letter-animation-n">N<span>o</span><span>t</span></span>&nbsp;<span class="letter letter-color letter-animation  letter-animation-u">U<span>N</span><span>I</span><span>X</span></span>';
	listener();
});
