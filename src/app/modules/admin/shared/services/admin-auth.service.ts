import { Inject, Injectable } from '@angular/core';
import { DataStorageService } from '../../../core';
import { Observable, of, throwError } from 'rxjs';
import { AuthCredentialsModel } from '../models';

interface ILoginData {
  logined: number;
  email: string;
}

@Injectable()
export class AdminAuthService {
  private static readonly STORAGE_KEY: string = 'auth';

  constructor(
    @Inject(DataStorageService.SESSION_STORAGE)
    private readonly dataStorage: DataStorageService
  ) {}

  public get isAuthenticated(): boolean {
    const loginData = this.dataStorage.getSecureItem<ILoginData>(AdminAuthService.STORAGE_KEY);
    return !!loginData?.logined
  }

  public login(credentials: AuthCredentialsModel): Observable<null> {
    const isValidCredentials = credentials.isValid({ email: 'admin@mail.com', password: 'admin' });
    if (!isValidCredentials) return throwError(new Error('Invalid email or password'));

    this.dataStorage.setSecureItem<ILoginData>(AdminAuthService.STORAGE_KEY, {
      logined: Date.now(),
      email: credentials.email
    });
    return of(null);
  }

  public logout() {
    this.dataStorage.removeItem(AdminAuthService.STORAGE_KEY);
  }
}
