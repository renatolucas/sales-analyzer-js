export function totalSalesRevenue(sales) {
    return sales.reduce((total, sale) => total + (sale.price * sale.quantity), 0);
}

export function totalUnitsSold(sales) {
    return sales.reduce((total, sale) => total + sale.quantity, 0);
}

export function productWithHighestRevenue(sales) {
    if (emptySales(sales)) {
        return null;
    }

    let highestRevenue = sales[0];

    for (const product of sales) {
        if ((product.price * product.quantity) > (highestRevenue.price * highestRevenue.quantity)) {
            highestRevenue = product;
        }
    }

    return highestRevenue;
}

export function revenueByCategory(sales, category) {

}

export function averageSaleValue(sales) {

}

export function emptySales(sales) {
    return sales.length === 0;
}