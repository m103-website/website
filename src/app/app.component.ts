import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  ComponentFactoryResolver,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {PreviewComponent} from "./preview/preview.component";
import {VideoComponent} from "./video/video.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  currentComp: string = 'preview';
  initialState = true;

  childMap = new Map<string, Type<any>>([
    [ 'preview', PreviewComponent ],
    [ 'video', VideoComponent ]
  ]);

  constructor(private resolver: ComponentFactoryResolver) {
  }

  switchComponent(name: string){
    if (this.currentComp !== name){
      this.target.clear();
      const component = this.childMap.get(name);
      const factory = this.resolver.resolveComponentFactory(component);
      this.target.createComponent(factory);
      this.currentComp = name;
      this.initialState = false;
    }
  }

  isCurrentComponent(name: string) {
    return this.currentComp === name;
  }
}
