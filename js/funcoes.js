 function Data() 
			{
    
			    var data = new Date();
			    var dias = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
			    var meses  = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto", "Setembro","Outubro", "Novembro", "Dezembro");

			    document.write(dias[data.getDay()] + ", " + data.getDate() + " de " + meses[data.getMonth()] +  " de "  + data.getFullYear()+".");
    		} 

    		// Função para mostrar a data 

 

 function form(){
    $(document).ready(function ($) {
      const $formulario = $("#formulario");
      
      $formulario.submit(e => {
        e.preventDefault();
        const $action = $formulario.attr('action');
        const $data = $formulario.serialize();
        $.post($action, $data).then(() => {
          Swal.fire({
              icon: 'success',
              title: 'Mensagem Enviada!',
              text: 'Muito obrigado!',
              footer: '<a href="/index.html">Voltar para home</a>'
          });
        });
      });

    });
 }
