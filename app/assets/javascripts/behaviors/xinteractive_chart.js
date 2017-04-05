/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7
Version: 2.1.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v2.1/admin/html/
*/

// white
var white = 'rgba(255,255,255,1.0)';
var fillBlack = 'rgba(45, 53, 60, 0.6)';
var fillBlackLight = 'rgba(45, 53, 60, 0.2)';
var strokeBlack = 'rgba(45, 53, 60, 0.8)';
var highlightFillBlack = 'rgba(45, 53, 60, 0.8)';
var highlightStrokeBlack = 'rgba(45, 53, 60, 1)';

// blue
var fillBlue = 'rgba(52, 143, 226, 0.6)';
var fillBlueLight = 'rgba(52, 143, 226, 0.2)';
var strokeBlue = 'rgba(52, 143, 226, 0.8)';
var highlightFillBlue = 'rgba(52, 143, 226, 0.8)';
var highlightStrokeBlue = 'rgba(52, 143, 226, 1)';

// grey
var fillGrey = 'rgba(182, 194, 201, 0.6)';
var fillGreyLight = 'rgba(182, 194, 201, 0.2)';
var strokeGrey = 'rgba(182, 194, 201, 0.8)';
var highlightFillGrey = 'rgba(182, 194, 201, 0.8)';
var highlightStrokeGrey = 'rgba(182, 194, 201, 1)';

// green
var fillGreen = 'rgba(0, 172, 172, 0.6)';
var fillGreenLight = 'rgba(0, 172, 172, 0.2)';
var strokeGreen = 'rgba(0, 172, 172, 0.8)';
var highlightFillGreen = 'rgba(0, 172, 172, 0.8)';
var highlightStrokeGreen = 'rgba(0, 172, 172, 1)';

// purple
var fillPurple = 'rgba(114, 124, 182, 0.6)';
var fillPurpleLight = 'rgba(114, 124, 182, 0.2)';
var strokePurple = 'rgba(114, 124, 182, 0.8)';
var highlightFillPurple = 'rgba(114, 124, 182, 0.8)';
var highlightStrokePurple = 'rgba(114, 124, 182, 1)';


var randomScalingFactor = function() { 
    return Math.round(Math.random()*100)
};

// var week_labels = $(document).data("week-labels")

// console.log(week_labels)

// Weekly Chart Data
var weeklyActivityLineChartData = {
    labels: ["2017-03-11", "2017-03-15", "2017-03-08", "2017-03-09", "2017-03-10", "2017-03-12", "2017-03-13", "2017-03-14"],
    datasets: [{
        label: 'Activity',
        borderColor: strokeBlue,
        pointBackgroundColor: strokeBlue,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillBlueLight,
        data: [3537.0, 14161.0, 17946.0, 17966.0, 21193.0, 1580.0, 9653.0, 13084.0]
    }]
};

var weeklySleepLineChartData = {
    labels: ["2017-03-11", "2017-03-15", "2017-03-08", "2017-03-09", "2017-03-10", "2017-03-12", "2017-03-13", "2017-03-14"],
    datasets: [{
        label: 'Sleep',
        borderColor: strokePurple,
        pointBackgroundColor: strokePurple,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillPurpleLight,
        data: [7.416666666666667, 7.016666666666667, 7.25, 7.0, 8.05, 7.5, 9, 8.5]
    }]
};

var weeklyHeartrateLineChartData = {
    labels: ["2017-03-11", "2017-03-15", "2017-03-08", "2017-03-09", "2017-03-10", "2017-03-12", "2017-03-13", "2017-03-14"],
    datasets: [{
        label: 'Resting Heart Rate',
        borderColor: strokeGreen,
        pointBackgroundColor: strokeGreen,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillGreenLight,
        data: [60.0, 56.0, 58.0, 59.0, 60.0, 60.0, 57.0]
    }]
};

// Monthly Chart DAta

