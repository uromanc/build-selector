import builds from "./builds";
const tableElement = document.querySelector('#table_body')
builds.forEach(build => {
  let rowElement = document.createElement('tr')
  let tdIconURLElement = document.createElement('td')
  let tdNameElement = document.createElement('td')
  let tdCountElement = document.createElement('td')
  tdIconURLElement.innerHTML = `<img src="${build.iconURL}" alt="${build.name}">`
  tdNameElement.innerHTML = build.name
  tdCountElement.innerHTML = build.count
  rowElement.appendChild(tdIconURLElement)
  rowElement.appendChild(tdNameElement)
  rowElement.appendChild(tdCountElement)
  tableElement.appendChild(rowElement)
});
export default tableElement