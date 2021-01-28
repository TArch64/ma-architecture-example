import { FactoryProvider, InjectionToken } from '@angular/core';
import { JsonService } from './json.service';
import { WINDOW } from '../helpers';

export class DataStorageService {
  private static NAMESPACE: string = 'arch';
  public static LOCAL_STORAGE = new InjectionToken<DataStorageService>('LocalStorage');
  public static SESSION_STORAGE = new InjectionToken<DataStorageService>('SessionStorage');

  public static provideLocalStorage(): FactoryProvider {
    return {
      provide: DataStorageService.LOCAL_STORAGE,
      deps: [WINDOW, JsonService],
      useFactory({ localStorage }: Window, jsonService: JsonService) {
        return new DataStorageService(DataStorageService.NAMESPACE, localStorage, jsonService);
      }
    };
  }

  public static provideSessionStorage(): FactoryProvider {
    return {
      provide: DataStorageService.SESSION_STORAGE,
      deps: [WINDOW, JsonService],
      useFactory({ sessionStorage }: Window, jsonService: JsonService) {
        return new DataStorageService(DataStorageService.NAMESPACE, sessionStorage, jsonService);
      }
    };
  }

  private constructor(
    private readonly namespace: string,
    private readonly nativeStorage: Storage,
    private readonly jsonService: JsonService
  ) {}

  public getItem<T>(key: string): T | null {
    return this.accessStorage<T | null>(() => {
      const json = this.nativeStorage.getItem(this.buildKey(key));
      return this.jsonService.fromJson(json);
    });
  }

  public getSecureItem<T>(key: string): T | null {
    return this.accessStorage<T | null>(() => {
      const json = this.nativeStorage.getItem(this.buildKey(key));
      return this.jsonService.fromSecureJson(json);
    });
  }

  public setItem<T = any>(key: string, data: T): void {
    this.accessStorage(() => {
      const json = this.jsonService.toJson(data);
      this.nativeStorage.setItem(this.buildKey(key), json);
    });
  }

  public setSecureItem<T = any>(key: string, data: T): void {
    this.accessStorage(() => {
      const json = this.jsonService.toSecureJson(data);
      this.nativeStorage.setItem(this.buildKey(key), json);
    });
  }

  private accessStorage<T = void>(runAction: () => T): T {
    try {
      return runAction();
    } catch (error) {
      alert('Opps.. Seems like you have enabled "Private Mode" and some features can be broken');
    }
  }

  private buildKey(key: string): string {
    return [this.namespace, key].join('.');
  }
}
