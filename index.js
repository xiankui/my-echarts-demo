
/////////////////////////////////////////  echart
var myCharts = {};

myCharts.column = echarts.init(document.getElementById('echart-column'));

myCharts.pie = echarts.init(document.getElementById('echart-pie'));

myCharts.line = echarts.init(document.getElementById('echart-line'));


// var dataAPI = {
//     total: '/ReportAssistant/ReportBaseInfo',
//     column: '/ReportAssistant/ProjectDashBoard',
//     pie: '/ReportAssistant/ProjectGMVPercent',
//     line: '/ReportAssistant/ProjectAllYearData'
// };

var dataAPI = {
    total: './mockdata.js',
    column: './mockdata.js',
    pie: './mockdata.js',
    line: './mockdata.js'
}

// all data for echarts cached
// var cacheData = {
//     column: {
//         today: null
//     },
//     pie: {
//         today: null
//     },
//     line: {
//         total: null
//     }
// }

// 模拟数据
var cacheData = {
    column: {
        today: [{
            ProjectName: '出境游',
            GMV: 305500,
            Commission: 15500,
            CommissionRate: 0.015,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '国内游',
            GMV: 136300,
            Commission: 10300,
            CommissionRate: 0.013,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '邮轮',
            GMV: 78500,
            Commission: 7500,
            CommissionRate: 0.075,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '跟团游',
            GMV: 47300,
            Commission: 6300,
            CommissionRate: 0.023,
            UpdateTime: '2017-04-18'
        }, {
           ProjectName: '自由行',
            GMV: 52500,
            Commission: 9500,
            CommissionRate: 0.045,
            UpdateTime: '2017-04-18' 
        }],
        month: [{
            ProjectName: '出境游',
            GMV: 505500 * 10,
            Commission: 15500 * 30,
            CommissionRate: 0.015,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '国内游',
            GMV: 363000 * 50,
            Commission: 10300 * 30,
            CommissionRate: 0.013,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '邮轮',
            GMV: 78500 * 30,
            Commission: 7500 * 30,
            CommissionRate: 0.075,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '跟团游',
            GMV: 47300 * 30,
            Commission: 6300 * 30,
            CommissionRate: 0.023,
            UpdateTime: '2017-04-18'
        }, {
           ProjectName: '自由行',
            GMV: 52500 * 30,
            Commission: 9500 * 30,
            CommissionRate: 0.045,
            UpdateTime: '2017-04-18' 
        }],
    },
    pie: {
        today: [{
            ProjectName: '出境游',
            GMV: 30550,
            GMVRate: 0.01,
            Revenue: 2000,
            RevenueRate: 0.015,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '国内游',
            GMV: 136300,
            GMVRate: 0.01,
            Revenue: 2000,
            RevenueRate: 0.013,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '邮轮',
            GMV: 78500,
            GMVRate: 0.01,
            Revenue: 2000,
            RevenueRate: 0.075,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '跟团游',
            GMV: 47300,
            GMVRate: 0.01,
            Revenue: 2000,
            RevenueRate: 0.023,
            UpdateTime: '2017-04-18'
        }, {
           ProjectName: '自由行',
            GMV: 52500,
            GMVRate: 0.01,
            Revenue: 2000,
            RevenueRate: 0.045,
            UpdateTime: '2017-04-18' 
        }],
        month: [{
            ProjectName: '出境游',
            GMV: 305500 * 100,
            GMVRate: 0.05,
            Revenue: 2000,
            RevenueRate: 0.015,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '国内游',
            GMV: 163000 * 10,
            GMVRate: 0.01,
            Revenue: 2000,
            RevenueRate: 0.013,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '邮轮',
            GMV: 78500 * 30,
            GMVRate: 0.01,
            Revenue: 2000,
            RevenueRate: 0.075,
            UpdateTime: '2017-04-18'
        }, {
            ProjectName: '跟团游',
            GMV: 47300 * 30,
            GMVRate: 0.01,
            Revenue: 2000,
            RevenueRate: 0.023,
            UpdateTime: '2017-04-18'
        }, {
           ProjectName: '自由行',
            GMV: 52500 * 30,
            GMVRate: 0.01,
            Revenue: 2000,
            RevenueRate: 0.045,
            UpdateTime: '2017-04-18' 
        }],
    },
    line: {
        total: [{
            ProjectName: '出境游',
            Month: '2017-01-01',
            BudgetCompetedPercent: 0.5,
            RevenueCompetedPercent: 0.4,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '国内游',
            Month: '2017-02-01',
            BudgetCompetedPercent: 0.7,
            RevenueCompetedPercent: 0.2,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '邮轮',
            Month: '2017-03-01',
            BudgetCompetedPercent: 0.3,
            RevenueCompetedPercent: 0.1,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '跟团游',
            Month: '2017-04-01',
            BudgetCompetedPercent: 0.5,
            RevenueCompetedPercent: 0.4,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '自由行',
            Month: '2017-05-01',
            BudgetCompetedPercent: 0.6,
            RevenueCompetedPercent: 0.3,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '自由行',
            Month: '2017-06-01',
            BudgetCompetedPercent: 0.5,
            RevenueCompetedPercent: 0.2,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '自由行',
            Month: '2017-07-01',
            BudgetCompetedPercent: 0.5,
            RevenueCompetedPercent: 0.4,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '自由行',
            Month: '2017-08-01',
            BudgetCompetedPercent: 0.5,
            RevenueCompetedPercent: 0.4,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '自由行',
            Month: '2017-09-01',
            BudgetCompetedPercent: 0.8,
            RevenueCompetedPercent: 0.6,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '自由行',
            Month: '2017-10-01',
            BudgetCompetedPercent: 0.5,
            RevenueCompetedPercent: 0.4,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '自由行',
            Month: '2017-11-01',
            BudgetCompetedPercent: 0.5,
            RevenueCompetedPercent: 0.2,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }, {
            ProjectName: '自由行',
            Month: '2017-12-01',
            BudgetCompetedPercent: 0.9,
            RevenueCompetedPercent: 0.8,
            Budget: 1000000,
            ActualGMV: 800000,
            RevenueTarget: 500000,
            ActualCommission: 400000,
            UpdateTime: '2017-04-18' 
        }]
    }
};

