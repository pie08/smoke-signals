import { ReadonlyURLSearchParams } from "next/navigation";

export function createQueryString(
  name: string,
  value: string,
  searchParams: ReadonlyURLSearchParams
) {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);

  // remove query if no filters
  if (!params.get(name)) {
    params.delete(name);
    return params.toString();
  }

  return params.toString();
}
