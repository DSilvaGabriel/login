import{$ as Ja,$a as _,A as yn,Aa as pe,Ab as ge,B as zt,Ba as tt,Bb as ji,C as xn,Ca as G,D as at,Da as q,E as Ya,Ea as lt,F as ce,Fa as u,G as me,Ga as p,H as jt,Ha as vt,I as Xa,Ia as Pt,J as N,Ja as Vt,K as g,Ka as Wt,L as Le,La as Nn,M as s,Ma as he,N as ue,Na as X,O as Ht,Oa as Q,P as Sn,Pa as ht,Q as Cn,Qa as H,R as Za,Ra as En,S as U,Sa as Ot,T as W,Ta as L,U as wn,Ua as B,V as K,Va as er,W as I,Wa as nr,X as Mn,Xa as Vi,Ya as ze,Z as Y,Za as V,_ as Qa,_a as be,a as k,aa as kn,ab as Et,b as st,ba as Ri,bb as je,c as ft,ca as Dt,cb as dt,d as se,da as Nt,db as ir,e as y,ea as xt,eb as St,f as Ba,fa as Xt,fb as et,g as za,ga as x,gb as Dn,h as ja,ha as A,hb as Li,i as yt,ia as Fi,ib as He,j as Ha,ja as Tt,jb as ar,k as nt,ka as v,kb as Ct,l as Ua,la as fe,lb as P,m as Wa,ma as gt,mb as Ue,n as Ga,na as rt,nb as Bi,o as vn,oa as It,ob as In,p as le,pa as At,pb as zi,q as bt,qa as T,qb as rr,r as Di,ra as Be,rb as or,s as qa,sa as Ti,sb as sr,t as _n,ta as Pi,tb as lr,u as de,ua as R,v as Ii,va as E,w as Ka,wa as S,wb as dr,x as Ai,xa as tr,xb as An,y as $a,ya as it,z as Oi,za as Ut,zb as cr}from"./chunk-N7ZLFHP5.js";function On(i,n){let t={};for(let e in i){let a=i[e];t[e]=[a.value??"",a.validators??[]]}return n.group(t)}var vr=(()=>{class i{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,e){this._renderer=t,this._elementRef=e}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(e){return new(e||i)(T(rt),T(A))};static \u0275dir=S({type:i})}return i})(),Ps=(()=>{class i extends vr{static \u0275fac=(()=>{let t;return function(a){return(t||(t=Xt(i)))(a||i)}})();static \u0275dir=S({type:i,features:[it]})}return i})(),_r=new g("");var Vs={provide:_r,useExisting:jt(()=>Se),multi:!0};function Ls(){let i=zi()?zi().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Bs=new g(""),Se=(()=>{class i extends vr{_compositionMode;_composing=!1;constructor(t,e,a){super(t,e),this._compositionMode=a,this._compositionMode==null&&(this._compositionMode=!Ls())}writeValue(t){let e=t??"";this.setProperty("value",e)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(e){return new(e||i)(T(rt),T(A),T(Bs,8))};static \u0275dir=S({type:i,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(e,a){e&1&&X("input",function(o){return a._handleInput(o.target.value)})("blur",function(){return a.onTouched()})("compositionstart",function(){return a._compositionStart()})("compositionend",function(o){return a._compositionEnd(o.target.value)})},standalone:!1,features:[dt([Vs]),it]})}return i})();function qi(i){return i==null||Ki(i)===0}function Ki(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Un=new g(""),$i=new g(""),zs=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ct=class{static min(n){return js(n)}static max(n){return Hs(n)}static required(n){return yr(n)}static requiredTrue(n){return Us(n)}static email(n){return Ws(n)}static minLength(n){return Gs(n)}static maxLength(n){return qs(n)}static pattern(n){return Ks(n)}static nullValidator(n){return Tn()}static compose(n){return kr(n)}static composeAsync(n){return Nr(n)}};function js(i){return n=>{if(n.value==null||i==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<i?{min:{min:i,actual:n.value}}:null}}function Hs(i){return n=>{if(n.value==null||i==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>i?{max:{max:i,actual:n.value}}:null}}function yr(i){return qi(i.value)?{required:!0}:null}function Us(i){return i.value===!0?null:{required:!0}}function Ws(i){return qi(i.value)||zs.test(i.value)?null:{email:!0}}function Gs(i){return n=>{let t=n.value?.length??Ki(n.value);return t===null||t===0?null:t<i?{minlength:{requiredLength:i,actualLength:t}}:null}}function qs(i){return n=>{let t=n.value?.length??Ki(n.value);return t!==null&&t>i?{maxlength:{requiredLength:i,actualLength:t}}:null}}function Ks(i){if(!i)return Tn;let n,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=i.toString(),n=i),e=>{if(qi(e.value))return null;let a=e.value;return n.test(a)?null:{pattern:{requiredPattern:t,actualValue:a}}}}function Tn(i){return null}function xr(i){return i!=null}function Sr(i){return Ti(i)?ja(i):i}function Cr(i){let n={};return i.forEach(t=>{n=t!=null?k(k({},n),t):n}),Object.keys(n).length===0?null:n}function wr(i,n){return n.map(t=>t(i))}function $s(i){return!i.validate}function Mr(i){return i.map(n=>$s(n)?n:t=>n.validate(t))}function kr(i){if(!i)return null;let n=i.filter(xr);return n.length==0?null:function(t){return Cr(wr(t,n))}}function Yi(i){return i!=null?kr(Mr(i)):null}function Nr(i){if(!i)return null;let n=i.filter(xr);return n.length==0?null:function(t){let e=wr(t,n).map(Sr);return vn(e).pipe(nt(Cr))}}function Xi(i){return i!=null?Nr(Mr(i)):null}function mr(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function Er(i){return i._rawValidators}function Dr(i){return i._rawAsyncValidators}function Hi(i){return i?Array.isArray(i)?i:[i]:[]}function Pn(i,n){return Array.isArray(i)?i.includes(n):i===n}function ur(i,n){let t=Hi(n);return Hi(i).forEach(a=>{Pn(t,a)||t.push(a)}),t}function fr(i,n){return Hi(n).filter(t=>!Pn(i,t))}var Vn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Yi(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Xi(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},Gt=class extends Vn{name;get formDirective(){return null}get path(){return null}};var We="VALID",Rn="INVALID",ve="PENDING",Ge="DISABLED",qt=class{},Ln=class extends qt{value;source;constructor(n,t){super(),this.value=n,this.source=t}},Ke=class extends qt{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},$e=class extends qt{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},_e=class extends qt{status;source;constructor(n,t){super(),this.status=n,this.source=t}},Bn=class extends qt{source;constructor(n){super(),this.source=n}},Zt=class extends qt{source;constructor(n){super(),this.source=n}};function Zi(i){return(Wn(i)?i.validators:i)||null}function Ys(i){return Array.isArray(i)?Yi(i):i||null}function Qi(i,n){return(Wn(n)?n.asyncValidators:i)||null}function Xs(i){return Array.isArray(i)?Xi(i):i||null}function Wn(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Ir(i,n,t){let e=i.controls;if(!(n?Object.keys(e):e).length)throw new me(1e3,"");if(!Or(e,t))throw new me(1001,"")}function Ar(i,n,t){i._forEachChild((e,a)=>{if(t[a]===void 0)throw new me(-1002,"")})}var ye=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Y(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return et(this.statusReactive)}set status(n){et(()=>this.statusReactive.set(n))}_status=St(()=>this.statusReactive());statusReactive=Y(void 0);get valid(){return this.status===We}get invalid(){return this.status===Rn}get pending(){return this.status===ve}get disabled(){return this.status===Ge}get enabled(){return this.status!==Ge}errors;get pristine(){return et(this.pristineReactive)}set pristine(n){et(()=>this.pristineReactive.set(n))}_pristine=St(()=>this.pristineReactive());pristineReactive=Y(!0);get dirty(){return!this.pristine}get touched(){return et(this.touchedReactive)}set touched(n){et(()=>this.touchedReactive.set(n))}_touched=St(()=>this.touchedReactive());touchedReactive=Y(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(ur(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(ur(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(fr(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(fr(n,this._rawAsyncValidators))}hasValidator(n){return Pn(this._rawValidators,n)}hasAsyncValidator(n){return Pn(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let e=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(st(k({},n),{sourceControl:e})),t&&n.emitEvent!==!1&&this._events.next(new $e(!0,e))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=n.sourceControl??this;this._forEachChild(a=>{a.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:e})}),n.onlySelf||this._parent?._updateTouched(n,e),t&&n.emitEvent!==!1&&this._events.next(new $e(!1,e))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let e=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(st(k({},n),{sourceControl:e})),t&&n.emitEvent!==!1&&this._events.next(new Ke(!1,e))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=n.sourceControl??this;this._forEachChild(a=>{a.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,e),t&&n.emitEvent!==!1&&this._events.next(new Ke(!0,e))}markAsPending(n={}){this.status=ve;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new _e(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(st(k({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Ge,this.errors=null,this._forEachChild(a=>{a.disable(st(k({},n),{onlySelf:!0}))}),this._updateValue();let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ln(this.value,e)),this._events.next(new _e(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(st(k({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(a=>a(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=We,this._forEachChild(e=>{e.enable(st(k({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(st(k({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===We||this.status===ve)&&this._runAsyncValidator(e,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ln(this.value,t)),this._events.next(new _e(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(st(k({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ge:We}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=ve,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let e=Sr(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(a=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(a,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((e,a)=>e&&e._find(a),this)}getError(n,t){let e=t?this.get(t):this;return e?.errors?e.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,e){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||e)&&this._events.next(new _e(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,e)}_initObservables(){this.valueChanges=new K,this.statusChanges=new K}_calculateStatus(){return this._allControlsDisabled()?Ge:this.errors?Rn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ve)?ve:this._anyControlsHaveStatus(Rn)?Rn:We}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let e=!this._anyControlsDirty(),a=this.pristine!==e;this.pristine=e,n.onlySelf||this._parent?._updatePristine(n,t),a&&this._events.next(new Ke(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new $e(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Wn(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Ys(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Xs(this._rawAsyncValidators)}_updateHasRequiredValidator(){et(()=>this._hasRequired.set(this.hasValidator(ct.required)))}};function Or(i,n){return Object.hasOwn(i,n)}function Zs(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function Qs(i,n,t,e){switch(t){case"name":i.setAttribute(n,t,e);break;case"disabled":case"readonly":case"required":e?i.setAttribute(n,t,""):i.removeAttribute(n,t);break;case"max":case"min":case"minLength":case"maxLength":e!==void 0?i.setAttribute(n,t,e.toString()):i.removeAttribute(n,t);break}}var Ui=class{kind;context;control;message;constructor({kind:n,context:t,control:e}){this.kind=n,this.context=t,this.control=e}};var Js=(()=>{class i{_validator=Tn;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let e=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(e),this._validator=this._enabled?this.createValidator(e):Tn,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,features:[xt]})}return i})();var tl={provide:Un,useExisting:jt(()=>Rr),multi:!0};var Rr=(()=>{class i extends Js{required;inputName="required";normalizeInput=P;createValidator=t=>yr;enabled(t){return t}static \u0275fac=(()=>{let t;return function(a){return(t||(t=Xt(i)))(a||i)}})();static \u0275dir=S({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,a){e&2&&tt("required",a._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[dt([tl]),it]})}return i})();var el=new g(""),Ji=new g("",{factory:()=>ta}),ta="always";function nl(i,n){return[...n.path,i]}function il(i,n,t=ta){ea(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),rl(i,n),sl(i,n),ol(i,n),al(i,n)}function pr(i,n,t=!0){let e=()=>{};n?.valueAccessor?.registerOnChange(e),n?.valueAccessor?.registerOnTouched(e),jn(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function zn(i,n){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function al(i,n){if(n.valueAccessor.setDisabledState){let t=e=>{n.valueAccessor.setDisabledState(e)};i.registerOnDisabledChange(t),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function ea(i,n){let t=Er(i);n.validator!==null?i.setValidators(mr(t,n.validator)):typeof t=="function"&&i.setValidators([t]);let e=Dr(i);n.asyncValidator!==null?i.setAsyncValidators(mr(e,n.asyncValidator)):typeof e=="function"&&i.setAsyncValidators([e]);let a=()=>i.updateValueAndValidity();zn(n._rawValidators,a),zn(n._rawAsyncValidators,a)}function jn(i,n){let t=!1;if(i!==null){if(n.validator!==null){let a=Er(i);if(Array.isArray(a)&&a.length>0){let r=a.filter(o=>o!==n.validator);r.length!==a.length&&(t=!0,i.setValidators(r))}}if(n.asyncValidator!==null){let a=Dr(i);if(Array.isArray(a)&&a.length>0){let r=a.filter(o=>o!==n.asyncValidator);r.length!==a.length&&(t=!0,i.setAsyncValidators(r))}}}let e=()=>{};return zn(n._rawValidators,e),zn(n._rawAsyncValidators,e),t}function rl(i,n){n.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Fr(i,n)})}function ol(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Fr(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function Fr(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function sl(i,n){let t=(e,a)=>{n.valueAccessor.writeValue(e),a&&n.viewToModelUpdate(e)};i.registerOnChange(t),n._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Tr(i,n){i==null,ea(i,n)}function ll(i,n){return jn(i,n)}function dl(i,n){if(!Object.hasOwn(i,"model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function cl(i){return Object.getPrototypeOf(i.constructor)===Ps}function Pr(i,n){i._syncPendingControls(),n.forEach(t=>{let e=t.control;e.updateOn==="submit"&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function ml(i,n){if(!n)return null;Array.isArray(n);let t,e,a;return n.forEach(r=>{r.constructor===Se?t=r:cl(r)?e=r:a=r}),a||e||t||null}function ul(i,n){let t=i.indexOf(n);t>-1&&i.splice(t,1)}var fl={provide:el,useFactory:()=>{let i=s(Rt,{self:!0});return{setParseErrors:n=>{i.setParseErrorSource(n)},set onReset(n){i.onReset=n}}}},Rt=class extends Vn{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof Zt&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=ml(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,t,e){super(),this.injector=n,this.renderer=t,this.rawValueAccessors=e,this.injector?.get(wn)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(Ct);if(!this.control||!n)return;let t=n.markForCheck.bind(n);this.subscription=new ft,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Zt&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(a=>{this.control?.markAsDirty(),this.control?.setValue(a,{emitModelToViewChange:!1}),this.viewToModelUpdate(a)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Zs(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(a=>a instanceof Rr))}ngControlUpdate(n,t){if(!this.isCustomControlBased)return;let e=this.control,a=this.customControlBindings;Object.is(a.value,e.value)||(a.value=e.value,n.setCustomControlModelInput(e.value)),this.bindControlProperty(n,a,"touched",e.touched),this.bindControlProperty(n,a,"dirty",e.dirty),this.bindControlProperty(n,a,"valid",e.valid),this.bindControlProperty(n,a,"invalid",e.invalid),this.bindControlProperty(n,a,"pending",e.pending),this.bindControlProperty(n,a,"disabled",e.disabled),this.shouldBindRequired&&this.bindControlProperty(n,a,"required",this.isRequired);let r=e.errors;if(a.errors!==r){a.errors=r;let o=this._convertErrors(r);n.setInputOnDirectives("errors",o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,t,e,a){if(t[e]===a)return;t[e]=a;let r=n.setInputOnDirectives(e,a);this.isNativeFormElement&&!r&&(e==="disabled"||e==="required")&&this.renderer&&Qs(this.renderer,n.nativeElement,e,a)}_convertErrors(n){if(n===null)return[];let t=this.control;return Object.entries(n).map(([e,a])=>new Ui({context:a,kind:e,control:t}))}setParseErrorSource(n){if(n===void 0)return;let t=null,e=St(()=>{let a=n();return a.length===0?null:a.reduce((r,o)=>(r[o.kind]=o,r),{})});this.parseErrorsValidator=(()=>t).bind(this),Dt(()=>{t=e(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},Hn=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Gn=(()=>{class i extends Hn{constructor(t){super(t)}static \u0275fac=function(e){return new(e||i)(T(Rt,2))};static \u0275dir=S({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,a){e&2&&V("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)},standalone:!1,features:[it]})}return i})(),qn=(()=>{class i extends Hn{constructor(t){super(t)}static \u0275fac=function(e){return new(e||i)(T(Gt,10))};static \u0275dir=S({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,a){e&2&&V("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)("ng-submitted",a.isSubmitted)},standalone:!1,features:[it]})}return i})(),xe=class extends ye{constructor(n,t,e){super(Zi(t),Qi(e,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){let e=this._find(n);return e||(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,e={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){let e=this._find(n);e&&e._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,e={}){let a=this._find(n);a&&a._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,t={}){et(()=>{Ar(this,!0,n),Object.keys(n).forEach(e=>{Ir(this,!0,e),this.controls[e].setValue(n[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(e=>{let a=this._find(e);a&&a.patchValue(n[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((e,a)=>{e.reset(n?n[a]:null,st(k({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Zt(this))}getRawValue(){return this._reduceChildren({},(n,t,e)=>(n[e]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,e)=>e._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let e=this.controls[t];e&&n(e,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,e]of Object.entries(this.controls))if(this.contains(t)&&n(e))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,e,a)=>((e.enabled||this.disabled)&&(t[a]=e.value),t))}_reduceChildren(n,t){let e=n;return this._forEachChild((a,r)=>{e=t(e,a,r)}),e}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return Or(this.controls,n)?this.controls[n]:null}};var Wi=class extends xe{};var pl={provide:Gt,useExisting:jt(()=>Ye)},qe=Promise.resolve(),Ye=(()=>{class i extends Gt{callSetDisabledState;get submitted(){return et(this.submittedReactive)}_submitted=St(()=>this.submittedReactive());submittedReactive=Y(!1);_directives=new Set;form;ngSubmit=new K;options;constructor(t,e,a){super(),this.callSetDisabledState=a,this.form=new xe({},Yi(t),Xi(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){qe.then(()=>{let e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){qe.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){qe.then(()=>{let e=this._findContainer(t.path),a=new xe({});Tr(a,t),e.registerControl(t.name,a),a.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){qe.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){qe.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Pr(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new Bn(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(e){return new(e||i)(T(Un,10),T($i,10),T(Ji,8))};static \u0275dir=S({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,a){e&1&&X("submit",function(o){return a.onSubmit(o)})("reset",function(){return a.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[dt([pl]),it]})}return i})();function hr(i,n){let t=i.indexOf(n);t>-1&&i.splice(t,1)}function br(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Fn=class extends ye{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,e){super(Zi(t),Qi(e,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Wn(t)&&(t.nonNullable||t.initialValueIsDefault)&&(br(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){et(()=>{this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Zt(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){hr(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){hr(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){br(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var hl=i=>i instanceof Fn;var bl=(()=>{class i extends Gt{callSetDisabledState;get submitted(){return et(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=St(()=>this._submittedReactive());_submittedReactive=Y(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,e,a){super(),this.callSetDisabledState=a,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){if(!this.form)throw new me(1052,!1);Object.hasOwn(t,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(jn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let e=this.form.get(t.path);return t._setupWithForm(e,this.callSetDisabledState),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){pr(t.control||null,t,!1),ul(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,e){this.form.get(t.path).setValue(e)}onReset(){this.resetForm()}resetForm(t=void 0,e={}){this.form.reset(t,e),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Pr(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Bn(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let e=t.control,a=this.form.get(t.path);e!==a&&(pr(e||null,t),hl(a)&&t._setupWithForm(a,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let e=this.form.get(t.path);Tr(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let e=this.form?.get(t.path);e&&ll(e,t)&&e.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ea(this.form,this),this._oldForm&&jn(this._oldForm,this)}static \u0275fac=function(e){return new(e||i)(T(Un,10),T($i,10),T(Ji,8))};static \u0275dir=S({type:i,features:[it,xt]})}return i})(),gl={provide:Gt,useExisting:jt(()=>Lt)},Lt=(()=>{class i extends bl{form=null;ngSubmit=new K;get control(){return this.form}static \u0275fac=(()=>{let t;return function(a){return(t||(t=Xt(i)))(a||i)}})();static \u0275dir=S({type:i,selectors:[["","formGroup",""]],hostBindings:function(e,a){e&1&&X("submit",function(o){return a.onSubmit(o)})("reset",function(){return a.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[dt([gl]),it]})}return i})();var Kn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var Gi=class extends ye{constructor(n,t,e){super(Zi(t),Qi(e,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){Array.isArray(n)?n.forEach(e=>{this.controls.push(e),this._registerControl(e)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,e={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent})}removeAt(n,t={}){let e=this._adjustIndex(n);e<0&&(e=0),this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,e={}){let a=this._adjustIndex(n);a<0&&(a=0),this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),this.controls.splice(a,1),t&&(this.controls.splice(a,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){et(()=>{Ar(this,!1,n),n.forEach((e,a)=>{Ir(this,!1,a),this.at(a).setValue(e,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(n,t={}){n!=null&&(n.forEach((e,a)=>{this.at(a)&&this.at(a).patchValue(e,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((e,a)=>{e.reset(n[a],st(k({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Zt(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,e)=>e._syncPendingControls()?!0:t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,e)=>{n(t,e)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var Vr=new g("");var vl={provide:Rt,useExisting:jt(()=>Xe)},Xe=(()=>{class i extends Rt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new K;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,e,a,r,o,l,d){super(d,l,r),this._ngModelWarningConfig=o,this._parent=t,this._setValidators(e),this._setAsyncValidators(a)}_setupWithForm(t,e){this.control=t,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,il(t,this,e))}ngOnChanges(t){this._added||this._setUpControl(),dl(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return nl(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(t){super.ngControlCreate(t)}\u0275ngControlUpdate(t){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(t,!0))}static \u0275fac=function(e){return new(e||i)(T(Gt,13),T(Un,10),T($i,10),T(_r,10),T(Vr,8),T(rt,8),T(U,8))};static \u0275dir=S({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[dt([vl,fl]),it,xt,tr(null)]})}return i})();var _l=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({})}return i})();function gr(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var $n=(()=>{class i{useNonNullable=!1;get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,e=null){let a=this._reduceControls(t),r={};return gr(e)?r=e:e!==null&&(r.validators=e.validator,r.asyncValidators=e.asyncValidator),new xe(a,r)}record(t,e=null){let a=this._reduceControls(t);return new Wi(a,e)}control(t,e,a){let r={};return this.useNonNullable?(gr(e)?r=e:(r.validators=e,r.asyncValidators=a),new Fn(t,st(k({},r),{nonNullable:!0}))):new Fn(t,e,a)}array(t,e,a){let r=t.map(o=>this._createControl(o));return new Gi(r,e,a)}_reduceControls(t){let e={};return Object.keys(t).forEach(a=>{e[a]=this._createControl(t[a])}),e}_createControl(t){if(t instanceof Fn)return t;if(t instanceof ye)return t;if(Array.isArray(t)){let e=t[0],a=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(e,a,r)}else return this.control(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Lr=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Vr,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Ji,useValue:t.callSetDisabledState??ta}]}}static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[_l]})}return i})();var zr={email:{validators:[ct.required]},password:{validators:[ct.required]}},jr={name:{validators:[ct.required]},phone:{validators:[ct.required]},year:{validators:[ct.required]},sex:{validators:[ct.required]},email:{validators:[ct.required]},password:{validators:[ct.required]}};function Hr(i,n){return n=JSON.stringify(n),localStorage.setItem(i,n)}function Ur(i){let n=localStorage.getItem(i);if(!n)throw new Error("Dado local n\xE3o encontrado");return JSON.parse(n)}var Kt=class i{user=Y(null);defineUser(n){this.user.set(n)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})};var Ce=class i{router=s(cr);navigatePage(n){this.router.navigate([n])}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})};function Ze(i){return i.buttons===0||i.detail===0}function Qe(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var ia;function Gr(){if(ia==null){let i=typeof document<"u"?document.head:null;ia=!!(i&&(i.createShadowRoot||i.attachShadow))}return ia}function aa(i){if(Gr()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function ot(i){if(i.composedPath)try{return i.composedPath()[0]}catch{}return i.target}var ra;try{ra=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ra=!1}var $=(()=>{class i{_platformId=s(Ja);isBrowser=this._platformId?lr(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ra)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Je;function qr(){if(Je==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Je=!0}))}finally{Je=Je||!1}return Je}function we(i){return qr()?i:!!i.capture}function _t(i){return i instanceof A?i.nativeElement:i}var Kr=new g("cdk-input-modality-detector-options"),$r={ignoreKeys:[18,17,224,91,16]},Yr=650,oa={passive:!0,capture:!0},Xr=(()=>{class i{_platform=s($);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ba(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ot(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Yr||(this._modality.next(Ze(t)?"keyboard":"mouse"),this._mostRecentTarget=ot(t))};_onTouchstart=t=>{if(Qe(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ot(t)};constructor(){let t=s(I),e=s(W),a=s(Kr,{optional:!0});if(this._options=k(k({},$r),a),this.modalityDetected=this._modality.pipe(yn(1)),this.modalityChanged=this.modalityDetected.pipe(Ii()),this._platform.isBrowser){let r=s(gt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,"keydown",this._onKeydown,oa),r.listen(e,"mousedown",this._onMousedown,oa),r.listen(e,"touchstart",this._onTouchstart,oa)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})(),tn=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(tn||{}),Zr=new g("cdk-focus-monitor-default-options"),Yn=we({passive:!0,capture:!0}),sa=(()=>{class i{_ngZone=s(I);_platform=s($);_inputModalityDetector=s(Xr);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(W);_stopInputModalityDetector=new y;constructor(){let t=s(Zr,{optional:!0});this._detectionMode=t?.detectionMode||tn.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=ot(t);for(let a=e;a;a=a.parentElement)t.type==="focus"?this._onFocus(t,a):this._onBlur(t,a)};monitor(t,e=!1){let a=_t(t);if(!this._platform.isBrowser||a.nodeType!==1)return yt();let r=aa(a)||this._document,o=this._elementInfo.get(a);if(o)return e&&(o.checkChildren=!0),o.subject;let l={checkChildren:e,subject:new y,rootNode:r};return this._elementInfo.set(a,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(t){let e=_t(t),a=this._elementInfo.get(e);a&&(a.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(a))}focusVia(t,e,a){let r=_t(t),o=this._document.activeElement;r===o?this._getClosestElementsInfo(r).forEach(([l,d])=>this._originChanged(l,e,d)):(this._setOrigin(e),typeof r.focus=="function"&&r.focus(a))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===tn.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===tn.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?Yr:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(t,e){let a=this._elementInfo.get(e),r=ot(t);!a||!a.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),a)}_onBlur(t,e){let a=this._elementInfo.get(e);!a||a.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(a,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,a=this._rootNodeFocusListenerCount.get(e)||0;a||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,Yn),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,Yn)}),this._rootNodeFocusListenerCount.set(e,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(at(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let a=this._rootNodeFocusListenerCount.get(e);a>1?this._rootNodeFocusListenerCount.set(e,a-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Yn),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Yn),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,a){this._setClasses(t,e),this._emitOrigin(a,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((a,r)=>{(r===t||a.checkChildren&&r.contains(t))&&e.push([r,a])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let o=0;o<r.length;o++)if(r[o].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Xn=new WeakMap,wt=(()=>{class i{_appRef;_injector=s(U);_environmentInjector=s(ue);load(t){let e=this._appRef=this._appRef||this._injector.get(pe),a=Xn.get(e);a||(a={loaders:new Set,refs:[]},Xn.set(e,a),e.onDestroy(()=>{Xn.get(e)?.refs.forEach(r=>r.destroy()),Xn.delete(e)})),a.loaders.has(t)||(a.loaders.add(t),a.refs.push(In(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var la=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return i})(),Zn;function yl(){if(Zn===void 0&&(Zn=null,typeof window<"u")){let i=window;if(i.trustedTypes!==void 0)try{Zn=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return Zn}function Qt(i){return yl()?.createHTML(i)||i}function Qr(i,n,t){let e=t.sanitize(Ht.HTML,n);i.innerHTML=Qt(e||"")}function Me(i){return Array.isArray(i)?i:[i]}var Jr=new Set,Jt,Qn=(()=>{class i{_platform=s($);_nonce=s(Ri,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Sl}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&xl(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();function xl(i,n){if(!Jr.has(i))try{Jt||(Jt=document.createElement("style"),n&&Jt.setAttribute("nonce",n),Jt.setAttribute("type","text/css"),document.head.appendChild(Jt)),Jt.sheet&&(Jt.sheet.insertRule(`@media ${i.replace(/[{}]/g,"")} {body{ }}`,0),Jr.add(i))}catch(t){console.error(t)}}function Sl(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var da=(()=>{class i{_mediaMatcher=s(Qn);_zone=s(I);_queries=new Map;_destroySubject=new y;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return to(Me(t)).some(a=>this._registerQuery(a).mql.matches)}observe(t){let a=to(Me(t)).map(o=>this._registerQuery(o).observable),r=Ua(a);return r=Wa(r.pipe(de(1)),r.pipe(yn(1),_n(0))),r.pipe(nt(o=>{let l={matches:!1,breakpoints:{}};return o.forEach(({matches:d,query:h})=>{l.matches=l.matches||d,l.breakpoints[h]=d}),l}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),r={observable:new se(o=>{let l=d=>this._zone.run(()=>o.next(d));return e.addListener(l),()=>{e.removeListener(l)}}).pipe(zt(e),nt(({matches:o})=>({query:t,matches:o})),at(this._destroySubject)),mql:e};return this._queries.set(t,r),r}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();function to(i){return i.map(n=>n.split(",")).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var Cl=(()=>{class i{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var eo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({providers:[Cl]})}return i})();var no=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),io=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),wl=0,en=(()=>{class i{_ngZone=s(I);_defaultOptions=s(io,{optional:!0});_liveElement;_document=s(W);_sanitizer=s(An);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=s(no,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let a=this._defaultOptions,r,o;return e.length===1&&typeof e[0]=="number"?o=e[0]:[r,o]=e,this.clear(),clearTimeout(this._previousTimeout),r||(r=a&&a.politeness?a.politeness:"polite"),o==null&&a&&(o=a.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:Qr(this._liveElement,t,this._sanitizer),typeof o=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",e=this._document.getElementsByClassName(t),a=this._document.createElement("div");for(let r=0;r<e.length;r++)e[r].remove();return a.classList.add(t),a.classList.add("cdk-visually-hidden"),a.setAttribute("aria-atomic","true"),a.setAttribute("aria-live","polite"),a.id=`cdk-live-announcer-${wl++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<e.length;a++){let r=e[a],o=r.getAttribute("aria-owns");o?o.indexOf(t)===-1&&r.setAttribute("aria-owns",o+" "+t):r.setAttribute("aria-owns",t)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Ml=200,Jn=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(n,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:Ml;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(n),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let t=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(ce(t=>this._pressedLetters.push(t)),_n(n),bt(()=>this._pressedLetters.length>0),nt(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let a=(this._selectedItemIndex+e)%this._items.length,r=this._items[a];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function Ft(i,...n){return n.length?n.some(t=>i[t]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var ti=class{_items;_activeItemIndex=Y(-1);_activeItem=Y(null);_wrap=!1;_typeaheadSubscription=ft.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,t){this._items=n,n instanceof Fi?this._itemChangesSubscription=n.changes.subscribe(e=>this._itemsChanged(e.toArray())):Nt(n)&&(this._effectRef=Dt(()=>this._itemsChanged(n()),{injector:t}))}tabOut=new y;change=new y;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Jn(t,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,t=10){return this._pageUpAndDown={enabled:n,delta:t},this}setActiveItem(n){let t=this._activeItem();this.updateActiveItem(n),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(n){let t=n.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!n[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let r=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(r<o?r:o-1,-1);break}else return;default:(a||Ft(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let t=this._getItemsArray(),e=typeof n=="number"?n:t.indexOf(n),a=t[e];this._activeItem.set(a??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let a=(this._activeItemIndex()+n*e+t.length)%t.length,r=t[a];if(!this._skipPredicateFn(r)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,t){let e=this._getItemsArray();if(e[n]){for(;this._skipPredicateFn(e[n]);)if(n+=t,!e[n])return;this.setActiveItem(n)}}_getItemsArray(){return Nt(this._items)?this._items():this._items instanceof Fi?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let t=this._activeItem();if(t){let e=n.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var nn=class extends ti{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var so=new Map,mt=class i{_appId=s(Qa);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){this._appId!=="ng"&&(n+=this._appId);let e=so.get(n);return e===void 0?e=0:e++,so.set(n,e),`${n}${t?i._infix+"-":""}${e}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})};var lo={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function ua(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function J(i){return i==null?"":typeof i=="string"?i:`${i}px`}var kl=new g("cdk-dir-doc",{providedIn:"root",factory:()=>s(W)}),Nl=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function co(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Nl.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var $t=(()=>{class i{get value(){return this.valueSignal()}valueSignal=Y("ltr");change=new K;constructor(){let t=s(kl,{optional:!0});if(t){let e=t.body?t.body.dir:null,a=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(co(e||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var te;function mo(){if(te==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return te=!1,te;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)te=!0;else{let i=Element.prototype.scrollTo;i?te=!/\{\s*\[native code\]\s*\}/.test(i.toString()):te=!1}}return te}var Z=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({})}return i})();var El=20,fa=(()=>{class i{_ngZone=s(I);_platform=s($);_renderer=s(gt).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=El){return this._platform.isBrowser?new se(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let a=t>0?this._scrolled.pipe(Di(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):yt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let a=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(bt(r=>!r||a.indexOf(r)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((a,r)=>{this._targetContainsElement(r,t)&&e.push(r)}),e}_targetContainsElement(t,e){let a=_t(e),r=t.getElementRef().nativeElement;do if(a==r)return!0;while(a=a.parentElement);return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Dl=20,ee=(()=>{class i{_platform=s($);_listeners;_viewportSize=null;_change=new y;_document=s(W);constructor(){let t=s(I),e=s(gt).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let a=r=>this._change.next(r);this._listeners=[e.listen("window","resize",a),e.listen("window","orientationchange",a)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:a}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+a,right:t.left+e,height:a,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),a=t.documentElement,r=a.getBoundingClientRect(),o=-r.top||t.body?.scrollTop||e.scrollY||a.scrollTop||0,l=-r.left||t.body?.scrollLeft||e.scrollX||a.scrollLeft||0;return{top:o,left:l}}change(t=Dl){return t>0?this._change.pipe(Di(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var ei=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({})}return i})(),pa=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[Z,ei,Z,ei]})}return i})();var an=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},ke=class extends an{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,t,e,a,r,o){super(),this.component=n,this.viewContainerRef=t,this.injector=e,this.projectableNodes=a,this.bindings=r||null,this.directives=o||null}},ne=class extends an{templateRef;viewContainerRef;context;injector;constructor(n,t,e,a){super(),this.templateRef=n,this.viewContainerRef=t,this.context=e,this.injector=a}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}},ha=class extends an{element;constructor(n){super(),this.element=n instanceof A?n.nativeElement:n}},Ne=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof ke)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ne)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof ha)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ni=class extends Ne{outletElement;_appRef;_defaultInjector;constructor(n,t,e){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=e}attachComponentPortal(n){let t;if(n.viewContainerRef){let e=n.injector||n.viewContainerRef.injector,a=e.get(Pi,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:e,ngModuleRef:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,a=n.injector||this._defaultInjector||U.NULL,r=a.get(ue,e.injector);t=In(n.component,{elementInjector:a,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,e=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return e.rootNodes.forEach(a=>this.outletElement.appendChild(a)),e.detectChanges(),this.setDisposeFn(()=>{let a=t.indexOf(e);a!==-1&&t.remove(a)}),this._attachedPortal=n,e}attachDomPortal=n=>{let t=n.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var ba=(()=>{class i extends Ne{_moduleRef=s(Pi,{optional:!0});_document=s(W);_viewContainerRef=s(Be);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new K;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,a=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=t,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let a=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(a,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(e,a)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=(()=>{let t;return function(a){return(t||(t=Xt(i)))(a||i)}})();static \u0275dir=S({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[it]})}return i})(),ga=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({})}return i})();var fo=mo();function xo(i){return new ii(i.get(ee),i.get(W))}var ii=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=J(-this._previousScrollPosition.left),n.style.top=J(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,e=n.style,a=t.style,r=e.scrollBehavior||"",o=a.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),fo&&(e.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),fo&&(e.scrollBehavior=r,a.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function So(i,n){return new ai(i.get(fa),i.get(I),i.get(ee),n)}var ai=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,e,a){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=e,this._config=a}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(bt(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var rn=class{enable(){}disable(){}attach(){}};function _a(i,n){return n.some(t=>{let e=i.bottom<t.top,a=i.top>t.bottom,r=i.right<t.left,o=i.left>t.right;return e||a||r||o})}function po(i,n){return n.some(t=>{let e=i.top<t.top,a=i.bottom>t.bottom,r=i.left<t.left,o=i.right>t.right;return e||a||r||o})}function on(i,n){return new ri(i.get(fa),i.get(ee),i.get(I),n)}var ri=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,e,a){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=e,this._config=a}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:a}=this._viewportRuler.getViewportSize();_a(t,[{width:e,height:a,bottom:a,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Co=(()=>{class i{_injector=s(U);noop=()=>new rn;close=t=>So(this._injector,t);block=()=>xo(this._injector);reposition=t=>on(this._injector,t);static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})(),ae=class{positionStrategy;scrollStrategy=new rn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let e of t)n[e]!==void 0&&(this[e]=n[e])}}};var oi=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var wo=(()=>{class i{_attachedOverlays=[];_document=s(W);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,a){return a.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})(),Mo=(()=>{class i extends wo{_ngZone=s(I);_renderer=s(gt).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let a=e.length-1;a>-1;a--){let r=e[a];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})(),ko=(()=>{class i extends wo{_platform=s($);_ngZone=s(I);_renderer=s(gt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,a={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(e,"pointerdown",this._pointerDownListener,a),r.listen(e,"click",this._clickListener,a),r.listen(e,"auxclick",this._clickListener,a),r.listen(e,"contextmenu",this._clickListener,a)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=ot(t)};_clickListener=t=>{let e=ot(t),a=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let o=r.length-1;o>-1;o--){let l=r[o],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,d))){if(ho(l.overlayElement,e)||ho(l.overlayElement,a))break;this._ngZone?this._ngZone.run(()=>d.next(t)):d.next(t)}}};static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();function ho(i,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=n;for(;e;){if(e===i)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var No=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,a){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})(),Eo=(()=>{class i{_platform=s($);_containerElement;_document=s(W);_styleLoader=s(wt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||ua()){let a=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<a.length;r++)a[r].remove()}let e=this._document.createElement("div");e.classList.add(t),ua()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(No)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})(),ya=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,e,a){this._renderer=t,this._ngZone=e,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",a)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function xa(i){return i&&i.nodeType===1}var va=Y([]),si=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(n,t,e,a,r,o,l,d,h,c=!1,b,D){this._portalOutlet=n,this._host=t,this._pane=e,this._config=a,this._ngZone=r,this._keyboardDispatcher=o,this._document=l,this._location=d,this._outsideClickDispatcher=h,this._animationsDisabled=c,this._injector=b,this._renderer=D,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),et(()=>{va.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Tt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation==="pop-state"){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation==="url-change"&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),et(()=>{va.update(t=>t.filter(e=>e!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,et(()=>{va.update(t=>t.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=k(k({},this._config),n),this._updateElementSize()}setDirection(n){this._config=st(k({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=J(this._config.width),n.height=J(this._config.height),n.minWidth=J(this._config.minWidth),n.minHeight=J(this._config.minHeight),n.maxWidth=J(this._config.maxWidth),n.maxHeight=J(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;xa(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ya(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,e){let a=Me(t||[]).filter(r=>!!r);a.length&&(e?n.classList.add(...a):n.classList.remove(...a))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Tt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},bo="cdk-overlay-connected-position-bounding-box",Il=/([A-Za-z%]+)$/;function Sa(i,n){return new li(n,i.get(ee),i.get(W),i.get($),i.get(Eo))}var li=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=ft.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,e,a,r){this._viewportRuler=t,this._document=e,this._platform=a,this._overlayContainer=r,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(bo),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,e=this._viewportRect,a=this._containerRect,r=[],o;for(let l of this._preferredPositions){let d=this._getOriginPoint(n,a,l),h=this._getOverlayPoint(d,t,l),c=this._getOverlayFit(h,t,e,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(c,h,e)){r.push({position:l,origin:d,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!o||o.overlayFit.visibleArea<c.visibleArea)&&(o={overlayFit:c,overlayPoint:h,originPoint:d,position:l,overlayRect:t})}if(r.length){let l=null,d=-1;for(let h of r){let c=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);c>d&&(d=c,l=h)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ie(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(bo),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof A?this._origin.nativeElement:xa(this._origin)?this._origin:null}_getOriginPoint(n,t,e){let a;if(e.originX=="center")a=n.left+n.width/2;else{let o=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;a=e.originX=="start"?o:l}t.left<0&&(a-=t.left);let r;return e.originY=="center"?r=n.top+n.height/2:r=e.originY=="top"?n.top:n.bottom,t.top<0&&(r-=t.top),{x:a,y:r}}_getOverlayPoint(n,t,e){let a;e.overlayX=="center"?a=-t.width/2:e.overlayX==="start"?a=this._isRtl()?-t.width:0:a=this._isRtl()?0:-t.width;let r;return e.overlayY=="center"?r=-t.height/2:r=e.overlayY=="top"?0:-t.height,{x:n.x+a,y:n.y+r}}_getOverlayFit(n,t,e,a){let r=vo(t),{x:o,y:l}=n,d=this._getOffset(a,"x"),h=this._getOffset(a,"y");d&&(o+=d),h&&(l+=h);let c=0-o,b=o+r.width-e.width,D=0-l,f=l+r.height-e.height,C=this._subtractOverflows(r.width,c,b),O=this._subtractOverflows(r.height,D,f),kt=C*O;return{visibleArea:kt,isCompletelyWithinViewport:r.width*r.height===kt,fitsInViewportVertically:O===r.height,fitsInViewportHorizontally:C==r.width}}_canFitWithFlexibleDimensions(n,t,e){if(this._hasFlexibleDimensions){let a=e.bottom-t.y,r=e.right-t.x,o=go(this._overlayRef.getConfig().minHeight),l=go(this._overlayRef.getConfig().minWidth),d=n.fitsInViewportVertically||o!=null&&o<=a,h=n.fitsInViewportHorizontally||l!=null&&l<=r;return d&&h}return!1}_pushOverlayOnScreen(n,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let a=vo(t),r=this._viewportRect,o=Math.max(n.x+a.width-r.width,0),l=Math.max(n.y+a.height-r.height,0),d=Math.max(r.top-e.top-n.y,0),h=Math.max(r.left-e.left-n.x,0),c=0,b=0;return a.width<=r.width?c=h||-o:c=n.x<this._getViewportMarginStart()?r.left-e.left-n.x:0,a.height<=r.height?b=d||-l:b=n.y<this._getViewportMarginTop()?r.top-e.top-n.y:0,this._previousPushAmount={x:c,y:b},{x:n.x+c,y:n.y+b}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Al(this._lastScrollVisibility,e)){let a=new oi(n,e);this._positionChanges.next(a)}this._lastScrollVisibility=e}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,a=n.overlayY;n.overlayX==="center"?e="center":this._isRtl()?e=n.overlayX==="start"?"right":"left":e=n.overlayX==="start"?"left":"right";for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${e} ${a}`}_calculateBoundingBoxRect(n,t){let e=this._viewportRect,a=this._isRtl(),r,o,l;if(t.overlayY==="top")o=n.y,r=e.height-o+this._getViewportMarginBottom();else if(t.overlayY==="bottom")l=e.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=e.height-l+this._getViewportMarginTop();else{let f=Math.min(e.bottom-n.y+e.top,n.y),C=this._lastBoundingBoxSize.height;r=f*2,o=n.y-f,r>C&&!this._isInitialRender&&!this._growAfterOpen&&(o=n.y-C/2)}let d=t.overlayX==="start"&&!a||t.overlayX==="end"&&a,h=t.overlayX==="end"&&!a||t.overlayX==="start"&&a,c,b,D;if(h)D=e.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=n.x-this._getViewportMarginStart();else if(d)b=n.x,c=e.right-n.x-this._getViewportMarginEnd();else{let f=Math.min(e.right-n.x+e.left,n.x),C=this._lastBoundingBoxSize.width;c=f*2,b=n.x-f,c>C&&!this._isInitialRender&&!this._growAfterOpen&&(b=n.x-C/2)}return{top:o,left:b,bottom:l,right:D,width:c,height:r}}_setBoundingBoxStyles(n,t){let e=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right="auto",a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;a.width=J(e.width),a.height=J(e.height),a.top=J(e.top)||"auto",a.bottom=J(e.bottom)||"auto",a.left=J(e.left)||"auto",a.right=J(e.right)||"auto",t.overlayX==="center"?a.alignItems="center":a.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?a.justifyContent="center":a.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",r&&(a.maxHeight=J(r)),o&&(a.maxWidth=J(o))}this._lastBoundingBoxSize=e,ie(this._boundingBox.style,a)}_resetBoundingBoxStyles(){ie(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ie(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let e={},a=this._hasExactPosition(),r=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(a){let c=this._viewportRuler.getViewportScrollPosition();ie(e,this._getExactOverlayY(t,n,c)),ie(e,this._getExactOverlayX(t,n,c))}else e.position="static";let l="",d=this._getOffset(t,"x"),h=this._getOffset(t,"y");d&&(l+=`translateX(${d}px) `),h&&(l+=`translateY(${h}px)`),e.transform=l.trim(),o.maxHeight&&(a?e.maxHeight=J(o.maxHeight):r&&(e.maxHeight="")),o.maxWidth&&(a?e.maxWidth=J(o.maxWidth):r&&(e.maxWidth="")),ie(this._pane.style,e)}_getExactOverlayY(n,t,e){let a={top:"",bottom:""},r=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e)),n.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;a.bottom=`${o-(r.y+this._overlayRect.height)}px`}else a.top=J(r.y);return a}_getExactOverlayX(n,t,e){let a={left:"",right:""},r=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e));let o;if(this._isRtl()?o=n.overlayX==="end"?"left":"right":o=n.overlayX==="end"?"right":"left",o==="right"){let l=this._document.documentElement.clientWidth;a.right=`${l-(r.x+this._overlayRect.width)}px`}else a.left=J(r.x);return a}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:po(n,e),isOriginOutsideView:_a(n,e),isOverlayClipped:po(t,e),isOverlayOutsideView:_a(t,e)}}_subtractOverflows(n,...t){return t.reduce((e,a)=>e-Math.max(a,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+n-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Me(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof A)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,e=n.height||0;return{top:n.y,bottom:n.y+e,left:n.x,right:n.x+t,height:e,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let e=t.getBoundingClientRect();return n&&(t.style.display=""),e}};function ie(i,n){for(let t in n)Object.hasOwn(n,t)&&(i[t]=n[t]);return i}function go(i){if(typeof i!="number"&&i!=null){let[n,t]=i.split(Il);return!t||t==="px"?parseFloat(n):null}return i||null}function vo(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Al(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var _o="cdk-global-overlay-wrapper";function ci(i){return new di}var di=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(_o),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:a,height:r,maxWidth:o,maxHeight:l}=e,d=(a==="100%"||a==="100vw")&&(!o||o==="100%"||o==="100vw"),h=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),c=this._xPosition,b=this._xOffset,D=this._overlayRef.getConfig().direction==="rtl",f="",C="",O="";d?O="flex-start":c==="center"?(O="center",D?C=b:f=b):D?c==="left"||c==="end"?(O="flex-end",f=b):(c==="right"||c==="start")&&(O="flex-start",C=b):c==="left"||c==="start"?(O="flex-start",f=b):(c==="right"||c==="end")&&(O="flex-end",C=b),n.position=this._cssPosition,n.marginLeft=d?"0":f,n.marginTop=h?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=d?"0":C,t.justifyContent=O,t.alignItems=h?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(_o),e.justifyContent=e.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Do=(()=>{class i{_injector=s(U);global(){return ci()}flexibleConnectedTo(t){return Sa(this._injector,t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})(),sn=new g("OVERLAY_DEFAULT_CONFIG");function ln(i,n){i.get(wt).load(No);let t=i.get(Eo),e=i.get(W),a=i.get(mt),r=i.get(pe),o=i.get($t),l=i.get(rt,null,{optional:!0})||i.get(gt).createRenderer(null,null),d=new ae(n),h=i.get(sn,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||o.value,!e.body||!("showPopover"in e.body)?d.usePopover=!1:d.usePopover=n?.usePopover??h;let c=e.createElement("div"),b=e.createElement("div");c.id=a.getId("cdk-overlay-"),c.classList.add("cdk-overlay-pane"),b.appendChild(c),d.usePopover&&(b.setAttribute("popover","manual"),b.classList.add("cdk-overlay-popover"));let D=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return xa(D)?D.after(b):D?.type==="parent"?D.element.appendChild(b):t.getContainerElement().appendChild(b),new si(new ni(c,r,i),b,c,d,i.get(I),i.get(Mo),e,i.get(rr),i.get(ko),n?.disableAnimations??i.get(kn,null,{optional:!0})==="NoopAnimations",i.get(ue),l)}var Io=(()=>{class i{scrollStrategies=s(Co);_positionBuilder=s(Do);_injector=s(U);create(t){return ln(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})(),Ol=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Rl=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(U);return()=>on(i)}}),Ee=(()=>{class i{elementRef=s(A);static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Ao=new g("cdk-connected-overlay-default-config"),mi=(()=>{class i{_dir=s($t,{optional:!0});_injector=s(U);_overlayRef;_templatePortal;_backdropSubscription=ft.EMPTY;_attachSubscription=ft.EMPTY;_detachSubscription=ft.EMPTY;_positionSubscription=ft.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(Rl);_ngZone=s(I);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!="string"&&this._assignConfig(t)}backdropClick=new K;positionChange=new K;attach=new K;detach=new K;overlayKeydown=new K;overlayOutsideClick=new K;constructor(){let t=s(fe),e=s(Be),a=s(Ao,{optional:!0}),r=s(sn,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new ne(t,e),this.scrollStrategy=this._scrollStrategyFactory(),a&&this._assignConfig(a)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Ol);let t=this._overlayRef=ln(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(e=>{this.overlayKeydown.next(e),e.keyCode===27&&!this.disableClose&&!Ft(e)&&(e.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(e=>{let a=this._getOriginElement(),r=ot(e);(!a||a!==r&&!a.contains(r))&&this.overlayOutsideClick.next(e)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),e=new ae({direction:this._dir||"ltr",positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(e.height=this.height),(this.minWidth||this.minWidth===0)&&(e.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(e.minHeight=this.minHeight),this.backdropClass&&(e.backdropClass=this.backdropClass),this.panelClass&&(e.panelClass=this.panelClass),e}_updatePositionStrategy(t){let e=this.positions.map(a=>({originX:a.originX,originY:a.originY,overlayX:a.overlayX,overlayY:a.overlayY,offsetX:a.offsetX||this.offsetX,offsetY:a.offsetY||this.offsetY,panelClass:a.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let t=Sa(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof Ee?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ee?this.origin.elementRef.nativeElement:this.origin instanceof A?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(e=>this.backdropClick.emit(e)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ya(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",P],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",P],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",P],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",P],push:[2,"cdkConnectedOverlayPush","push",P],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",t=>t==="url-change"||t==="pop-state"?t:P(t)],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",P],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[xt]})}return i})(),ui=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({providers:[Io],imports:[Z,ga,pa,pa]})}return i})();var De,Oo=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ca(){if(De)return De;if(typeof document!="object"||!document)return De=new Set(Oo),De;let i=document.createElement("input");return De=new Set(Oo.filter(n=>(i.setAttribute("type",n),i.type===n))),De}var Fl=new g("MATERIAL_ANIMATIONS"),Ro=null;function Tl(){return s(Fl,{optional:!0})?.animationsDisabled||s(kn,{optional:!0})==="NoopAnimations"?"di-disabled":(Ro??=s(Qn).matchMedia("(prefers-reduced-motion)").matches,Ro?"reduced-motion":"enabled")}function pt(){return Tl()!=="enabled"}function Ie(i){return i!=null&&`${i}`!="false"}var Mt=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Mt||{}),wa=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Mt.HIDDEN;constructor(n,t,e,a=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},Fo=we({passive:!0,capture:!0}),Ma=class{_events=new Map;addHandler(n,t,e,a){let r=this._events.get(t);if(r){let o=r.get(e);o?o.add(a):r.set(e,new Set([a]))}else this._events.set(t,new Map([[e,new Set([a])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Fo)})}removeHandler(n,t,e){let a=this._events.get(n);if(!a)return;let r=a.get(t);r&&(r.delete(e),r.size===0&&a.delete(t),a.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Fo)))}_delegateEventHandler=n=>{let t=ot(n);t&&this._events.get(n.type)?.forEach((e,a)=>{(a===t||a.contains(t))&&e.forEach(r=>r.handleEvent(n))})}},dn={enterDuration:225,exitDuration:150},Pl=800,To=we({passive:!0,capture:!0}),Po=["mousedown","touchstart"],Vo=["mouseup","mouseleave","touchend","touchcancel"],Vl=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})(),cn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ma;constructor(n,t,e,a,r){this._target=n,this._ngZone=t,this._platform=a,a.isBrowser&&(this._containerElement=_t(e)),r&&r.get(wt).load(Vl)}fadeInRipple(n,t,e={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=k(k({},dn),e.animation);e.centered&&(n=a.left+a.width/2,t=a.top+a.height/2);let o=e.radius||Ll(n,t,a),l=n-a.left,d=t-a.top,h=r.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=`${l-o}px`,c.style.top=`${d-o}px`,c.style.height=`${o*2}px`,c.style.width=`${o*2}px`,e.color!=null&&(c.style.backgroundColor=e.color),c.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(c);let b=window.getComputedStyle(c),D=b.transitionProperty,f=b.transitionDuration,C=D==="none"||f==="0s"||f==="0s, 0s"||a.width===0&&a.height===0,O=new wa(this,c,e,C);c.style.transform="scale3d(1, 1, 1)",O.state=Mt.FADING_IN,e.persistent||(this._mostRecentTransientRipple=O);let kt=null;return!C&&(h||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let bn=()=>{kt&&(kt.fallbackTimer=null),clearTimeout(gn),this._finishRippleTransition(O)},Ve=()=>this._destroyRipple(O),gn=setTimeout(Ve,h+100);c.addEventListener("transitionend",bn),c.addEventListener("transitioncancel",Ve),kt={onTransitionEnd:bn,onTransitionCancel:Ve,fallbackTimer:gn}}),this._activeRipples.set(O,kt),(C||!h)&&this._finishRippleTransition(O),O}fadeOutRipple(n){if(n.state===Mt.FADING_OUT||n.state===Mt.HIDDEN)return;let t=n.element,e=k(k({},dn),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",n.state=Mt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=_t(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Po.forEach(e=>{i._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Vo.forEach(t=>{this._triggerElement.addEventListener(t,this,To)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Mt.FADING_IN?this._startFadeOutTransition(n):n.state===Mt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=Mt.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Mt.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=Ze(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Pl;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Qe(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===Mt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Mt.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Po.forEach(t=>i._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(Vo.forEach(t=>n.removeEventListener(t,this,To)),this._pointerUpEventsRegistered=!1))}};function Ll(i,n,t){let e=Math.max(Math.abs(i-t.left),Math.abs(i-t.right)),a=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+a*a)}var ka=new g("mat-ripple-global-options"),Lo=(()=>{class i{_elementRef=s(A);_animationsDisabled=pt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=s(I),e=s($),a=s(ka,{optional:!0}),r=s(U);this._globalOptions=a||{},this._rippleRenderer=new cn(this,t,this._elementRef,e,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:k(k(k({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,a){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,k(k({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,k(k({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,a){e&2&&V("mat-ripple-unbounded",a.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Bl={capture:!0},zl=["focus","mousedown","mouseenter","touchstart"],Na="mat-ripple-loader-uninitialized",Ea="mat-ripple-loader-class-name",Bo="mat-ripple-loader-centered",fi="mat-ripple-loader-disabled",zo=(()=>{class i{_document=s(W);_animationsDisabled=pt();_globalRippleOptions=s(ka,{optional:!0});_platform=s($);_ngZone=s(I);_injector=s(U);_eventCleanups;_hosts=new Map;constructor(){let t=s(gt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>zl.map(e=>t.listen(this._document,e,this._onInteraction,Bl)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Na,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Ea))&&t.setAttribute(Ea,e.className||""),e.centered&&t.setAttribute(Bo,""),e.disabled&&t.setAttribute(fi,"")}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(fi,""):t.removeAttribute(fi)}_onInteraction=t=>{let e=ot(t);if(e instanceof HTMLElement){let a=e.closest(`[${Na}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Ea)),t.append(e);let a=this._globalRippleOptions,r=this._animationsDisabled?0:a?.animation?.enterDuration??dn.enterDuration,o=this._animationsDisabled?0:a?.animation?.exitDuration??dn.exitDuration,l={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(fi),rippleConfig:{centered:t.hasAttribute(Bo),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:o}}},d=new cn(l,this._ngZone,e,this._platform,this._injector),h=!l.rippleDisabled;h&&d.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:d,hasSetUpEvents:h}),t.removeAttribute(Na)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var pi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=R({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})();var jl=new g("MAT_BUTTON_CONFIG");function jo(i){return i==null?void 0:Ue(i)}var Ho=(()=>{class i{_elementRef=s(A);_ngZone=s(I);_animationsDisabled=pt();_config=s(jl,{optional:!0});_focusMonitor=s(sa);_cleanupClick;_renderer=s(rt);_rippleLoader=s(zo);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Li(!1,{transform:P});constructor(){s(wt).load(pi);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(e,a){e&2&&(tt("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),be(a.color?"mat-"+a.color:""),V("mat-mdc-button-progress-indicator-shown",a.showProgress())("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",P],disabled:[2,"disabled","disabled",P],ariaDisabled:[2,"aria-disabled","ariaDisabled",P],disabledInteractive:[2,"disabledInteractive","disabledInteractive",P],tabIndex:[2,"tabIndex","tabIndex",jo],_tabindex:[2,"tabindex","_tabindex",jo],showProgress:[1,"showProgress"]}})}return i})();var hi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[Z]})}return i})();var Uo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ae=(()=>{class i extends Ho{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Hl(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?Uo.get(this._appearance):null,r=Uo.get(t);a&&e.remove(...a),e.add(...r),this._appearance=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){let t=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""],["",8,"material-symbols-outlined",3,"iconPositionEnd",""],["",8,"material-symbols-rounded",3,"iconPositionEnd",""],["",8,"material-symbols-sharp",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""],["","iconPositionEnd","",8,"material-symbols-outlined"],["","iconPositionEnd","",8,"material-symbols-rounded"],["","iconPositionEnd","",8,"material-symbols-sharp"]],[["","progressIndicator",""]]],e=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]","[progressIndicator]"];function a(r,o){r&1&&(Pt(0,"div",2),H(1,3),Vt())}return R({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[it],ngContentSelectors:e,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(o,l){o&1&&(ht(t),Wt(0,"span",0),H(1),Pt(2,"span",1),H(3,1),Vt(),H(4,2),G(5,a,2,0,"div",2),Wt(6,"span",3)(7,"span",4)),o&2&&(V("mdc-button__ripple",!l._isFab)("mdc-fab__ripple",l._isFab),v(5),q(l.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return i})();function Hl(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Da=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[hi,Z]})}return i})();var Ul=Math.pow(2,31)-1,mn=class{_overlayRef;instance;containerInstance;_afterDismissed=new y;_afterOpened=new y;_onAction=new y;_durationTimeoutId;_dismissedByAction=!1;constructor(n,t){this._overlayRef=t,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,Ul))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Go=new g("MatSnackBarData"),Oe=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Wl=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),Gl=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),ql=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),Kl=(()=>{class i{snackBarRef=s(mn);data=s(Go);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){function t(e,a){if(e&1){let r=Nn();u(0,"div",1)(1,"button",2),X("click",function(){Sn(r);let l=Q();return Cn(l.action())}),_(2),p()()}if(e&2){let r=Q();v(2),je(" ",r.data.action," ")}}return R({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(a,r){a&1&&(u(0,"div",0),_(1),p(),G(2,t,3,1,"div",1)),a&2&&(v(),je(" ",r.data.message,`
`),v(),q(r.hasAction?2:-1))},dependencies:[Ae,Wl,Gl,ql],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return i})(),Ia="_mat-snack-bar-enter",Aa="_mat-snack-bar-exit",$l=(()=>{class i extends Ne{_ngZone=s(I);_elementRef=s(A);_changeDetectorRef=s(Ct);_platform=s($);_animationsDisabled=pt();snackBarConfig=s(Oe);_document=s(W);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(U);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new y;_onExit=new y;_onEnter=new y;_animationState="void";_live;_label;_role;_liveElementId=s(mt).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===Aa?this._completeExit():t===Ia&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Tt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ia)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Ia)},200)))}exit(){return this._destroyed?yt(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Tt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Aa)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Aa),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(o=>t.classList.add(o)):t.classList.add(e)),this._exposeToModals();let a=this._label.nativeElement,r="mdc-snackbar__label";a.classList.toggle(r,!a.querySelector(`.${r}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<e.length;a++){let r=e[a],o=r.getAttribute("aria-owns");this._trackedModals.add(r),o?o.indexOf(t)===-1&&r.setAttribute("aria-owns",o+" "+t):r.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let a=e.replace(this._liveElementId,"").trim();a.length>0?t.setAttribute("aria-owns",a):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),a=t.querySelector("[aria-live]");if(e&&a){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(r=document.activeElement),e.removeAttribute("aria-hidden"),a.appendChild(e),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){let t=["label"];function e(a,r){}return R({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(r,o){if(r&1&&Ot(ba,7)(t,7),r&2){let l;L(l=B())&&(o._portalOutlet=l.first),L(l=B())&&(o._label=l.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(r,o){r&1&&X("animationend",function(d){return o.onAnimationEnd(d.animationName)})("animationcancel",function(d){return o.onAnimationEnd(d.animationName)}),r&2&&V("mat-snack-bar-container-enter",o._animationState==="visible")("mat-snack-bar-container-exit",o._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!o._animationsDisabled)},features:[it],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(r,o){r&1&&(u(0,"div",1)(1,"div",2,0)(3,"div",3),Ut(4,e,0,0,"ng-template",4),p(),vt(5,"div"),p()()),r&2&&(v(5),tt("aria-live",o._live)("role",o._role)("id",o._liveElementId))},dependencies:[ba],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return i})(),Yl=new g("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Oe}),qo=(()=>{class i{_live=s(en);_injector=s(U);_breakpointObserver=s(da);_parentSnackBar=s(i,{optional:!0,skipSelf:!0});_defaultConfig=s(Yl);_animationsDisabled=pt();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Kl;snackBarContainerComponent=$l;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",a){let r=k(k({},this._defaultConfig),a);return r.data={message:t,action:e},r.announcementMessage===t&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let a=e&&e.viewContainerRef&&e.viewContainerRef.injector,r=U.create({parent:a||this._injector,providers:[{provide:Oe,useValue:e}]}),o=new ke(this.snackBarContainerComponent,e.viewContainerRef,r),l=t.attach(o);return l.instance.snackBarConfig=e,l.instance}_attach(t,e){let a=k(k(k({},new Oe),this._defaultConfig),e),r=this._createOverlay(a),o=this._attachSnackBarContainer(r,a),l=new mn(o,r);if(t instanceof fe){let d=new ne(t,null,{$implicit:a.data,snackBarRef:l});l.instance=o.attachTemplatePortal(d)}else{let d=this._createInjector(a,l),h=new ke(t,void 0,d),c=o.attachComponentPortal(h);l.instance=c.instance}return this._breakpointObserver.observe(lo.HandsetPortrait).pipe(at(r.detachments())).subscribe(d=>{r.overlayElement.classList.toggle(this.handsetCssClass,d.matches)}),a.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(l,a),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new ae;e.direction=t.direction;let a=ci(this._injector),r=t.direction==="rtl",o=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!r||t.horizontalPosition==="end"&&r,l=!o&&t.horizontalPosition!=="center";return o?a.left("0"):l?a.right("0"):a.centerHorizontally(),t.verticalPosition==="top"?a.top("0"):a.bottom("0"),e.positionStrategy=a,e.disableAnimations=this._animationsDisabled,ln(this._injector,e)}_createInjector(t,e){let a=t&&t.viewContainerRef&&t.viewContainerRef.injector;return U.create({parent:a||this._injector,providers:[{provide:mn,useValue:e},{provide:Go,useValue:t.data}]})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Re=class i{snackBar=s(qo);openSnackBar(n,t){this.snackBar.open(n,t)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})};function $o(i){return Error(`Unable to find icon with the name "${i}"`)}function Xl(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Yo(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Xo(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Bt=class{url;svgText;options;svgElement=null;constructor(n,t,e){this.url=n,this.svgText=t,this.options=e}},Qo=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,a,r){this._httpClient=t,this._sanitizer=e,this._errorHandler=r,this._document=a}addSvgIcon(t,e,a){return this.addSvgIconInNamespace("",t,e,a)}addSvgIconLiteral(t,e,a){return this.addSvgIconLiteralInNamespace("",t,e,a)}addSvgIconInNamespace(t,e,a,r){return this._addSvgIconConfig(t,e,new Bt(a,null,r))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,a,r){let o=this._sanitizer.sanitize(Ht.HTML,a);if(!o)throw Xo(a);let l=Qt(o);return this._addSvgIconConfig(t,e,new Bt("",l,r))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,a){return this._addSvgIconSetConfig(t,new Bt(e,null,a))}addSvgIconSetLiteralInNamespace(t,e,a){let r=this._sanitizer.sanitize(Ht.HTML,e);if(!r)throw Xo(e);let o=Qt(r);return this._addSvgIconSetConfig(t,new Bt("",o,a))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=Ql(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(Ht.RESOURCE_URL,t);if(!e)throw Yo(t);let a=this._cachedIconsByUrl.get(e);return a?yt(bi(a)):this._loadSvgIconFromConfig(new Bt(t,null)).pipe(ce(r=>this._cachedIconsByUrl.set(e,r)),nt(r=>bi(r)))}getNamedSvgIcon(t,e=""){let a=Zo(e,t),r=this._svgIconConfigs.get(a);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(e,t),r)return this._svgIconConfigs.set(a,r),this._getSvgFromConfig(r);let o=this._iconSetConfigs.get(e);return o?this._getSvgFromIconSetConfigs(t,o):Ha($o(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?yt(bi(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(nt(e=>bi(e)))}_getSvgFromIconSetConfigs(t,e){let a=this._extractIconWithNameFromAnySet(t,e);if(a)return yt(a);let r=e.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(qa(l=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(Ht.RESOURCE_URL,o.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(h)),yt(null)})));return vn(r).pipe(nt(()=>{let o=this._extractIconWithNameFromAnySet(t,e);if(!o)throw $o(t);return o}))}_extractIconWithNameFromAnySet(t,e){for(let a=e.length-1;a>=0;a--){let r=e[a];if(r.svgText&&r.svgText.toString().indexOf(t)>-1){let o=this._svgElementFromConfig(r),l=this._extractSvgIconFromSet(o,t,r.options);if(l)return l}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(ce(e=>t.svgText=e),nt(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?yt(null):this._fetchIcon(t).pipe(ce(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,a){let r=t.querySelector(`[id="${e}"]`);if(!r)return null;let o=r.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,a);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),a);let l=this._svgElementFromString(Qt("<svg></svg>"));return l.appendChild(o),this._setSvgAttributes(l,a)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let a=e.querySelector("svg");if(!a)throw Error("<svg> tag not found");return a}_toSvgElement(t){let e=this._svgElementFromString(Qt("<svg></svg>")),a=t.attributes;for(let r=0;r<a.length;r++){let{name:o,value:l}=a[r],d=o.toLowerCase();d!=="id"&&!d.startsWith("on")&&e.setAttribute(o,l)}for(let r=0;r<t.childNodes.length;r++)t.childNodes[r].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[r].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:a}=t,r=a?.withCredentials??!1;if(!this._httpClient)throw Xl();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let o=this._sanitizer.sanitize(Ht.RESOURCE_URL,e);if(!o)throw Yo(e);let l=this._inProgressUrlFetches.get(o);if(l)return l;let d=this._httpClient.get(o,{responseType:"text",withCredentials:r}).pipe(nt(h=>Qt(h)),Ka(()=>this._inProgressUrlFetches.delete(o)),$a());return this._inProgressUrlFetches.set(o,d),d}_addSvgIconConfig(t,e,a){return this._svgIconConfigs.set(Zo(t,e),a),this}_addSvgIconSetConfig(t,e){let a=this._iconSetConfigs.get(t);return a?a.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let a=0;a<this._resolvers.length;a++){let r=this._resolvers[a](e,t);if(r)return Zl(r)?new Bt(r.url,null,r.options):new Bt(r,null)}}static \u0275fac=function(e){return new(e||i)(Le(dr,8),Le(An),Le(W,8),Le(Mn))};static \u0275prov=Xa({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function bi(i){return i.cloneNode(!0)}function Zo(i,n){return i+":"+n}function Zl(i){return!!(i.url&&i.options)}function Ql(i){let n=null,t=!1;return i.fonts&&typeof i.fonts.forEach=="function"&&i.fonts.forEach(e=>{let a=e.family.replace(/['"]/g,"").trim().toLowerCase();(a==="material icons"||a.startsWith("material icons "))&&(t=!0),a.startsWith("material symbols rounded")?n="rounded":a.startsWith("material symbols sharp")?n="sharp":a.startsWith("material symbols")&&(n="outlined")}),[n&&!t?`material-symbols-${n}`:"material-icons","mat-ligature-font"]}var Jl=new g("MAT_ICON_DEFAULT_OPTIONS"),td=new g("mat-icon-location",{providedIn:"root",factory:()=>{let i=s(W),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Jo=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ed=Jo.map(i=>`[${i}]`).join(", "),nd=/^url\(['"]?#(.*?)['"]?\)$/,Fe=(()=>{class i{_elementRef=s(A);_iconRegistry=s(Qo);_location=s(td);_errorHandler=s(Mn);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ft.EMPTY;constructor(){let t=s(new Dn("aria-hidden"),{optional:!0}),e=s(Jl,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let a=t.childNodes[e];(a.nodeType!==1||a.nodeName.toLowerCase()==="svg")&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>t.classList.remove(a)),e.forEach(a=>t.classList.add(a)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,a=t.startsWith("//")?`/.${t}`:t;e&&e.forEach((r,o)=>{r.forEach(l=>{o.setAttribute(l.name,`url('${a}#${l.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ed),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<e.length;r++)Jo.forEach(o=>{let l=e[r],d=l.getAttribute(o),h=d?d.match(nd):null;if(h){let c=a.get(l);c||(c=[],a.set(l,c)),c.push({name:o,value:h[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,a]=this._splitIconName(t);e&&(this._svgNamespace=e),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,e).pipe(de(1)).subscribe(r=>this._setSvgElement(r),r=>{let o=`Error retrieving icon ${e}:${a}! ${r.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){return R({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(a,r){a&2&&(tt("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),be(r.color?"mat-"+r.color:""),V("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",P],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:["*"],decls:1,vars:0,template:function(a,r){a&1&&(ht(),H(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return i})(),ts=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[Z]})}return i})();var un=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new y;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,t,e=!0,a){this._multiple=n,this._emitChanges=e,this.compareWith=a,t&&t.length&&(n?t.forEach(r=>this._markSelected(r)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let t=this._hasQueuedChanges();return n&&this._emitChangeEvent(),t}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(n){this._verifyValueAssignment(n),n.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(n){this._verifyValueAssignment(n);let t=this.selected,e=new Set(n.map(r=>this._getConcreteValue(r)));n.forEach(r=>this._markSelected(r)),t.filter(r=>!e.has(this._getConcreteValue(r,e))).forEach(r=>this._unmarkSelected(r));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(n,e))return e;return n}else return n}};var ns=Symbol("FIELD_TREE");var is=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),es=class{reducer;create;brand;[is];constructor(n,t){this.reducer=n,this.create=t}};function fn(i){return typeof i=="function"&&i[ns]===!0}var gi=new g("");var Ra=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new se(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),e.unsubscribe(),this._elementObservables.delete(n)}}).pipe(bt(t=>t.some(e=>e.target===n)),Oi({bufferSize:1,refCount:!0}),at(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},as=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(I);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let a=e?.box||"content-box";return this._observers.has(a)||this._observers.set(a,new Ra(a)),this._observers.get(a).observe(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Yt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["mat-label"]]})}return i})(),id=new g("MatError");var _i=(()=>{class i{align="start";id=s(mt).getId("mat-mdc-hint-");static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(e,a){e&2&&(he("id",a.id),tt("align",null),V("mat-mdc-form-field-hint-end",a.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),ad=new g("MatPrefix");var ms=new g("MatSuffix"),yi=(()=>{class i{set _isTextSelector(t){this._isText=!0}_isText=!1;static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[dt([{provide:ms,useExisting:i}])]})}return i})(),us=new g("FloatingLabelParent"),rs=(()=>{class i{_elementRef=s(A);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(as);_ngZone=s(I);_parent=s(us);_resizeSubscription=new ft;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return rd(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(e,a){e&2&&V("mdc-floating-label--float-above",a.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function rd(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let e=t.scrollWidth;return t.remove(),e}var os="mdc-line-ripple--active",vi="mdc-line-ripple--deactivating",ss=(()=>{class i{_elementRef=s(A);_cleanupTransitionEnd;constructor(){let t=s(I),e=s(rt);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=e.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(vi),t.add(os)}deactivate(){this._elementRef.nativeElement.classList.add(vi)}_handleTransitionEnd=t=>{let e=this._elementRef.nativeElement.classList,a=e.contains(vi);t.propertyName==="opacity"&&a&&e.remove(os,vi)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),ls=(()=>{class i{_elementRef=s(A);_ngZone=s(I);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,e=t.querySelector(".mdc-floating-label");e?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(e.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>e.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let e=this._notch.nativeElement;!this.open||!t?e.style.width="":e.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){let t=["notch"];return R({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,o){if(r&1&&Ot(t,5),r&2){let l;L(l=B())&&(o._notch=l.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,o){r&2&&V("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,o){r&1&&(ht(),Wt(0,"div",1),Pt(1,"div",2,0),H(3),Vt(),Wt(4,"div",3))},encapsulation:2})})()}return i})(),pn=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i})}return i})();var hn=new g("MatFormField"),od=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),ds="fill",sd="auto",cs="fixed",ld="translateY(-50%)",re=(()=>{class i{_elementRef=s(A);_changeDetectorRef=s(Ct);_platform=s($);_idGenerator=s(mt);_ngZone=s(I);_defaults=s(od,{optional:!0});_currentDirection;_unwrapMaybeSignal(t){return Nt(t)?t():t}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=He("iconPrefixContainer");_textPrefixContainerSignal=He("textPrefixContainer");_iconSuffixContainerSignal=He("iconSuffixContainer");_textSuffixContainerSignal=He("textSuffixContainer");_prefixSuffixContainers=St(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ar(Yt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Ie(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||sd}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let e=t||this._defaults?.appearance||ds;this._appearanceSignal.set(e)}_appearanceSignal=Y(ds);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||cs}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||cs}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=pt();constructor(){let t=this._defaults,e=s($t);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Dt(()=>this._currentDirection=e.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=fn(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!fn(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=St(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let e=this._control,a="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(a+t.controlType),e.controlType&&this._elementRef.nativeElement.classList.add(a+e.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=e.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=e.stateChanges?.pipe(zt([void 0,void 0]),nt(()=>[this._unwrapMaybeSignal(e.errorState),e.userAriaDescribedBy]),Ai(),bt(([[r,o],[l,d]])=>r!==l||o!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),e.ngControl&&e.ngControl.valueChanges&&!fn(e.ngField)&&(this._valueChanges=e.ngControl.valueChanges.pipe(at(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),le(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._unwrapMaybeSignal(this._control.focused);t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){Bi({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=St(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(t){let e=this._control?.ngField||this._control?.ngControl;if(!e)return!1;if(fn(e)){let a=e();return t==="valid"?a.valid():t==="dirty"?a.dirty():t==="touched"?a.touched():t==="pending"?a.pending():t==="untouched"?!a.touched():t==="pristine"?!a.dirty():t==="invalid"?!a.valid():!1}else{let a=e;return t==="valid"?a.valid:t==="dirty"?a.dirty:t==="touched"?a.touched:t==="pending"?a.pending:t==="untouched"?a.untouched:t==="pristine"?a.pristine:t==="invalid"?a.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,o=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?t.push(r.id):this._hintLabel&&t.push(this._hintLabelId),o&&t.push(o.id)}else this._errorChildren&&t.push(...this._errorChildren.map(r=>r.id));let e=this._control.describedByIds,a;if(e){let r=this._describedByIds||t;a=t.concat(e.filter(o=>o&&!r.includes(o)))}else a=t;this._control.setDescribedByIds(a),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,o=t?.getBoundingClientRect().width??0,l=e?.getBoundingClientRect().width??0,d=a?.getBoundingClientRect().width??0,h=r?.getBoundingClientRect().width??0,c=this._currentDirection==="rtl"?"-1":"1",b=`${o+l}px`,f=`calc(${c} * (${b} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,C=`var(--mat-mdc-form-field-label-transform, ${ld} translateX(${f}))`,O=o+l+d+h;return[C,O]}_writeOutlinedLabelStyles(t){if(t!==null){let[e,a]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=e),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let e=t.getRootNode();return e&&e!==t}return document.documentElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){let t=["iconPrefixContainer"],e=["textPrefixContainer"],a=["iconSuffixContainer"],r=["textSuffixContainer"],o=["textField"],l=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],d=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function h(w,z){w&1&&vt(0,"span",21)}function c(w,z){if(w&1&&(u(0,"label",20),H(1,1),G(2,h,1,0,"span",21),p()),w&2){let m=Q(2);lt("floating",m._shouldLabelFloat())("monitorResize",m._hasOutline())("id",m._labelId),tt("for",m._control.disableAutomaticLabeling?null:m._control.id),v(2),q(!m.hideRequiredMarker&&m._unwrapMaybeSignal(m._control.required)?2:-1)}}function b(w,z){if(w&1&&G(0,c,3,5,"label",20),w&2){let m=Q();q(m._hasFloatingLabel()?0:-1)}}function D(w,z){w&1&&vt(0,"div",7)}function f(w,z){}function C(w,z){if(w&1&&Ut(0,f,0,0,"ng-template",13),w&2){Q(2);let m=ze(1);lt("ngTemplateOutlet",m)}}function O(w,z){if(w&1&&(u(0,"div",9),G(1,C,1,1,null,13),p()),w&2){let m=Q();lt("matFormFieldNotchedOutlineOpen",m._shouldLabelFloat()),v(),q(m._forceDisplayInfixLabel()?-1:1)}}function kt(w,z){w&1&&(u(0,"div",10,2),H(2,2),p())}function bn(w,z){w&1&&(u(0,"div",11,3),H(2,3),p())}function Ve(w,z){}function gn(w,z){if(w&1&&Ut(0,Ve,0,0,"ng-template",13),w&2){Q();let m=ze(1);lt("ngTemplateOutlet",m)}}function Ds(w,z){w&1&&(u(0,"div",14,4),H(2,4),p())}function Is(w,z){w&1&&(u(0,"div",15,5),H(2,5),p())}function As(w,z){w&1&&vt(0,"div",16)}function Os(w,z){w&1&&(u(0,"div",18),H(1,6),p())}function Rs(w,z){if(w&1&&(u(0,"mat-hint",22),_(1),p()),w&2){let m=Q(2);lt("id",m._hintLabelId),v(),Et(m.hintLabel)}}function Fs(w,z){if(w&1&&(u(0,"div",19),G(1,Rs,2,2,"mat-hint",22),H(2,7),vt(3,"div",23),H(4,8),p()),w&2){let m=Q();v(),q(m.hintLabel?1:-1)}}return R({type:i,selectors:[["mat-form-field"]],contentQueries:function(z,m,j){if(z&1&&(er(j,m._labelChild,Yt,5),En(j,pn,5)(j,ad,5)(j,ms,5)(j,id,5)(j,_i,5)),z&2){Vi();let ut;L(ut=B())&&(m._formFieldControl=ut.first),L(ut=B())&&(m._prefixChildren=ut),L(ut=B())&&(m._suffixChildren=ut),L(ut=B())&&(m._errorChildren=ut),L(ut=B())&&(m._hintChildren=ut)}},viewQuery:function(z,m){if(z&1&&(nr(m._iconPrefixContainerSignal,t,5)(m._textPrefixContainerSignal,e,5)(m._iconSuffixContainerSignal,a,5)(m._textSuffixContainerSignal,r,5),Ot(o,5)(t,5)(e,5)(a,5)(r,5)(rs,5)(ls,5)(ss,5)),z&2){Vi(4);let j;L(j=B())&&(m._textField=j.first),L(j=B())&&(m._iconPrefixContainer=j.first),L(j=B())&&(m._textPrefixContainer=j.first),L(j=B())&&(m._iconSuffixContainer=j.first),L(j=B())&&(m._textSuffixContainer=j.first),L(j=B())&&(m._floatingLabel=j.first),L(j=B())&&(m._notchedOutline=j.first),L(j=B())&&(m._lineRipple=j.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(z,m){z&2&&V("mat-mdc-form-field-label-always-float",m._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",m._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",m._hasIconSuffix)("mat-form-field-invalid",m._unwrapMaybeSignal(m._control.errorState))("mat-form-field-disabled",m._unwrapMaybeSignal(m._control.disabled))("mat-form-field-autofilled",m._unwrapMaybeSignal(m._control.autofilled))("mat-form-field-appearance-fill",m.appearance=="fill")("mat-form-field-appearance-outline",m.appearance=="outline")("mat-form-field-hide-placeholder",m._hasFloatingLabel()&&!m._shouldLabelFloat())("mat-primary",m.color!=="accent"&&m.color!=="warn")("mat-accent",m.color==="accent")("mat-warn",m.color==="warn")("ng-untouched",m._shouldForward("untouched"))("ng-touched",m._shouldForward("touched"))("ng-pristine",m._shouldForward("pristine"))("ng-dirty",m._shouldForward("dirty"))("ng-valid",m._shouldForward("valid"))("ng-invalid",m._shouldForward("invalid"))("ng-pending",m._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[dt([{provide:hn,useExisting:i},{provide:us,useExisting:i}])],ngContentSelectors:d,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(z,m){if(z&1&&(ht(l),Ut(0,b,1,1,"ng-template",null,0,ir),u(2,"div",6,1),X("click",function(ut){return m._control.onContainerClick(ut)}),G(4,D,1,0,"div",7),u(5,"div",8),G(6,O,2,2,"div",9),G(7,kt,3,0,"div",10),G(8,bn,3,0,"div",11),u(9,"div",12),G(10,gn,1,1,null,13),H(11),p(),G(12,Ds,3,0,"div",14),G(13,Is,3,0,"div",15),p(),G(14,As,1,0,"div",16),p(),u(15,"div",17),G(16,Os,2,0,"div",18)(17,Fs,5,1,"div",19),p()),z&2){let j,ut=m._unwrapMaybeSignal(m._control.disabled);v(2),V("mdc-text-field--filled",!m._hasOutline())("mdc-text-field--outlined",m._hasOutline())("mdc-text-field--no-label",!m._hasFloatingLabel())("mdc-text-field--disabled",ut)("mdc-text-field--invalid",m._unwrapMaybeSignal(m._control.errorState)),v(2),q(!m._hasOutline()&&!ut?4:-1),v(2),q(m._hasOutline()?6:-1),v(),q(m._hasIconPrefix?7:-1),v(),q(m._hasTextPrefix?8:-1),v(2),q(!m._hasOutline()||m._forceDisplayInfixLabel()?10:-1),v(2),q(m._hasTextSuffix?12:-1),v(),q(m._hasIconSuffix?13:-1),v(),q(m._hasOutline()?-1:14),v(),V("mat-mdc-form-field-subscript-dynamic-size",m.subscriptSizing==="dynamic");let Ts=m._getSubscriptMessageType();v(),q((j=Ts)==="error"?16:j==="hint"?17:-1)}},dependencies:[rs,ls,or,ss,_i],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return i})();var fs=(()=>{class i{_animationsDisabled=pt();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=R({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,a){e&2&&V("mat-pseudo-checkbox-indeterminate",a.state==="indeterminate")("mat-pseudo-checkbox-checked",a.state==="checked")("mat-pseudo-checkbox-disabled",a.disabled)("mat-pseudo-checkbox-minimal",a.appearance==="minimal")("mat-pseudo-checkbox-full",a.appearance==="full")("_mat-animation-noopable",a._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,a){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var Ta=new g("MAT_OPTION_PARENT_COMPONENT"),Pa=new g("MatOptgroup");var Fa=class{source;isUserInput;constructor(n,t=!1){this.source=n,this.isUserInput=t}},Te=(()=>{class i{_element=s(A);_changeDetectorRef=s(Ct);_parent=s(Ta,{optional:!0});group=s(Pa,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(mt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=Y(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new K;_text;_stateChanges=new y;constructor(){let t=s(wt);t.load(pi),t.load(la),this._signalDisableRipple=!!this._parent&&Nt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){let a=this._getHostElement();typeof a.focus=="function"&&a.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!Ft(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new Fa(this,t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){let t=["text"],e=[[["mat-icon"]],"*"],a=["mat-icon","*"];function r(d,h){if(d&1&&vt(0,"mat-pseudo-checkbox",1),d&2){let c=Q();lt("disabled",c.disabled)("state",c.selected?"checked":"unchecked")}}function o(d,h){if(d&1&&vt(0,"mat-pseudo-checkbox",3),d&2){let c=Q();lt("disabled",c.disabled)}}function l(d,h){if(d&1&&(u(0,"span",4),_(1),p()),d&2){let c=Q();v(),je("(",c.group.label,")")}}return R({type:i,selectors:[["mat-option"]],viewQuery:function(h,c){if(h&1&&Ot(t,7),h&2){let b;L(b=B())&&(c._text=b.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(h,c){h&1&&X("click",function(){return c._selectViaInteraction()})("keydown",function(D){return c._handleKeydown(D)}),h&2&&(he("id",c.id),tt("aria-selected",c.selected)("aria-disabled",c.disabled.toString()),V("mdc-list-item--selected",c.selected)("mat-mdc-option-multiple",c.multiple)("mat-mdc-option-active",c.active)("mdc-list-item--disabled",c.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",P]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:a,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(h,c){h&1&&(ht(e),G(0,r,1,2,"mat-pseudo-checkbox",1),H(1),u(2,"span",2,0),H(4,1),p(),G(5,o,1,1,"mat-pseudo-checkbox",3),G(6,l,2,1,"span",4),vt(7,"div",5)),h&2&&(q(c.multiple?0:-1),v(5),q(!c.multiple&&c.selected&&!c.hideSingleSelectionIndicator?5:-1),v(),q(c.group&&c.group._inert?6:-1),v(),lt("matRippleTrigger",c._getHostElement())("matRippleDisabled",c.disabled||c.disableRipple))},dependencies:[fs,Lo],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();function ps(i,n,t){if(t.length){let e=n.toArray(),a=t.toArray(),r=0;for(let o=0;o<i+1;o++)e[o].group&&e[o].group===a[r]&&r++;return r}return 0}function hs(i,n,t,e){return i<t?i:i+n>t+e?Math.max(0,i-e+n):t}var Ci=(()=>{class i{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}isSignalErrorState(t){if(!t)return!1;let e=t().invalid(),a=t().touched();return e&&a}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Pe=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,t,e,a,r){this._defaultMatcher=n,this._parentFormGroup=e,this._parentForm=a,this._stateChanges=r,t?Nt(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==n&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,e=this.ngControl?this.ngControl.control:null;return n?.isErrorState(e,t)??!1}};var oe=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[eo,re,Z]})}return i})();var bs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[Z]})}return i})();var Va=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[hi,bs,Te,Z]})}return i})();var md=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(U);return()=>on(i)}}),ud=new g("MAT_SELECT_CONFIG"),fd=new g("MatSelectTrigger"),La=class{source;value;constructor(n,t){this.source=n,this.value=t}},gs=(()=>{class i{_viewportRuler=s(ee);_changeDetectorRef=s(Ct);_elementRef=s(A);_dir=s($t,{optional:!0});_idGenerator=s(mt);_renderer=s(rt);_parentFormField=s(hn,{optional:!0});ngControl=s(Rt,{self:!0,optional:!0});_liveAnnouncer=s(en);_defaultOptions=s(ud,{optional:!0});_animationsDisabled=pt();_popoverLocation;_initialized=new y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let e=this.options.toArray()[t];if(e){let a=this.panel.nativeElement,r=ps(t,this.options,this.optionGroups),o=e._getHostElement();t===0&&r===1?a.scrollTop=0:a.scrollTop=hs(o.offsetTop,o.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new La(this,t)}_scrollStrategyFactory=s(md);_panelOpen=!1;_compareWith=(t,e)=>t===e;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new y;_errorStateTracker;stateChanges=new y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=Y(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ct.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ga(()=>{let t=this.options;return t?t.changes.pipe(zt(t),xn(()=>le(...t.map(e=>e.onSelectionChange)))):this._initialized.pipe(xn(()=>this.optionSelectionChanges))});openedChange=new K;_openedStream=this.openedChange.pipe(bt(t=>t),nt(()=>{}));_closedStream=this.openedChange.pipe(bt(t=>!t),nt(()=>{}));selectionChange=new K;valueChange=new K;constructor(){let t=s(Ci),e=s(Ye,{optional:!0}),a=s(Lt,{optional:!0}),r=s(new Dn("tabindex"),{optional:!0}),o=s(sn,{optional:!0}),l=s(gi,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Pe(t,l||this.ngControl,a,e,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new un(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(at(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(at(this._destroy)).subscribe(t=>{t.added.forEach(e=>e.select()),t.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(zt(null),at(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),e=this.ngControl;if(t!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?a.setAttribute("aria-labelledby",t):a.removeAttribute("aria-labelledby")}e&&(this._previousControl!==e.control&&(this._previousControl!==void 0&&e.disabled!==null&&e.disabled!==this.disabled&&(this.disabled=e.disabled),this._previousControl=e.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(de(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{e(),clearTimeout(a),this._cleanupDetach=void 0};let t=this.panel.nativeElement,e=this._renderer.listen(t,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let e=t.keyCode,a=e===40||e===38||e===37||e===39,r=e===13||e===32,o=this._keyManager;if(!o.isTyping()&&r&&!Ft(t)||(this.multiple||t.altKey)&&a)t.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;o.onKeydown(t);let d=this.selected;d&&l!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(t){let e=this._keyManager,a=t.keyCode,r=a===40||a===38,o=e.isTyping();if(r&&t.altKey)t.preventDefault(),this.close();else if(!o&&(a===13||a===32)&&e.activeItem&&!Ft(t))t.preventDefault(),e.activeItem._selectViaInteraction();else if(!o&&this._multiple&&a===65&&t.ctrlKey){t.preventDefault();let l=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(l?d.select():d.deselect())})}else{let l=e.activeItemIndex;e.onKeydown(t),this._multiple&&r&&t.shiftKey&&e.activeItem&&e.activeItemIndex!==l&&e.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!Ft(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(e=>e.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(e=>this._selectOptionByValue(e)),this._sortValues();else{let e=this._selectOptionByValue(t);e?this._keyManager.updateActiveItem(e):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let e=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,t)}catch{return!1}});return e&&this._selectionModel.select(e),e}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof Ee?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new nn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=le(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(at(t)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),le(...this.options.map(e=>e._stateChanges)).pipe(at(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,e){let a=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(a!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),e&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),e&&this.focus())),a!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((e,a)=>this.sortComparator?this.sortComparator(e,a,t):t.indexOf(e)-t.indexOf(a)),this.stateChanges.next()}}_propagateChanges(t){let e;this.multiple?e=this.selected.map(a=>a.value):e=this.selected?this.selected.value:t,this._value=e,this.valueChange.emit(e),this._onChange(e),this.selectionChange.emit(this._getChangeEvent(e)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let e=0;e<this.options.length;e++)if(!this.options.get(e).disabled){t=e;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(t){let e=ot(t);e&&(e.tagName==="MAT-OPTION"||e.classList.contains("cdk-overlay-backdrop")||e.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=(function(){let t=["trigger"],e=["panel"],a=[[["mat-select-trigger"]],"*"],r=["mat-select-trigger","*"];function o(b,D){if(b&1&&(u(0,"span",4),_(1),p()),b&2){let f=Q();v(),Et(f.placeholder)}}function l(b,D){b&1&&H(0)}function d(b,D){if(b&1&&(u(0,"span",11),_(1),p()),b&2){let f=Q(2);v(),Et(f.triggerValue)}}function h(b,D){if(b&1&&(u(0,"span",5),G(1,l,1,0)(2,d,2,1,"span",11),p()),b&2){let f=Q();v(),q(f.customTrigger?1:2)}}function c(b,D){if(b&1){let f=Nn();u(0,"div",12,1),X("keydown",function(O){Sn(f);let kt=Q();return Cn(kt._handleKeydown(O))}),H(2,1),p()}if(b&2){let f=Q();be(f.panelClass),V("mat-select-panel-animations-enabled",!f._animationsDisabled)("mat-primary",f._parentFormField?.color==="primary")("mat-accent",f._parentFormField?.color==="accent")("mat-warn",f._parentFormField?.color==="warn")("mat-undefined",!f._parentFormField?.color),tt("id",f.id+"-panel")("aria-multiselectable",f.multiple)("aria-label",f.ariaLabel||null)("aria-labelledby",f._getPanelAriaLabelledby())}}return R({type:i,selectors:[["mat-select"]],contentQueries:function(D,f,C){if(D&1&&En(C,fd,5)(C,Te,5)(C,Pa,5),D&2){let O;L(O=B())&&(f.customTrigger=O.first),L(O=B())&&(f.options=O),L(O=B())&&(f.optionGroups=O)}},viewQuery:function(D,f){if(D&1&&Ot(t,5)(e,5)(mi,5),D&2){let C;L(C=B())&&(f.trigger=C.first),L(C=B())&&(f.panel=C.first),L(C=B())&&(f._overlayDir=C.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(D,f){D&1&&X("keydown",function(O){return f._handleKeydown(O)})("focus",function(){return f._onFocus()})("blur",function(){return f._onBlur()}),D&2&&(tt("id",f.id)("tabindex",f.disabled?-1:f.tabIndex)("aria-controls",f.panelOpen?f.id+"-panel":null)("aria-expanded",f.panelOpen)("aria-label",f.ariaLabel||null)("aria-required",f.required.toString())("aria-disabled",f.disabled.toString())("aria-invalid",f.errorState)("aria-activedescendant",f._getAriaActiveDescendant()),V("mat-mdc-select-disabled",f.disabled)("mat-mdc-select-invalid",f.errorState)("mat-mdc-select-required",f.required)("mat-mdc-select-empty",f.empty)("mat-mdc-select-multiple",f.multiple)("mat-select-open",f.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",P],disableRipple:[2,"disableRipple","disableRipple",P],tabIndex:[2,"tabIndex","tabIndex",b=>b==null?0:Ue(b)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",P],placeholder:"placeholder",required:[2,"required","required",P],multiple:[2,"multiple","multiple",P],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",P],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ue],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",P]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[dt([{provide:pn,useExisting:i},{provide:Ta,useExisting:i}]),xt],ngContentSelectors:r,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(D,f){if(D&1&&(ht(a),u(0,"div",2,0),X("click",function(){return f.open()}),u(3,"div",3),G(4,o,2,1,"span",4)(5,h,3,1,"span",5),p(),u(6,"div",6)(7,"div",7),Za(),u(8,"svg",8),vt(9,"path",9),p()()()(),Ut(10,c,3,16,"ng-template",10),X("detach",function(){return f.close()})("backdropClick",function(){return f.close()})("overlayKeydown",function(O){return f._handleOverlayKeydown(O)})),D&2){let C=ze(1);v(3),tt("id",f._valueId),v(),q(f.empty?4:5),v(6),lt("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",f._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",f._scrollStrategy)("cdkConnectedOverlayOrigin",f._preferredOverlayOrigin||C)("cdkConnectedOverlayPositions",f._positions)("cdkConnectedOverlayWidth",f._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",f._popoverLocation)}},dependencies:[Ee,mi],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return i})();var vs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[ui,Va,Z,ei,oe,Va]})}return i})();var pd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=R({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(e,a){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})(),hd={passive:!0},ys=(()=>{class i{_platform=s($);_ngZone=s(I);_renderer=s(gt).createRenderer(null,null);_styleLoader=s(wt);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return za;this._styleLoader.load(pd);let e=_t(t),a=this._monitoredElements.get(e);if(a)return a.subject;let r=new y,o="cdk-text-field-autofilled",l=h=>{h.animationName==="cdk-text-field-autofill-start"&&!e.classList.contains(o)?(e.classList.add(o),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!0}))):h.animationName==="cdk-text-field-autofill-end"&&e.classList.contains(o)&&(e.classList.remove(o),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(e.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(e,"animationstart",l,hd)));return this._monitoredElements.set(e,{subject:r,unlisten:d}),r}stopMonitoring(t){let e=_t(t),a=this._monitoredElements.get(e);a&&(a.unlisten(),a.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var xs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({})}return i})();var Ss=new g("MAT_INPUT_VALUE_ACCESSOR");var bd=["button","checkbox","file","hidden","image","radio","range","reset","submit"],gd=new g("MAT_INPUT_CONFIG"),wi=(()=>{class i{_elementRef=s(A);_platform=s($);ngControl=s(Rt,{optional:!0,self:!0});_autofillMonitor=s(ys);_ngZone=s(I);_formField=s(hn,{optional:!0});_renderer=s(rt);_uid=s(mt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(gd,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new y;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=Ie(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ct.required)??!1}set required(t){this._required=Ie(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Ca().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Ie(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Ca().has(t));constructor(){let t=s(Ye,{optional:!0}),e=s(Lt,{optional:!0}),a=s(Ci),r=s(Ss,{optional:!0,self:!0}),o=s(gi,{optional:!0,self:!0}),l=this._elementRef.nativeElement,d=l.nodeName.toLowerCase();r?Nt(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Pe(a,o||this.ngControl,e,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=d==="select",this._isTextarea=d==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Dt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type==="number"?(e.type="text",e.setSelectionRange(0,0),e.type="number"):e.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){bd.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let e=t.target;!e.value&&e.selectionStart===0&&e.selectionEnd===0&&(e.setSelectionRange(1,1),e.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(e){return new(e||i)};static \u0275dir=S({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(e,a){e&1&&X("focus",function(){return a._focusChanged(!0)})("blur",function(){return a._focusChanged(!1)})("input",function(){return a._onInput()}),e&2&&(he("id",a.id)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),tt("name",a.name||null)("readonly",a._getReadonlyAttribute())("aria-disabled",a.disabled&&a.disabledInteractive?"true":null)("aria-invalid",a.empty&&a.required?null:a.errorState)("aria-required",a.required)("id",a.id),V("mat-input-server",a._isServer)("mat-mdc-form-field-textarea-control",a._isInFormField&&a._isTextarea)("mat-mdc-form-field-input-control",a._isInFormField)("mat-mdc-input-disabled-interactive",a.disabledInteractive)("mdc-text-field__input",a._isInFormField)("mat-mdc-native-select-inline",a._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",P]},exportAs:["matInput"],features:[dt([{provide:pn,useExisting:i}]),xt]})}return i})(),Cs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[oe,oe,xs,Z]})}return i})();var Mi=class i{constructor(n,t,e,a){this.formBuilder=n;this.userService=t;this.routerService=e;this.snackBarService=a;this.form=On(jr,this.formBuilder)}formBuilder;userService;routerService;snackBarService;form;onSubimit(){let n=this.form;try{if(console.log(n.value),this.form.invalid)throw new Error("Preencha todos os dados");let t=n.value;Hr("user",t),this.userService.defineUser(t),this.routerService.navigatePage("")}catch(t){this.snackBarService.openSnackBar(t,"ok")}}static \u0275fac=function(t){return new(t||i)(T($n),T(Kt),T(Ce),T(Re))};static \u0275cmp=R({type:i,selectors:[["app-create"]],standalone:!1,decls:37,vars:1,consts:[[1,"form-container",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","name"],["matInput","","type","email","formControlName","email"],["matInput","","type","tel","formControlName","phone"],["matInput","","formControlName","year"],["formControlName","sex"],["value","masculino"],["value","feminino"],["matInput","","type","password","formControlName","password"],["mat-flat-button","","type","submit",1,"submit-button"],["routerLink","/login"]],template:function(t,e){t&1&&(u(0,"form",0),X("ngSubmit",function(){return e.onSubimit()}),u(1,"h2"),_(2,"Cadastro de usu\xE1rio"),p(),u(3,"mat-form-field",1)(4,"mat-label"),_(5,"Name"),p(),u(6,"input",2),It(),p()(),u(7,"mat-form-field",1)(8,"mat-label"),_(9,"Email"),p(),u(10,"input",3),It(),p()(),u(11,"mat-form-field",1)(12,"mat-label"),_(13,"Phone"),p(),u(14,"input",4),It(),p()(),u(15,"mat-form-field",1)(16,"mat-label"),_(17,"Year"),p(),u(18,"input",5),It(),p()(),u(19,"mat-form-field",1)(20,"mat-label"),_(21,"Sex"),p(),u(22,"mat-select",6),It(),u(23,"mat-option",7),_(24,"Masculino"),p(),u(25,"mat-option",8),_(26,"Feminino"),p()()(),u(27,"mat-form-field",1)(28,"mat-label"),_(29,"Password"),p(),u(30,"input",9),It(),p()(),u(31,"button",10),_(32," Enviar "),u(33,"mat-icon"),_(34,"person_add"),p()(),u(35,"span",11),_(36,"Logar Conta"),p()()),t&2&&(lt("formGroup",e.form),v(6),At(),v(4),At(),v(4),At(),v(4),At(),v(4),At(),v(8),At())},dependencies:[ge,Kn,Se,Gn,qn,Lt,Xe,Fe,re,Yt,gs,Te,wi,Ae],styles:[".form-container[_ngcontent-%COMP%]{max-width:400px;margin:40px auto;padding:28px;display:flex;flex-direction:column;gap:8px;background-color:#fff;border-radius:12px;box-shadow:0 4px 16px #00000014}.form-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 16px;text-align:center;color:#091540;font-size:24px}.form-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.form-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{width:100%;min-height:44px;margin-top:8px;background-color:#1b2cc1;color:#fff;border-radius:8px}.form-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:6px}.form-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:hover{background-color:#14219a}span[_ngcontent-%COMP%]{margin-top:12px;text-align:center;color:#1b2cc1;font-size:14px;font-weight:500;cursor:pointer;transition:color .2s ease}span[_ngcontent-%COMP%]:hover{color:#14219a;text-decoration:underline}@media(max-width:480px){.form-container[_ngcontent-%COMP%]{margin:20px 12px;padding:20px}}"]})};var ki=class i{constructor(n,t,e,a){this.formBuilder=n;this.userService=t;this.routerService=e;this.snackBarService=a;this.form=On(zr,this.formBuilder)}formBuilder;userService;routerService;snackBarService;form;onSubimit(){let n=this.form;try{if(n.invalid)throw new Error("Preencha todos os campos");let t=Ur("user");if(!t)throw new Error("Nenhum usu\xE1rio encontrado");let e=n.value;if(e.email===t.email)if(e.password===t.password)this.userService.defineUser(t),this.routerService.navigatePage("");else throw new Error("Dados n\xE3o compativeis");else throw new Error("Dados n\xE3o compativeis")}catch(t){this.snackBarService.openSnackBar(t,"ok")}}static \u0275fac=function(t){return new(t||i)(T($n),T(Kt),T(Ce),T(Re))};static \u0275cmp=R({type:i,selectors:[["app-login"]],standalone:!1,decls:23,vars:1,consts:[[1,"form-container",3,"ngSubmit","formGroup"],[1,"form-description"],["appearance","outline"],["matInput","","type","email","formControlName","email"],["matSuffix",""],["matInput","","type","password","formControlName","password"],["mat-flat-button","","type","submit",1,"submit-button"],["routerLink","/create"]],template:function(t,e){t&1&&(u(0,"form",0),X("ngSubmit",function(){return e.onSubimit()}),u(1,"h2"),_(2,"Entrar"),p(),u(3,"p",1),_(4,"Acesse sua conta"),p(),u(5,"mat-form-field",2)(6,"mat-label"),_(7,"Email"),p(),u(8,"input",3),It(),p(),u(9,"mat-icon",4),_(10,"mail"),p()(),u(11,"mat-form-field",2)(12,"mat-label"),_(13,"Password"),p(),u(14,"input",5),It(),p(),u(15,"mat-icon",4),_(16,"lock"),p()(),u(17,"button",6),_(18," Logar "),u(19,"mat-icon"),_(20,"login"),p()(),u(21,"span",7),_(22,"Criar Conta"),p()()),t&2&&(lt("formGroup",e.form),v(8),At(),v(6),At())},dependencies:[ge,Kn,Se,Gn,qn,Lt,Xe,Fe,re,Yt,yi,wi,Ae],styles:[".form-container[_ngcontent-%COMP%]{max-width:360px;margin:60px auto;padding:32px 28px;display:flex;flex-direction:column;gap:8px;background-color:#fff;border-radius:12px;box-shadow:0 4px 20px #00000014}.form-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;text-align:center;color:#091540;font-size:26px;font-weight:600}.form-container[_ngcontent-%COMP%]   .form-description[_ngcontent-%COMP%]{margin:4px 0 20px;text-align:center;color:#64748b;font-size:14px}.form-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.form-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{width:100%;min-height:46px;margin-top:8px;background-color:#1b2cc1;color:#fff;border-radius:8px;font-size:15px}.form-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-left:6px}.form-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:hover{background-color:#14219a}span[_ngcontent-%COMP%]{margin-top:12px;text-align:center;color:#1b2cc1;font-size:14px;font-weight:500;cursor:pointer;transition:color .2s ease}span[_ngcontent-%COMP%]:hover{color:#14219a;text-decoration:underline}@media(max-width:480px){.form-container[_ngcontent-%COMP%]{margin:24px 16px;padding:24px 20px}}"]})};var Ni=class i{constructor(n){this.userSercie=n}userSercie;static \u0275fac=function(t){return new(t||i)(T(Kt))};static \u0275cmp=R({type:i,selectors:[["app-profile"]],standalone:!1,decls:47,vars:5,consts:[[1,"profile-container"],[1,"profile-header"],[1,"profile-avatar"],[1,"profile-subtitle"],[1,"profile-info"],[1,"info-item"],[1,"profile-actions"],["routerLink","/create"],["routerLink","/login"]],template:function(t,e){t&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon"),_(4,"person"),p()(),u(5,"h1"),_(6),p(),u(7,"span",3),_(8,"Perfil do usu\xE1rio"),p()(),u(9,"div",4)(10,"div",5)(11,"mat-icon"),_(12,"person_outline"),p(),u(13,"div")(14,"label"),_(15,"Sexo"),p(),u(16,"span"),_(17),p()()(),u(18,"div",5)(19,"mat-icon"),_(20,"calendar_today"),p(),u(21,"div")(22,"label"),_(23,"Ano"),p(),u(24,"span"),_(25),p()()(),u(26,"div",5)(27,"mat-icon"),_(28,"email"),p(),u(29,"div")(30,"label"),_(31,"Email"),p(),u(32,"span"),_(33),p()()(),u(34,"div",5)(35,"mat-icon"),_(36,"phone"),p(),u(37,"div")(38,"label"),_(39,"Telefone"),p(),u(40,"span"),_(41),p()()()(),u(42,"div",6)(43,"span",7),_(44,"Criar Conta"),p(),u(45,"span",8),_(46,"Logar Conta"),p()()()),t&2&&(v(6),Et(e.userSercie.user()?.name),v(11),Et(e.userSercie.user()?.sex),v(8),Et(e.userSercie.user()?.year),v(8),Et(e.userSercie.user()?.email),v(8),Et(e.userSercie.user()?.phone))},dependencies:[ge,Fe],styles:[".profile-container[_ngcontent-%COMP%]{max-width:460px;margin:50px auto;overflow:hidden;background-color:#fff;border-radius:16px;box-shadow:0 4px 20px #00000014}.profile-container[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:32px 20px;background-color:#091540;color:#fff}.profile-container[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:80px;height:80px;margin-bottom:16px;background-color:#1b2cc1;border:3px solid #7692ff;border-radius:50%}.profile-container[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:42px;height:42px;font-size:42px}.profile-container[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:600;text-align:center;overflow-wrap:anywhere}.profile-container[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .profile-subtitle[_ngcontent-%COMP%]{margin-top:8px;color:#abd2fa;font-size:14px}.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;padding:24px}.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:14px 8px;border-bottom:1px solid #e2e8f0}.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{color:#1b2cc1;flex-shrink:0}.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-width:0}.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#64748b;font-size:12px}.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#091540;font-size:15px;overflow-wrap:anywhere}.profile-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:24px;padding:0 20px 24px}.profile-actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:0;text-align:center;color:#1b2cc1;font-size:14px;font-weight:500;cursor:pointer;transition:color .2s ease}.profile-actions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#14219a;text-decoration:underline}@media(max-width:480px){.profile-container[_ngcontent-%COMP%]{margin:20px 12px}.profile-container[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]{padding:28px 16px}.profile-container[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]{padding:16px}}"]})};var vd=[{path:"",component:Ni},{path:"create",component:Mi},{path:"login",component:ki}],Ei=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[ji.forChild(vd),ji]})};var Ns=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[Z]})}return i})();var Es=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=E({type:i});static \u0275inj=N({imports:[sr,Ei,Lr,ts,vs,oe,Cs,Ns,Da]})};export{Es as PageModule};
