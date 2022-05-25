// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpErrorResponse,
// } from '@angular/common/http';
// //import { JwtAuthService } from '../../service/jwt-auth.service';
// import { Observable, throwError, BehaviorSubject } from 'rxjs';
// import { catchError, filter, take, switchMap } from 'rxjs/operators';
// @Injectable({
//   providedIn: 'root', 
// })

// export class TokenInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const idToken = localStorage.getItem('id_token');
//     if (idToken) {
//       console.log('OWAAAAAAAAAA');
//       console.log(idToken);
//       const cloned = req.clone({
//         headers: req.headers.set('Authorization', 'Bearer ' + idToken),
//       });
//       return next.handle(cloned);
//     } else {
//       next.handle(req);
//       throw new Error('Method not implemented.');
//     }
//   }
// }
