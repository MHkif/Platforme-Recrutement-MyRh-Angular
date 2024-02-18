import { JobSeeker } from "./jobSeeker.model"

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


export interface Offer {
  id: number
  title: string
  description: string
  company: Company
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


export interface City {
  id: number
  name: string
  country: any
}
