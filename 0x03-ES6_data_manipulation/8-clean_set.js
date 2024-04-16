export default function cleanSet(set, startString) {
  let resultSet = '';
  if (!startString || !startString.length) return resultSet;
  set.forEach((element) => {
    if (element && element.startsWith(startString)) resultSet += `${element.slice(startString.length)}-`;
  });
  return resultSet.slice(0, resultSet.length - 1);
}
