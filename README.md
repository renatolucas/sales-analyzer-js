# Sales Analyzer
## sales-analyzer-js - A short project to practice JavaScript
---
A company has a set of sales data and needs a small module to generate metrics for reports.
Your task is to implement the logic that processes this data, without the need to build a graphical interface or an API at this stage.

### Input data:

```javascript
const sales = [
  { id: 1, product: "Notebook", category: "Eletrônicos", price: 3500, quantity: 2 },
  { id: 2, product: "Mouse", category: "Periféricos", price: 120, quantity: 5 },
  { id: 3, product: "Teclado", category: "Periféricos", price: 250, quantity: 3 },
  { id: 4, product: "Monitor", category: "Eletrônicos", price: 1200, quantity: 2 },
  { id: 5, product: "Mouse", category: "Periféricos", price: 120, quantity: 2 }
];
```
### Functional requirements: 
- [ ] Calculate total sales revenue.
- [ ] Calculate the total number of units sold.
- [ ] Identify the product with the highest revenue.
- [ ] Group revenue by category.
- [ ] Calculate the average transaction value.
- [ ] Detect and handle an empty sales collection.

### Technical constraints
- Use JavaScript with ES modules.
- Separate responsibilities into functions.
- Don't modify the original sales collection.
- Avoid concentrating all logic in a single function.
- Don't use external libraries.

### How to Run
```node app,js```

### Learning Objectives
- Practice array manipulation and object operations.
- Apply functions and ES modules.
- Process and aggregate data.
- Handle edge cases.
- Write readable and maintainable code.