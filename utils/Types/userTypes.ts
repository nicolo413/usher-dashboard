import { Venue } from './dbTypes';

export type PromoterProfile = {
  id: number;
  email: string;
  password?: string;
  name: string;
  venues: Venue[];
  telephone: number;
  stats: any;
  active_events: any;
};

const mockProfile = {
  id: 1,
  email: 'codeworksBoss@gmail.com',
  name: 'Alessandro',
  venues: [],
  telephone: 983123456,
};
