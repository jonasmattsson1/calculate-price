# DEVELOPER NOTES


### Goals
  - I assume that configData sometime will be fetched from an API in the future, so the structure should support that move without too much changes in the code.
  - More UserTypes and ProductTypes can be added in the future without the need of updating the code.
  - The app should not throw an error if invalid parameters are passed. No need for a try-catch block.
   

###  About the progress
I knowed from the beginning that I wanted all values in constants imported, and that I wanted the `userTypes` and `productTypes` in arrays so more types could be added later without updating the logic.
I started to use Array.map, to loop the arrays, but went with Array.find instead as it become cleaner this un-neasted way.
I splited up the code into smaller functions (like `getUserType` and `getProductType` that I imported, 
but as these become one-liner function that required parameters similar to Array.find,
I thought it become almost as clean but just as readable if not more to skip the imported functions.
One benifit by splitting the code up in smaller functions is that smaller parts of the app can be tested seperatly and is that I something use to aim for, but in this case I think it works as there are almost no logic involved.


### Thoughts
  - Preorder functionality? If `publishedDate` is in the future maybe the rebate should be the same as `new today`?
  - If the sum of rebates and additional price´s become more advance in the future, a sum function will be needed to handle percentages etc.
  

### ToDo
- Add Karma as test-runner and Istanbul for code coverage
