import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isCollapsedSubject = new BehaviorSubject<boolean>(false)
  public isCollapsed$ = this.isCollapsedSubject.asObservable()

  toggle() {
    this.isCollapsedSubject.next(!this.isCollapsedSubject.value)
  }

  setCollapsed(collapsed: boolean) {
    this.isCollapsedSubject.next(collapsed)
  }
}
