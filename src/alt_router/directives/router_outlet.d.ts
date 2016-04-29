import { ResolvedReflectiveProvider, ViewContainerRef, ComponentRef, ComponentFactory } from 'angular2/core';
import { RouterOutletMap } from '../router';
export declare class RouterOutlet {
    private _location;
    private _loaded;
    outletMap: RouterOutletMap;
    constructor(parentOutletMap: RouterOutletMap, _location: ViewContainerRef, name: string);
    unload(): void;
    load(factory: ComponentFactory, providers: ResolvedReflectiveProvider[], outletMap: RouterOutletMap): ComponentRef;
}
