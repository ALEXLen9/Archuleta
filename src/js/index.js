const jQuery = require('jquery');

const { drawChart } = require('./chart');
const { initSidebar } = require('./sidebar');

window.$ = window.jQuery = jQuery;

initSidebar();
drawChart();