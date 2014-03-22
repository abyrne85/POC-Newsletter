(function() {
    //Set up editing mode  

    var editable = $('.editable');
    var pencilIcon = "<i title='edit item' class='pencil fa fa-pencil'></i>";
    var deleteIcon = "<i title='remove item' class='minus fa fa-minus'></i>";
    var addIconNews = "<i id='addNews' title='add item' class='plus fa fa-plus'></i>";
    var addIconCampaign = "<i id='addCampaign' title='add item' class='plus fa fa-plus'></i>";
    var addNews, addCampaign;
    var newsIndex;

    $('.editmode').on('click', function() {
        $('#controls-heading').html('edit mode');
        $('.editable').prepend(pencilIcon);
        $('.newsitem').prepend(deleteIcon);
        $('.campaign-item').prepend(deleteIcon);
        $('#news').append(addIconNews);
        $('.campaign').append(addIconCampaign);
        $(this).hide();
        $('.send').show();
        addNews = $('#addNews');
        addCampaign = $('#addCampaign');
        $(addNews).on('click', createNewsItem);
        $(addCampaign).on('click', createCampaign);
    });

    //add news items




    $('.send').on('click', function() {
        $('#controls-heading').html('');
        $('.pencil').remove();
        $('.minus').remove();
        $('.plus').remove();
        $(this).hide();
        $('.editmode').show();
    });

    function createNewsItem() {
        if ($('#news1')) {
            var newNews = $('#news1').clone();
            newNews.appendTo('#news');
            addNews.appendTo('#news');
        }
    }

    function createCampaign() {
        console.log('campaign');
    }

})();