interface Mountain {
  name: string;
  height: number;
}
let mountains: Mountain[] = [
  {
    name: "Kilimanjaro ",
    height: 19341,
  },
  {
    name: "Everest ",
    height: 29029,
  },
  {
    name: "Denali ",
    height: 20310,
  },
];
const findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string => {
  let tallestMountain = arrayOfMountains[0];
  arrayOfMountains.forEach((mountain) => {
    if (tallestMountain.height < mountain.height) {
      tallestMountain = mountain;
    }
  });
  return tallestMountain.name;
};
console.log(findNameOfTallestMountain(mountains));
interface Product {
  name: string;
  price: number;
}
let products: Product[] = [
  {
    name: "chips",
    price: 1,
  },
  {
    name: "pop",
    price: 3,
  },
  {
    name: "chocolate",
    price: 1,
  },
];
const calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let avgPrice = 0;
  arrayOfProducts.forEach((product) => {
    avgPrice += product.price / arrayOfProducts.length;
  });
  return Math.round(avgPrice);
};
console.log(calcAverageProductPrice(products));
interface InventoryItem {
  product: Product;
  quantity: number;
}
let inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];
const calcInventoryValue = (arrayOfInventory: InventoryItem[]): number => {
  let totalValue = 0;
  arrayOfInventory.forEach((item) => {
    totalValue = totalValue + item.product.price * item.quantity;
  });
  return totalValue;
};

console.log(calcInventoryValue(inventory));
