//https://quickchart.io/documentation/chart-types/

const chartImg = document.getElementById("chartImage");
const chartUrlBase = "https://quickchart.io/chart?c=";

let chartType;
let chartHorizontalAxis;
let param;
let chartVerticalAxis;

let chartData;


async function getData() {
    const inputString = document.getElementById("chartX").value;
    const inputArray = inputString.split(" ");
    const filteredArray = inputArray.filter(element => element.trim() !== "");
    const outputArray = filteredArray.map(element => `'${element}'`);
    const outputString = outputArray.join(', ');

    chartType = document.getElementById("chartSelector").value;
    chartHorizontalAxis = outputString;
    param = document.getElementById("param").value;
    chartVerticalAxis = document.getElementById("chartY").value;

    chartImg.src = `https://quickchart.io/chart?width=350&height=210&chart={type:'${chartType}',data:{labels:[${chartHorizontalAxis}], datasets:[{label:'${param}',data:[${chartVerticalAxis}]}]}}`;

}



document.getElementById("chartGenerator").addEventListener("click", getData);