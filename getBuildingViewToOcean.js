const getBuildingsPositionWithViewToTheOcean = (buildings) => {
    let hightestBuilding = 0
    let buildingPosition = buildings.length - 1
    const buildingsPosition = []

    while(buildingPosition >= 0) {
        const currentBuildingHeight = buildings[buildingPosition]

        if (currentBuildingHeight > hightestBuilding) {
            hightestBuilding = currentBuildingHeight
            buildingsPosition.unshift(buildingPosition)
        }

        buildingPosition--
    }

    return buildingsPosition
}

const buildings = [6, 7, 3, 4, 2]

console.log('###### SOLUTION ######')
console.log(`Hightests buildings position with view to the ocean: ${getBuildingsPositionWithViewToTheOcean(buildings)}`)