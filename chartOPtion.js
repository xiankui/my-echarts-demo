var myCharts = {};
var chartOptions = {};

/////////////////////////////////////////  echart column for today
// 基于准备好的dom，初始化echarts实例
myCharts.column = echarts.init(document.getElementById('echart-column'));

// 指定图表的配置项和数据
chartOptions.column =  {
    tooltip : {
        show: true,
        trigger: 'axis',
        formatter: function (data) {
            var rates = ['1.5%', '1.3%', '7.5%', '2.3%', '4.5%'];
            var date = '2016-03-23';
            var html = '';
            html += '<strong style="font-weight:700;color:#000;">'+ data[0].name + '</strong><br />';
            html += '<strong style="font-weight:700;color:#000;">'+ date +'</strong><br />';
            html += '总GMV:' + data[0].value + '万元<br />';
            html += '总佣金:'+ data[1].value + '万元<br />';
            html += '佣金率:' + rates[data[0].dataIndex];
            return html;
        },
        backgroundColor: 'rgb(255, 255, 255)',
        textStyle: {
            color: '#666'
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);padding: 10px;border-radius:0;',
        position: 'right',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                color: '#ff6815',
                // shadowColor: '#ff6815',
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowBlur: 2,
                opacity: 0.1
            }
        }
    },

    legend: {
        data:[{
            name: 'GMV(万元)',
            icon: 'circle',
            textStyle:{color:'#666', fontSize: 14}
        }, {
            name: '佣金(万元)',
            icon: 'circle',
            textStyle:{color:'#666', fontSize: 14,}
        }],
        orient: 'horizontal',
        right: 0,
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 10,
        padding: [0, 0, 0, 0]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: false
    },
    xAxis : [
        {
            type : 'category',
            data : ['出境游','国内游','邮轮','跟团游','自由行'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#dcdcdc',
                    width: 2,
                    type: 'solid'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
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
            data:[305.5, 136.3, 78.5, 47.3, 52.5],
            itemStyle: {
                normal: {
                    barBorderRadius: [5, 5, 0, 0]
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
        },
        {
            name:'佣金(万元)',
            type:'bar',
            data:[15.5, 10.3, 7.5, 6.3, 9.5],
            itemStyle: {
                normal: {
                    barBorderRadius: [5, 5, 0, 0]
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        lineHeight: 2
                    },
                    formatter: function (data) {
                        var rates = ['1.5%', '1.3%', '7.5%', '2.3%', '4.5%'];
                        var index = data.dataIndex;
                        return (rates[index] + '\n' + data.value);
                    }
                }
            }
        }
    ],
    color: ['#ff6815', '#50b400'],
};

// 使用刚指定的配置项和数据显示图表。
myCharts.column.setOption(chartOptions.column);


/////////////////////////////////  echart pie for daybook
myCharts.pie = echarts.init(document.getElementById('echart-pie'));
chartOptions.pie =  {
    tooltip: {
        show: false,
        // showContent: false,
        trigger: 'item',
        position: ['28%', '40%'],
        backgroundColor: 'rgba(255,255,255,0)',
        extraCssText: 'display:block;text-align:center;',
        textStyle: {
            color: '#666',
            fontSize: 14
        },
        formatter: '{c}<br />(万元)',
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
            fontSize: 16
        },
        data : ['出境游','国内游','邮轮','跟团游','自由行'],
    },
    series: [
        {
            name:'项目流水',
            type:'pie',
            startAngle: 180,
            legendHoverLink: false,
            roseType: false,
            center: ['35%', '50%'],
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: '{d}%',
                    textStyle: {
                        color: '#f00',
                        fontSize: 14
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 0,
                    length: 2
                }
            },
            data:[
                { name:'出境游', value:4000 },
                { name:'国内游', value:3000 },
                { name:'邮轮',   value:1500 },
                { name:'跟团游', value:600 },
                { name:'自由行', value:900 }
            ]
        }
    ],
    color: ['#f8b52c', '#a7e86c', '#4ed4c4', '#ff6e6b', '#9b8fd2']
};
myCharts.pie.setOption(chartOptions.pie);



/////////////////////////////////////////////////  echart line for all
myCharts.line = echarts.init(document.getElementById('echart-line'));
chartOptions.line =  {
    legend: {
        data:[{
            name: 'GMV完成率',
            icon: 'circle',
            textStyle:{color:'#666', fontSize: 14}
        }, {
            name: '营收完成率',
            icon: 'circle',
            textStyle:{color:'#666', fontSize: 14,}
        }],
        orient: 'horizontal',
        left: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        },
        formatter: function (data) {
            var rates = ['1.5%', '1.3%', '7.5%', '2.3%', '4.5%', '1.5%', '1.3%', '7.5%', '2.3%', '4.5%', '1.5%', '1.3%', '7.5%', '2.3%', '4.5%'];
            var date = '2016-03-23';
            var html = '';
            html += '<strong style="font-weight:700;color:#000;">出境游</strong><br />';
            html += '<strong style="font-weight:700;color:#000;">'+ date +'</strong><br />';
            html += '总预算:' + data[0].value + '万元<br />';
            html += '实际总GMV:' + data[0].value + '万元<br />';
            html += '预算总完成率:' + rates[data[0].dataIndex] + '<br />';
            html += '营收目标:'+ data[1].value + '万元<br />';
            html += '实际总佣金:' + data[0].value + '万元<br />';
            html += '营收完成率:' + rates[data[0].dataIndex];
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
        data: [
            '2015-04',
            '2015-05',
            '2015-06',
            '2015-07',
            '2016-08',
            '2016-09',
            '2015-10',
            '2015-11',
            '2015-12',
            '2016-01',
            '2016-02',
            '2016-03'
        ],
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
                color: '#dcdcdc'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
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
            lineStyle: {
                type: 'dashed'
            }
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
                { value: .30, date: '2015-04-01' },
                { value: .30, date: '2015-05-01' },
                { value: .55, date: '2015-06-01' },
                { value: .15, date: '2015-07-01' },
                { value: .70, date: '2016-08-01' },
                { value: .80, date: '2016-09-01' },
                { value: .30, date: '2015-10-01' },
                { value: .55, date: '2015-11-01' },
                { value: .15, date: '2015-12-01' },
                { value: .70, date: '2016-01-01' },
                { value: .80, date: '2016-02-01' },
                { value: .75, date: '2016-03-01' }
            ]
        },
        {
            name:'营收完成率',
            type:'line',
            data:[
                { value: .45, date: '2015-04-01' },
                { value: .45, date: '2015-05-01' },
                { value: .65, date: '2015-06-01' },
                { value: .70, date: '2015-07-01' },
                { value: .50, date: '2016-08-01' },
                { value: .90, date: '2016-09-01' },
                { value: .45, date: '2015-10-01' },
                { value: .65, date: '2015-11-01' },
                { value: .70, date: '2015-12-01' },
                { value: .50, date: '2016-01-01' },
                { value: .90, date: '2016-02-01' },
                { value: .95, date: '2016-03-01' }
            ]
        }
    ],
    color: ['#ff6815', '#50b400']
};
myCharts.line.setOption(chartOptions.line);
