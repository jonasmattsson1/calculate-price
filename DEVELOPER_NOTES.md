# DEVELOPER NOTES


### Goals
  - I assume that configData sometime in the future will be fetched from an API, so the structure should support that move without too much changes in the code.
  - More UserTypes and ProductTypes can be added in the future without the need of updating the code.
  - The app should not throw an error if invalid parameters are passed. Noo need for a try-catch block.
   

###  About the progress
I knowed from the beginning that I wanted all values in constants imported, and that I wanted the `userTypes` and `productTypes` in arrays so more types could be added later without updating the logic.
I started to use Array.map, to loop the arrays, but went with Array.find instead as it become cleaner this un-neasted way.
I splited up the code into smaller functions (like `getUserType` and `getProductType` that I imported, 
but as these was become one-liner function that required parameters similar to Array.find.
I thought it become almost as clean but just as readable if not more to skip the imported functions.
The benifit by splitting the code up in smaller functions is that smaller parts of the app can be tested seperatly and is that I something like,
but in this case I think it works as there are almost no logic involved.


### Thoughts
  - If invalid parameters are passed to calculatePrice I think it is best to return undefined rather then 0 or NaN or something similar, to avoid usercases like ``` typeof calculatePrice(100) === 'number' ```
  - Preorder functionality? If `publishedDate` is in the future maybe the rebate should be the same as `new today`?
  

### ToDo
- Add Karma as test-runner and Istanbul for code coverage
