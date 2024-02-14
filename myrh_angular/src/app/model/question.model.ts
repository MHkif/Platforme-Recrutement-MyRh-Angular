import { Answer } from "./answer.model";
import { Profile } from "./profile.model";


export interface Question {
    id: number;
    question: string;
    profile : Profile;
    answers : Array<Answer>
}
   
  