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

export function revenueByCategory(sales) {
    if (emptySales(sales)) {
        return null;
    }

    return sales.reduce((acc, product) => {
        const key = product.category;
        acc[key] = (acc[key] || 0) + product.price * product.quantity;
        return acc;
    }, {})
}

export function averageSaleValue(sales) {
    if (emptySales(sales)) {
        return null;
    }

    const totalSales = totalSalesRevenue(sales);
    return totalSales / sales.length;

}

export function emptySales(sales) {
    validateSales(sales);
    return sales.length === 0;
}

function validateSales(sales) {
    if (!Array.isArray(sales)) {
        throw new TypeError("Parameter isn't an array");
    }
}