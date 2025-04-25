export function arrToSearchParams(arr: string[]) {
  if (arr.length < 1) return "";

  const params = new URLSearchParams();
  params.append("", arr.join(","));
  return params.toString().split("=")[1];
}
