import { Question } from './question.model';

export interface Answer {
  id: number;
  answer: string;
  rightAnswer: boolean;
  // question: Question;
}
