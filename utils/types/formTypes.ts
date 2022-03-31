export type showType = {
  date: string;
  active_sale: boolean;
  available_seats: number;
};

export type eventDataType = {
  name: string | undefined;
  price: number | undefined;
  type: string | undefined;
  genres: string[] | undefined;
  image: File | undefined;
  poster: File | undefined;
  language: string | undefined;
  duration: number | undefined;
  description: string | undefined;
  external_url: string | undefined;
};

export type EventInput = {
  name: string,
  price: number,
  type: 'THEATER' | 'CONCERT' | 'CINEMA' | 'CIRCUS',
  genres: string[],
  image: string,
  poster: string,
  language: string,
  duration: number,
  description: string,
  external_url: string,
  venue_id: string,
}