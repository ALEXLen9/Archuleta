var Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);


function drawChart () {

    const plotOptions = {
        series: {
            point: {
                events: {
                    mouseOver: function () {
                        var chart = this.series.chart;
                        if (!chart.lbl) {
                            chart.lbl = chart.renderer.label('')
                                .attr({
                                    padding: 10,
                                    r: 10,
                                    fill: Highcharts.getOptions().colors[1]
                                })
                                .css({
                                    color: '#FFFFFF',
                                    borderTop: '1px solid #ed1d24'
                                })
                                .add();
                        }
                        chart.lbl
                            .show()
                            .attr({
                                text: 'x: ' + this.x + ', y: ' + this.y
                            });
                    }
                }
            },
            events: {
                mouseOut: function () {
                    if (this.chart.lbl) {
                        this.chart.lbl.hide();
                    }
                }
            }
        }
    };

    window.a = Highcharts.chart('container', {

        title: {
            text: 'Latest Financials'
        },

        plotOptions,

        yAxis: {
            title: {
                text: '.'
            }
        },

        xAxis: {
            categories: ['Jan 18', 'Feb 18', 'Mar 18', 'Apr 18', 'May 18', 'Jun 18', 'Jul 18', 'Aug 18', 'Sep 18', 'Oct 18', 'Nov 18', 'Dec 18']
        },



        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
            split: true
        },

        series: [{
            name: 'REVENUE',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
                name: 'EXPENSES',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
                name: 'NET PROFIT',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }],
    });

    console.log(a);
}

module.exports.drawChart = drawChart;