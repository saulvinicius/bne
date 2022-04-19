$('.btn-send').click(function(){
    var nome = $('input[name="nome"]').val();
    var email = $('input[name="email"]').val();
    if(nome != '' && email != ''){
        alert('Obrigado '+nome+', agradecemos sua resposta, uma cópia das respostas foi enviada para o '+ email +'');
    }else{
        alert('Preencha os campos obrigatórios');
    }
    
    return false;
});
