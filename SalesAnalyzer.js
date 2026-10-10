export function totalSalesRevenue(sales) {
    return sales.reduce((total, sale) => total + (sale.price * sale.quantity), 0);
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