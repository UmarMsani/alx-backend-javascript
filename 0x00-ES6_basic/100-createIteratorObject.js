export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const flattenedEmployees = departments.flat();

  let currentIndex = 0;

  return {
    next() {
      const result =
        currentIndex < flattenedEmployees.length
          ? { value: flattenedEmployees[currentIndex], done: false }
          : { done: true };

      currentIndex = currentIndex + 1;

      return result;
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