cacheData.line.total.projectName = '项目总';
cacheData.line.total.updateTime = '2017-4-18';



// 4.56%
function getPercent (num) {
    var num = parseInt(num * 10000);
    if (num !== 10000) {
        num = (num/100).toFixed(2);
    } else {
        num = 100;
    }
    return (num + '%');
}

function getWanyuan (num) {
    num = Number(num) * 10000 / 100000000;
    num = parseFloat(num, 10);
    return num.toFixed(2);
}

// 加载总数据
$.ajax({
    type: 'get',
    url: dataAPI.total,
    dataType: 'jsonp',
    cache: false,
    error: function (data) {
        // console.log(data)
        var data = {
            CurrentMonthProcessedPercent: 0.8,
            CurrentMonthCompletedPercent: 0.6,
            UpdateTime: '2017-04-18',
            TodayNationalGMV: 100000000,
            TodayNationalCommission: 10000000,
            TodayNationalCommissionRate: 0.1,
            CurrentMonthNationalGMV: 100000000,
            CurrentMonthNationalCommission: 10000000,
            CurrentMonthNationalCommissionRate: 0.1,
        }

        var $boardmain = $('.sec-board-main'),
            $boardmonth = $('.sec-board-month');

        // 时间和完成率控制在0 - 100
        if (data.CurrentMonthProcessedPercent > 1) {
            data.CurrentMonthProcessedPercent = 1;
        }
        if (data.CurrentMonthProcessedPercent < 0) {
            data.CurrentMonthProcessedPercent = 0;
        }
        if (data.CurrentMonthCompletedPercent > 1) {
            data.CurrentMonthCompletedPercent = 1;
        }
        if (data.CurrentMonthCompletedPercent < 0) {
            data.CurrentMonthCompletedPercent = 0;
        }

        $boardmain.find('.update-time-str').text(data.UpdateTime);
        $boardmain.find('.total-count').text(getWanyuan(data.TodayNationalGMV));
        $boardmain.find('.commission-count').text(getWanyuan(data.TodayNationalCommission));
        $boardmain.find('.commission-rate .rate').text(getPercent(data.TodayNationalCommissionRate));

        $boardmonth.find('.month-gmv-num').text(getWanyuan(data.CurrentMonthNationalGMV));
        $boardmonth.find('.month-commission-num').text(getWanyuan(data.CurrentMonthNationalCommission));
        $boardmonth.find('.month-commission-rate-num').text(getPercent(data.CurrentMonthNationalCommissionRate));
        $boardmonth.find('.time-line-progress')
            .attr('value', getPercent(data.CurrentMonthProcessedPercent))
            .css('width', getPercent(data.CurrentMonthProcessedPercent));
        $boardmonth.find('.complete-line-progress')
            .attr('value', getPercent(data.CurrentMonthCompletedPercent))
            .css('width', getPercent(data.CurrentMonthCompletedPercent));
    },
    success: function (err) {
        console.log(err);
    }
});

