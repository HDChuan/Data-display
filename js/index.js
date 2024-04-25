//堆叠柱状图1
(function(){
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));
    var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid:{
          left: "0%",
          top: "25px",
          right: "0%",
          bottom: "0%",
          containLabel:true 
        },
        toolbox: {
          feature: {
            // dataView: { show: false, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            // saveAsImage: { show: true },
            color:'#3398DB',
            top:0,
            right:0
          }
        },
        legend: {
          data: ['KSF员工人数', '工单数量', 'SLA'],
          top:0,
          left:0,
          show:true,
          textStyle: {
            color: "rgba(255,255,255,.6) ",
            fontSize: 10
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap :true,
            data: ['天津', '北京', '廊坊', '上海', '杭州', '重庆', '大连','哈尔滨'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
                color: "rgba(255,255,255,.6) ",
                fontSize: 10  // 设置字体大小为14px
             }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 9000,
            interval: 1000,
            axisLabel: {
              formatter: '{value}',
              color: "rgba(255,255,255,.6) ",
              fontSize: 10
            },
            axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                  width: 2
                }
            },

            splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
            }
          },
          {
            type: 'value',
            name: '',
            min: 90.00,
            max: 101.00,
            interval: 5,
            axisLabel: {
              formatter: '{value} %',
              show:false
            },
 
          }
        ],
        series: [
          {
            name: 'KSF员工人数',
            type: 'bar',
            color:'',
            tooltip: {
              valueFormatter: function (value) {
                return value ;
              }
            },
            data: [
              2200, 1000, 3000, 1000, 500, 2500, 2000, 1000
            ],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          },
          {
            name: '工单数量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value ;
              }
            },
            data: [
              6000, 200, 2300, 700, 600, 1800, 1200, 800
            ],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          },
          {
            name: 'SLA',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + '%';
              }
            },
            data: [99.50, 99.00, 98.00, 99.60, 99.90, 99.00, 99.00, 99.00],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          }
        ] 
    };
    myChart.setOption(option);  //展示样式表格页面的样式表格页面展示样式表格页面展示样式
    window.addEventListener("resize", function() {
        this.setTimeout(function() {myChart.resize()})
    });
})();

//bar2
(function(){
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid:{
          left: "0%",
          top: "25px",
          right: "0%",
          bottom: "0%",
          containLabel:true 
        },
        toolbox: {
          feature: {
            // dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            // saveAsImage: { show: true },
            color:'#3398DB',
            top:0,
            right:0
          }
        },
        legend: {
          data: ['KSF员工人数', '工单数量', 'SLA'],
          top:0,
          left:0,
          show:true,
          textStyle: {
            color: "rgba(255,255,255,.6) ",
            fontSize: 10
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap :true,
            data: ['天津', '北京', '廊坊', '上海', '杭州', '重庆', '大连','哈尔滨'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
                color: "rgba(255,255,255,.6) ",
                fontSize: 10  // 设置字体大小为14px
             }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 9000,
            interval: 1000,
            axisLabel: {
              formatter: '{value}',
              color: "rgba(255,255,255,.6) ",
              fontSize: 10
            },
            axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                  width: 2
                }
            },

            splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
            }
          },
          {
            type: 'value',
            name: '',
            min: 90.00,
            max: 101.00,
            interval: 5,
            axisLabel: {
              formatter: '{value} %',
              show:false
            },
 
          }
        ],
        series: [
          {
            name: 'KSF员工人数',
            type: 'bar',
            color:'',
            tooltip: {
              valueFormatter: function (value) {
                return value ;
              }
            },
            data: [
              2100, 900, 3500, 1000, 500, 2600, 2000, 1000
            ],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          },
          {
            name: '工单数量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value ;
              }
            },
            data: [
              7000, 300, 3000, 700, 600, 1800, 1500, 1200
            ],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          },
          {
            name: 'SLA',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + '%';
              }
            },
            data: [99.70, 98.00, 98.5, 99.6, 99.90, 99.00, 99.00, 98.9],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          }
        ] 
    };
    myChart.setOption(option);  //展示样式表格页面的样式表格页面展示样式表格页面展示样式
    window.addEventListener("resize", function() {
        this.setTimeout(function() {myChart.resize()})
    });
})();

