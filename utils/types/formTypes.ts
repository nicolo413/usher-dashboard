type showType = {
  date: string;
  active_sale: boolean;
  available_seats: number;
};

type eventDataType = {
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