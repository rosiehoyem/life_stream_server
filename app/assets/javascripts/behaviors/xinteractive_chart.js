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
    labels: ['2017-03-29', '2017-03-30', '2017-03-31', '2017-04-01', '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-05'],
    datasets: [{
        label: 'Activity',
        borderColor: strokeBlue,
        pointBackgroundColor: strokeBlue,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillBlueLight,
        data: [142, 161, 236, 131, 120, 218, 165, 142]
    }]
};

var weeklySleepLineChartData = {
    labels: ['2017-03-29', '2017-03-30', '2017-03-31', '2017-04-01', '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-05'],
    datasets: [{
        label: 'Sleep',
        borderColor: strokePurple,
        pointBackgroundColor: strokePurple,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillPurpleLight,
        data: [6.8, 7.4, 7.4, 8.1, 8.1, 7.4, 6.8, 5.4]
    }]
};

var weeklyHeartrateLineChartData = {
    labels: ['2017-03-29', '2017-03-30', '2017-03-31', '2017-04-01', '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-05'],
    datasets: [{
        label: 'Resting Heart Rate',
        borderColor: strokeGreen,
        pointBackgroundColor: strokeGreen,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillGreenLight,
        data: [56.0, 60.0, 56.0, 54.0, 57.0, 57.0, 53.0, 54.0]
    }]
};

// Monthly Chart DAta

var monthlyActivityLineChartData = {
    labels: ['2017-03-06', '2017-03-07', '2017-03-08', '2017-03-09', '2017-03-10', '2017-03-11', 
    '2017-03-12', '2017-03-13', '2017-03-14', '2017-03-15', '2017-03-16', '2017-03-17', '2017-03-18', 
    '2017-03-19', '2017-03-20', '2017-03-21', '2017-03-22', '2017-03-23', '2017-03-24', '2017-03-25', 
    '2017-03-26', '2017-03-27', '2017-03-28', '2017-03-29', '2017-03-30', '2017-03-31', '2017-04-01', 
    '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-05'],
    datasets: [{
        label: 'Activity',
        borderColor: strokeBlue,
        pointBackgroundColor: strokeBlue,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillBlueLight,
        data: [237, 364, 299, 299, 353, 59, 26, 161, 218, 236, 142, 366, 228, 342, 167, 0, 237, 364, 299, 
          299, 353, 59, 26, 161, 218, 236, 142, 161, 218, 236, 142]
    }]
};

var monthlySleepLineChartData = {
    labels: ['2017-03-06', '2017-03-07', '2017-03-08', '2017-03-09', '2017-03-10', '2017-03-11', 
    '2017-03-12', '2017-03-13', '2017-03-14', '2017-03-15', '2017-03-16', '2017-03-17', '2017-03-18', 
    '2017-03-19', '2017-03-20', '2017-03-21', '2017-03-22', '2017-03-23', '2017-03-24', '2017-03-25', 
    '2017-03-26', '2017-03-27', '2017-03-28', '2017-03-29', '2017-03-30', '2017-03-31', '2017-04-01', 
    '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-05'],
    datasets: [{
        label: 'Sleep',
        borderColor: strokePurple,
        pointBackgroundColor: strokePurple,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillPurpleLight,
        data: [7.1, 7.1, 7.0, 7.3, 7.0, 8.1, 7.4, 6.8, 7.0, 6.0, 7.1, 8.3, 8.0, 7.1, 7.1, 7.0, 7.3, 
        7.0, 8.1, 7.4, 6.8, 7.4, 8.1, 7.4, 6.8, 7.4, 8.1, 8.1, 7.4, 6.8, 5.4]
    }]
};

