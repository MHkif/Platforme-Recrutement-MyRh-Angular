import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { QuizService } from '../../service/quiz/quiz.service';
import { Question } from '../../model/question.model';
import { ResponseHttp } from '../../model/responseData.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { JobSeeker } from '../../model/jobSeeker.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  showWarning: boolean = false;

  isQuizStarted: boolean = false;
  isQuizEnded: boolean = false;
  questionsList: Question[] = [];
  currentQuestionNo: number = 0;
  applicant!: JobSeeker | null;
  remainingTime: number = 5;

  timer = interval(1000);
  subscription: Subscription[] = [];
  correctAnswerCount: number = 0;
  profileId: number = 1;
  constructor(private service: QuizService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('applicantAuth')
      .subscribe(
        (state) => (
          (this.applicant = state.applicant),
          (this.profileId = this.applicant?.profile.id as number)
        )
      );
    this.loadQuestions(this.profileId);
  }
  loadQuestions(profileId: number) {
    this.service.getQuizByProfile(profileId).subscribe({
      next: (res: ResponseHttp) => {
        this.questionsList = res.data.response;
      },
      error: (err: any) => {
        console.error('Error while getting the quiz : ', err);
        alert('Error  : ' + err);
      },
    });
  }
  nextQuestion() {
    if (this.currentQuestionNo < this.questionsList.length) {
      this.currentQuestionNo++;
      this.remainingTime = 5;
    } else {
      this.subscription.forEach((element) => {
        element.unsubscribe();
      });
    }
  }
  finish() {
    this.isQuizEnded = true;
    this.isQuizStarted = false;
  }

  start() {
    this.showWarning = false;
    this.isQuizEnded = false;
    this.isQuizStarted = false;
  }

  showWarningPopup() {
    this.showWarning = true;
  }

  selectOption(option: any) {
    alert('Option : ' + JSON.stringify(option));
    if (option.rightAnswer) {
      this.correctAnswerCount++;
    }
    option.isSelected = true;
  }
  isOptionSelected(options: any) {
    const selectionCount = options.filter(
      (m: any) => m.rightAnswer == true
    ).length;
    if (selectionCount == 0) {
      return false;
    } else {
      return true;
    }
  }
  startQuiz() {
    this.showWarning = false;
    this.isQuizStarted = true;
    this.subscription.push(
      this.timer.subscribe((res) => {
        if (this.remainingTime != 0) {
          this.remainingTime--;
        }
        if (this.remainingTime == 0) {
          this.nextQuestion();
          this.remainingTime = 5;
        }
      })
    );
  }
}