///////////////////////////////////////////////  时间切换
$('.tab-select-area').on('click', '.btn-echart', function (e) {
    e.preventDefault();
    var self = $(this);
    if (self.hasClass('active')) {
        return;
    }
    // change class
    self.parent().find('.btn-echart').removeClass('active');
    self.addClass('active');

    // render echart
    var chartType = self.data('chart'),
        tabType = self.data('tab');

    renderChart(chartType, tabType);
});

//////////////////////////////////////////////  月度完成率部门切换
$competionTab = $('.competion-tab');
$competionSelected = $('.btn-select-completion');
$competionSelected.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var self = $(this);
    var isPull = self.hasClass('spread');
    $("#echart-line div:nth-child(2)").hide();
    if (isPull) {
        self.removeClass('spread');
        $competionTab.hide();
        return false;
    }
    self.addClass('spread');
    $competionTab.show();
});
$competionTab.on('click', '.tab-item', function (e) {
    var self = $(this),
        tab = self.data('tab'),
        name = self.text();
    $("#echart-line div:nth-child(2)").hide();
    $competionSelected.data('status', tab).find('.selected').text(name);
    $competionSelected.removeClass('spread');
    $competionTab.find('.tab-item').removeClass('active');
    $competionTab.hide();
    self.addClass('active');

    // render chartLine
    renderChart('line', tab);
});
$("body").on("click",function(){
    $competionSelected.removeClass('spread');
    $competionTab.hide();
})
////////////////////////////// 项目流水图表与表格的切换
// 默认显示图表
$('#btn-changeDaybook').on('click', function (e) {
    e.preventDefault();

    var self = $(this),
        data = self.data();

    var $chart = $('#echart-pie'),
        $execel = $('#execel-daybook');
    if (data.status === 'chart') {
        // 切换到表格
        $execel.removeClass('none');
        $chart.addClass('none');

        self.data('status', 'execel');
        self.text(data.textChart);
    } else {
        // 切换到图表
        $chart.removeClass('none');
        $execel.addClass('none');

        self.data('status', 'chart');
        self.text(data.textExecel);
    }

    myScroll.refresh();
});

