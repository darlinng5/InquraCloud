"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[9707],{9707:(b,u,e)=>{e.r(u),e.d(u,{LoginModule:()=>E});var l=e(6895),m=e(9197),o=e(4006),t=e(4650),h=e(8568),p=e(7083),a=e(5384),x=e(5593),n=e(1989),d=e(1740),g=e(3425),P=e(7116);function Z(s,f){1&s&&(t.TgZ(0,"div"),t._UZ(1,"app-progress-bar"),t.qZA())}function y(s,f){1&s&&(t.TgZ(0,"p")(1,"FONT",25),t._uU(2,"Debe ingresar un email valido!!! "),t.qZA()())}function T(s,f){1&s&&(t.TgZ(0,"p")(1,"FONT",25),t._uU(2,"Debe ingresar una contrase\xf1a!!! "),t.qZA()())}function I(s,f){1&s&&(t.TgZ(0,"p")(1,"FONT",25),t._uU(2,"Debe ingresar una contrase\xf1a!!! "),t.qZA()())}function w(s,f){1&s&&(t.TgZ(0,"div"),t._UZ(1,"app-progress-bar"),t.qZA())}let C=(()=>{class s{constructor(c,i,r,v,L,O){this.layoutService=c,this.userService=i,this.fb=r,this.eventService=v,this.router=L,this.route=O,this.loginForm=this.fb.group({email:["",[o.kI.required,o.kI.email]],password:["",[o.kI.required]]}),this.formPostedMessage="",this.formPosted=!1,this.formSend=!1,this.valCheck=["remember"],this.showProgressBar=!1,this.whareHouseList=[]}validate(c){return this.formPostedMessage="",this.formPosted=!1,!(!this.loginForm.get(c)?.invalid||1!=this.formSend)}showErrorFormPosted(){return!!this.formPosted}login(){if(this.formSend=!0,this.formPosted=!0,this.loginForm.valid){this.showProgressBar=!0;const c=this.loginForm.get("email")?.value,i=this.loginForm.get("password")?.value;this.userService.login(c,i).subscribe(r=>{if(r.data)if(this.eventService.setWarehouseName(r.data.warehouseName),this.eventService.setPermisionException(r.data.exceptionUserPermisionsList),this.eventService.setToken(r.data.token),this.eventService.setUserName(r.data.name),this.eventService.setHasEnterprise(r.data.hasEnterprise),this.eventService.setHasWareHouse(r.data.hasWareHouse),this.eventService.setHasPointOfSale(r.data.hasPointOfSale),this.eventService.setHasCorrelative(r.data.hasCorrelative),this.whareHouseList=r.data.wareHouseList,this.whareHouseList.length>1){let v={queryParams:{lista:JSON.stringify(this.whareHouseList)}};this.router.navigate(["/warehouse"],v)}else this.router.navigateByUrl("/");else this.formPostedMessage=r.message,alert(r.message);this.showProgressBar=!1},r=>{alert(r)})}}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(h.P),t.Y36(p.K),t.Y36(o.qu),t.Y36(a.P),t.Y36(m.F0),t.Y36(m.gz))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-login"]],decls:37,vars:9,consts:[[4,"ngIf"],[1,"form-horizontal","form-material",3,"formGroup","ngSubmit"],[1,"surface-0","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"grid","justify-content-center","p-2","lg:p-0",2,"min-width","80%"],[1,"col-12","mt-5","xl:mt-0","text-center"],["alt","Sakai logo",1,"mb-5",2,"width","81px","height","60px",3,"src"],[1,"col-12","xl:col-6",2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"h-full","w-full","m-0","py-7","px-4",2,"border-radius","53px","background","linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"],[1,"text-center","mb-5"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],[1,"w-full","md:w-10","mx-auto"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["matInput","","pInputText","","placeholder","Correo","type","text","formControlName","email",1,"w-full","mb-3",2,"padding","1rem"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","matInput","","formControlName","password","placeholder","Password","styleClass","w-full mb-3",3,"toggleMask"],[1,"flex","align-items-center","justify-content-between","mb-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"binary"],["for","rememberme1"],["routerLink","/recovery"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],[1,"row"],[1,"col","tex-danger"],["pButton","","pRipple","","label","Sign In",1,"w-full","p-3","text-xl"],["COLOR","red"]],template:function(i,r){1&i&&(t.YNc(0,Z,2,0,"div",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return r.login()}),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9),t._uU(10,"Para ingresar al sistema de pruebas usar"),t.qZA(),t.TgZ(11,"span",10),t._uU(12,"Email: test@test.com"),t.qZA(),t.TgZ(13,"span",10),t._uU(14," Pass: a1b2c3d4"),t.qZA()(),t.TgZ(15,"div",11)(16,"label",12),t._uU(17,"Email"),t.qZA(),t._UZ(18,"input",13),t.TgZ(19,"label",14),t._uU(20,"Password"),t.qZA(),t._UZ(21,"p-password",15),t.TgZ(22,"div",16)(23,"div",17),t._UZ(24,"p-checkbox",18),t.TgZ(25,"label",19),t._uU(26,"Remember me"),t.qZA()(),t.TgZ(27,"a",20)(28,"a",21),t._uU(29,"Recuperar contrase\xf1a?"),t.qZA()()(),t.TgZ(30,"div",22)(31,"div",23),t.YNc(32,y,3,0,"p",0),t.YNc(33,T,3,0,"p",0),t.YNc(34,I,3,0,"p",0),t.qZA()(),t._UZ(35,"button",24),t.qZA()()()(),t.YNc(36,w,2,0,"div",0),t.qZA()()),2&i&&(t.Q6J("ngIf",r.showProgressBar),t.xp6(1),t.Q6J("formGroup",r.loginForm),t.xp6(4),t.MGl("src","assets/layout/images/","light"===r.layoutService.config.colorScheme?"logo-dark":"logo-white",".svg",t.LSH),t.xp6(16),t.Q6J("toggleMask",!0),t.xp6(3),t.Q6J("binary",!0),t.xp6(8),t.Q6J("ngIf",r.validate("email")),t.xp6(1),t.Q6J("ngIf",r.validate("password")),t.xp6(1),t.Q6J("ngIf",r.showErrorFormPosted()),t.xp6(2),t.Q6J("ngIf",r.showProgressBar))},dependencies:[l.O5,m.rH,x.Hq,n.XZ,d.o,o._Y,o.Fj,o.JJ,o.JL,g.ro,o.sg,o.u,P.R],styles:["[_nghost-%COMP%]     .p-password input{width:100%;padding:1rem}[_nghost-%COMP%]     .pi-eye{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}[_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]})}return s})(),U=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#r=this.\u0275inj=t.cJS({imports:[m.Bz.forChild([{path:"",component:C}]),m.Bz]})}return s})();var M=e(529),S=e(4891);let E=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#r=this.\u0275inj=t.cJS({imports:[l.ez,U,x.hJ,n.nD,d.j,o.u5,g.gz,o.UX,M.JF,S.E]})}return s})()},2384:(b,u,e)=>{e.d(u,{b:()=>l});class l{}},7116:(b,u,e)=>{e.d(u,{R:()=>o});var l=e(4650),m=e(3162);let o=(()=>{class t{constructor(){}static#t=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=l.Xpm({type:t,selectors:[["app-progress-bar"]],decls:1,vars:0,consts:[["mode","indeterminate"]],template:function(a,x){1&a&&l._UZ(0,"mat-progress-bar",0)},dependencies:[m.pW],encapsulation:2})}return t})()},7083:(b,u,e)=>{e.d(u,{K:()=>p});var l=e(529),m=e(2340),o=e(2384),t=e(4650);const h=m.N.baseUrl;let p=(()=>{class a{constructor(n){this.http=n}addUser(n){return this.http.post(`${h}auth/register`,n)}login(n,d){var g=new o.b;return g.email=n,g.password=d,this.http.post(`${h}auth/login`,g)}GetUserPermisions(){const P={headers:new l.WM({"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcmxpbm5nNUBnbWFpbC5jb20iLCJuYW1lIjoiRGFybGluIiwiRW50ZXJwcmlzZSI6IjEiLCJXYXJlSG91c2UiOiIyIiwiUG9pbnRPZlNhbGUiOiIzIiwiQ29ycmVsYXRpdmUiOiI0IiwibmJmIjoxNjYzMjExNTA1LCJleHAiOjE2NjMyOTc5MDUsImlhdCI6MTY2MzIxMTUwNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MTM0In0.ZZQR0YuVwR5erkrQoErfRnlT9stXaVuDpt2SjFkl8PiAy0RP18-4nmyTRm8yYGqkPM-Eht-EbreVdHFYyRgSxQ"})};return this.http.get("http://localhost:5134/api/auth/test",P)}static#t=this.\u0275fac=function(d){return new(d||a)(t.LFG(l.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);