export default function priceFix(price) {
  const _price = parseFloat(price);
  const fixedPrice = String(_price).slice(0, String(_price).length - 1);

  return Number(fixedPrice).toLocaleString();
}
