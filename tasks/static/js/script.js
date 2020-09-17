$(document).ready(function() {
    var baseUrl = window.location.origin;
    var deleteBtn = $('.delete-button');
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');

    $(deleteBtn).on('click', function(e) {
        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Quer deletar a tarefa?');

        if(result) {
            window.location.href = delLink
        }

    });

    $(searchBtn).on('click', function(){
        searchForm.submit();
    })

    $(filter).change(function() {
        var filter = $(this).val();
        window.location.href = baseUrl + '?filter=' + filter;
    })
})