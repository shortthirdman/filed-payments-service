import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private priceSubject = new Subject<number>();
  priceState = this.priceSubject.asObservable();

  constructor(private http: HttpClient, private toast: MessageService) { }

  setCurrentPrice(amount: number) {
    if (amount) {
      this.priceSubject.next(amount);
    }
  }

  getCurrentPrice(): Observable<number> {
    return this.priceState;
  }

  authorizePayments(payInfo: any): Observable<any> {
    return this.http.post('/cart/pay', payInfo).pipe(
      catchError((error: any) => throwError(error || 'Error, while loading data '))
    );
  }

  showAlerts(level: string, message: string) {
    this.toast.clear();
    this.toast.add({ detail: 'Payments', data: message, severity: level, life: 3000 });
  }
}
