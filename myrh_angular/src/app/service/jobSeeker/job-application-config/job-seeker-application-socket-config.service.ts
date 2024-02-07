import {Injectable} from '@angular/core';

import {Observable, Subject, takeUntil} from "rxjs";
import {environment} from "../../../../environments/environment";
import * as SockJS from 'sockjs-client';
import {Stomp} from "@stomp/stompjs";


@Injectable({
  providedIn: 'root'
})
export class JobSeekerApplicationSocketConfigService {

  notificationsSubject: Subject<any> = new Subject<any>();
  private serverUrl = environment.backendHost;


  private stompClient = Stomp.over(function () {
    return new SockJS('http://localhost:8080/myrh-websocket');
  });



  constructor() {

  }

  private initializeWebSocketConnection(
    topic :string): void {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(topic, (message: any) => {
        this.handleNotification(message);
      });
    });
  }

  subscribeToNotification(topic: string, jobSeekerId: number, callback: any): void{
      const connect :boolean = this.stompClient.connected;
      this.stompClient.connected
      ? this.subscribeToTopic(topic + jobSeekerId, callback)
      : this.initializeWebSocketConnection(topic + jobSeekerId);
  }
  private subscribeToTopic(topic: string, callback: any): void {
    this.stompClient.subscribe(topic, (message:any) => {
      callback(message);
      this.handleNotification(message);
    });
  }


  private handleNotification(message: any): void {

    const notification = JSON.parse(message.body);
    console.log("handle new notification" )
    console.log(notification)
    this.notificationsSubject.next(notification);
  }

  getNotifications(): Observable<any> {
      //THIS CALL IS NEVER REACHED ??
      console.log("getNotifications")
    return this.notificationsSubject.asObservable().pipe(takeUntil(this.notificationsSubject));
  }
}

//https://github.com/trangntt-016/stocktrading/blob/master/frontend/src/app/trade/paper/order/order.component.ts
