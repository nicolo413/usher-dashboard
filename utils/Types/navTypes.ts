import { Show } from "./dbTypes";

export type HomeTabParamList = {
  Home: undefined;
  Search: undefined;
  Map: undefined;
  ProfileStack: undefined;
};

export type MainStackParamList = {
  Main: undefined;
  Event: { eventId: number, todayShows: Show[] };
  Payment: { showId: string, nSeats: number };
  Confirmation: { event: string, date: string, seats: number };
}

export type ProfileStackParamList = {
  Profile: undefined;
  Favorites: undefined;
  Tickets: undefined;
}