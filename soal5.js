function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  function countCombinations(totalCharacters, usernameLength) {
    const permutations = factorial(totalCharacters) / factorial(totalCharacters - usernameLength);
    return permutations;
  }
  
  const totalCharacters = 'naip lovyu'.replace(/\s/g, '').length;
  
  for (let usernameLength = 1; usernameLength <= 6; usernameLength++) {
    const combinations = countCombinations(totalCharacters, usernameLength);
    console.log(`Panjang ${usernameLength}: ${combinations} kombinasi`);
  }
  