export class LayoutScrollEvent {
  static fromNativeScrollEvent(event: Event): LayoutScrollEvent {
    const { scrollTop } = event.target as HTMLElement;
    return new LayoutScrollEvent(scrollTop);
  }

  private constructor(
    public readonly offsetTop: number
  ) {}
}
