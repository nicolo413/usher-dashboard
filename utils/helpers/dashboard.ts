import { capitalize } from './cards';

export function parseLineGraph(data: any) {
  const parsedData = [];
  for (const [key, value] of Object.entries(data)) {
    //@ts-ignore
    parsedData.push({ name: capitalize(key), ...value });
  }
  return parsedData;
}

export function parseDonut(data: any) {
  const parsedData = [];
  for (const [key, value] of Object.entries(data)) {
    //@ts-ignore
    parsedData.push({ name: capitalize(key), sales: value.sales });
  }
  return parsedData;
}
