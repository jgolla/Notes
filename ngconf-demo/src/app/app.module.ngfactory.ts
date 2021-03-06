/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/platform-browser';
import * as import4 from './app.component.ngfactory';
import * as import5 from './emoji.service';
class AppModuleInjector extends import0.ɵNgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ErrorHandler_1:any;
  _APP_INITIALIZER_2:any[];
  _ApplicationInitStatus_3:import0.ApplicationInitStatus;
  _ɵf_4:import0.ɵf;
  _ApplicationRef_5:any;
  _ApplicationModule_6:import0.ApplicationModule;
  _BrowserModule_7:import3.BrowserModule;
  _AppModule_8:import1.AppModule;
  __LOCALE_ID_9:any;
  __NgLocalization_10:import2.NgLocaleLocalization;
  __Compiler_11:import0.Compiler;
  __APP_ID_12:any;
  __IterableDiffers_13:any;
  __KeyValueDiffers_14:any;
  __DomSanitizer_15:import3.ɵe;
  __Sanitizer_16:any;
  __HAMMER_GESTURE_CONFIG_17:import3.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_18:any[];
  __EventManager_19:import3.EventManager;
  __ɵDomSharedStylesHost_20:import3.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_21:import3.ɵDomRendererFactory2;
  __RendererFactory2_22:any;
  __ɵSharedStylesHost_23:any;
  __Testability_24:import0.Testability;
  __Meta_25:import3.Meta;
  __Title_26:import3.Title;
  __EmojiService:import5.EmojiService;
  constructor(parent:import0.Injector) {
    super(parent,[import4.AppComponentNgFactory],[import4.AppComponentNgFactory]);
  }
  get _LOCALE_ID_9():any {
    if ((this.__LOCALE_ID_9 == null)) { (this.__LOCALE_ID_9 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_9;
  }
  get _NgLocalization_10():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_10 == null)) { (this.__NgLocalization_10 = new import2.NgLocaleLocalization(this._LOCALE_ID_9)); }
    return this.__NgLocalization_10;
  }
  get _Compiler_11():import0.Compiler {
    if ((this.__Compiler_11 == null)) { (this.__Compiler_11 = new import0.Compiler()); }
    return this.__Compiler_11;
  }
  get _APP_ID_12():any {
    if ((this.__APP_ID_12 == null)) { (this.__APP_ID_12 = import0.ɵg()); }
    return this.__APP_ID_12;
  }
  get _IterableDiffers_13():any {
    if ((this.__IterableDiffers_13 == null)) { (this.__IterableDiffers_13 = import0.ɵl()); }
    return this.__IterableDiffers_13;
  }
  get _KeyValueDiffers_14():any {
    if ((this.__KeyValueDiffers_14 == null)) { (this.__KeyValueDiffers_14 = import0.ɵm()); }
    return this.__KeyValueDiffers_14;
  }
  get _DomSanitizer_15():import3.ɵe {
    if ((this.__DomSanitizer_15 == null)) { (this.__DomSanitizer_15 = new import3.ɵe(this.parent.get(import3.DOCUMENT))); }
    return this.__DomSanitizer_15;
  }
  get _Sanitizer_16():any {
    if ((this.__Sanitizer_16 == null)) { (this.__Sanitizer_16 = this._DomSanitizer_15); }
    return this.__Sanitizer_16;
  }
  get _HAMMER_GESTURE_CONFIG_17():import3.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) { (this.__HAMMER_GESTURE_CONFIG_17 = new import3.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_17;
  }
  get _EVENT_MANAGER_PLUGINS_18():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) { (this.__EVENT_MANAGER_PLUGINS_18 = [
      new import3.ɵDomEventsPlugin(this.parent.get(import3.DOCUMENT)),
      new import3.ɵKeyEventsPlugin(this.parent.get(import3.DOCUMENT)),
      new import3.ɵHammerGesturesPlugin(this.parent.get(import3.DOCUMENT),this._HAMMER_GESTURE_CONFIG_17)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_18;
  }
  get _EventManager_19():import3.EventManager {
    if ((this.__EventManager_19 == null)) { (this.__EventManager_19 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_18,this.parent.get(import0.NgZone))); }
    return this.__EventManager_19;
  }
  get _ɵDomSharedStylesHost_20():import3.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_20 == null)) { (this.__ɵDomSharedStylesHost_20 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_20;
  }
  get _ɵDomRendererFactory2_21():import3.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_21 == null)) { (this.__ɵDomRendererFactory2_21 = new import3.ɵDomRendererFactory2(this._EventManager_19,this._ɵDomSharedStylesHost_20)); }
    return this.__ɵDomRendererFactory2_21;
  }
  get _RendererFactory2_22():any {
    if ((this.__RendererFactory2_22 == null)) { (this.__RendererFactory2_22 = this._ɵDomRendererFactory2_21); }
    return this.__RendererFactory2_22;
  }
  get _ɵSharedStylesHost_23():any {
    if ((this.__ɵSharedStylesHost_23 == null)) { (this.__ɵSharedStylesHost_23 = this._ɵDomSharedStylesHost_20); }
    return this.__ɵSharedStylesHost_23;
  }
  get _Testability_24():import0.Testability {
    if ((this.__Testability_24 == null)) { (this.__Testability_24 = new import0.Testability(this.parent.get(import0.NgZone))); }
    return this.__Testability_24;
  }
  get _Meta_25():import3.Meta {
    if ((this.__Meta_25 == null)) { (this.__Meta_25 = new import3.Meta(this.parent.get(import3.DOCUMENT))); }
    return this.__Meta_25;
  }
  get _Title_26():import3.Title {
    if ((this.__Title_26 == null)) { (this.__Title_26 = new import3.Title(this.parent.get(import3.DOCUMENT))); }
    return this.__Title_26;
  }

  get _EmojiService():import5.EmojiService {
    if ((this.__EmojiService == null)) { (this.__EmojiService = new import5.EmojiService()); }
    return this.__EmojiService;
  }

  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ErrorHandler_1 = import3.ɵa();
    this._APP_INITIALIZER_2 = [
      import0.ɵo,
      import3.ɵc(this.parent.get(import3.NgProbeToken,(null as any)),this.parent.get(import0.NgProbeToken,(null as any)))
    ]
    ;
    this._ApplicationInitStatus_3 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_2);
    this._ɵf_4 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3);
    this._ApplicationRef_5 = this._ɵf_4;
    this._ApplicationModule_6 = new import0.ApplicationModule(this._ApplicationRef_5);
    this._BrowserModule_7 = new import3.BrowserModule(this.parent.get(import3.BrowserModule,(null as any)));
    this._AppModule_8 = new import1.AppModule();
    return this._AppModule_8;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_1; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_2; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_3; }
    if ((token === import0.ɵf)) { return this._ɵf_4; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_5; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_6; }
    if ((token === import3.BrowserModule)) { return this._BrowserModule_7; }
    if ((token === import1.AppModule)) { return this._AppModule_8; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_9; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_10; }
    if ((token === import0.Compiler)) { return this._Compiler_11; }
    if ((token === import0.APP_ID)) { return this._APP_ID_12; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_13; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_14; }
    if ((token === import3.DomSanitizer)) { return this._DomSanitizer_15; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_16; }
    if ((token === import3.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_17; }
    if ((token === import3.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_18; }
    if ((token === import3.EventManager)) { return this._EventManager_19; }
    if ((token === import3.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_20; }
    if ((token === import3.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_21; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_22; }
    if ((token === import3.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_23; }
    if ((token === import0.Testability)) { return this._Testability_24; }
    if ((token === import3.Meta)) { return this._Meta_25; }
    if ((token === import3.Title)) { return this._Title_26; }
    if ((token === import5.EmojiService)) { return this._EmojiService; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_4.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_20 && this._ɵDomSharedStylesHost_20.ngOnDestroy());
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory<any>(AppModuleInjector,import1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pnb2xsYS9kZXZlbG9wZXIvZGl5LWFuZ3VsYXItY29tcGlsZXIvbmdjb25mLWRlbW8vc3JjL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2pnb2xsYS9kZXZlbG9wZXIvZGl5LWFuZ3VsYXItY29tcGlsZXIvbmdjb25mLWRlbW8vc3JjL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