var monthlyActivityLineChartData = {
    labels: ["2017-02-15", "2017-02-20", "2017-02-25", "2017-03-02", "2017-03-06", "2017-03-11", 
      "2017-03-15", "2017-02-13", "2017-02-14", "2017-02-16", "2017-02-17", "2017-02-18", "2017-02-19", 
      "2017-02-21", "2017-02-22", "2017-02-23", "2017-02-24", "2017-02-26", "2017-02-27", "2017-02-28", 
      "2017-03-01", "2017-03-03", "2017-03-04", "2017-03-05", "2017-03-07", "2017-03-08", "2017-03-09", 
      "2017-03-10", "2017-03-12", "2017-03-13", "2017-03-14"],
    datasets: [{
        label: 'Activity',
        borderColor: strokeBlue,
        pointBackgroundColor: strokeBlue,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillBlueLight,
        data: [208.25, 468.0833333333333, 93.46666666666667, 227.86666666666667, 237.41666666666666, 
          58.95, 236.01666666666668, 312.1166666666667, 224.1, 130.13333333333333, 355.48333333333335, 
          181.56666666666666, 98.2, 202.38333333333333, 221.43333333333334, 364.26666666666665, 
          233.51666666666668, 3.5833333333333335, 272.75, 291.26666666666665, 365.6166666666667, 
          341.78333333333336, 167.46666666666667, 0.0, 364.0, 299.1, 299.43333333333334, 353.21666666666664, 
          26.333333333333332, 160.88333333333333, 218.06666666666666]
    }]
};

var monthlySleepLineChartData = {
    labels: ["2017-02-15", "2017-02-20", "2017-02-25", "2017-03-02", "2017-03-06", "2017-03-11", 
      "2017-03-15", "2017-02-13", "2017-02-14", "2017-02-16", "2017-02-17", "2017-02-18", "2017-02-19", 
      "2017-02-21", "2017-02-22", "2017-02-23", "2017-02-24", "2017-02-26", "2017-02-27", "2017-02-28", 
      "2017-03-01", "2017-03-03", "2017-03-04", "2017-03-05", "2017-03-07", "2017-03-08", "2017-03-09", 
      "2017-03-10", "2017-03-12", "2017-03-13", "2017-03-14"],
    datasets: [{
        label: 'Sleep',
        borderColor: strokePurple,
        pointBackgroundColor: strokePurple,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillPurpleLight,
        data: [6.583333333333333, 5.766666666666667, 9.95, 5.95, 7.116666666666666, 7.416666666666667, 
          7.066666666666666, 6.8, 7.483333333333333, 6.683333333333334, 7.633333333333334, 9.016666666666667, 
          6.35, 6.8, 7.066666666666666, 6.816666666666666, 7.816666666666666, 4.866666666666666, 
          7.866666666666666, 6.983333333333333, 7.066666666666666, 8.333333333333334, 7.983333333333333, 
          7.133333333333334, 7.016666666666667, 7.25, 7.0, 8.05]
    }]
};

var monthlyHeartrateLineChartData = {
    labels: ["2017-03-11", "2017-03-15", "2017-03-08", "2017-03-09", "2017-03-10", "2017-03-12", "2017-03-13", "2017-03-14"],
    datasets: [{
        label: 'Resting Heart Rate',
        borderColor: strokeGreen,
        pointBackgroundColor: strokeGreen,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillGreenLight,
        data: [58.0, 57.0, 57.0, 58.0, 58.0, 60.0, 56.0, 57.0, 57.0, 57.0, 57.0, 59.0, 59.0, 57.0, 58.0, 
        59.0, 59.0, 56.0, 56.0, 57.0, 58.0, 59.0, 59.0, 59.0, 58.0, 58.0, 59.0, 60.0, 60.0, 57.0]
    }]
};

// Alltime Chart Data

