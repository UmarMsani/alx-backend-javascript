export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const flattenedEmployees = departments.flat();

  report[Symbol.iterator] = function () {
    let currentIndex = 0;

    return {
      next() {
        return currentIndex < flattenedEmployees.length
          ? { value: flattenedEmployees[currentIndex++], done: false }
          : { done: true };
      },
    };
  };

  return report;
}
