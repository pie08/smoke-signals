import { ReadonlyURLSearchParams } from "next/navigation";

export function createQueryString(
  name: string,
  value: string,
  searchParams: ReadonlyURLSearchParams
) {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);
  // console.log(params.toString());
  return params.toString();
}
