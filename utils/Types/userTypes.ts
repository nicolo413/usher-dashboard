import { Venue } from "./dbTypes"

export type PromoterProfile = {
  id: number,
  email: string,
  password?: string,
  name: string,
  venues: Venue[],
  telephone: number,
}

const mockProfile = {
  id: 1,
  email: 'codeworksBoss@gmail.com',
  name: 'Alessandro',
  venues: [],
  telephone: 983123456
}