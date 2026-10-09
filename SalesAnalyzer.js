export function totalSalesRevenue(sales) {
    return sales.reduce((total, sales) => total + (sales.price * sales.quantity), 0);
}

export function totalUnitsSold(sales) {

}

export function productWithHighestRevenue(sales) {

}

export function revenueByCategory(sales, category) {

}

export function averageSaleValue(sales) {

}

export function emptySales(sales) {
    return sales.length === 0;
}