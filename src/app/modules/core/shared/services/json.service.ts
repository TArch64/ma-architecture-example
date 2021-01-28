import { Injectable } from '@angular/core';
import { EncodingService } from './encoding.service';

interface ISecureJson<T> {
  payload: T;
  key: string;
}

@Injectable()
export class JsonService {
  private static readonly SECRET_KEY = 'some-secure-key';

  constructor(private readonly encodingService: EncodingService) {}

  public fromJson<T>(json: string): T | null {
    if (!json) return null;

    try {
      return JSON.parse(json);
    } catch (error) {
      console.error(`Parsing json was failed: "${json}"`)
      return null;
    }
  }

  public fromSecureJson<T>(json: string): T | null {
    if (!json) return null;

    const secretKey = this.generateSecretKey();
    const payloadJson = this.encodingService.decode(json.replace(secretKey, ''));
    const data = this.fromJson<ISecureJson<T>>(payloadJson);
    if (!data || data.key !== secretKey) return null;
    return data.payload || null;
  }

  private generateSecretKey(): string {
    return this.encodingService.encode(JsonService.SECRET_KEY);
  }

  public toJson<T = any>(data: T): string {
    return JSON.stringify(data);
  }

  public toSecureJson<T = any>(data: T): string {
    const secretKey = this.generateSecretKey();
    const json = this.toJson<ISecureJson<T>>({
      payload: data,
      key: secretKey
    });
    return secretKey + this.encodingService.encode(json);
  }
}
