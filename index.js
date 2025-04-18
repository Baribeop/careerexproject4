
// Question 1 - A fuction that displays passed if a student score 180 and above otherwise failed
function checkStudentScore (studentScore) {
if (studentScore >= 180){
    console.log('Passed')
} else {
    console.log('Failed')
 }
}

// call the function checkStudentScore

checkStudentScore(178)
checkStudentScore(190)



// Question 2 - A function that displays one is elligible to vote if 18 year and above, otherwise not eligible

function verifyVotingAge(age) {
    if (age >= 18 ){
        console.log('You are elligible to vote')
    } else {
        console.log('Not elligle')
    }
}

// Call function verifyVotingAge 
verifyVotingAge(20)
verifyVotingAge(14)

// Question 3 - A function that assigns a comment based on the score.  
//     "Excellent" if score >= 90
//     "Good" if score >= 75
//     "Average" if score >= 50
//     "Fail" otherwise

function assignCommentToScore(studentName, studentScore) {
        if (studentScore >= 90){
            console.log('Excellent')
        } else if(studentScore >= 70) {
            console.log('Good')
        } else if(studentScore >= 50){
            console.log('Average')
        } else {
            console.log('Fail')
        }
}

// Call function assignCommentToScore to test code 
assignCommentToScore('Job', 98)
assignCommentToScore('Mary', 80)
assignCommentToScore('Kloe', 46)



// Question 4 - A function that determines if a user has both ID and is above 18 years before granting access

function determineAccess(hasID, isAbove18) {
    if (hasID && isAbove18 === true){
        console.log('Access granted')
    } else {
        console.log('Access not granted')
    }

}

// call the function determineAccess

determineAccess( false, true)
determineAccess( true, true)



// Question 5 - A function that diplays pass if a score is 50 and above otherwise fail

function checkScore(studentScoreArray){
    for (let i = 0; i < (studentScoreArray.length); i++) {

        console.log(studentScoreArray[i])
        if (studentScoreArray[i] >= 50){
            console.log('Pass')
        } else {
            console.log('Fail')
        }
    }
}

// Call the function checkScore
checkScore([40, 70, 60, 54, 20, 40])


// Question 6 - A function that checks if math score and english score are greater than or equal to 50

checkMathAndEnglishScore = (mathScore, englishScore) => {
    if (mathScore >= 50 && englishScore >= 50 ){
        console.log('Yes')
    }else{
        console.log('No')
    }
   
}

// call the function checkMathAndEnglishScore
checkMathAndEnglishScore( 60, 40)
checkMathAndEnglishScore( 50, 50)
checkMathAndEnglishScore( 20,50)



// Question 7 - A function that checks the presence either email or phone number before signing a user


function checkForEmailOrPhoneNumber  (email, phoneNumber) {
    if (email || phoneNumber){
        console.log('User can sign up')
    } else {
        console.log('User can not sign up')
    }
}

// Call function to test function 
checkForEmailOrPhoneNumber('user@gmail.com')
checkForEmailOrPhoneNumber(234080237859)


// Question 8 - A function that checks if either username or password is empty and displays invalid input

function checkForEmptyUsernameOrPassword (username = '', password = '') {
   
    if (username === '' || password === '') {
        console.log('Invalid input')
    } else {
        console.log('Valid input')
    }
}


checkForEmptyUsernameOrPassword('kloe', 'job')


// Question 9 - A funtion that checks hours worked and displays full-time foe 40 hours and above otherwise part-time

function checkWorkType(hoursWorked){
   hoursWorked >= 40 ? console.log('Full-time') : console.log('Part-time')

}

checkWorkType(39)
checkWorkType(79)


// Question 10 -  A function that determines which of two numbers is larger.

checkLargerNumber = (firstNumber, secondNumber) => {
    if (firstNumber > secondNumber) {
        console.log(firstNumber)
    } else {
        console.log(secondNumber)
    }
}

// call the fuction checkLargerNumber
checkLargerNumber(2, 6)
checkLargerNumber(9, 6)