var alltimeActivityLineChartData = {
    labels: ["2014-12-29", "2015-01-05", "2015-01-12", "2015-01-19", "2015-01-26", "2015-02-02", 
      "2015-02-09", "2015-02-16", "2015-02-23", "2015-03-02", "2015-03-09", "2015-03-16", "2015-03-23", 
      "2015-03-30", "2015-04-06", "2015-04-13", "2015-04-20", "2015-04-27", "2015-05-04", "2015-05-11", 
      "2015-05-18", "2015-05-25", "2015-06-01", "2015-06-08", "2015-06-15", "2015-06-22", "2015-06-29", 
      "2015-07-06", "2015-07-13", "2015-07-20", "2015-07-27", "2015-08-03", "2015-08-10", "2015-08-17", 
      "2015-08-24", "2015-08-31", "2015-09-07", "2015-09-14", "2015-09-21", "2015-09-28", "2015-10-05", 
      "2015-10-12", "2015-10-19", "2015-10-26", "2015-11-02", "2015-11-09", "2015-11-16", "2015-11-23", 
      "2015-11-30", "2015-12-07", "2015-12-14", "2016-01-04", "2016-01-11", "2016-01-18", "2016-01-25", 
      "2016-02-01", "2016-02-08", "2016-02-15", "2016-02-22", "2016-02-29", "2016-03-07", "2016-03-14", 
      "2016-03-21", "2016-03-28", "2016-04-04", "2016-04-11", "2016-04-18", "2016-04-25", "2016-05-02", 
      "2016-05-09", "2016-05-16", "2016-05-23", "2016-05-30", "2016-06-06", "2016-06-13", "2016-06-20", 
      "2016-06-27", "2016-07-04", "2016-07-11", "2016-07-18", "2016-07-25", "2016-08-01", "2016-08-08", 
      "2016-08-15", "2016-08-22", "2016-11-14", "2016-11-21", "2016-11-28", "2016-12-05", "2016-12-12", 
      "2016-12-19", "2017-01-02", "2017-01-09", "2017-01-16", "2017-01-23", "2017-01-30", "2017-02-06", 
      "2017-02-13", "2017-02-20", "2017-02-27", "2017-03-06", "2017-03-13"],
    datasets: [{
        label: 'Activity',
        borderColor: strokeBlue,
        pointBackgroundColor: strokeBlue,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillBlueLight,
        data: [72.57142857142857, 1590.857142857143, 524.5714285714286, 991.2857142857143, 382.0, 4989.142857142857, 1575.142857142857, 2143.8571428571427, 2941.1428571428573, 1859.2857142857142, 2134.714285714286, 2552.5714285714284, 1161.2857142857142, 4408.571428571428, 3403.714285714286, 2023.142857142857, 1282.0, 2329.0, 2525.4285714285716, 2647.1428571428573, 2032.0, 1668.142857142857, 5692.0, 611.5714285714286, 142.42857142857142, 573.0, 102.71428571428571, 615.8571428571429, 855.1428571428571, 1021.7142857142857, 426.57142857142856, 193.71428571428572, 92.14285714285714, 45.285714285714285, 256.42857142857144, 1345.857142857143, 750.8571428571429, 1743.142857142857, 297.14285714285717, 2060.5714285714284, 2773.0, 1422.4285714285713, 177.71428571428572, 1100.857142857143, 246.71428571428572, 2690.0, 170.0, 212.71428571428572, 419.42857142857144, 1060.4285714285713, 26.285714285714285, 1176.2857142857142, 2197.0, 1061.7142857142858, 2028.7142857142858, 3782.8571428571427, 28.5, 1556.2857142857142]
    }]
};

var alltimeSleepLineChartData = {
    labels: ["2016-12-12", "2016-12-26", "2017-01-23", "2017-01-30", "2017-02-06", "2017-02-13", 
      "2017-02-20", "2017-02-27", "2017-03-06", "2017-03-13"],
    datasets: [{
        label: 'Sleep',
        borderColor: strokePurple,
        pointBackgroundColor: strokePurple,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillPurpleLight,
        data: [458.5, 364.0, 455.5, 381.5, 493.75, 439.42857142857144, 433.42857142857144, 420.42857142857144, 426.2, 445.0]
    }]
};

