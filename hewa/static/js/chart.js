// function changeFunc(){
//     console.log('here');
//         var selectBox = $('#selectBox')[0];
//         var selectedValue = selectBox.options[selectBox.selectedIndex].value;
//         console.log(selectedValue)
//     }


function generateChart(url, title){

    $.getJSON(url, function(data){
        // $('#container').hide();
        $('#container').highcharts({
            title: {
                text: title,
                x: -20 //center
            },
            subtitle: {
                text: 'Raspberry pi readings',
                x: -20
            },
            xAxis: {
                categories: data['dates']
            },
            yAxis: {
                title: {
                    text: 'Readings'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'units'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: data['payload']
        });
        // $('#container').slideDown();
    });

}

$(function(){
    $('#selectBox').change(function(){
        var selectedBox = $('#selectBox')[0];
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        if (selectedValue === 'monthly'){
            console.log('starting monthly');
            generateChart('/chart-data/monthly', 'Monthly Total readings');
        }else{
            generateChart('/chart-data', 'Weekly Total readings');
        }
    })
});


$(document).ready(function(){
    $.getJSON('/chart-data', function(data){
       
        $('#container').highcharts({
            title: {
                text: 'Weekly total Readings',
                x: -20 //center
            },
            subtitle: {
                text: 'Raspberry pi readings',
                x: -20
            },
            xAxis: {
                categories: data['dates']//['Sun', 'Sat', 'Fri', 'Thur', 'Wed', 'Tue', 'Mon']
            },
            yAxis: {
                title: {
                    text: 'Readings'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'units'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: data['payload']
        });
    });

});