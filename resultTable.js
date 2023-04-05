import builds from "./builds";
const tableElement = document.querySelector('#buildsCount')
  builds.forEach(build => {
    const rowTable = tableElement.insertRow(1)
    const leftCell = rowTable.insertCell(0)
    const rightCell = rowTable.insertCell(1)
    leftCell.innerHTML = build.name
    rightCell.innerHTML = build.count
  });
export default tableElement