
$('h1').append(" de Pessoas"); // Add conteúdo no FINAL da tag, class, id
$('.meu_nome').html("Pedrinho"); // Troca, coloca conteúdo dentro da tag, class, id

$('#button').on("click", botao); // lê o click do botão
$('#button').hover(function () {
        // over
        $('.meu_nome').css({'color':'blue', 'font-family': 'roboto',
    });
        
    }, function () {
        // out
    }
);

$('document').ready(function(){ // Assim que o documento estiver pronto executará um função
    $('h1').attr("variavel");
})

function botao(){

    $('h1').remove();   
    
    $('li').css({
        'color': 'hotpink',
        'text-align': 'center',
        'font-family': 'roboto',
        'list-style-type': 'none'
    }) 
}