import * as salesAnalyzer from './SalesAnalyzer.js'

// const sales = [
//     { id: 1, product: "Notebook", category: "Eletrônicos", price: 3500, quantity: 2 },
//     { id: 2, product: "Mouse", category: "Periféricos", price: 120, quantity: 5 },
//     { id: 3, product: "Teclado", category: "Periféricos", price: 250, quantity: 3 },
//     { id: 4, product: "Monitor", category: "Eletrônicos", price: 1200, quantity: 2 },
//     { id: 5, product: "Mouse", category: "Periféricos", price: 120, quantity: 2 }
// ];

const sales = null;

try {
    console.log(salesAnalyzer.totalSalesRevenue(sales));
    console.log(salesAnalyzer.totalUnitsSold(sales));
    console.log(salesAnalyzer.productWithHighestRevenue(sales));
    console.log(salesAnalyzer.revenueByCategory(sales));
    console.log(salesAnalyzer.averageSaleValue(sales));
    console.log(salesAnalyzer.emptySales(sales));

} catch (e) {
    console.error("Error processing sales:", e.message);
}


