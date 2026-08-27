export function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]) {
  return inputs
    .map((input) => {
      if (!input) return "";
      if (typeof input === "string") return input;
      return Object.entries(input)
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key)
        .join(" ");
    })
    .filter(Boolean)
    .join(" ");
}

