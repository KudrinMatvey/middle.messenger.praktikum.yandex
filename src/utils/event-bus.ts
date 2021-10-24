export class EventBus<EventKey extends string = string> {
  private readonly listeners: Record<string, Function[]> = {};

  on(event: EventKey, callback: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: EventKey, callback: Function): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  emit(event: EventKey, ...args: unknown[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    console.log('Событие вызвано:', JSON.stringify({event, args}));

    this.listeners[event].forEach(function(listener) {
      listener(...args);
    });
  }
}
