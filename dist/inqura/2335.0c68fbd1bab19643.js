"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[2335],{3282:(C,p,e)=>{e.r(p),e.d(p,{TalonarioModule:()=>ot});var a=e(6895),m=e(9197),v=e(1546),t=e(4650),h=e(805),d=e(4266),u=e(1726),T=e(7747),s=e(5384),l=e(478),g=e(99),Z=e(5593),A=e(1740),U=e(1795),M=e(2453),I=e(1493);const D=["filter"];function x(o,f){1&o&&(t.TgZ(0,"div")(1,"h4")(2,"FONT",14),t._uU(3,"Producto agregado de forma correcta!!! "),t.qZA()()())}function O(o,f){if(1&o){const i=t.EpF();t.TgZ(0,"div",15)(1,"button",16),t.NdJ("click",function(){t.CHM(i);const r=t.oxw(),c=t.MAs(7);return t.KtG(r.clear(c))}),t.qZA(),t.TgZ(2,"span",17),t._UZ(3,"i",18),t.TgZ(4,"input",19,20),t.NdJ("input",function(r){t.CHM(i);const c=t.oxw(),y=t.MAs(7);return t.KtG(c.onGlobalFilter(y,r))}),t.qZA()()()}}function F(o,f){1&o&&(t.TgZ(0,"tr")(1,"th")(2,"div",21),t._uU(3," Nombre "),t._UZ(4,"p-columnFilter",22),t.qZA()(),t.TgZ(5,"th")(6,"div",21),t._uU(7," Actual Correlativo "),t._UZ(8,"p-columnFilter",23),t.qZA()(),t.TgZ(9,"th")(10,"div",21),t._uU(11," Correlativo Inicial "),t._UZ(12,"p-columnFilter",24),t.qZA()(),t.TgZ(13,"th")(14,"div",21),t._uU(15," Correlativo Final "),t._UZ(16,"p-columnFilter",24),t.qZA()(),t.TgZ(17,"th")(18,"div",21),t._uU(19," Fecha Inicial "),t._UZ(20,"p-columnFilter",24),t.qZA()(),t.TgZ(21,"th")(22,"div",21),t._uU(23," Fecha Final "),t._UZ(24,"p-columnFilter",24),t.qZA()(),t.TgZ(25,"th")(26,"div",21),t._uU(27," CAI "),t._UZ(28,"p-columnFilter",25),t.qZA()()())}function S(o,f){if(1&o&&(t.TgZ(0,"tr")(1,"td",26),t._uU(2),t.qZA(),t.TgZ(3,"td",26),t._uU(4),t.qZA(),t.TgZ(5,"td",27),t._uU(6),t.qZA(),t.TgZ(7,"td",27),t._uU(8),t.qZA(),t.TgZ(9,"td",28),t._uU(10),t.qZA(),t.TgZ(11,"td",28),t._uU(12),t.qZA(),t.TgZ(13,"td",28),t._uU(14),t.qZA()()),2&o){const i=f.$implicit;t.xp6(2),t.hij(" ",i.name," "),t.xp6(2),t.hij(" ",i.actualCorrelative," "),t.xp6(2),t.hij(" ",i.initialCorrelative," "),t.xp6(2),t.hij(" ",i.finalCorrelative," "),t.xp6(2),t.hij(" ",i.initialDate," "),t.xp6(2),t.hij(" ",i.finalDate," "),t.xp6(2),t.hij(" ",i.cai," ")}}function _(o,f){1&o&&(t.TgZ(0,"tr")(1,"td",29),t._uU(2,"No se encontraron correlativos."),t.qZA()())}function N(o,f){1&o&&(t.TgZ(0,"tr")(1,"td",29),t._uU(2,"Obteniendo los correlativos... Espere..."),t.qZA()())}function B(o,f){if(1&o){const i=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(i);const r=t.oxw();return t.KtG(r.showAddCorrelative=!1)}),t.qZA()}}const R=function(){return["name","categoryName","productPrice","status"]},L=function(){return{width:"1400px"}};let Q=(()=>{class o{constructor(i,n,r,c,y){this.router=i,this.customerService=n,this.productService=r,this.messageService=c,this.eventService=y,this.ProductToInvoiceSelected=new t.vpe,this.CorrelativeList=[],this.showAddCorrelative=!1,this.showProductAdded=!1,this.defaultProductQuantity=1,this.addProductDialog=!1,this.customers1=[],this.showProgressBar=!1,this.selectedCustomers1=[],this.selectedCustomer={},this.representatives=[],this.loading=!0,this.redirect=!1,this.AccessName="/pages/talonarios",this.value()}ngOnChanges(i){}ngOnInit(){const n=this.eventService.getPermisionsException().split(",").map(r=>r.trim());this.redirect=n.includes(this.AccessName),this.redirect&&this.router.navigateByUrl("/pages/unautorized"),this.customerService.getCustomersLarge().then(r=>{this.customers1=r,this.loading=!1,this.customers1.forEach(c=>c.date=new Date(c.date))})}onSort(){this.updateRowGroupMetaData()}updateRowGroupMetaData(){this.rowGroupMetadata={}}confirmQuantity(){this.addProductDialog=!1,(0==this.currentQuantity||null==this.currentQuantity||this.currentQuantity<this.defaultProductQuantity)&&(this.currentQuantity=1),null!=this.productSelected&&this.emitProductDTO()}selectProduct(i){this.showProductAdded=!1,this.addProductDialog=!0,this.productSelected=i}formatCurrency(i){return i.toLocaleString("en-US",{style:"currency",currency:"USD"})}onGlobalFilter(i,n){i.filterGlobal(n.target.value,"contains")}changeQuantity(i){this.currentQuantity=i}clear(i){i.clear(),this.filter.nativeElement.value=""}keyEnterPress(i){this.addProductDialog=!1,(0==this.currentQuantity||null==this.currentQuantity||this.currentQuantity<this.defaultProductQuantity)&&(this.currentQuantity=1),null!=this.productSelected&&this.emitProductDTO()}cancelAddQuantityDialog(){this.showProductAdded=!1,this.currentQuantity=void 0,this.addProductDialog=!1}emitProductDTO(){this.showProductAdded=!0;var i=new d.i;i.id=this.productSelected?.productId,i.name=this.productSelected?.productName,i.code=this.productSelected?.productName,i.quantity=this.currentQuantity,i.price=this.productSelected?.productPrice,i.total=i.price*this.currentQuantity,this.productSelected=void 0,this.currentQuantity=void 0,this.ProductToInvoiceSelected.emit(i)}value(){this.productService.getCorrelative(this.eventService.getToken()).subscribe(i=>{i.data?this.CorrelativeList=i.data:this.messageService.add({severity:"error",summary:"Error",detail:i.message,life:3e3}),this.showProgressBar=!1},i=>{this.showProgressBar=!1,this.messageService.add({severity:"error",summary:"Error",detail:i,life:3e3})})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(m.F0),t.Y36(u.v),t.Y36(T.M),t.Y36(h.ez),t.Y36(s.P))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],viewQuery:function(n,r){if(1&n&&t.Gf(D,5),2&n){let c;t.iGM(c=t.CRH())&&(r.filter=c.first)}},inputs:{productsToShow:"productsToShow"},outputs:{ProductToInvoiceSelected:"ProductToInvoiceSelected"},features:[t._Bn([h.ez,h.YP]),t.TTD],decls:17,vars:13,consts:[[4,"ngIf"],[1,"grid"],[1,"col-12"],[1,"card"],["pButton","","pRipple","","label","Nuevo","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["dataKey","pointOfSaleId","styleClass","p-datatable-gridlines","responsiveLayout","scroll",3,"value","rows","loading","rowHover","paginator","globalFilterFields"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],["header","",3,"visible","modal","visibleChange"],["pTemplate","footer"],["COLOR","green"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],["pButton","","label","Limpiar","icon","pi pi-filter-slash",1,"p-button-outlined","mb-2",3,"click"],[1,"p-input-icon-left","mb-2"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar...",1,"w-full",3,"input"],["filter",""],[1,"flex","justify-content-between","align-items-center"],["type","text","field","name","display","menu","placeholder","Buscar por codigo"],["type","text","field","cai","display","menu","placeholder","Buscar por nombre"],["type","text","field","cai","display","menu","placeholder","Buscar por precio"],["type","text","field","cai","display","menu","placeholder","Buscar por categoria"],[2,"min-width","12rem"],[2,"min-width","14rem"],[2,"min-width","10rem"],["colspan","7"],["pButton","","pRipple","","icon","pi pi-times","label","Cancelar",1,"p-button-text",3,"click"]],template:function(n,r){1&n&&(t.YNc(0,x,4,0,"div",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"p-toast"),t.TgZ(5,"button",4),t.NdJ("click",function(){return r.showAddCorrelative=!0}),t.qZA(),t.TgZ(6,"p-table",5,6),t.YNc(8,O,6,0,"ng-template",7),t.YNc(9,F,29,0,"ng-template",8),t.YNc(10,S,15,7,"ng-template",9),t.YNc(11,_,3,0,"ng-template",10),t.YNc(12,N,3,0,"ng-template",11),t.qZA()()(),t.TgZ(13,"p-dialog",12),t.NdJ("visibleChange",function(y){return r.showAddCorrelative=y}),t.TgZ(14,"div"),t._UZ(15,"app-sar-correlative"),t.qZA(),t.YNc(16,B,1,0,"ng-template",13),t.qZA()()),2&n&&(t.Q6J("ngIf",r.showProductAdded),t.xp6(6),t.Q6J("value",r.CorrelativeList)("rows",10)("loading",r.loading)("rowHover",!0)("paginator",!0)("globalFilterFields",t.DdM(11,R)),t.xp6(7),t.Akn(t.DdM(12,L)),t.Q6J("visible",r.showAddCorrelative)("modal",!0))},dependencies:[a.O5,l.y,g.iA,h.jx,g.xl,Z.Hq,A.o,U.H,M.FN,I.V],styles:["[_nghost-%COMP%]     .p-frozen-column{font-weight:700}[_nghost-%COMP%]     .p-datatable-frozen-tbody{font-weight:700}[_nghost-%COMP%]     .p-progressbar{height:.5rem}form[_ngcontent-%COMP%]{margin-left:25%;margin-right:25%;width:50%}"]})}return o})(),j=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({imports:[m.Bz.forChild([{path:"",component:Q,canActivate:[v.j]}]),m.Bz]})}return o})();var G=e(4891),Y=e(4144),E=e(5047),b=e(585),J=e(782),z=e(7932),w=e(5108),K=e(5552),P=e(4006),W=e(8235),H=e(2210),X=e(5722),V=e(1167),$=e(8177),k=e(6408),q=e(3162),tt=e(4385),et=e(9549),it=e(7392);let ot=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({imports:[a.ez,j,G.E,Y.c,g.U$,E.L$,it.Ps,et.lN,tt.LD,q.Cv,P.u5,a.ez,P.u5,k.Xt,Z.hJ,$.JH,A.j,V.KZ,U.T,X.q4,H.kW,W.q,M.EV,I.S,E.L$,P.UX,K.K8,w.x,z.L,J.N6,b._8]})}return o})()},2384:(C,p,e)=>{e.d(p,{b:()=>a});class a{}},7116:(C,p,e)=>{e.d(p,{R:()=>v});var a=e(4650),m=e(3162);let v=(()=>{class t{constructor(){}static#t=this.\u0275fac=function(u){return new(u||t)};static#e=this.\u0275cmp=a.Xpm({type:t,selectors:[["app-progress-bar"]],decls:1,vars:0,consts:[["mode","indeterminate"]],template:function(u,T){1&u&&a._UZ(0,"mat-progress-bar",0)},dependencies:[m.pW],encapsulation:2})}return t})()},7083:(C,p,e)=>{e.d(p,{K:()=>d});var a=e(529),m=e(2340),v=e(2384),t=e(4650);const h=m.N.baseUrl;let d=(()=>{class u{constructor(s){this.http=s}addUser(s){return this.http.post(`${h}auth/register`,s)}login(s,l){var g=new v.b;return g.email=s,g.password=l,this.http.post(`${h}auth/login`,g)}GetUserPermisions(){const Z={headers:new a.WM({"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcmxpbm5nNUBnbWFpbC5jb20iLCJuYW1lIjoiRGFybGluIiwiRW50ZXJwcmlzZSI6IjEiLCJXYXJlSG91c2UiOiIyIiwiUG9pbnRPZlNhbGUiOiIzIiwiQ29ycmVsYXRpdmUiOiI0IiwibmJmIjoxNjYzMjExNTA1LCJleHAiOjE2NjMyOTc5MDUsImlhdCI6MTY2MzIxMTUwNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MTM0In0.ZZQR0YuVwR5erkrQoErfRnlT9stXaVuDpt2SjFkl8PiAy0RP18-4nmyTRm8yYGqkPM-Eht-EbreVdHFYyRgSxQ"})};return this.http.get("http://localhost:5134/api/auth/test",Z)}static#t=this.\u0275fac=function(l){return new(l||u)(t.LFG(a.eN))};static#e=this.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},1546:(C,p,e)=>{e.d(p,{j:()=>h});var a=e(4650),m=e(5384),v=e(9197),t=e(7083);let h=(()=>{class d{constructor(T,s,l){this.eventService=T,this.router=s,this._userService=l,this.isTokenValid=!1}canActivate(T,s){const l=this.eventService.getToken();return(""==l||null==l||null==l)&&this.router.navigateByUrl("/auth/login"),!0}static#t=this.\u0275fac=function(s){return new(s||d)(a.LFG(m.P),a.LFG(v.F0),a.LFG(t.K))};static#e=this.\u0275prov=a.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()}}]);