/*function signature/sample */
function calculateTax(income, expenses) {
    if(income === -1 || expenses === -1 || income < expenses){
        return 'Invalid Input';
    }
    const total = income - expenses;
    const tax = total * .20;
    return tax;
}

// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(-5000, 2000));


/*function signature/sample */
function sendNotification(email) {
    if(email.indexOf('@') === -1){
        return 'Invalid Email';
    }
    const emailAddress = email.split('@');
    const userName = emailAddress[0];
    const domainName = emailAddress[1];
    const notificationMessage = userName + ' sent you an email from ' + domainName;
    return notificationMessage;
}

// console.log(sendNotification('zihad@gmail.com'));
// console.log(sendNotification('fahim234.hotmail.com'));


/*function signature/sample */
function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
    for(let i = 0; i < name.length; i++){
        if(!isNaN(name[i])){
            return true;
        }
    }
    return false;
}

// console.log(checkDigitsInName('Raj123'));
// console.log(checkDigitsInName('!@#'));
// console.log(checkDigitsInName(["Raj"]));


/*function signature/sample */
function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return 'Invalid Input';
    }
    let total = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        total += 20
    }
    return total >= 80;
}

// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
// console.log(calculateFinalScore("hello"));


/*function signature/sample */
function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
return 'Invalid Input'        
    }
    const finished = waitingTimes.length;
    const serial = serialNumber - 1;
    const more = serial - finished;
    let sum = 0;
    for(time of waitingTimes){
        sum += time;
    }
    const avg = Math.round(sum / finished);
    const timeIsrat = avg * more;
    return timeIsrat
}

// console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
// console.log(waitingTime([13, 2], 6));
// console.log(waitingTime(7 , 10));
// console.log(waitingTime("[6,2]", 9));




// js reword task------------
function calculateMony(ticketSale){
    if(ticketSale < -0 ){
        return 'Invalid Input';
    }
    const totalSale = ticketSale * 120 - (500 + 8 * 50)
    return totalSale;
}

// console.log(calculateMony(10));
// console.log(calculateMony(-130));


function checkName(name){
    if(typeof name !== 'string'){
        return 'Invalid';
    }
    // let lastLater = name[name.length -1]
    let lastLater = name.slice(-1).toLowerCase();
    let array = ['a', 'e', 'i', 'o', 'u', 'w', 'y'];
    let result = false;
    for(later of array){
        if(later === lastLater){
            result = true;
        }
    }
    return result ? 'Good Name': 'Bad Name';
}
// console.log(checkName('salman'));
// console.log(checkName('RAFFE'));
// console.log(checkName(['RAFFE']));


function deleteInvalids(array){
    if(!Array.isArray(array)){
        return 'Invalid Array';
    }
    let newArray = [];
    for(element of array){
        if(typeof element === 'number' && isNaN(element) === false){
            newArray.push(element)
        }
    }
    return newArray;
}

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(["1" , {num:2} , NaN ]));
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));


function password(obj){
    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
        return 'Invalid';
    }
    let capitalLater = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let newPassword = capitalLater + '#' + obj.name + '@' + obj.birthYear;
    return newPassword
}
// console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 2002}));


function monthlySaving(array, livingCost){
    if(!Array.isArray(array) || typeof livingCost !== 'number'){
        return 'Invalid Input';
    }
    let totalIncome = 0;
    for(let income of array){
        if(income >= 3000){
            let tax = income * 0.2
            totalIncome += income - tax
        }else{
            totalIncome += income
        }
    }
    let saving = totalIncome - livingCost;
    if(saving >= 0){
        return saving
    }else{
        return 'earn more'
    }
    // return saving ? 'saving': 'earn more';
}

// console.log(monthlySaving([1000, 2000, 3000], 5400));
// console.log(monthlySaving([ 900 , 2700 , 3400] , 10000));
// console.log(monthlySaving(100, [ 900 , 2700 , 3400]));