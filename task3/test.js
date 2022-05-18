  function ready(a) {
	document.addEventListener('readystatechange', () => {
		if (document.readyState === 'interactive') {
			a();
			document.addEventListener('DOMContentLoaded', () => {
		    a()
			});
		}
	})
}

const arg = () => {
	alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
}

ready(arg)

document.addEventListener('DOMContentLoaded', () => {
	alert('Dom loaded');
})