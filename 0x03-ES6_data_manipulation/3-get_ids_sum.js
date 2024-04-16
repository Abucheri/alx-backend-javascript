export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return 0;
  }
  return studentsList.reduce((total, student) => total + student.id, 0);
}
