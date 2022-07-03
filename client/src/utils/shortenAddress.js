export const shortenAddress = (address) => {
  return `${address.slice(0, 9)}...${address.slice(address.length - 9)}`;
};
