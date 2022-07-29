
$('h1').append(" de pessoas"); // Add conteúdo no FINAL da tag, class, id
$('.meu_nome').html("Pedrinho"); // Troca, coloca conteúdo dentro da tag, class, id


$('#button').hover(function () {
        // over
        $('.meu_nome').css({'color':'blue', 'font-family': 'arial'
    })},
        function(){
        $('.meu_nome').css({
        'color':'red',
        'font-family': 'arial',
    });
});

$('document').ready(function sitePronto(){ // Assim que o documento estiver pronto executará um função
   
    $('#button').on("click", botao); // lê o click do botão
    
    $('li').on('click', lista);
    $('.input').focus();
    fundoVermeio();

    
});

function fundoVermeio(){ 
    $(this).css({
        'background-color':'red'
    });
}

function lista() {
    $(this).html("Muda quando"); //This muda apenas o item clicado
    $(this).append("|clica|")

};

function botao(){

    $('h1').remove();   
    
    $('li').css({
        'color': 'hotpink',
        'text-align': 'center',
        'font-family': 'arial',
        'list-style-type': 'none'
    });
};


