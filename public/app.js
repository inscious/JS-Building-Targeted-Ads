// Get the user's time:                                                              
function getMealTime(){
    const tod = userTime()
    return tod > 20 ? 'latenight snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
}
console.log(getMealTime())

// get user's coordinates


// get user's time


// helper functions
// check time of day


// build ads
// Build Ad 1:                                                           
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(inner)
}
buildAd1()
// build ad 2


// event listeners
// on load, build ads
