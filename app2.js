function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0
    return function(location){
        warningCounter ++
        console.log(`${typeOfWarning} harzard at ${location}`)
        console.log(`the ${typeOfWarning} have been triggered ${warningCounter} times today`)
    }
}

const first = hazardWarningCreator('Blizzard')
const second = hazardWarningCreator('Storm')
const third = hazardWarningCreator('Hurricane')

first('New York')
second('Georgia')
third('Texas')
third('Texas')

