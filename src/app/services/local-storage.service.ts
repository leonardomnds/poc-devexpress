import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  get<T = string>(key: LocalStorageKey): T | null {
    const value = window.localStorage.getItem(`${PREFIX}${key}`);

    if (value === null) { return null; }

    return JSON.parse(value);
  }

  set<T = any>(key: LocalStorageKey, value: T): T {
    window.localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value ?? null));
    return value;
  }

  remove(key: LocalStorageKey): void {
    window.localStorage.removeItem(`${PREFIX}${key}`);
  }
}

const PREFIX = 'devexpress@';

export type LocalStorageKey = 'token' | 'form';
