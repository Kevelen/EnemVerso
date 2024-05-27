function drawGrafico1 () {

  var chartDom = document.getElementById('grafico_3b');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3°A'
    },
    legend: {
      data: ['Física', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Termoquímica', max: 6500 },
        { name: 'Óptica', max: 16000 },
        { name: 'Termologia', max: 30000 },
        { name: 'Ondulatória', max: 38000 },
        { name: 'Cinemática', max: 52000 },
        { name: 'Eletrodinâmica', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Física vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Física'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

function drawGrafico2 () {

  var chartDom = document.getElementById('grafico_3a');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3°B'
    },
    legend: {
      data: ['Física', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Termoquímica', max: 6500 },
        { name: 'Óptica', max: 16000 },
        { name: 'Termologia', max: 30000 },
        { name: 'Ondulatória', max: 38000 },
        { name: 'Cinemática', max: 52000 },
        { name: 'Eletrodinâmica', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Física vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Física'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

function drawGrafico3 () {

  var chartDom = document.getElementById('grafico_tads');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: 'TADS'
    },
    legend: {
      data: ['Física', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Termoquímica', max: 6500 },
        { name: 'Óptica', max: 16000 },
        { name: 'Termologia', max: 30000 },
        { name: 'Ondulatória', max: 38000 },
        { name: 'Cinemática', max: 52000 },
        { name: 'Eletrodinâmica', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Física vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Física'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

drawGrafico1()
drawGrafico2()
drawGrafico3()