//bar3
(function(){
    var myChart = echarts.init(document.querySelector(".bar3 .chart"));
    var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid:{
          left: "0%",
          top: "25px",
          right: "0%",
          bottom: "0%",
          containLabel:true 
        },
        toolbox: {
          feature: {
            // dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            // saveAsImage: { show: true },
            color:'#3398DB',
            top:0,
            right:0
          }
        },
        legend: {
          data: ['KSF员工人数', '工单数量', 'SLA'],
          top:0,
          left:0,
          show:true,
          textStyle: {
            color: "rgba(255,255,255,.6) ",
            fontSize: 10
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap :true,
            data: ['天津', '北京', '廊坊', '上海', '杭州', '重庆', '大连','哈尔滨'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
                color: "rgba(255,255,255,.6) ",
                fontSize: 10  // 设置字体大小为14px
             }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 9000,
            interval: 1000,
            axisLabel: {
              formatter: '{value}',
              color: "rgba(255,255,255,.6) ",
              fontSize: 10
            },
            axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                  width: 2
                }
            },

            splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
            }
          },
          {
            type: 'value',
            name: '',
            min: 90.00,
            max: 101.00,
            interval: 5,
            axisLabel: {
              formatter: '{value} %',
              show:false
            },
 
          }
        ],
        series: [
          {
            name: 'KSF员工人数',
            type: 'bar',
            color:'',
            tooltip: {
              valueFormatter: function (value) {
                return value ;
              }
            },
            data: [
              2200, 850, 3500, 1000, 500, 2600, 2000, 1000
            ],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          },
          {
            name: '工单数量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value ;
              }
            },
            data: [
              6000, 800, 3000, 700, 600, 1800, 1500, 1200
            ],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          },
          {
            name: 'SLA',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + '%';
              }
            },
            data: [99.20, 99.00, 98.50, 99.60, 99.90, 99.00, 99.00, 99.50],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          }
        ] 
    };
    myChart.setOption(option);  //展示样式表格页面的样式表格页面展示样式表格页面展示样式
    window.addEventListener("resize", function() {
        this.setTimeout(function() {myChart.resize()})
    });
})();

//bar4
(function(){
    var myChart = echarts.init(document.querySelector(".bar4 .chart"));
    var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid:{
          left: "0%",
          top: "25px",
          right: "0%",
          bottom: "0%",
          containLabel:true 
        },
        toolbox: {
          feature: {
            // dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            // saveAsImage: { show: true },
            color:'#3398DB',
            top:0,
            right:0
          }
        },
        legend: {
          data: ['KSF员工人数', '工单数量', 'SLA'],
          top:0,
          left:0,
          show:true,
          textStyle: {
            color: "rgba(255,255,255,.6) ",
            fontSize: 10
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap :true,
            data: ['天津', '北京', '廊坊', '上海', '杭州', '重庆', '大连','哈尔滨'],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
                color: "rgba(255,255,255,.6) ",
                fontSize: 10  // 设置字体大小为14px
             }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 9000,
            interval: 1000,
            axisLabel: {
              formatter: '{value}',
              color: "rgba(255,255,255,.6) ",
              fontSize: 10
            },
            axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                  width: 2
                }
            },

            splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
            }
          },
          {
            type: 'value',
            name: '',
            min: 90.00,
            max: 101.00,
            interval: 5,
            axisLabel: {
              formatter: '{value} %',
              show:false
            },
 
          }
        ],
        series: [
          {
            name: 'KSF员工人数',
            type: 'bar',
            color:'',
            tooltip: {
              valueFormatter: function (value) {
                return value ;
              }
            },
            data: [
              2300, 800, 3600, 900, 500, 2600, 2000, 1000
            ],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          },
          {
            name: '工单数量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value ;
              }
            },
            data: [
              8200, 980, 2500, 800, 700, 2500, 2000, 1100
            ],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          },
          {
            name: 'SLA',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + '%';
              }
            },
            data: [99.50, 99.2, 99.5, 99.7, 99.95, 99.75, 99.00, 99.5],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
          }
        ] 
    };
    myChart.setOption(option);  //展示样式表格页面的样式表格页面展示样式表格页面展示样式
    window.addEventListener("resize", function() {
        this.setTimeout(function() {myChart.resize()})
    });
})();

