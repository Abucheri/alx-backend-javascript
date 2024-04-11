// 2-hbtn_course.test.js
import HolbertonCourse from './2-hbtn_course.js';

describe('HolbertonCourse', () => {
  it('should create a HolbertonCourse object with specified attributes', () => {
    const course = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
    expect(course.name).toBe("ES6");
    expect(course.length).toBe(1);
    expect(course.students).toEqual(["Bob", "Jane"]);
  });

  it('should update attributes using setters', () => {
    const course = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
    course.name = "Python 101";
    course.length = 2;
    course.students = ["Alice", "John"];
    expect(course.name).toBe("Python 101");
    expect(course.length).toBe(2);
    expect(course.students).toEqual(["Alice", "John"]);
  });

  it('should throw TypeError when setting invalid values', () => {
    const course = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
    expect(() => { course.name = 12; }).toThrow(TypeError);
    expect(() => { course.length = "2"; }).toThrow(TypeError);
    expect(() => { course.students = ["Alice", 123]; }).toThrow(TypeError);
  });
});
