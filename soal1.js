const prompt = require('prompt-sync')();

const dataReview = prompt("masukan data:");

function getRatings(ratings) {
    let minRating = Infinity;
    let maxRating = -Infinity;
    let totalRating = 0;
    let countRating = 0;
  
    const ratingsArray = dataReview.trim().split(",");
  
    for (const rating of ratingsArray) {
      let ratingNumber;
      try {
        ratingNumber = parseFloat(rating);
      } catch (error) {
        continue;
      }
  
      if (ratingNumber < minRating) {
        minRating = ratingNumber;
      }
  
      if (ratingNumber > maxRating) {
        maxRating = ratingNumber;
      }
  
      if (!isNaN(ratingNumber)) {
        totalRating += ratingNumber;
        countRating++;
      }
    }
  
    const averageRating = totalRating / countRating;
  
    return [minRating, maxRating, averageRating];
  }

const results = getRatings(dataReview);

console.log(results);