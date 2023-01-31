window.onload = function () {
    var data = generateRandomNumbers(28);

  var chart1 = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    title: {
      text: "Calls this month",
      horizontalAlign: "left",
      fontSize: 24,
      fontWeight: "normal",
      margin: 10,
      padding: 10
    },
    data: [
      {
        type: "doughnut",
        startAngle: Math.floor(Math.random() * 29),
        //innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label}",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: data[0], label: "Calls" },
          { y: data[1] },
        ],
      },
    ],
  });


  function generateRandomNumbers(sum) {
    var num1 = Math.floor(Math.random() * sum);
    var num2 = sum - num1;
    return [num1, num2];
  }

  

  var chart2 = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title: {
      text: "Detailing topic breakdown",
    },
    axisY: {
        labelFormatter: function ( e ) {
            return "";  
      }  },
    // toolTip: {
    //   shared: true,
    // },

    data: [
      {
        type: "stackedBar100",
        toolTipContent: "{label}<br><b>{name}:</b>(#percent%)",
        showInLegend: true,
        name: "Adherence",
        dataPoints: [
          { y: Math.floor(Math.random() * 100), label: "Confident" },
          { y: Math.floor(Math.random() * 100), label: "Cautious" },
          { y: Math.floor(Math.random() * 100), label: "Complaining" },
          { y: Math.floor(Math.random() * 100), label: "Avg. all" },
        ],
      },
      {
        type: "stackedBar100",
        toolTipContent: "<b>{name}:</b>(#percent%)",
        showInLegend: true,
        name: "Combination therapy",
        dataPoints: [
          { y: Math.floor(Math.random() * 100), label: "Confident" },
          { y: Math.floor(Math.random() * 100), label: "Cautious" },
          { y: Math.floor(Math.random() * 100), label: "Complaining" },
          { y: Math.floor(Math.random() * 100), label: "Avg. all" },
        ],
      },
      {
        type: "stackedBar100",
        toolTipContent: "<b>{name}:</b>(#percent%)",
        showInLegend: true,
        name: "Dosing",
        dataPoints: [
          { y: Math.floor(Math.random() * 100), label: "Confident" },
          { y: Math.floor(Math.random() * 100), label: "Cautious" },
          { y: Math.floor(Math.random() * 100), label: "Complaining" },
          { y: Math.floor(Math.random() * 100), label: "Avg. all" },
        ],
      },
      {
        type: "stackedBar100",
        toolTipContent: "{label}<br><b>{name}:</b>(#percent%)",
        showInLegend: true,
        name: "Guidelines",
        dataPoints: [
          { y: Math.floor(Math.random() * 100), label: "Confident" },
          { y: Math.floor(Math.random() * 100), label: "Cautious" },
          { y: Math.floor(Math.random() * 100), label: "Complaining" },
          { y: Math.floor(Math.random() * 100), label: "Avg. all" },
        ],
      },
      {
        type: "stackedBar100",
        toolTipContent: "{label}<br><b>{name}:</b>(#percent%)",
        showInLegend: true,
        name: "Safety",
        dataPoints: [
          { y: Math.floor(Math.random() * 100), label: "Confident" },
          { y: Math.floor(Math.random() * 100), label: "Cautious" },
          { y: Math.floor(Math.random() * 100), label: "Complaining" },
          { y: Math.floor(Math.random() * 100), label: "Avg. all" },
        ],
      },
      {
        type: "stackedBar100",
        toolTipContent: "{label}<br><b>{name}:</b>(#percent%)",
        showInLegend: true,
        name: "Other",
        dataPoints: [
          { y: Math.floor(Math.random() * 100), label: "Confident" },
          { y: Math.floor(Math.random() * 100), label: "Cautious" },
          { y: Math.floor(Math.random() * 100), label: "Complaining" },
          { y: Math.floor(Math.random() * 100), label: "Avg. all" },
        ],
      },
    ],
  });
  chart1.render();
  chart2.render();
};
