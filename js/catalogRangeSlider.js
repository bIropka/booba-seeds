/***********************/
/* filter-cost scripts */
/***********************/

var filterCost = $("#filter-cost-item");
var minCost = $('#min-cost');
var maxCost = $('#max-cost');

filterCost.rangeSlider({
    bounds:{min: 0, max: 5000},
    defaultValues:{min: 500 , max: 2700},
    step: 50
});

filterCost.bind("valuesChanging", function(e, data){
    minCost.val( data.values.min );
    maxCost.val( data.values.max );
});

minCost.val( filterCost.rangeSlider('min') );
maxCost.val( filterCost.rangeSlider('max') );

minCost.change(function() {
    filterCost.rangeSlider("min", $(this).val());
});

maxCost.change(function() {
    filterCost.rangeSlider("max", $(this).val());
});

$('.aside-burger').click(function() {
    $(this).parents('aside').toggleClass('active');
    filterCost.rangeSlider('resize');
});

$(window).resize(function() {
    filterCost.rangeSlider('resize');
});