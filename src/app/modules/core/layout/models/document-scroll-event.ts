export class DocumentScrollEvent {
  static fromNativeScrollEvent(event: Event): DocumentScrollEvent {
    const document = event.target as Document;
    return new DocumentScrollEvent(document.scrollingElement.scrollTop);
  }

  private constructor(
    public readonly offset: number
  ) {}
}
