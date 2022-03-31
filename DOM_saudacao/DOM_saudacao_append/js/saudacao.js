(function () {
	const nomeUsuario = "Vanessa"

	if (nomeUsuario) {
		const topBarElemento = document.createElement("div")
		topBarElemento.className = "top-bar"
		topBarElemento.innerHTML = `<p> Olá, ${nomeUsuario}</p>`


		const elementoPai = document.querySelector(".hero");
		elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
	}
})()

