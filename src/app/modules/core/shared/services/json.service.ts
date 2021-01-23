import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {
  public fromJson<T>(json: string): T | null {
    if (!json) return null;

    try {
      return JSON.parse(json);
    } catch (error) {
      console.error(`Parsing json was failed: "${json}"`)
      return null;
    }
  }

  public toJson<T = any>(data: T): string {
    return JSON.stringify(data);
  }
}
