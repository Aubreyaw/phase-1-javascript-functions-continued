saturdayFun()

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

mondayWork()
function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }