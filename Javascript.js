/**
 * Created by session2 on 10/7/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
        ['Fiscal Years', 'Population'],
        ['2008-09', 1556162],
        ['2009-10', 1459080],
        ['2010-11', 1543232],
        ['2011-12', 1660450],
        ['2012-13', 1506274],


    ]);

    var options = {
        title: 'L.A. Zoo attendance for the last 5 years.',
        chartArea: {width: '55%'},

        hAxis: {
            title: 'Total Attendance',
            minValue: 0
        },
        vAxis: {
            title: 'Fiscal Year'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}