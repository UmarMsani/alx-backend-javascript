export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const flattenedEmployees = departments.flat();

  let currentIndex = 0;

  return {
    next() {
      return currentIndex < flattenedEmployees.length
        ? { value: flattenedEmployees[currentIndex++], done: false }
        : { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
