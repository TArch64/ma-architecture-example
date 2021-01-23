import { FactoryProvider, inject, Injectable, InjectionToken } from '@angular/core';
import { JsonService } from './json.service';
import { WINDOW } from './window.provider';

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
    return this.accessToStorage<T | null>(() => {
      const json = this.nativeStorage.getItem(this.buildKey(key));
      return this.jsonService.fromJson(json);
    });
  }

  public setItem<T = any>(key: string, data: T): void {
    this.accessToStorage(() => {
      const json = this.jsonService.toJson(data);
      this.nativeStorage.setItem(this.buildKey(key), json);
    });
  }

  public hasItem(key: string): boolean {
    return this.accessToStorage<boolean>(() => {
      return !!this.nativeStorage.getItem(this.buildKey(key));
    });
  }

  private accessToStorage<T = void>(runAction: () => T): T {
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
