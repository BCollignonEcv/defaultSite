/*****************************************/
/************** DROPDOWN *****************/
/*****************************************/

// Toggle slide dropdown element onClick
$('.dropdown').on('click', event => {
    var dropdownContent = $(event.currentTarget);
    dropdownContent.children('.dropdown-content').slideToggle('fast', function(){
        if(dropdownContent.children('.dropdown-content').css('display') === 'none'){
            dropdownContent.find('span').html('+');
        }else{
            dropdownContent.find('span').html('-');
        }
    });
});

