import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as _ from 'lodash';

import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ErrorHandlingInterceptor implements HttpInterceptor {

    constructor(private messageService: MessageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(() => { },
                err => {
                    if (err instanceof HttpErrorResponse) {
                        this.messageService.clear();
                        if (err.status === 0) {
                            this.messageService.add({
                                severity: 'error', detail: 'Server not reachable.', life: 10000, closable: true,
                                data: { shouldRetry: true }
                            });
                        } else if (err.status === 404) {
                            this.messageService.add({ severity: 'error', summary: 'Not found', detail: err.url, life: 10000, closable: true });
                        } else if (err.status === 500) {
                            this.messageService.add({
                                severity: 'error', summary: 'Error occured', detail: err.error, life: 10000, closable: true
                            });
                        }
                    }
                }
            )
        );
    }
}
