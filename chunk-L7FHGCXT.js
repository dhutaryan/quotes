import{$ as ie,A as K,B as J,C as ee,D as be,E as Me,F as Ae,G as l,H as s,I as te,J as u,K as G,L as I,M as g,N as m,O as Ee,P as y,Q as Fe,R as we,S as v,T as _,U as c,V as Ie,W as A,X as S,Y as x,Z as Se,_ as xe,a as d,aa as Oe,b as V,ba as ne,c as he,ca as Ne,d as fe,da as Pe,e as D,f as pe,g as ge,h as me,ha as ke,i as Z,j as k,ja as je,k as ye,ka as re,l as ve,m as _e,ma as R,n as Ce,na as Te,o as Y,oa as q,p as j,q as T,r as b,s as h,t as M,u as Ve,v as De,w as X,x as w,y as f,z as p}from"./chunk-MT2EJRUC.js";var Le=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(te),s(X))},e.\u0275dir=M({type:e});let t=e;return t})(),gt=(()=>{let e=class e extends Le{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Ae(e)))(o||e)}})(),e.\u0275dir=M({type:e,features:[I]});let t=e;return t})(),$e=new p("");var mt={provide:$e,useExisting:K(()=>L),multi:!0};function yt(){let t=ne()?ne().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var vt=new p(""),L=(()=>{let e=class e extends Le{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!yt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(te),s(X),s(vt,8))},e.\u0275dir=M({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&A("input",function(F){return o._handleInput(F.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(F){return o._compositionEnd(F.target.value)})},features:[ie([mt]),I]});let t=e;return t})();var _t=new p(""),Ct=new p("");function We(t){return t!=null}function Qe(t){return Oe(t)?fe(t):t}function ze(t){let e={};return t.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function Ze(t,e){return e.map(n=>n(t))}function Vt(t){return!t.validate}function Ye(t){return t.map(e=>Vt(e)?e:n=>e.validate(n))}function Dt(t){if(!t)return null;let e=t.filter(We);return e.length==0?null:function(n){return ze(Ze(n,e))}}function Xe(t){return t!=null?Dt(Ye(t)):null}function bt(t){if(!t)return null;let e=t.filter(We);return e.length==0?null:function(n){let i=Ze(n,e).map(Qe);return ge(i).pipe(D(ze))}}function Ke(t){return t!=null?bt(Ye(t)):null}function Ge(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Je(t){return t._rawValidators}function et(t){return t._rawAsyncValidators}function oe(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function Re(t,e){let n=oe(e);return oe(t).forEach(r=>{B(n,r)||n.push(r)}),n}function qe(t,e){return oe(e).filter(n=>!B(t,n))}var se=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Xe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}};var P=class extends se{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ae=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Mt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},yi=V(d({},Mt),{"[class.ng-submitted]":"isSubmitted"}),tt=(()=>{let e=class e extends ae{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(P,2))},e.\u0275dir=M({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[I]});let t=e;return t})();var O="VALID",U="INVALID",E="PENDING",N="DISABLED";function At(t){return($(t)?t.validators:t)||null}function Et(t){return Array.isArray(t)?Xe(t):t||null}function Ft(t,e){return($(e)?e.asyncValidators:t)||null}function wt(t){return Array.isArray(t)?Ke(t):t||null}function $(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var le=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===U}get pending(){return this.status==E}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(qe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(qe(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=E,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(i=>{i.disable(V(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(V(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(V(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===E)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator=!0;let n=Qe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new j,this.statusChanges=new j}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(U)?U:O}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){$(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Et(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=wt(this._rawAsyncValidators)}};var it=new p("CallSetDisabledState",{providedIn:"root",factory:()=>ue}),ue="always";function It(t,e,n=ue){xt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Nt(t,e),kt(t,e),Pt(t,e),St(t,e)}function Ue(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Ot(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function H(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function St(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function xt(t,e){let n=Je(t);e.validator!==null?t.setValidators(Ge(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=et(t);e.asyncValidator!==null?t.setAsyncValidators(Ge(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();H(e._rawValidators,r),H(e._rawAsyncValidators,r)}function Ot(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Je(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=et(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return H(e._rawValidators,i),H(e._rawAsyncValidators,i),n}function Nt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&nt(t,e)})}function Pt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&nt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function nt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function kt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function jt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Tt(t){return Object.getPrototypeOf(t.constructor)===gt}function Gt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===L?n=o:Tt(o)?i=o:r=o}),r||i||n||null}function Be(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function He(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var rt=class extends le{constructor(e=null,n,i){super(At(n),Ft(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$(n)&&(n.nonNullable||n.initialValueIsDefault)&&(He(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){He(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ot=new p(""),Rt={provide:P,useExisting:K(()=>ce)},ce=(()=>{let e=class e extends P{set isDisabled(i){}constructor(i,r,o,a,F){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=F,this.update=new j,this._ngModelWarningSent=!1,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Gt(this,o)}ngOnChanges(i){if(this._isControlChanged(i)){let r=i.form.previousValue;r&&Ue(r,this,!1),It(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}jt(i,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Ue(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_isControlChanged(i){return i.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(s(_t,10),s(Ct,10),s($e,10),s(ot,8),s(it,8))},e.\u0275dir=M({type:e,selectors:[["","formControl",""]],inputs:{form:[T.None,"formControl","form"],isDisabled:[T.None,"disabled","isDisabled"],model:[T.None,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[ie([Rt]),I,Me]});let t=e;return t})();var qt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({});let t=e;return t})();var st=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ot,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:it,useValue:i.callSetDisabledState??ue}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[qt]});let t=e;return t})();var de={production:!0,api:"https://api.quotable.io"};var at=(()=>{let e=class e{buildQueryParams(i){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var W=(()=>{let e=class e{constructor(i,r){this._http=i,this._utilsService=r}random(){return this._http.get(de.api+"/random")}search(i){let r={page:i.page};i.author&&(r.author=i.author);let o=this._utilsService.buildQueryParams(r);return this._http.get(de.api+"/quotes",{params:o})}};e.\u0275fac=function(r){return new(r||e)(J(Pe),J(at))},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ht(t,e){if(t&1&&(v(0,"q",0),x(1),_(),v(2,"p",1),x(3),_()),t&2){let n=S();l(),Se(n.quote.content),l(2),xe("\u2014 ",n.quote.author,"")}}function Lt(t,e){t&1&&c(0,"qt-skeleton",2)(1,"qt-skeleton",3)}var Q=(()=>{let e=class e{constructor(){this.isLoading=!1}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=b({type:e,selectors:[["qt-quote-card"]],inputs:{quote:"quote",isLoading:"isLoading"},decls:2,vars:1,consts:[[1,"quote-card-content"],[1,"quote-card-author"],["height","1.5rem",1,"quote-card-content"],["height","1.25rem","width","8rem",1,"quote-card-author"]],template:function(r,o){r&1&&g(0,Ht,4,2)(1,Lt,2,0),r&2&&y(0,o.quote&&!o.isLoading?0:1)},dependencies:[R],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem;width:100%;padding:1rem;background-color:var(--bg-card);border-radius:.5rem;box-shadow:var(--shadow-card)}.quote-card-content[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500;font-style:italic}.quote-card-author[_ngcontent-%COMP%]{align-self:flex-end;margin:0;font-size:1.25rem}"],changeDetection:0});let t=e;return t})();function Wt(t,e){t&1&&c(0,"qt-alert",0)}var ct=(()=>{let e=class e{constructor(i){this._quotesService=i,this.quote=u(null),this.isLoading=u(!1),this.isError=u(!1)}ngOnInit(){this._fetchQuote()}nextQuote(){this._fetchQuote()}_fetchQuote(){let i=this.quote();this.isLoading.set(!0),this.isError.set(!1),this._quotesService.random().pipe(ye()).subscribe({next:r=>this.quote.set(r),error:()=>{this.isError.set(!0),this.quote.set(i)},complete:()=>this.isLoading.set(!1)})}};e.\u0275fac=function(r){return new(r||e)(s(W))},e.\u0275cmp=b({type:e,selectors:[["qt-random-quote"]],decls:4,vars:4,consts:[["message","We couldn't load random quote. Try again later!"],[3,"quote","isLoading"],[1,"random-quote-next","outlined","primary",3,"disabled","click"]],template:function(r,o){r&1&&(g(0,Wt,1,0,"qt-alert",0),c(1,"qt-quote-card",1),v(2,"button",2),A("click",function(){return o.nextQuote()}),x(3,` Next
`),_()),r&2&&(y(0,o.isError()?0:-1),l(),m("quote",o.quote())("isLoading",o.isLoading()),l(),m("disabled",o.isLoading()))},dependencies:[q,Q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex-grow:1;gap:1rem;height:100%}.random-quote-next[_ngcontent-%COMP%]{align-self:flex-end}"],changeDetection:0});let t=e;return t})();function z(t){t||(be(z),t=ee(G));let e=new he(n=>t.onDestroy(n.next.bind(n)));return n=>n.pipe(Ce(e))}var Qt=(t,e)=>e==null?null:e._id;function zt(t,e){t&1&&c(0,"qt-alert",0)}function Zt(t,e){if(t&1&&c(0,"qt-quote-card",3),t&2){let n=e.$implicit,i=S();m("quote",n)("isLoading",i.isLoading())}}function Yt(t,e){if(t&1){let n=Ie();v(0,"qt-pagination",4),A("pageChange",function(r){Ve(n);let o=S();return De(o.onChangePage(r))}),_()}t&2&&m("page",e.page)("totalPages",e.totalPages)}var dt=(()=>{let e=class e{constructor(i,r,o,a){this._quotesService=i,this._route=r,this._router=o,this._destroyRef=a,this.quotes=u(Array(10)),this.paginator=u(null),this.searchControl=new rt(null),this.isLoading=u(!1),this.isError=u(!1),this._queryParams$=this._route.queryParams.pipe(ve())}ngOnInit(){let i=this._route.snapshot.queryParams.author;this.searchControl.patchValue(i,{emitEvent:!1}),this.searchControl.valueChanges.pipe(Z(300),D(r=>r?r.trim().toLocaleLowerCase():null),k(),z(this._destroyRef)).subscribe(r=>{this._goToPage({page:1,author:r})}),this._fetchQuotesBasedOnQueryParams()}onChangePage(i){this._goToPage({page:i})}_fetchQuotesBasedOnQueryParams(){let i=this._getPageNumber$(),r=this._queryParams$.pipe(D(o=>o.author),k());pe([i,r]).pipe(Y(()=>this.isError.set(!1)),Z(0),Y(()=>this.isLoading.set(!0)),_e(([o,a])=>this._quotesService.search({page:o,author:a})),z(this._destroyRef)).subscribe({next:o=>{this.quotes.set(o.results),this.paginator.set({page:o.page,totalPages:o.totalPages}),this.isLoading.set(!1)},error:()=>{this.isError.set(!0),this.isLoading.set(!1)}})}_getPageNumber$(){return this._queryParams$.pipe(D(i=>Number(i.page)),me(i=>this._checkPageNumber(i)),k())}_checkPageNumber(i){return!i||i<1?(this._goToPage({page:1},!0),!1):!0}_goToPage(i,r=!1){return this._router.navigate(["/quotes","search"],{queryParams:i,queryParamsHandling:"merge",replaceUrl:r})}};e.\u0275fac=function(r){return new(r||e)(s(W),s(ke),s(je),s(G))},e.\u0275cmp=b({type:e,selectors:[["qt-search-quote"]],decls:5,vars:3,consts:[["message","Your search request has been failed. Try another search query!"],["type","text","placeholder","Search by author",3,"formControl"],[3,"page","totalPages"],[3,"quote","isLoading"],[3,"page","totalPages","pageChange"]],template:function(r,o){if(r&1&&(g(0,zt,1,0,"qt-alert",0),c(1,"input",1),Fe(2,Zt,1,2,"qt-quote-card",3,Qt),g(4,Yt,1,2,"qt-pagination",2)),r&2){let a;y(0,o.isError()?0:-1),l(),m("formControl",o.searchControl),l(),we(o.quotes()),l(2),y(4,(a=o.paginator())?4:-1,a)}},dependencies:[Te,L,tt,ce,q,Q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}"],changeDetection:0});let t=e;return t})();var Xt=[{path:"",pathMatch:"full",redirectTo:"random"},{path:"random",component:ct},{path:"search",component:dt}],ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[re.forChild(Xt),re]});let t=e;return t})();var bn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[Ne,R,st,ht]});let t=e;return t})();export{bn as QuotesModule};
