export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const captialCase = (str: string) => {
  if (!str) return "";
  const words = str.split("_");
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(" ");
};
