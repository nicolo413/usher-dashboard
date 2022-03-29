type EventType = {
  id: number,
  name: string,
  price: number,
  type: String,
  genres: String[],
  image?: String,
  poster?: String,
  language?: String,
  duration?: number,
  description?: String,
  external_url?: String,
  venue: Venue,
  shows: Show[],
  today_shows: Show[],
  next_show: Show
}

type Venue = {
  id: string,
  name: string,
  external_url?: String,
  address: String,
  zipcode: String,
  city: String,
  latitude: number,
  longitude: number,
  events: EventType[],
  promoter: Promoter,
  promoter_id: number,
}

type Ticket = {
  id: string,
  show: Show,
  show_id: string,
  used: boolean,
  user: User,
}

type Promoter = {
  id: number,
  name: String,
  email: String,
  password: String,
  venues: Venue[],
  telephone?: number
}

type Show = {
  id?: string,
  date: string,
  active_sale: Boolean,
  available_seats?: number,
  tickets?: Ticket[],
  event?: EventType,
}