//折线图
(function() {
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var option = {
      color: ["#00f2f1", "#ed3f35","#82D900","#8C8C00","#4F9D9D","#00CACA","#A6FFA6","#AE57A4"],
      tooltip: {
        trigger: "axis"
      },
      legend: {
        // 如果series 对象有name 值，则 legend可以不用写data
        // 修改图例组件 文字颜色大小
        textStyle: {
          color: "#4c9bfd",
          fontSize:10,
        },
        left: 0
      },
      toolbox: {
        top:20,
        feature: {
          magicType: { show: true, type: ['bar'] },
          restore: { show: true },
          color:'#3398DB',
          top:0,
          right:0
        }
      },
      grid: {
        top: "40%",
        left: "3%",
        right: "4%",
        bottom: "0%",
        show: true, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true // 包含刻度文字在内
      },
  
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "1季度",
          "2季度",
          "3季度",
          "4季度",
        ],
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "#4c9bfd" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        }
      },
      yAxis: {
        type: "value",
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "#4c9bfd" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a" // 分割线颜色
          }
        }
      },
      series: [
        {
            name: "天津",
            type: "line",
            smooth: true,
            data: [66,62,65,70],
            lineStyle: {
                width: "2"
              },
        },
        {
            name: "北京",
            type: "line",
            smooth: true,
            data: [50,45,42,40],
            lineStyle: {
                width: "2"
              },
        },
        {
            name: "廊坊",
            type: "line",
            smooth: true,
            data: [40,45,38,40],
            lineStyle: {
                width: "2"
              },
        },
        {
            name: "上海",
            type: "line",
            smooth: true,
            data: [30,30,28,25],
            lineStyle: {
                width: "2"
              },
        },
        {
            name: "杭州",
            type: "line",
            smooth: true,
            data: [20,18,20,20],
            lineStyle: {
                width: "2"
              },
        },
        {
            name: "重庆",
            type: "line",
            smooth: true,
            data: [15,18,20,20],
            lineStyle: {
                width: "2"
              },
        },
        {
            name: "大连",
            type: "line",
            smooth: true,
            data: [20,21,20,20],
            lineStyle: {
                width: "2"
              },
        },
        {
            name: "哈尔滨",
            type: "line",
            smooth: true,
            data: [25,24,22,20],
            lineStyle: {
                width: "2"
              },
        },
      ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });

  })();

//pie
(function() {
    var myChart = echarts.init(document.querySelector(".pie .chart"));

        var option = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                bottom: "0%",
                left:"0%",
                top:160,
                itemWidth: 8,
                itemHeight: 8,
                textStyle: {
                  color: "rgba(255,255,255,.5)",
                  fontSize: "10"
                }
            },

            series: [
              {
                name: '工单总数及占比',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 1,
                  borderColor: 'rgba(255,255,255,.6)',
                  borderWidth: 1
                },
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: 25,
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: true
                },
                data: [
                  { value: 27200, name: '天津' },
                  { value: 2280, name: '北京' },
                  { value: 10800, name: '廊坊' },
                  { value: 2900, name: '上海' },
                  { value: 2500, name: '杭州' },
                  { value: 7900, name: '重庆' },
                  { value: 6200, name: '大连' },
                  { value: 4300, name: '哈尔滨' }
                ]
              }
            ]
          };

    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });

  })();

  //地图
