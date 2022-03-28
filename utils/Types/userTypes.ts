type UserProfile = {
  id: string,
  email: string,
  password: string,
  first_name: string,
  last_name: string,
  created_at: string,
  favorite_ids: number[]
  tickets: Ticket[],
  notifications: Boolean,
}