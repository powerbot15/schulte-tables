export const gameService = {
  mixNumbers (size) {
    let numbers = [];
    let table = [];
    const sideSize = Math.sqrt(size);
    let firstIndex, secondIndex, tmp, commonIndex;
    for (let i = 1; i <= size; i++) {
      numbers.push({
        value: i,
        checked: false
      });
    }
    for (let i = 0; i < size; i++) {
      firstIndex = getRandomInt(0, size - 1);
      secondIndex = getRandomInt(0, size - 1);
      tmp = numbers[firstIndex];
      numbers[firstIndex] = numbers[secondIndex];
      numbers[secondIndex] = tmp;
    }
    commonIndex = 0;
    for (let i = 0; i < sideSize; i++) {
      table.push([]);
      for (let j = 0; j < sideSize; j++) {
        table[i].push(numbers[commonIndex]);
        commonIndex++;
      }
    }
    return table;
  }
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
