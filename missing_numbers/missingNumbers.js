class MissingNumbers {
  missingNumbers(sequence) {
    const missing = [];

    for (let i = 1; i < sequence.length; i++) {
      if (sequence[i] - sequence[i - 1] > 1) {
        for (let j = 1; j < sequence[i] - sequence[i - 1]; j++) {
          missing.push(sequence[i - 1] + j);
        }
      }
    }
    return missing;
  }
}

module.exports = MissingNumbers;
