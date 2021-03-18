/*****************************************/
/*************** LOADING *****************/
/*****************************************/

const components = ['.dropdown', '.sectionTitle', '.blockborder', '.index'];

// Add animate class to all element to animate them on scroll
$.each(components, (index, value) => {
    const listElement = $(value);
    listElement.each((indexElement, valueElement) => {
        if(!isScrolledIntoView(valueElement))
        {
            $(valueElement).addClass('animate');
        }  
    });    
});

// Check if element is on user viewport
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/*****************************************/
/**************** LOADED *****************/
/*****************************************/

// Append when document is ready
$(function() {
    // Remove class animate on scroll to animate element
    $(window).scroll(function() {  
        $.each(components, (index, value) => {
            const listElement = $(value);
            listElement.each((indexElement, valueElement) => {
                if(isScrolledIntoView(valueElement))
                {
                    $(valueElement).removeClass('animate');
                }  
            })    
        })
    });
});