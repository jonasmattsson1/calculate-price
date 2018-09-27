# DEVELOPER NOTES


### Goals
  - I assume that configData sometime in the future will be fetched from an API, so the structure should support that move without too much changes in the code.
  - More UserTypes and ProductTypes can be added in the future without the need of updating the code.
  - The app should not throw an error if invalid parameters are passed. Don´t use without using try...catch...
   
  
### Thoughts
  - If invalid parameters are passed to calculatePrice I think it is best to return undefined rather then 0 or NaN or something similar, to avaid that usercases like ``` typeof calculatePrice(100) === 'number' ```
  - Preorder functionality? If `publishedDate` is in the future maybe it should have the same rebate as `new today`, or higher rebate?
  
### ToDo
- Add Karma as test-runner and Istanbul for code coverage
