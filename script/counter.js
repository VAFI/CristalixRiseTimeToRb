const rebirthPrice = {
    '1': 5e6, 
    '2': 60e6,
    '3': 75e6 ,
    '4': 100e6 ,
    '5': 130e6 ,
    '6': 150e6 ,
    '7': 175e6,
    '8': 200e6 ,
    '9': 225e6 ,
    '10': 250e6 ,
    '11': 275e6 ,
    '12': 300e6 ,
    '13': 350e6 ,
    '14': 375e6 ,
    '15': 400e6 ,
    '16': 500e6 ,
    '17': 600e6 ,
    '18': 900e6 ,
    '19': 1e9 ,
    '20': 1.5e9,
    '21': 10e9 ,
    '22': 50e9 ,
    '23': 150e9 ,
    '24': 250e9 ,
    '25': 500e9 ,
    '26': 750e9 ,
    '27': 1e12 ,
    '28': 2e12 ,
    '29': 5e12 ,
    '30': 10e12 ,
    '31': 100e12 ,
    '32': 500e12 ,
    '33': 1e15 ,
    '34': 50e15 ,
    '35': 100e15 ,
    '36': 500e15 ,
    '37': 1e18 ,
    '38': 5e18 ,
    '39': 100e18 ,
    '40': 1e25
    };

function calculateTime(){
 


    let income = document.getElementById('incomeInput').value;
    let rebirthCount =  document.getElementById('rebirthCountInput').value;
    if (rebirthCount < 41 && rebirthCount > 0) var time = Math.ceil((rebirthPrice[rebirthCount] / (Number(income)*1000))/60);
    else var time = '∞';
    document.getElementById("time").innerHTML=time + ' минут';
}