var monthlyHeartrateLineChartData = {
    labels: ['2017-03-06', '2017-03-07', '2017-03-08', '2017-03-09', '2017-03-10', '2017-03-11', 
    '2017-03-12', '2017-03-13', '2017-03-14', '2017-03-15', '2017-03-16', '2017-03-17', '2017-03-18', 
    '2017-03-19', '2017-03-20', '2017-03-21', '2017-03-22', '2017-03-23', '2017-03-24', '2017-03-25', 
    '2017-03-26', '2017-03-27', '2017-03-28', '2017-03-29', '2017-03-30', '2017-03-31', '2017-04-01', 
    '2017-04-02', '2017-04-03', '2017-04-04', '2017-04-05'],
    datasets: [{
        label: 'Resting Heart Rate',
        borderColor: strokeGreen,
        pointBackgroundColor: strokeGreen,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillGreenLight,
        data: [58.0, 58.0, 58.0, 59.0, 60.0, 60.0, 60.0, 57.0, 56.0, 56.0, 58.0, 58.0, 59.0, 59.0, 
        59.0, 58.0, 58.0, 58.0, 59.0, 60.0, 60.0, 60.0, 56.0, 60.0, 56.0, 54.0, 57.0, 57.0, 53.0, 54.0, 55.0]
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
      "2017-02-13", "2017-02-20", "2017-02-27", "2017-03-06", "2017-03-13", "2017-03-20", "2017-03-27", 
      "2017-04-03"],
    datasets: [{
        label: 'Activity',
        borderColor: strokeBlue,
        pointBackgroundColor: strokeBlue,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillBlueLight,
        data: [4542.4, 6683.6, 8540.1, 8384.6, 3258.2, 5616.3, 19140.1, 5753.3, 5978.6, 9758.1, 13207.7, 
        11003.7, 7616.0, 9241.7, 6145.4, 11762.6, 6400.3, 17221.1, 11054.4, 9979.1, 4484.6, 13878.0, 8517.3, 
        8653.1, 9116.9, 7759.3, 7464.9, 9135.6, 9681.0, 13216.3, 9056.9, 7654.0, 11473.3, 3272.3, 3129.0, 
        4840.4, 12214.6, 1512.1, 1929.7, 2448.6, 2694.0, 5618.0, 2795.9, 13529.9, 2659.7, 2709.9, 2376.3, 
        4710.0, 4867.7, 1624.7, 2051.3, 1741.0, 1938.1, 2333.4, 2912.7, 2795.1, 2356.6, 2082.3, 3474.4, 
        5367.4, 6104.0, 1713.3, 3270.9, 6094.7, 1328.1, 3930.6, 18517.6, 3455.4, 3509.9, 3975.1, 1761.0, 
        6276.6, 5142.3, 5221.3, 2970.4, 5134.4, 3403.0, 1665.1, 5823.9, 3562.0, 4956.6, 4656.1, 10216.7, 
        7055.3, 7910.2, 2248.0, 9391.6, 3582.1, 3163.4, 8353.7, 4789.7, 2594.0, 6614.1, 10308.6, 10676.3, 
        10973.1, 12292.9, 12941.6, 13600.6, 14286.4, 14043.9, 14502.0, 14748.3, 8595.4, 13622.5]
    }]
};

var alltimeSleepLineChartData = {
    labels: ["2016-12-12", "2016-12-26", "2017-01-23", "2017-01-30", "2017-02-06", "2017-02-13", 
    "2017-02-20", "2017-02-27", "2017-03-06", "2017-03-13", "2017-03-20", "2017-03-27", "2017-04-03"],
    datasets: [{
        label: 'Sleep',
        borderColor: strokePurple,
        pointBackgroundColor: strokePurple,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillPurpleLight,
        data: [7.6, 6.1, 7.6, 6.4, 8.2, 7.3, 7.2, 7.0, 7.1, 7.0, 7.4, 7.4, 7.7]
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
    "2017-03-06", "2017-03-13", "2017-03-20", "2017-03-27", "2017-04-03"],
    datasets: [{
        label: 'Sleep',
        borderColor: strokeGreen,
        pointBackgroundColor: strokeGreen,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: fillGreenLight,
        data: [78.0, 65.1, 62.5, 59.3, 58.3, 61.9, 64.4, 62.6, 60.6, 60.5, 60.4, 59.9, 57.9, 58.2, 57.1, 
        57.1, 57.2, 58.3, 59.1, 61.1, 61.7, 62.6, 59.9, 60.7, 60.9, 61.4, 61.1, 56.9, 57.2, 58.1, 60.8, 
        63.2, 64.5, 61.8, 62.3, 60.6, 60.6, 61.0, 62.0, 67.0, 66.5, 63.8, 63.3, 61.5, 62.6, 63.8, 61.2, 
        59.4, 61.0, 62.7, 58.0, 58.5, 61.0, 64.8, 63.0, 61.4, 61.4, 62.0, 62.1, 57.7, 57.6, 58.0, 58.8, 
        57.7, 58.7, 58.2, 56.5]
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

