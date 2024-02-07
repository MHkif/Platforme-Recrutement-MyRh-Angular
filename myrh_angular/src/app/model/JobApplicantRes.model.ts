export interface JobApplicantRes{
  id: Id
  createdDate: string
  jobSeeker: JobSeeker
  offer: Offer
  resume: string
  isViewed: boolean
  status: string
}

export interface Id {
  offer_id: number
  jobSeeker_id: number
}

export interface JobSeeker {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
  image: any
  offers: any[]
  enabled: boolean
}

export interface Offer {
  id: number
  title: string
  description: string
  company: Company
  profile: Profile
  city: City
  level: string
  status: string
  salary: number
}

export interface Company {
  id: number
  name: string
  email: string
  password: string
  image: string
  enabled: boolean
}

export interface Profile {
  id: number
  description: string
}

export interface City {
  id: number
  name: string
  country: any
}