var alltimeHeartrateLineChartData = {
    labels: ["2015-02-02", "2015-02-09", "2015-02-16", "2015-02-23", "2015-03-02", "2015-03-09", 
      "2015-03-16", "2015-03-23", "2015-03-30", "2015-04-06", "2015-04-13", "2015-04-20", "2015-04-27", 
      "2015-05-04", "2015-05-11", "2015-05-18", "2015-05-25", "2015-06-01", "2015-06-08", "2015-06-15", 
      "2015-06-22", "2015-06-29", "2015-07-06", "2015-07-13", "2015-07-20", "2015-07-27", "2015-08-03", 
      "2015-08-10", "2015-08-17", "2015-08-24", "2015-08-31", "2015-09-07", "2015-09-14", "2015-09-21", 
      "2015-09-28", "2015-10-05", "2015-10-12", "2015-10-19", "2015-10-26", "2015-11-02", "2015-11-09", 
      "2015-11-16", "2015-11-23", "2015-12-07", "2015-12-14", "2015-12-21", "2016-01-04", "2016-01-11", 
      "2016-01-18", "2016-01-25", "2016-12-12", "2016-12-19", "2016-12-26", "2017-01-02", "2017-01-09", 
      "2017-01-16", "2017-01-23", "2017-01-30", "2017-02-06", "2017-02-13", "2017-02-20", "2017-02-27", 
      "2017-03-06", "2017-03-13"],
    datasets: [{
        label: 'Sleep',
        borderColor: strokeGreen,
        pointBackgroundColor: strokeGreen,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillGreenLight,
        data: [78.0, 65.14285714285714, 62.5, 59.333333333333336, 58.333333333333336, 61.857142857142854, 
          64.42857142857143, 62.57142857142857, 60.57142857142857, 60.5, 60.42857142857143, 59.857142857142854, 
          57.857142857142854, 58.166666666666664, 57.142857142857146, 57.142857142857146, 57.2, 
          58.285714285714285, 59.142857142857146, 61.142857142857146, 61.714285714285715, 62.57142857142857, 
          59.857142857142854, 60.714285714285715, 60.857142857142854, 61.42857142857143, 61.142857142857146, 
          56.857142857142854, 57.166666666666664, 58.142857142857146, 60.833333333333336, 63.166666666666664, 
          64.5, 61.8, 62.25, 60.6, 60.6, 61.0, 62.0, 67.0, 66.5, 63.8, 63.285714285714285, 61.5, 62.6, 63.75, 
          61.166666666666664, 59.4, 61.0, 62.666666666666664, 58.0, 58.5, 61.0, 64.83333333333333, 63.0, 61.4, 
          61.42857142857143, 62.0, 62.142857142857146, 57.714285714285715, 57.57142857142857, 58.0, 
          58.833333333333336, 57.25]
    }]
};

var barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'House Expenses',
        borderWidth: 2,
        borderColor: strokePurple,
        backgroundColor: fillPurpleLight,
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
    }, {
        label: 'Fun',
        borderWidth: 2,
        borderColor: strokeBlack,
        backgroundColor: fillBlackLight,
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
    }]
};

var pieChartData = {
    labels: ['Active', 'Sedentary', 'Sleep'],
    datasets: [{
        data: [3.5, 13, 7.5],
        backgroundColor: [fillPurple, fillBlue, fillGreen],
        borderColor: [strokePurple, strokeBlue, strokeGreen],
        borderWidth: 2,
        label: 'Activity Breakdown'
    }]
};

var yesterdayPieChartData = {
    labels: ['Active', 'Sedentary', 'Sleep'],
    datasets: [{
        data: [3.5, 13, 7.5],
        backgroundColor: [fillPurple, fillBlue, fillGreen],
        borderColor: [strokePurple, strokeBlue, strokeGreen],
        borderWidth: 2,
        label: 'Activity Breakdown'
    }]
};

var yesterdayBarChartData = {
    labels: ['Entertainment', 'Food', 'Utilities'],
    datasets: [{
        label: 'Dollars Spent',
        borderWidth: 2,
        borderColor: [strokePurple, strokeBlue, strokeGreen],
        backgroundColor: [fillPurple, fillBlue, fillGreen],
        data: [8, 25, 60]
    }]
};

var cyclingGoalLineChartData = {
    labels: ["2016-06-01", "2016-06-05", "2016-06-09", "2016-06-13", "2016-06-17", "2016-06-21", 
    "2016-06-25", "2016-06-29", "2016-06-02", "2016-06-03", "2016-06-04", "2016-06-06", "2016-06-07", 
    "2016-06-08", "2016-06-10", "2016-06-11", "2016-06-12", "2016-06-14", "2016-06-15", "2016-06-16", 
    "2016-06-18", "2016-06-19", "2016-06-20", "2016-06-22", "2016-06-23", "2016-06-24", "2016-06-26", 
    "2016-06-27", "2016-06-28", "2016-06-30"] ,
    datasets: [{
        label: 'Missed Days',
        borderColor: '#ff5b57',
        pointBackgroundColor: '#ff5b57',
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: '#ff5b57',
        data: [NaN, 0, NaN, 0, 0, 0, NaN, 0, 0, 0, 0, 0, NaN, NaN, NaN, NaN, NaN, 0, 0, NaN, 0, 0, 0, 0] 
    },
    {
        label: 'Success Days',
        borderColor: strokeBlue,
        pointBackgroundColor: strokeBlue,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillBlueLight,
        data: [1727.0, "", 622.0, "", "", "", 1489.0, "", "", "", "", "", 3780.0, 1589.0, 1388.0, 
        1542.0, 9909.0, "", "", 1190.0, "", "", "", ""] 
    }
    ]
};

