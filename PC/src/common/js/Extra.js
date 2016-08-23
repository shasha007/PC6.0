/**
 * Created by huqiwen on 16/8/4.
 */
//进度条json
var Pie = {
    "Pie": [
        {"Name": "活动参与类(PU平台活动)", "PName": "活动参与类(PU平台活动)", "PValue": 50, "QName": "qname"},
        {"Name": "寒暑假社会实践类", "PName": "寒暑假社会实践类", "PValue": 30, "QName": "qname"},
        {"Name": "文体与创新创业竞赛类", "PName": "文体与创新创业竞赛类", "PValue": 40, "QName": "qname"},
        {"Name": "社会工作与技能培训类", "PName": "社会工作与技能培训类", "PValue": 70, "QName": "qname"},
        {"Name": "志愿者类", "PName": "志愿者类", "PValue": 80, "QName": "qname"},
    ]
}

//折线图json
var Line = {
    "Name": "这里是名字",
    "xname": [
        "学分",
        "积分"
    ],
    "xcolor": [
        "#3a9fdf",
        "#4ee4c8"
    ],
    "xvalue": [
        "2014.01", "2014.02", "2014.03", "2014.04", "2014.05", "2014.06"
    ],
    "yvalue": [
        {"value": ["100", "1200", "400", "500", "600", "170"]},
        {"value": ["300", "100", "600", "200", "700", "470"]}
    ]
}
//左侧饼状图 json
var LeftPie = {
    "xname": ['道德修养', '志愿服务', '技能培训', '学术创新', '实习就业', '文体创业', '身心发展', '其他'],
    "xcolor": [
        "#3a9fdf", "#4ee4c8", "#ea5504", "#f69d08", "#ff6d1d"
    ],
    "xvalue": [
        {value: 20, name: '道德修养'},
        {value: 20, name: '志愿服务'},
        {value: 20, name: '技能培训'},
        {value: 20, name: '学术创新'},
        {value: 20, name: '实习就业'},
        {value: 20, name: '文体创业'},
        {value: 20, name: '身心发展'},
        {value: 20, name: '其他'}
    ],

}
//进度条颜色
var PieColor = new Array("#3a9fdf", "#4ee4c8", "#ea5504", "#f69d08", "#ff6d1d");

//左侧饼状图颜色
var LeftPieColor = new Array("#70d0e9","#fdb163","#fcdf56","#fc8d56","#f05050","#cd8af8","#64f0c8","#70bbef","#c4ef50","#ff95b5");
//初始化进度条控件
$(function () {
    var _length = Pie.Pie.length;
    // 初始化上面5个饼状图
    for (var i = 0; i < _length; i++) {
        InitPie("H_ECharts" + i, Pie.Pie[i].Name, Pie.Pie[i].PValue, Pie.Pie[i].PValue, PieColor[i], Pie.Pie[i].QName, "80%", "70%");
    }
    //初始化下面折线图
    InitLine("H_ECharts_Line0", Line.Name, Line.xname, Line.xvalue, Line.xcolor, Line.yvalue);
    //初始化旁边饼状图
    InitLeftPie("H_ECharts", LeftPie.xname, SetColor(LeftPie.xvalue));

});

//用于处理饼状图颜色
function SetColor(value) {
    var _length = value.length;
    var _color;
    for (var i = 0; i < _length; i++) {
        _color = {"normal": {"color": LeftPieColor[i]}};
        value[i].itemStyle = _color;
    }
    return value;
}
//进度条初始化
function InitPie(id, name, pname, pvalue, pcolor, qname, outsize, insize) {
    var qvalue = 100 - pvalue;
    var _Chart = echarts.init(document.getElementById(id));
    _Chart.setOption({
        //hover
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>({d}%)"
        },

        series: [
            {
                name: name, //名字
                type: 'pie',
                radius: [insize, outsize], //内外直径
                avoidLabelOverlap: false,
                label: { //饼图图形上的文本标签
                    normal: {// normal, emphasis 普通 选中
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '32',
                            fontWeight: 'normal',
                            color: "#333"
                        }
                    },
                },
                data: [ //数据内容数组
                    {
                        value: pvalue,
                        name: pname,
                        itemStyle: {
                            normal: {
                                color: pcolor,

                            },
                        },
                    },
                    {
                        value: qvalue,
                        name: qname,
                        hoverAnimation: false,
                        legendHoverLink: false,
                        itemStyle: { // normal, emphasis 普通 选中
                            normal: {color: '#fff',smooth:true,}
                        },
                        label: {
                            normal: { // normal, emphasis 普通 选中
                                show: false
                            }
                        }
                    },
                ]
            }
        ]
    })
}

//折线图初始化
function InitLine(id, name, xname, xvalue, xcolor, yvalue) {
    var Chart = echarts.init(document.getElementById(id));
    Chart.setOption({
        title: {
            text: name
        },

        tooltip: { //是否显示提示框组件
//                'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
//                'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
            trigger: 'axis'
        },
        //图例组件。
        legend: {
            data: xname //图例的数据数组。
        },
        toolbox: {
            //工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
//            feature: {
//                saveAsImage: {}
//            }
        },
        //位置 直角坐标系内绘图网格
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        //x轴
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: xvalue
            }
        ],
        //y轴
        yAxis: [
            {
                type: 'value'
            }
        ],
        //数据  系列列表。每个系列通过 type 决定自己的图表类型
        series: [
            {
                name: xname[0],
                type: 'line',
//                    stack: '总量',
                //样式
                smooth:true,
                areaStyle: {
                    normal: {
                        color: xcolor[0]
                    }
                },
                lineStyle: {
                    normal: {
                        color: xcolor[0]
                    }
                },
                itemStyle: {
                    normal: {
                        color: xcolor[0]
                    }
                },
                data: yvalue[0].value
            },
            {
                name: xname[1],
                type: 'line',
                smooth:true,
//                    stack: '总量',
                areaStyle: {
                    normal: {
                        color: xcolor[1]
                    }
                },
                lineStyle: {
                    normal: {
                        color: xcolor[1]
                    }
                },
                itemStyle: {
                    normal: {
                        color: xcolor[1]
                    }
                },
                data: yvalue[1].value
            }

        ]
    })
}

//初始化左侧饼状图
function InitLeftPie(id, xname, xvalue) {
    var Chart = echarts.init(document.getElementById(id));
    Chart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            top: '0',
            left: '80%',
            containLabel: true,
            data: xname
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: ['30%', '55%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '18',
                            color:"#333"
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: xvalue
            }
        ]
    });
}

//点击筛选
$(".extramural_check_btn").click(function () {
$(".extramural_check").show();
});