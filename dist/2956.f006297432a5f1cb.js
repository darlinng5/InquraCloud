"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[2956],{2956:(C,u,o)=>{o.r(u),o.d(u,{DashboardModule:()=>H});var s=o(6895),x=o(4006),b=o(9364),h=o(1327),p=o(99),d=o(5593),v=o(5132),Z=o(7919),l=o(9197),c=o(1546),g=o(805),e=o(4650),w=o(7747),E=o(8568),q=o(5384);const y=typeof performance<"u"&&typeof performance.now<"u"&&"function"==typeof performance.mark&&"function"==typeof performance.measure&&("function"==typeof performance.clearMarks||"function"==typeof performance.clearMeasures),F=typeof PerformanceObserver<"u"&&typeof PerformanceObserver.prototype<"u"&&"function"==typeof PerformanceObserver.prototype.constructor,A="[object process]"===Object.prototype.toString.call(typeof process<"u"?process:0);let T={},_={};const M=()=>y?performance.now():Date.now(),k=t=>{T[t]=void 0,_[t]&&(_[t]=void 0),y&&(A||performance.clearMeasures(t),performance.clearMarks(t))},O=t=>{if(y){if(A&&F){const i=new PerformanceObserver(n=>{_[t]=n.getEntries().find(r=>r.name===t),i.disconnect()});i.observe({entryTypes:["measure"]})}performance.mark(t)}T[t]=M()},S=(t,i)=>{try{const n=T[t];return y?(i||performance.mark(`${t}-end`),performance.measure(t,t,i||`${t}-end`),A?_[t]?_[t]:n?{duration:M()-n,startTime:n,entryType:"measure",name:t}:{}:performance.getEntriesByName(t).pop()||{}):n?{duration:M()-n,startTime:n,entryType:"measure",name:t}:{}}catch{return{}}finally{k(t),k(i||`${t}-end`)}},J=function(t,i,n,r){return{circle:t,progress:i,"progress-dark":n,pulse:r}};function j(t,i){if(1&t&&e._UZ(0,"span",1),2&t){const n=e.oxw();e.Q6J("ngClass",e.l5B(4,J,"circle"===n.appearance,"progress"===n.animation,"progress-dark"===n.animation,"pulse"===n.animation))("ngStyle",n.theme),e.uIk("aria-label",n.ariaLabel)("aria-valuetext",n.loadingText)}}const D=new e.OlP("ngx-skeleton-loader.config");let R=(()=>{class t{constructor(n){const{appearance:r="line",animation:a="progress",theme:f=null,loadingText:L="Loading...",count:U=1,ariaLabel:P="loading"}=n||{};this.appearance=r,this.animation=a,this.theme=f,this.loadingText=L,this.count=U,this.items=[],this.ariaLabel=P}ngOnInit(){O("NgxSkeletonLoader:Rendered"),O("NgxSkeletonLoader:Loaded"),this.validateInputValues()}validateInputValues(){/^\d+$/.test(`${this.count}`)||((0,e.X6Q)()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'count' a numeric value. Forcing default to \"1\"."),this.count=1),this.items.length=this.count;const n=["progress","progress-dark","pulse","false"];-1===n.indexOf(String(this.animation))&&((0,e.X6Q)()&&console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${n.join(", ")}. Forcing default to "progress".`),this.animation="progress"),-1===["circle","line",""].indexOf(String(this.appearance))&&((0,e.X6Q)()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'appearance' as: circle or line or empty string. Forcing default to \"''\"."),this.appearance="")}ngOnChanges(n){["count","animation","appearance"].find(r=>n[r]&&(n[r].isFirstChange()||n[r].previousValue===n[r].currentValue))||this.validateInputValues()}ngAfterViewInit(){S("NgxSkeletonLoader:Rendered")}ngOnDestroy(){S("NgxSkeletonLoader:Loaded")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(D,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ngx-skeleton-loader"]],inputs:{count:"count",loadingText:"loadingText",appearance:"appearance",animation:"animation",ariaLabel:"ariaLabel",theme:"theme"},features:[e.TTD],decls:1,vars:1,consts:[["class","skeleton-loader","aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","0",3,"ngClass","ngStyle",4,"ngFor","ngForOf"],["aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","0",1,"skeleton-loader",3,"ngClass","ngStyle"]],template:function(n,r){1&n&&e.YNc(0,j,1,9,"span",0),2&n&&e.Q6J("ngForOf",r.items)},dependencies:[s.sg,s.mk,s.PC],styles:['.skeleton-loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:#eff1f6 no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translate(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{-webkit-animation:_ngcontent-%COMP%_progress 2s ease-in-out infinite;animation:_ngcontent-%COMP%_progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation:_ngcontent-%COMP%_pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;-webkit-animation-delay:.5s;animation-delay:.5s}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]{-webkit-animation:none;animation:none}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{background-image:none}}@-webkit-keyframes _ngcontent-%COMP%_progress{0%{transform:translate(-200px)}to{transform:translate(calc(200px + 100vw))}}@keyframes _ngcontent-%COMP%_progress{0%{transform:translate(-200px)}to{transform:translate(calc(200px + 100vw))}}@-webkit-keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'],changeDetection:0}),t})(),z=(()=>{class t{static forRoot(n){return{ngModule:t,providers:[{provide:D,useValue:n}]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez]]}),t})();var I=o(2453);function B(t,i){1&t&&e._UZ(0,"ngx-skeleton-loader",54)}function Q(t,i){1&t&&e._UZ(0,"ngx-skeleton-loader",54)}function N(t,i){1&t&&e._UZ(0,"ngx-skeleton-loader",54)}function V(t,i){1&t&&e._UZ(0,"ngx-skeleton-loader",54)}function Y(t,i){1&t&&(e.TgZ(0,"tr")(1,"th",55),e._uU(2,"Name "),e._UZ(3,"p-sortIcon",56),e.qZA(),e.TgZ(4,"th",57),e._uU(5,"Price "),e._UZ(6,"p-sortIcon",58),e.qZA(),e.TgZ(7,"th"),e._uU(8,"View"),e.qZA()())}function G(t,i){if(1&t&&(e.TgZ(0,"tr")(1,"td",59),e._uU(2),e.qZA(),e.TgZ(3,"td",60),e._uU(4),e.ALo(5,"currency"),e.qZA(),e.TgZ(6,"td",61),e._UZ(7,"button",62),e.qZA()()),2&t){const n=i.$implicit;e.xp6(2),e.Oqu(n.productName),e.xp6(2),e.Oqu(e.xi3(5,2,n.price,"L"))}}const m=function(){return{width:"2.5rem",height:"2.5rem"}},X=function(){return{borderRadius:"1rem",background:"linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)"}};let $=(()=>{class t{constructor(n,r,a,f){this.productService=n,this.layoutService=r,this.eventService=a,this.messageService=f,this.recentProducts=[],this.loading=!0,this.showProgressBar=!1,this.subscription=this.layoutService.configUpdate$.subscribe(()=>{this.initChart()}),this.GetDashboardInformation()}ngOnInit(){this.initChart(),this.productService.getProductsSmall().then(n=>this.products=n),this.items=[{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]}initChart(){const n=getComputedStyle(document.documentElement),r=n.getPropertyValue("--text-color"),a=n.getPropertyValue("--text-color-secondary"),f=n.getPropertyValue("--surface-border");this.chartData={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"],datasets:[{label:"Tienda 1",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:n.getPropertyValue("--bluegray-700"),borderColor:n.getPropertyValue("--bluegray-700"),tension:.4},{label:"Tienda 2",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:n.getPropertyValue("--green-600"),borderColor:n.getPropertyValue("--green-600"),tension:.4}]},this.chartOptions={plugins:{legend:{labels:{color:r}}},scales:{x:{ticks:{color:a},grid:{color:f,drawBorder:!1}},y:{ticks:{color:a},grid:{color:f,drawBorder:!1}}}}}GetDashboardInformation(){this.loading=!0,this.showProgressBar=!0,this.productService.GetDashboard(this.eventService.getToken()).subscribe(n=>{n.data?(this.ivoicesCount=n.data.invoicesCount,this.estimatedProfit=n.data.estimatedProfit,this.totalPay=n.data.totalPay,this.totalTax=n.data.totalTax,this.recentProducts=n.data.recentProducts):this.messageService.add({severity:"info",summary:"info",detail:n.message,life:3e3}),this.showProgressBar=!1,this.loading=!1})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(w.M),e.Y36(E.P),e.Y36(q.P),e.Y36(g.ez))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],features:[e._Bn([g.ez])],decls:162,vars:42,consts:[[1,"grid"],[1,"col-12","lg:col-6","xl:col-3"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-home","text-blue-500","text-xl"],["routerLink","/pages/empresa"],[1,"text-green-500","font-medium"],[1,"text-500"],[1,"flex","align-items-center","justify-content-center","bg-orange-100","border-round",3,"ngStyle"],[1,"pi","pi-briefcase","text-orange-500","text-xl"],["routerLink","/pages/talonarios"],[1,"flex","align-items-center","justify-content-center","bg-cyan-100","border-round",3,"ngStyle"],[1,"pi","pi-arrow-circle-right","text-cyan-500","text-xl"],["routerLink","/auth/login"],[1,"flex","align-items-center","justify-content-center","bg-purple-100","border-round",3,"ngStyle"],[1,"pi","pi-comment","text-purple-500","text-xl"],[1,"text-900","font-medium","text-xl"],["animation","pulse","count","3","appearance","circle",4,"ngIf"],[1,"pi","pi-shopping-cart","text-blue-500","text-xl"],[1,"pi","pi-map-marker","text-orange-500","text-xl"],[1,"pi","pi-inbox","text-cyan-500","text-xl"],[1,"col-12","xl:col-6"],[1,"card"],["responsiveLayout","scroll",3,"value","paginator","rows"],["pTemplate","header"],["pTemplate","body"],[1,"flex","justify-content-between","align-items-center","mb-5"],[1,"px-4","py-5","shadow-2","flex","flex-column","md:flex-row","md:align-items-center","justify-content-between","mb-3",3,"ngStyle"],[1,"text-blue-100","font-medium","text-xl","mt-2","mb-3"],[1,"text-white","font-medium","text-5xl"],[1,"mt-4","mr-auto","md:mt-0","md:mr-0"],["target","_blank","href","https://wa.me/50489183351",1,"p-button","font-bold","px-5","py-3","p-button-warning","p-button-rounded","p-button-raised"],["type","line",3,"data","options"],[1,"flex","align-items-center","justify-content-between","mb-4"],["pButton","","type","button","icon","pi pi-ellipsis-v",1,"p-button-rounded","p-button-text","p-button-plain",3,"click"],[3,"popup","model"],["menu",""],[1,"block","text-600","font-medium","mb-3"],[1,"p-0","mx-0","mt-0","mb-4","list-none"],[1,"flex","align-items-center","py-2"],[1,"w-3rem","h-3rem","flex","align-items-center","justify-content-center","bg-orange-100","border-circle","mr-3","flex-shrink-0"],[1,"pi","pi-clone","text-xl","text-orange-500"],[1,"text-700","line-height-3"],[1,"pi","pi-check-square","text-xl","text-orange-500"],[1,"p-0","m-0","list-none"],[1,"flex","align-items-center","py-2","border-bottom-1","surface-border"],[1,"w-3rem","h-3rem","flex","align-items-center","justify-content-center","bg-blue-100","border-circle","mr-3","flex-shrink-0"],[1,"pi","pi-eye","text-xl","text-blue-500"],[1,"text-900","line-height-3"],[1,"text-700"],[1,"w-3rem","h-3rem","flex","align-items-center","justify-content-center","bg-pink-100","border-circle","mr-3","flex-shrink-0"],[1,"pi","pi-question","text-xl","text-pink-500"],["animation","pulse","count","3","appearance","circle"],["pSortableColumn","name"],["field","name"],["pSortableColumn","price"],["field","price"],[2,"width","35%","min-width","7rem"],[2,"width","35%","min-width","8rem"],[2,"width","15%"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button","p-component","p-button-text","p-button-icon-only"]],template:function(r,a){if(1&r){const f=e.EpF();e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div")(6,"span",4),e._uU(7,"Empresa"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"i",6),e.qZA()(),e.TgZ(10,"a",7)(11,"span",8),e._uU(12,"Click aqui para ir"),e.qZA()(),e._UZ(13,"span",9),e.qZA()(),e.TgZ(14,"div",1)(15,"div",2)(16,"div",3)(17,"div")(18,"span",4),e._uU(19,"Talonario"),e.qZA()(),e.TgZ(20,"div",10),e._UZ(21,"i",11),e.qZA()(),e.TgZ(22,"a",12)(23,"span",8),e._uU(24,"Click para ir "),e.qZA()()()(),e.TgZ(25,"div",1)(26,"div",2)(27,"div",3)(28,"div")(29,"span",4),e._uU(30,"Datos de prueba"),e.qZA()(),e.TgZ(31,"div",13),e._UZ(32,"i",14),e.qZA()(),e.TgZ(33,"a",15)(34,"span",8),e._uU(35,"Click para ir "),e.qZA()()()(),e.TgZ(36,"div",1)(37,"div",2)(38,"div",3)(39,"div")(40,"span",4),e._uU(41,"Ayuda?"),e.qZA()(),e.TgZ(42,"div",16),e._UZ(43,"i",17),e.qZA()(),e.TgZ(44,"span",8),e._uU(45,"8750-4549"),e.qZA()()(),e.TgZ(46,"div",1)(47,"div",2)(48,"div",3)(49,"div")(50,"span",4),e._uU(51,"Facturas"),e.qZA(),e.TgZ(52,"div",18),e.YNc(53,B,1,0,"ngx-skeleton-loader",19),e._uU(54),e.qZA()(),e.TgZ(55,"div",5),e._UZ(56,"i",20),e.qZA()(),e.TgZ(57,"span",8),e._uU(58,"Este Mes "),e.qZA(),e._UZ(59,"span",9),e.qZA()(),e.TgZ(60,"div",1)(61,"div",2)(62,"div",3)(63,"div")(64,"span",4),e._uU(65,"Ingresos"),e.qZA(),e.TgZ(66,"div",18),e.YNc(67,Q,1,0,"ngx-skeleton-loader",19),e._uU(68),e.ALo(69,"currency"),e.qZA()(),e.TgZ(70,"div",10),e._UZ(71,"i",21),e.qZA()(),e.TgZ(72,"span",8),e._uU(73,"Este Mes "),e.qZA()()(),e.TgZ(74,"div",1)(75,"div",2)(76,"div",3)(77,"div")(78,"span",4),e._uU(79,"Impuestos"),e.qZA(),e.TgZ(80,"div",18),e.YNc(81,N,1,0,"ngx-skeleton-loader",19),e._uU(82),e.ALo(83,"currency"),e.qZA()(),e.TgZ(84,"div",13),e._UZ(85,"i",22),e.qZA()(),e._UZ(86,"span",8),e.TgZ(87,"span",9),e._uU(88,"Este Mes"),e.qZA()()(),e.TgZ(89,"div",1)(90,"div",2)(91,"div",3)(92,"div")(93,"span",4),e._uU(94,"Ganancias"),e.qZA(),e.TgZ(95,"div",18),e.YNc(96,V,1,0,"ngx-skeleton-loader",19),e._uU(97),e.ALo(98,"currency"),e.qZA()(),e.TgZ(99,"div",16),e._UZ(100,"i",17),e.qZA()(),e.TgZ(101,"span",8),e._uU(102,"Este Mes "),e.qZA()()(),e.TgZ(103,"div",23)(104,"div",24)(105,"h5"),e._uU(106,"Productos vendidos recientemente"),e.qZA(),e.TgZ(107,"p-table",25),e.YNc(108,Y,9,0,"ng-template",26),e.YNc(109,G,8,5,"ng-template",27),e.qZA()(),e.TgZ(110,"div",24)(111,"div",28),e._UZ(112,"div"),e.qZA(),e.TgZ(113,"div",29)(114,"div")(115,"div",30),e._uU(116,"Ocupas asesoria con el SAR"),e.qZA(),e.TgZ(117,"div",31),e._uU(118,"Contacta"),e.qZA()(),e.TgZ(119,"div",32)(120,"a",33),e._uU(121," Iniciar "),e.qZA()()()()(),e.TgZ(122,"div",23)(123,"div",24)(124,"h5"),e._uU(125,"Ventas por sucursales*"),e.qZA(),e._UZ(126,"p-chart",34),e.qZA(),e.TgZ(127,"div",24)(128,"div",35)(129,"h5"),e._uU(130,"Nuevas funciones muy pronto"),e.qZA(),e.TgZ(131,"div")(132,"button",36),e.NdJ("click",function(U){e.CHM(f);const P=e.MAs(134);return e.KtG(P.toggle(U))}),e.qZA(),e._UZ(133,"p-menu",37,38),e.qZA()(),e.TgZ(135,"span",39),e._uU(136,"Esta Semana"),e.qZA(),e.TgZ(137,"ul",40)(138,"li",41)(139,"div",42),e._UZ(140,"i",43),e.qZA(),e.TgZ(141,"span",44),e._uU(142,"Seleccionar Localizaci\xf3n cuando se crea un producto"),e.qZA()(),e.TgZ(143,"li",41)(144,"div",42),e._UZ(145,"i",45),e.qZA(),e.TgZ(146,"span",44),e._uU(147,"Crear y mantener localizaciones "),e.qZA()()(),e.TgZ(148,"span",39),e._uU(149,"Semana Prox\xedma"),e.qZA(),e.TgZ(150,"ul",46)(151,"li",47)(152,"div",48),e._UZ(153,"i",49),e.qZA(),e.TgZ(154,"span",50)(155,"span",51),e._uU(156," Crear entradas de inventario"),e.qZA()()(),e.TgZ(157,"li",47)(158,"div",52),e._UZ(159,"i",53),e.qZA(),e.TgZ(160,"span",50),e._uU(161,"Crear salidas de inventario"),e.qZA()()()()()()}2&r&&(e.xp6(8),e.Q6J("ngStyle",e.DdM(33,m)),e.xp6(12),e.Q6J("ngStyle",e.DdM(34,m)),e.xp6(11),e.Q6J("ngStyle",e.DdM(35,m)),e.xp6(11),e.Q6J("ngStyle",e.DdM(36,m)),e.xp6(11),e.Q6J("ngIf",a.loading),e.xp6(1),e.hij(" ",a.ivoicesCount," "),e.xp6(1),e.Q6J("ngStyle",e.DdM(37,m)),e.xp6(12),e.Q6J("ngIf",a.loading),e.xp6(1),e.hij(" ",e.xi3(69,24,a.totalPay,"L")," "),e.xp6(2),e.Q6J("ngStyle",e.DdM(38,m)),e.xp6(11),e.Q6J("ngIf",a.loading),e.xp6(1),e.hij(" ",e.xi3(83,27,a.totalTax,"L")," "),e.xp6(2),e.Q6J("ngStyle",e.DdM(39,m)),e.xp6(12),e.Q6J("ngIf",a.loading),e.xp6(1),e.hij(" ",e.xi3(98,30,a.estimatedProfit,"L")," "),e.xp6(2),e.Q6J("ngStyle",e.DdM(40,m)),e.xp6(8),e.Q6J("value",a.recentProducts)("paginator",!0)("rows",5),e.xp6(6),e.Q6J("ngStyle",e.DdM(41,X)),e.xp6(13),e.Q6J("data",a.chartData)("options",a.chartOptions),e.xp6(7),e.Q6J("popup",!0)("model",a.items))},dependencies:[s.O5,s.PC,b.C,h.v2,l.rH,p.iA,g.jx,p.lQ,p.fz,d.Hq,R,I.FN,s.H9],encapsulation:2})}return t})(),K=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[l.Bz.forChild([{path:"",component:$,canActivate:[c.j]}]),l.Bz]})}return t})(),H=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[s.ez,x.u5,b.S,h.$9,p.U$,v.l,Z.ml,d.hJ,K,z,I.EV]})}return t})()},2384:(C,u,o)=>{o.d(u,{b:()=>s});class s{}},7083:(C,u,o)=>{o.d(u,{K:()=>d});var s=o(529),x=o(2340),b=o(2384),h=o(4650);const p=x.N.baseUrl;let d=(()=>{class v{constructor(l){this.http=l}addUser(l){return this.http.post(`${p}auth/register`,l)}login(l,c){var g=new b.b;return g.email=l,g.password=c,this.http.post(`${p}auth/login`,g)}GetUserPermisions(){const e={headers:new s.WM({"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcmxpbm5nNUBnbWFpbC5jb20iLCJuYW1lIjoiRGFybGluIiwiRW50ZXJwcmlzZSI6IjEiLCJXYXJlSG91c2UiOiIyIiwiUG9pbnRPZlNhbGUiOiIzIiwiQ29ycmVsYXRpdmUiOiI0IiwibmJmIjoxNjYzMjExNTA1LCJleHAiOjE2NjMyOTc5MDUsImlhdCI6MTY2MzIxMTUwNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MTM0In0.ZZQR0YuVwR5erkrQoErfRnlT9stXaVuDpt2SjFkl8PiAy0RP18-4nmyTRm8yYGqkPM-Eht-EbreVdHFYyRgSxQ"})};return this.http.get("http://localhost:5134/api/auth/test",e)}static#e=this.\u0275fac=function(c){return new(c||v)(h.LFG(s.eN))};static#t=this.\u0275prov=h.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},1546:(C,u,o)=>{o.d(u,{j:()=>p});var s=o(4650),x=o(5384),b=o(9197),h=o(7083);let p=(()=>{class d{constructor(Z,l,c){this.eventService=Z,this.router=l,this._userService=c,this.isTokenValid=!1}canActivate(Z,l){const c=this.eventService.getToken();return(""==c||null==c||null==c)&&this.router.navigateByUrl("/auth/login"),!0}static#e=this.\u0275fac=function(l){return new(l||d)(s.LFG(x.P),s.LFG(b.F0),s.LFG(h.K))};static#t=this.\u0275prov=s.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()}}]);