export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* Use const instead of var */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* Use const instead of var */

  return [task, task2];
}