(function() {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var dealwithdata = function(data){
    var geoCoordMap = {
        上海: [121.4648, 31.2891],
        // 东莞: [113.8953, 22.901],
        // 东营: [118.7073, 37.5513],
        // 中山: [113.4229, 22.478],
        // 临汾: [111.4783, 36.1615],
        // 临沂: [118.3118, 35.2936],
        // 丹东: [124.541, 40.4242],
        // 丽水: [119.5642, 28.1854],
        // 乌鲁木齐: [87.9236, 43.5883],
        // 佛山: [112.8955, 23.1097],
        // 保定: [115.0488, 39.0948],
        // 兰州: [103.5901, 36.3043],
        // 包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        // 北海: [109.314, 21.6211],
        // 南京: [118.8062, 31.9208],
        // 南宁: [108.479, 23.1152],
        // 南昌: [116.0046, 28.6633],
        // 南通: [121.1023, 32.1625],
        // 厦门: [118.1689, 24.6478],
        // 台州: [121.1353, 28.6688],
        // 合肥: [117.29, 32.0581],
        // 呼和浩特: [111.4124, 40.4901],
        // 咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        // 唐山: [118.4766, 39.6826],
        // 嘉兴: [120.9155, 30.6354],
        // 大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        // 太原: [112.3352, 37.9413],
        // 威海: [121.9482, 37.1393],
        // 宁波: [121.5967, 29.6466],
        // 宝鸡: [107.1826, 34.3433],
        // 宿迁: [118.5535, 33.7775],
        // 常州: [119.4543, 31.5582],
        // 广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        // 延安: [109.1052, 36.4252],
        // 张家口: [115.1477, 40.8527],
        // 徐州: [117.5208, 34.3268],
        // 德州: [116.6858, 37.2107],
        // 惠州: [114.6204, 23.1647],
        // 成都: [103.9526, 30.7617],
        // 扬州: [119.4653, 32.8162],
        // 承德: [117.5757, 41.4075],
        // 拉萨: [91.1865, 30.1465],
        // 无锡: [120.3442, 31.5527],
        // 日照: [119.2786, 35.5023],
        // 昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        // 枣庄: [117.323, 34.8926],
        // 柳州: [109.3799, 24.9774],
        // 株洲: [113.5327, 27.0319],
        // 武汉: [114.3896, 30.6628],
        // 汕头: [117.1692, 23.3405],
        // 江门: [112.6318, 22.1484],
        // 沈阳: [123.1238, 42.1216],
        // 沧州: [116.8286, 38.2104],
        // 河源: [114.917, 23.9722],
        // 泉州: [118.3228, 25.1147],
        // 泰安: [117.0264, 36.0516],
        // 泰州: [120.0586, 32.5525],
        // 济南: [117.1582, 36.8701],
        // 济宁: [116.8286, 35.3375],
        // 海口: [110.3893, 19.8516],
        // 淄博: [118.0371, 36.6064],
        // 淮安: [118.927, 33.4039],
        // 深圳: [114.5435, 22.5439],
        // 清远: [112.9175, 24.3292],
        // 温州: [120.498, 27.8119],
        // 渭南: [109.7864, 35.0299],
        // 湖州: [119.8608, 30.7782],
        // 湘潭: [112.5439, 27.7075],
        // 滨州: [117.8174, 37.4963],
        // 潍坊: [119.0918, 36.524],
        // 烟台: [120.7397, 37.5128],
        // 玉溪: [101.9312, 23.8898],
        // 珠海: [113.7305, 22.1155],
        // 盐城: [120.2234, 33.5577],
        // 盘锦: [121.9482, 41.0449],
        // 石家庄: [114.4995, 38.1006],
        // 福州: [119.4543, 25.9222],
        // 秦皇岛: [119.2126, 40.0232],
        // 绍兴: [120.564, 29.7565],
        // 聊城: [115.9167, 36.4032],
        // 肇庆: [112.1265, 23.5822],
        // 舟山: [122.2559, 30.2234],
        // 苏州: [120.6519, 31.3989],
        // 莱芜: [117.6526, 36.2714],
        // 菏泽: [115.6201, 35.2057],
        // 营口: [122.4316, 40.4297],
        // 葫芦岛: [120.1575, 40.578],
        // 衡水: [115.8838, 37.7161],
        // 衢州: [118.6853, 28.8666],
        // 西宁: [101.4038, 36.8207],
        // 西安: [109.1162, 34.2004],
        // 贵阳: [106.6992, 26.7682],
        // 连云港: [119.1248, 34.552],
        // 邢台: [114.8071, 37.2821],
        // 邯郸: [114.4775, 36.535],
        // 郑州: [113.4668, 34.6234],
        // 鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        // 金华: [120.0037, 29.1028],
        // 铜川: [109.0393, 35.1947],
        // 银川: [106.3586, 38.1775],
        // 镇江: [119.4763, 31.9702],
        // 长春: [125.8154, 44.2584],
        // 长沙: [113.0823, 28.2568],
        // 长治: [112.8625, 36.4746],
        // 阳泉: [113.4778, 38.0951],
        // 青岛: [120.4651, 36.3373],
        // 韶关: [113.7964, 24.7028]
      };
      var data = [];
      for (var key in geoCoordMap) {
        data.push({ name: key, value: geoCoordMap[key] });
      }
      return data;
    }
    var dataValue = dealwithdata();
    var data1 = dataValue.splice(0, 8);
    var option = {
      series: [
        {
          name: "",
          type: "scatter",
          coordinateSystem: "geo",
          data: dataValue,
          //   symbolSize: function(val) {
          //     return val[2] / 10;
          //   },
          symbol: "circle",
          symbolSize: 8,
          hoverSymbolSize: 10,
          tooltip: {
            formatter(value) {
              return value.data.name + "<br/>" + "设备数：" + "22";
            },
            show: true
          },
          encode: {
            value: 2
          },
          label: {
            formatter: "{b}",
            position: "right",
            show: false
          },
          itemStyle: {
            color: "#0efacc"
          },
          emphasis: {
            label: {
              show: false
            }
          }
        },
        {
          name: "Top 6",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: data1,
          symbolSize: 15,
          tooltip: {
            show: false
          },
          encode: {
            value: 2
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
            color: "#0efacc",
            period: 9,
            scale: 5
          },
          hoverAnimation: true,
          label: {
            formatter: "{b}",
            position: "right",
            show: true
          },
          itemStyle: {
            color: "#0efacc",
            shadowBlur: 2,
            shadowColor: "#333"
          },
          zlevel: 1
        }
      ],
      tooltip: {
        trigger: "item",
      },
      geo: {
        map: "china",
        left:0,
        label: {
          emphasis: {
            show: true,
            color: "#fff"
          }
        },
        // 把中国地图放大了1.2倍
        zoom: 1.6,
        roam: true,
        itemStyle: {
          normal: {
            // 地图省份的背景颜色
            areaColor: "rgba(20, 41, 87,0.6)",
            borderColor: "#195BB9",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        }
      },
    };   
    myChart.setOption(option),
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();