//////////////////////////////////////////////////////////////////////  renderChart
var formatData = {
    column:  function (data) {
        var result = {
            commission: [],
            gmv: [],
            commissionRate: [],
            projectName: [],
            updateTime: ''
        };
        for (var i=0, len=data.length; i<len; i++) {
            // 邮 轮 ==> 邮  轮
            // if (data[i].ProjectName === '邮轮') {
            //     data[i].ProjectName = '邮    轮';
            // }

            result.projectName.push(data[i].ProjectName);
            result.gmv.push(data[i].GMV);
            result.commission.push(data[i].Commission * 4);
            result.commissionRate.push(getPercent(data[i].CommissionRate));
        }
        result.updateTime = data[0].UpdateTime;
        return result;
    },
    pie: function (data) {
        // console.log(data)
        var result = {
            projectName: [],
            gmv: [],
            updateTime: '',
            timeZoom: ''
        };
        for (var i=0, len=data.length; i<len; i++) {
            result.projectName.push(data[i].ProjectName);
            result.gmv.push(data[i].GMV);
        }
        result.updateTime = data[0].UpdateTime;
        result.timeZoom = data[0].TimeZoom;
        return result;
    },
    line: function (data) {
        var result = {
            projectName: data.projectName,
            updateTime: data.updateTime,
            arrBudget: [], // 总预算
            arrActualGMV: [], // 实际总GMV
            arrRevenueTarget: [], // 佣金目标
            arrActualCommission: [], // 实际总佣金
            timeLine: [], // x时间轴
            data: [], //
        };

        for (var i=0, len=data.length; i<len; i++) {
            result.timeLine.push(data[i].Month);
            result.arrBudget.push(data[i].Budget);
            result.arrActualGMV.push(data[i].ActualGMV);
            result.arrRevenueTarget.push(data[i].RevenueTarget);
            result.arrActualCommission.push(data[i].ActualCommission);
            result.data.push(data[i]);
        }
        return result;
    }
};
var getChartOPtion = {
    column: function (data) {
        var _data = formatData.column(data);
        var option = {
            tooltip : {
                show: true,
                trigger: 'axis',
                enterable: true,
                alwaysShowContent: false,
                hideDelay: 0,
                triggerOn: 'mouseout',
                formatter: function (data) {
                    var rates = _data.commissionRate; //['1.5%', '1.3%', '7.5%', '2.3%', '4.5%'];
                    var date = _data.updateTime;
                    var html = '';

                    html += '<strong style="font-weight:700;color:#000;">'+ data[0].name + '</strong><br />';
                    // html += '<strong style="font-weight:700;color:#000;">'+ date +'</strong><br />';

                    if (data[1] !== undefined) {
                        html += '总GMV:' + getWanyuan(data[0].value) + '万元<br />';
                        html += '总佣金:'+ getWanyuan(data[1].value/4) + '万元<br />';
                        html += '佣金率:' + rates[data[0].dataIndex];
                    } else if (data[0] !== undefined) {
                        // legend 筛选
                        if (data[0].seriesName.indexOf('GMV') !== -1) {
                            // GMV
                            html += '总GMV:' + getWanyuan(data[0].value) + '万元<br />';
                        } else if (data[0].seriesName.indexOf('佣金') !== -1) {
                            html += '总佣金:'+ getWanyuan(data[0].value/4) + '万元<br />';
                            html += '佣金率:' + rates[data[0].dataIndex];
                        }
                    } else {
                        // nothing to show
                    }

                    return html;
                },
                backgroundColor: 'rgb(255, 255, 255)',
                textStyle: {
                    color: '#666'
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);padding: 10px;border-radius:0;top:-50%;',
                position: 'right',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
                    shadowStyle: {
                        color: '#ff6815',
                        // shadowColor: '#ff6815',
                        // shadowOffsetX: 0,
                        // shadowOffsetY: 0,
                        // shadowBlur: 0,
                        opacity: 0.1
                    }
                }
            },

            legend: {
                selectedMode: true,
                selected: {
                    'GMV(万元)': true, //selectChartLegend(_data.gmv),
                    '佣金(万元)': true //selectChartLegend(_data.commission)
                },
                data:[{
                    name: 'GMV(万元)',
                    // icon: 'circle',
                    textStyle:{color:'#666', fontSize: 12}
                }, {
                    name: '佣金(万元)',
                    // icon: 'circle',
                    textStyle:{color:'#666', fontSize: 12,}
                }],
                orient: 'horizontal',
                right: 0,
                itemWidth: 14,
                itemHeight: 14,
                itemGap: 10,
                padding: [0, 0, 0, 0]
            },
            grid: {
                left: '15%',
                right: '20%',
                bottom: '2%',
                top: '15%',
                containLabel: false
            },
            yAxis: [
                {
                    type : 'category',
                    inverse: true,
                    data : _data.projectName, //['出境游','国内游','邮轮','跟团游','自由行'],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#dcdcdc',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize: 12,
                            color: '#666'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    }
                }
            ],
            xAxis : [
                {
                    type : 'value',
                    min: 'dataMin',
                    max: 'auto',
                    scale: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name:'GMV(万元)',
                    type:'bar',
                    data: _data.gmv,
                    // yAxisIndex: 0,
                    itemStyle: {
                        normal: {
                            // barBorderRadius: [0, 5, 5, 0]
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                fontSize: 12
                            },
                            formatter: function (data) {
                                return getWanyuan(data.value);
                            }
                        }
                    }
                },
                {
                    name:'佣金(万元)',
                    type:'bar',
                    data:_data.commission,
                    // yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            // barBorderRadius: [0, 5, 5, 0]
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                fontSize: 12
                            },
                            formatter: function (data) {
                                var rates = _data.commissionRate; //['1.5%', '1.3%', '7.5%', '2.3%', '4.5%'];
                                var index = data.dataIndex;
                                return (getWanyuan(data.value/4) + '  ' + rates[index]);
                            }
                        }
                    }
                }
            ],
            // dataZoom: {
            //     show: true,
            //     xAxisIndex: 0,
            //     start: 50,
            //     end: 100,
            //     zoomLock: true
            // },
            color: ['#ff6815', '#50b400'],
        };
        return option;
    },
    pie: function (data) {
        var _data = formatData.pie(data);
        // 最小显示饼图为0
        for (var i=0, len=_data.gmv.length; i<len; i++) {
            if (_data.gmv[i] < 0) {
                _data.gmv[i] = 0;
            }
        }
        var selectLegend = function (num) {
            num = parseInt(num, 10);
            if (num < 0) {
                return false;
            }
            return true;
        };

        var option = {
            tooltip: {
                show: false,
                // showContent: false,
                trigger: 'item',
                triggerOn: 'mousemove',
                position: ['40%', '50%'],
                backgroundColor: 'rgba(255,255,255,0)',
                extraCssText: '-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);text-align:center;',
                textStyle: {
                    color: '#666',
                    fontSize: 12
                },
                formatter: function (data) {
                    var value = getWanyuan(data.value);
                    return (value + '<br />(万元)');
                },//'{c}<br />(万元)',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(255,255,255,0)',
                        opacity: 0
                    }
                }
            },
            legend: {
                orient: 'vertical',
                top: 'middle',
                left: 'right',
                align: 'right',
                itemWidth: 16,
                itemHeight: 16,
                itemGap: 5,
                padding: [0,0,0,25],
                textStyle: {
                    color: '#666',
                    fontSize: 12
                },
                selectedMode: true,
                // selected: {
                //     '出境游': selectLegend(_data.gmv[0]),
                //     '国内游': selectLegend(_data.gmv[1]),
                //     '邮  轮': selectLegend(_data.gmv[2]),
                //     '跟团游': selectLegend(_data.gmv[3]),
                //     '自由行': selectLegend(_data.gmv[4])
                // },
                data : _data.projectName //['出境游','国内游','邮轮','跟团游','自由行'],
            },
            series: [
                {
                    name:'项目流水',
                    type:'pie',
                    startAngle: 90,
                    legendHoverLink: false,
                    roseType: false,
                    center: ['40%', '50%'],
                    radius: ['40%', '60%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter: '{d}%',
                            textStyle: {
                                color: '#f00',
                                fontSize: 12
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 5,
                            length2: 10
                        }
                    },
                    data:[
                        { name: _data.projectName[0], value: _data.gmv[0] },
                        { name: _data.projectName[1], value: _data.gmv[1] },
                        { name: _data.projectName[2], value: _data.gmv[2] },
                        { name: _data.projectName[3], value: _data.gmv[3] },
                        { name: _data.projectName[4], value: _data.gmv[4] }
                    ]
                }
            ],
            color: ['#f8b52c', '#a7e86c', '#4ed4c4', '#ff6e6b', '#9b8fd2']
        };
        return option;
    },
    line: function (data) {
        var _data = formatData.line(data);
        // console.log(data)
        var option = {
            legend: {
                data:[{
                    name: 'GMV完成率',
                    // icon: 'circle',
                    textStyle:{color:'#666', fontSize: 12}
                }, {
                    name: '佣金完成率',
                    // icon: 'circle',
                    textStyle:{color:'#666', fontSize: 12,}
                }],
                selectedMode: true,
                selected: {
                    'GMV完成率': true,
                    '佣金完成率': true
                },
                orient: 'horizontal',
                left: 0
            },
            tooltip: {
                trigger: 'axis',
                triggerOn: 'mousemove',
                axisPointer: {
                    animation: false
                },
                formatter: function (data) {
                    // var rates = ['1.5%', '1.3%', '7.5%', '2.3%', '4.5%', '1.5%', '1.3%', '7.5%', '2.3%', '4.5%', '1.5%', '1.3%', '7.5%', '2.3%', '4.5%'];
                    // var date = '2017-04-18';

                    var timeLine = _data.timeLine;
                    var arrBudget = _data.arrBudget;
                    var arrActualGMV = _data.arrActualGMV;
                    var arrRevenueTarget = _data.arrRevenueTarget;
                    var arrActualCommission = _data.arrActualCommission;
                    var html = '';
                    html += '<strong style="font-weight:700;color:#000;">'+ _data.projectName +'</strong><br />';
                    html += '<strong style="font-weight:700;color:#000;">'+ timeLine[data[0].dataIndex] +'</strong><br />';
                    if (data[1] !== undefined) {
                        html += 'GMV预算总:' + getWanyuan(arrBudget[data[0].dataIndex]) + '万元<br />';
                        html += 'GMV完成总:' + getWanyuan(arrActualGMV[data[0].dataIndex]) + '万元<br />';
                        html += 'GMV完成率:' + getPercent(data[0].value) + '<br />';
                        html += '佣金预算总:'+ getWanyuan(arrRevenueTarget[data[0].dataIndex]) + '万元<br />';
                        html += '佣金完成总:' + getWanyuan(arrActualCommission[data[0].dataIndex]) + '万元<br />';
                        html += '佣金完成率:' + getPercent(data[1].value);
                    } else if (data[0] !== undefined) {
                        if (data[0].seriesName === "GMV完成率") {
                            html += 'GMV预算总:' + getWanyuan(arrBudget[data[0].dataIndex]) + '万元<br />';
                            html += 'GMV完成总:' + getWanyuan(arrActualGMV[data[0].dataIndex]) + '万元<br />';
                            html += 'GMV完成率:' + getPercent(data[0].value) + '<br />';
                        } else if (data[0].seriesName === "佣金完成率") {
                            html += '佣金预算总:'+ getWanyuan(arrRevenueTarget[data[0].dataIndex]) + '万元<br />';
                            html += '佣金完成总:' + getWanyuan(arrActualCommission[data[0].dataIndex]) + '万元<br />';
                            html += '佣金完成率:' + getPercent(data[0].value);
                        }
                    } else {

                    }

                    return html;
                },
                backgroundColor: 'rgb(255, 255, 255)',
                textStyle: {
                    color: '#666'
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);padding: 10px;border-radius:0;',
                position: 'right',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'line',        // 默认为直线，可选为：'line' | 'shadow'
                    lineStyle: {
                        color: '#ff6815',
                        opacity: 0.3
                    }
                }
            },
            grid: {
                top: '20%',
                left: '2%',
                right: '2%',
                bottom: '20%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: _data.timeLine,
                axisLine: {
                    lineStyle: {
                        color: '#dcdcdc'
                    }
                },
                axisTick: {
                    interval: 0,
                    lineStyle: {
                        color: '#dcdcdc'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 8
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: [{
                type: 'value',
                boundaryGap: [0, '5%'],
                axisLine: {
                    lineStyle: {
                        color: '#dcdcdc'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#dcdcdc'
                    }
                },
                axisLabel: {
                    show: true,
                    inside: true,
                    formatter: function (value, index) {
                        return value == 0 ? '' : Math.floor(value*100) + '%';
                    },
                    textStyle: {
                        color: '#666',
                        fontSize: 8
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#dcdcdc'
                    }
                }
            }, {
                type: 'value',
                boundaryGap: [0, '5%'],
                axisLine: {
                    lineStyle: {
                        color: '#dcdcdc'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#dcdcdc'
                    }
                },
                axisLabel: {
                    show: false,
                    inside: true,
                    formatter: function (value, index) {
                        return value == 0 ? '' : Math.floor(value*100) + '%';
                    },
                },
                splitLine: {
                    show: false
                }
            }],
            dataZoom: {
                show: true,
                xAxisIndex: 0,
                start: 50,
                end: 100,
                zoomLock: true
            },
            series: [
                {
                    name:'GMV完成率',
                    type:'line',
                    data:[
                        { value: _data.data[0].BudgetCompetedPercent, date: _data.data[0].Month },
                        { value: _data.data[1].BudgetCompetedPercent, date: _data.data[1].Month },
                        { value: _data.data[2].BudgetCompetedPercent, date: _data.data[2].Month },
                        { value: _data.data[3].BudgetCompetedPercent, date: _data.data[3].Month },
                        { value: _data.data[4].BudgetCompetedPercent, date: _data.data[4].Month },
                        { value: _data.data[5].BudgetCompetedPercent, date: _data.data[5].Month },
                        { value: _data.data[6].BudgetCompetedPercent, date: _data.data[6].Month },
                        { value: _data.data[7].BudgetCompetedPercent, date: _data.data[7].Month },
                        { value: _data.data[8].BudgetCompetedPercent, date: _data.data[8].Month },
                        { value: _data.data[9].BudgetCompetedPercent, date: _data.data[9].Month },
                        { value: _data.data[10].BudgetCompetedPercent, date: _data.data[10].Month },
                        { value: _data.data[11].BudgetCompetedPercent, date: _data.data[11].Month }
                    ]
                },
                {
                    name:'佣金完成率',
                    type:'line',
                    data:[
                        { value: _data.data[0].RevenueCompetedPercent, date: _data.data[0].Month },
                        { value: _data.data[1].RevenueCompetedPercent, date: _data.data[1].Month },
                        { value: _data.data[2].RevenueCompetedPercent, date: _data.data[2].Month },
                        { value: _data.data[3].RevenueCompetedPercent, date: _data.data[3].Month },
                        { value: _data.data[4].RevenueCompetedPercent, date: _data.data[4].Month },
                        { value: _data.data[5].RevenueCompetedPercent, date: _data.data[5].Month },
                        { value: _data.data[6].RevenueCompetedPercent, date: _data.data[6].Month },
                        { value: _data.data[7].RevenueCompetedPercent, date: _data.data[7].Month },
                        { value: _data.data[8].RevenueCompetedPercent, date: _data.data[8].Month },
                        { value: _data.data[9].RevenueCompetedPercent, date: _data.data[9].Month },
                        { value: _data.data[10].RevenueCompetedPercent, date: _data.data[10].Month },
                        { value: _data.data[11].RevenueCompetedPercent, date: _data.data[11].Month }
                    ]
                }
            ],
            color: ['#ff6815', '#50b400']
        };
        return option;
        // return chartOptions.line;
    }
};

function renderChart (chartType, tabType) {
    myCharts[chartType].showLoading();

    var data = cacheData[chartType][tabType];
    if (!!data) {
        var option = getChartOPtion[chartType](data);
        myCharts[chartType].setOption(option);

        myCharts[chartType].hideLoading();

        if (chartType === 'pie') {
            // render execel
            renderExecel(data);
        }
        return;
    }

    var api = dataAPI[chartType];
    $.ajax({
        type: 'get',
        url: api,
        data: {
            tab: tabType
        },
        dataType: 'jsonp',
        cache: false,
        success: function (data) {
            console.log(data);
            // 月度完成率明细为一次性请求，需要过滤数据
            if (api === dataAPI.line) {
                var filteredData = filterLineChartData(data);
                $.extend(cacheData.line, filteredData);
            } else {
                cacheData[chartType][tabType] = data;
            }

            var _chartdata = cacheData[chartType][tabType];

            if (!_chartdata) {
                console.log('get remote data error');
            }

            var option = getChartOPtion[chartType](_chartdata);
            myCharts[chartType].setOption(option);

            myCharts[chartType].hideLoading();

            if (chartType === 'pie') {
                // render execel
                renderExecel(data);
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}
function selectChartLegend (data) {
    var selected = true;
    for (var i=0, len=data.length; i<len; i++) {
        var num = parseInt(data[i], 10);
        if (num < 0) {
            selected = false;
            break;
        }
    }
    return selected;
};
/**
 * 月度完成率一次请求了所有数据，然后分类
 * @return cacheData.line.total
 *         cacheData.line.dujia ...
*/
function filterLineChartData (data) {
    var len = data.length,
        projectNames = [],
        _data = {},
        nameHash = {
            '项目总': 'total',
            '出境游': 'dujia',
            '国内游': 'guoneiyou',
            '邮轮': 'youlun',
            '跟团游': 'gentuanyou',
            '自由行': 'ziyouxing'
        },
        namestr = '',
        name = '',
        tabHtml = '',
        i;
    for (i=0; i<len; i++) {
        // 邮 轮 ==> 邮  轮
        // if (data[i].ProjectName === '邮轮') {
        //     data[i].ProjectName = '邮    轮';
        // }

        namestr = data[i].ProjectName;
        projectNames.push(namestr);
        name = nameHash[namestr];
        _data[name] = data[i].AllYearData;
        _data[name].updateTime = data[i].UpdateTime;
        _data[name].projectName = data[i].ProjectName;

        tabHtml += '<li class="tab-item '+ (name === 'total' ? 'active' : '') +'" data-chart="line" data-tab="'+ name +'"><span>'+ namestr +'</span></li>';
    }


    $('.competion-tab').find('ul').html(tabHtml);
    return _data;
};
function renderExecel (data) {
    var trs = buildExecel(data);

    var html = '';
    html += '<table class="execel-table">';
    html +=  '<thead>';
    html +=    '<tr>';
    html +=      '<th>项目</th>';
    html +=      '<th>流水(万元)</th>';
    html +=      '<th>占比</th>';
    html +=      '<th>佣金(万元)</th>';
    html +=      '<th>佣金占比</th>';
    html +=    '</tr>';
    html +=  '</thead>';
    html +=  '<tbody>';
    html += trs;

    html +=  '</tbody>';
    html += '</table>';
    // html += '<div class="execel-info">';
    // html +=   '<h2 class="date">'+ data[0].TimeZoom +'</h2>';
    // html +=   '<ul>';
    // html +=     '<li>总GMV：<i class="orange">'+ _data.total +'</i><i class="small">(万元)</i><br />其中</li>';
    // html +=     _data.info;
    // html +=   '</ul>';
    // html += '</div>';

    $('#execel-daybook').html(html);
}
function buildExecel (data) {

    var trs = '';
    // var info = '';
    var total = {
        projectName: "总计",
        gmv: 0,
        gmvRate: 0,
        revenue: 0,
        revenueRate: 0
    };
    for (var i=0,len=data.length; i<len; i++) {
        trs += '<tr>';
        trs +=  '<td>'+ data[i].ProjectName +'</td>';
        trs +=  '<td>'+ getWanyuan(data[i].GMV) +'</td>';
        trs +=  '<td>'+ getPercent(data[i].GMVRate) +'</td>';
        trs +=  '<td>'+ getWanyuan(data[i].Revenue) +'</td>';
        trs +=  '<td>'+ getPercent(data[i].RevenueRate) +'</td>';
        trs += '</tr>';

        total.gmv += data[i].GMV;
        total.gmvRate += data[i].GMVRate;
        total.revenue += data[i].Revenue;
        total.revenueRate += data[i].RevenueRate;

        // info += '<li><span class="align">'+ data[i].ProjectName +'：<i class="orange">'+ getWanyuan(data[i].GMV) +'</i>(万元)，</span>占比<i class="green">'+ getPercent(data[i].GMVRate).slice(0, -1) + '</i>%</li>';
        // info += '<li>';
        // info += '<span><i class="word3">'+ data[i].ProjectName +'</i>：</span>';
        // info += '<span><i class="orange">'+ getWanyuan(data[i].GMV) +'</i><i class="small">(万元)</i></span>';
        // info += '<span>占比</span>';
        // info += '<span><i class="green">'+ getPercent(data[i].GMVRate).slice(0, -1) +'</i><i class="small">%</i></span>';
        // info += '</li>';
        // total += data[i].GMV;
    }

    // 总计
    trs += '<tr>';
    trs +=  '<td>'+ total.projectName +'</td>';
    trs +=  '<td>'+ getWanyuan(total.gmv) +'</td>';
    trs +=  '<td>100.00%</td>';
    trs +=  '<td>'+ getWanyuan(total.revenue) +'</td>';
    trs +=  '<td>100.00%</td>';
    trs += '</tr>';

    return trs;
}

renderChart('column', 'today');
myCharts['pie'].showLoading();
renderChart('pie', 'today');
myCharts['line'].showLoading();
renderChart('line', 'total');

