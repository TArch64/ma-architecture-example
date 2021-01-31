import { IAdminPostIllustrationJson } from '../type';
import { Observable } from 'rxjs';

export class AdminPostIllustrationModel {
  public static fromJson(json: IAdminPostIllustrationJson): AdminPostIllustrationModel {
    return new AdminPostIllustrationModel(json.filename, json.url);
  }

  public static fromFile(file: File): Observable<AdminPostIllustrationModel> {
    return new Observable<AdminPostIllustrationModel>(subscriber => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const model = new AdminPostIllustrationModel(file.name, fileReader.result as string);
        subscriber.next(model);
        subscriber.complete();
      }
      fileReader.readAsDataURL(file);
    });
  }

  private constructor(
    public readonly filename: string,
    public readonly url: string
  ) {}

  public toJson(): IAdminPostIllustrationJson {
    return {
      filename: this.filename,
      url: this.url
    };
  }
}
