$(document).ready(function() {
	var $form = $('#formulario'),
		$titulo = $('#titulo'),
		$url = $('#url'),
		$button = $('#mostrar_form')
		$list = $('#contenido'),
		$post = $('.item').first();


	function mostrarFormulario() {
		$form.slideToggle();
		$list.slideToggle();
		return false;
	}

	function agregarPost(e) {
		e.preventDefault();
		var url = $url.val(),
			titulo = $titulo.val(),
			$clone = $post.clone();

			$clone.find('.titulo_item a')
				.text(titulo)
				.attr('href',url);
			$clone.hide();

			$list.prepend($clone);
			mostrarFormulario();
			$clone.slideDown();
		//return false;
	}

	//eventos
	$button.click(mostrarFormulario);
	$form.on('submit', agregarPost);
});