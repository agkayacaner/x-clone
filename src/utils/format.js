export const numberFormatter = (number) => {
  let fotmatter = Intl.NumberFormat('tr', {
    notation: 'compact',
    maximumFractionDigits: 1,
  });

  return fotmatter.format(number);
};
