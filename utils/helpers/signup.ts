import { createPromoter } from "../../services/api/auth"

export const signup = async (formData: SignupForm) => {
  const { email, password, name, telephone } = formData
  const isValid = validateSignup(formData)
  if (!isValid) return isValid as string;
  const promoter = await createPromoter(email, password, name, telephone)
}

const validateSignup = (formData: SignupForm) => {
  if (!formData.email) {
    return 'Provide valid email';
  } else if (!formData.password) {
    return 'Password is required'
  } else if (!formData.name) {
    return 'First name is required'
  } else if (!formData.telephone) {
    return 'Last name is required';
  } else if (!formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return 'Email should have email format'
  } else if (!formData.password.match(/.{6,}/)) {
    return 'Password must have at least 6 characters'
  }
  return true
}

export type SignupForm = {
  email: string
  password: string
  name: string
  telephone: number
}

export const signupMock = {
  email: '',
  password: '',
  name: '',
  telephone: 0,
}