var restingHeartRateLineChartData = {
        labels: ["2017-01-01", "2017-01-02", "2017-01-04", "2017-01-05", 
        "2017-01-06", "2017-01-07", "2017-01-09", "2017-01-10", "2017-01-12", "2017-01-13", "2017-01-14", 
        "2017-01-15", "2017-01-16", "2017-01-17", "2017-01-18", "2017-01-19", "2017-01-20", "2017-01-21", 
        "2017-01-22", "2017-01-23", "2017-01-24", "2017-01-25", "2017-01-26", "2017-01-27", "2017-01-28", 
        "2017-01-29", "2017-01-30", "2017-01-31", "2017-02-01", "2017-02-02", "2017-02-03", "2017-02-04", 
        "2017-02-05", "2017-02-06", "2017-02-07", "2017-02-08", "2017-02-09", "2017-02-10", "2017-02-11", 
        "2017-02-12", "2017-02-13", "2017-02-14", "2017-02-15", "2017-02-16", "2017-02-17", "2017-02-18", 
        "2017-02-19", "2017-02-20", "2017-02-21", "2017-02-22", "2017-02-23", "2017-02-24", "2017-02-25", 
        "2017-02-26", "2017-02-27", "2017-02-28", "2017-03-01", "2017-03-02", "2017-03-03", "2017-03-04", 
        "2017-03-05", "2017-03-06", "2017-03-07", "2017-03-08", "2017-03-09", "2017-03-10", "2017-03-11", 
        "2017-03-12", "2017-03-13", "2017-03-14", "2017-03-15", "2017-03-16", "2017-03-17", "2017-03-18", 
        "2017-03-19", "2017-03-20", "2017-03-21", "2017-03-22", "2017-03-23", "2017-03-24", "2017-03-25", 
        "2017-03-26", "2017-03-27", "2017-03-28", "2017-03-29", "2017-03-30", "2017-03-31", "2017-04-01", 
        "2017-04-02", "2017-04-03", "2017-04-04", "2017-04-05", "2017-04-06", "2017-04-07", "2017-04-08", 
        "2017-04-09", "2017-04-10", "2017-04-11", "2017-04-12", "2017-04-13", "2017-04-14", "2017-04-15", 
        "2017-04-16", "2017-04-17", "2017-04-18", "2017-04-19", "2017-04-20", "2017-04-21", "2017-04-22", 
        "2017-04-23", "2017-04-24", "2017-04-25", "2017-04-26", "2017-04-27", "2017-04-28", "2017-04-29",
        "2017-04-30"],
        datasets: [{
            label: 'Projection',
            borderColor: strokeBlack,
            pointBackgroundColor: strokeBlack,
            pointRadius: 2,
            borderWidth: 2,
            backgroundColor: white,
            data: [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,
            NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,
            NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,
            NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,
            NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN, 55.0, 53.0, 56.0, 54.0, 57.0, 58.0, 55.0, 55.0, 58.0, 57.0, 
            53.0, 54.0, 54.0, 54.0, 53.0, 52.0, 54.0, 53.0, 52.0, 54.0, 53.0, 52.0, 51.0, 51.0, 53.0] 
        },
        {
            label: 'Progress',
            borderColor: strokeBlue,
            pointBackgroundColor: strokeBlue,
            pointRadius: 2,
            borderWidth: 2,
            backgroundColor: fillBlueLight,
            data: [66.0,64,63,62,61.0,60.0,63.0,62.0,62.0,63.0,58.0,57.0,57.0,58.0,58.0,60.0,65.0,64.0,
            65.0,64.0,64.0,63.0,62,62,63.0,62,63,63,62,62.0,61.0,62.0,61.0,60.0,60.0,60.0,63.0,
            64.0,61.0,63.0,62.0,62.0,62.0,62.0,61.0,64.0,64.0,61.0,60.0,57.0,57.0,57.0,57.0,59.0,59.0,57.0,
            58.0,59.0,59.0,56.0,56.0,57.0,58.0,59.0,59.0,59.0,58.0,58.0,59.0,60.0,58,60.0,57.0,55.5,56.0,57.0,
            57.0, 58.0, 55.0,53.0, 53.0, 56.0, 54.0, 57.0, 58.0, 55.0, 55.0, 58.0, 57.0, 54.0, 56.0, 56.0,
            55.0, NaN,NaN,NaN,
            NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]
        }
        ]
    };


