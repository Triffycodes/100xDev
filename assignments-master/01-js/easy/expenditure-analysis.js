/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length === 0) {
    return [];
  }

  let output = [];
  
  let categoryList = [];
  for(let i = 0; i < transactions.length; i++){
    categoryList.push(transactions[i].category);
  }
  categoryList = [...new Set(categoryList)];
  
  for(let i = 0; i < categoryList.length; i++){
    let totalSpent = 0;
    for(let j = 0; j < transactions.length; j++){
      if(categoryList[i] === transactions[j].category){
        totalSpent += transactions[j].price;
      }
    }
    // Push a new object for each category into the output array
    output.push({ category: categoryList[i], totalSpent: totalSpent });
  }

  return output;
}

module.exports = calculateTotalSpentByCategory;
