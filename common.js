$('.img-container').on('mouseover', function() {
    $(this).find('.img-content-hover').show();
});

$('.img-container').on('mouseout', function() {
    $(this).find('.img-content-hover').hide();
});



// .img-container를 클릭하면 .prompt의 내용을 클립보드로 복사
$('.img-container').on('click', function() {
    var text = $(this).find('.img-content .prompt').text().trim();
    var temp = $('<input>').val(text).appendTo('body').select();
    document.execCommand('copy');
    temp.remove();
});