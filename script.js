
$("#btn").click(function () { 
    let input = $('#input').val();
    if (input !== '') {      
        $('ul').append(`<li>${input}<i class="fas fa-check"></i><i class="fas fa-trash"></i></li>`);
        $('#input').val('');
    }
});

$('ul').on('click', '.fa-trash', function () {
    $(this).parent('li').fadeOut(200);
})
$('ul').on('click', '.fa-check', function () {
    $(this).parent('li').toggleClass('checked');
})