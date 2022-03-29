export type EventType = {
  id: number,
  name: string,
  price: number,
  type: string,
  genres: String[],
  image?: string,
  poster?: string,
  language?: string,
  duration?: number,
  description?: string,
  external_url?: string,
  venue: Venue,
  shows: Show[],
  today_shows: Show[],
  next_show: Show
}

export type Venue = {
  id: string,
  name: string,
  external_url?: string,
  address: String,
  zipcode: String,
  city: String,
  latitude: number,
  longitude: number,
  events: EventType[],
  promoter: Promoter,
  promoter_id: number,
}

export type Ticket = {
  id: string,
  show: Show,
  show_id: string,
  used: boolean,
  user_id: string,
}

export type Promoter = {
  id: number,
  name: String,
  email: String,
  password: String,
  venues: Venue[],
  telephone?: number
}

export type Show = {
  id?: string,
  date: string,
  active_sale: Boolean,
  available_seats?: number,
  tickets?: Ticket[],
  event?: EventType,
}