// Chart Functions

var handleChartJs = function() {
    if ($('[data-page-id~=time-series]').length) {
    // Weekly
        var ctx = document.getElementById('weekly-activity-line-chart').getContext('2d');
        var lineChart = new Chart(ctx, {
            type: 'line',
            data: weeklyActivityLineChartData
        });

        var ctx2 = document.getElementById('weekly-sleep-line-chart').getContext('2d');
        var lineChart2 = new Chart(ctx2, {
            type: 'line',
            data: weeklySleepLineChartData
        });

        var ctx3 = document.getElementById('weekly-heartrate-line-chart').getContext('2d');
        var lineChart3 = new Chart(ctx3, {
            type: 'line',
            data: weeklyHeartrateLineChartData
        });

        // Monthly
        var ctx4 = document.getElementById('monthly-activity-line-chart').getContext('2d');
        var lineChart4 = new Chart(ctx4, {
            type: 'line',
            data: monthlyActivityLineChartData
        });

        var ctx5 = document.getElementById('monthly-sleep-line-chart').getContext('2d');
        var lineChart5 = new Chart(ctx5, {
            type: 'line',
            data: monthlySleepLineChartData
        });

        var ctx6 = document.getElementById('monthly-heartrate-line-chart').getContext('2d');
        var lineChart6 = new Chart(ctx6, {
            type: 'line',
            data: monthlyHeartrateLineChartData
        });
        
        // All Time
        var ctx7 = document.getElementById('alltime-activity-line-chart').getContext('2d');
        var lineChart7 = new Chart(ctx7, {
            type: 'line',
            data: alltimeActivityLineChartData
        });

        var ctx8 = document.getElementById('alltime-sleep-line-chart').getContext('2d');
        var lineChart8 = new Chart(ctx8, {
            type: 'line',
            data: alltimeSleepLineChartData
        });

        var ctx9 = document.getElementById('alltime-heartrate-line-chart').getContext('2d');
        var lineChart9 = new Chart(ctx9, {
            type: 'line',
            data: alltimeHeartrateLineChartData
        });

        var ctx14 = document.getElementById('yesterday-pie-chart').getContext('2d');
        window.myPie = new Chart(ctx14, {
            type: 'pie',
            data: yesterdayPieChartData
        });

        var ctx15 = document.getElementById('yesterday-bar-chart').getContext('2d');
        var barChart = new Chart(ctx15, {
            type: 'bar',
            data: yesterdayBarChartData
        });
    };

    if ($('[data-page-id~=dashboard]').length) {
        // Dashboard
        var ctx10 = document.getElementById('bar-chart').getContext('2d');
        var barChart = new Chart(ctx10, {
            type: 'bar',
            data: barChartData
        });

        var ctx11 = document.getElementById('pie-chart').getContext('2d');
        window.myPie = new Chart(ctx11, {
            type: 'pie',
            data: pieChartData
        });

        var ctx12 = document.getElementById('cycling-goal-line-chart').getContext('2d');
        var lineChart12 = new Chart(ctx12, {
            type: 'line',
            data: cyclingGoalLineChartData
        });

        var ctx13 = document.getElementById('resting-heart-rate-line-chart').getContext('2d');
        var lineChart13 = new Chart(ctx13, {
            type: 'line',
            data: restingHeartRateLineChartData
        });
    };
};

var ChartJs = function () {
  "use strict";
    return {
        //main function
        init: function () {
            handleChartJs();
        }
    };
}();

$(document).on('app:ready', function() {
  ChartJs.init()
});

