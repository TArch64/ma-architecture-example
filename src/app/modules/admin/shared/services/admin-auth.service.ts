import { Inject, Injectable } from '@angular/core';
import { DataStorageService } from '../../../core/shared';

@Injectable()
export class AdminAuthService {
  private static readonly STORAGE_KEY: string = 'auth';

  constructor(
    @Inject(DataStorageService.SESSION_STORAGE)
    private readonly dataStorage: DataStorageService
  ) {}

  public get isAuthenticated(): boolean {
    return this.dataStorage.hasItem(AdminAuthService.STORAGE_KEY);
  }
}
