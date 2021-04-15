export type ShortAddress = [string, string, string];

export const formatAddress = (longAddress: string[]): ShortAddress => {
  return [
    longAddress[0],
    [longAddress[1], longAddress[2], longAddress[3]].join(" "),
    longAddress[4],
  ];
};
