(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{eIOW:function(o,r,i){"use strict";i.d(r,"a",function(){return m});var t=i("3Pt+"),e=i("fXoL"),s=i("tyNb"),n=i("eNqO"),b=i("ofXK");function l(o,r){1&o&&(e.Mb(0,"span"),e.hc(1," \xa1ERROR!, Este campo es requerido. "),e.Lb())}function a(o,r){1&o&&(e.Mb(0,"span"),e.hc(1," \xa1ERROR!, Este campo es requerido. "),e.Lb())}function c(o,r){1&o&&(e.Mb(0,"span"),e.hc(1," \xa1ERROR!, Este campo es requerido. "),e.Lb())}function u(o,r){1&o&&(e.Mb(0,"span"),e.hc(1," \xa1ERROR!, Este campo es requerido. "),e.Lb())}function d(o,r){1&o&&(e.Mb(0,"span"),e.hc(1," \xa1ERROR!, Este campo es requerido. "),e.Lb())}function p(o,r){1&o&&(e.Mb(0,"span"),e.hc(1," \xa1ERROR!, Este campo es requerido. "),e.Lb())}let m=(()=>{class o{constructor(o,r,i){var t,e;this.router=o,this.fb=r,this.librosSvc=i,this.isEmail=/\S+@\S+\.\S+/;const s=this.router.getCurrentNavigation();this.libros=null===(e=null===(t=null==s?void 0:s.extras)||void 0===t?void 0:t.state)||void 0===e?void 0:e.value,this.initForm()}ngOnInit(){void 0===this.libros?this.router.navigate(["new"]):this.librosForm.patchValue(this.libros)}onSave(){var o;if(console.log("Saved",this.librosForm.value),this.librosForm.valid){const r=(null===(o=this.libros)||void 0===o?void 0:o.id)||null;this.librosSvc.onGuardar(this.librosForm.value,r),this.librosForm.reset()}}regresarLista(){this.router.navigate(["list"])}regresarInicio(){this.router.navigate(["home"])}isValidField(o){const r=this.librosForm.get(o);return!r.valid&&r.touched?"is-invalid":r.touched?"is-valid":""}initForm(){this.librosForm=this.fb.group({titulo:["",[t.l.required]],autor:["",[t.l.required]],editorial:["",[t.l.required]],pag:["",[t.l.required]],sinopsis:["",[t.l.required]],startDate:["",[t.l.required]]})}}return o.\u0275fac=function(r){return new(r||o)(e.Jb(s.a),e.Jb(t.b),e.Jb(n.a))},o.\u0275cmp=e.Db({type:o,selectors:[["app-libros-form"]],decls:66,vars:19,consts:[[1,"card-navbar","mb-0"],[1,"col-md-10","mx-auto","mt-8"],[1,"card-body"],[1,"text-center"],[1,"mt-1","col-md-8","offset-md-2",3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-6"],["type","text","placeholder","Titulo","formControlName","titulo",1,"form-control"],[1,"invalid-feedback"],[4,"ngIf"],["type","text","placeholder","Autor","formControlName","autor",1,"form-control"],["type","text","placeholder","Editorial","formControlName","editorial",1,"form-control"],["type","text","placeholder","Numero de Paginas","formControlName","pag",1,"form-control"],["type","text","id","sinopsis","rows","3","placeholder","Genero","formControlName","sinopsis",1,"form-control"],["value",""],["for","sinopsis"],["type","text","placeholder","Fecha Inicio: 01/02/2021","formControlName","startDate",1,"form-control"],["type","submit",1,"btn","bg-dark","text-center","m-1"],["type","button",1,"btn","bg-dark","text-light","m-1",3,"click"]],template:function(o,r){1&o&&(e.Mb(0,"div",0),e.Mb(1,"div",1),e.Mb(2,"div",2),e.Kb(3,"br"),e.Mb(4,"h1",3),e.hc(5,"Ingresa tu libro"),e.Lb(),e.Mb(6,"form",4),e.Tb("ngSubmit",function(){return r.onSave()}),e.Mb(7,"div",5),e.Mb(8,"div",6),e.Kb(9,"input",7),e.Mb(10,"div",8),e.fc(11,l,2,0,"span",9),e.Lb(),e.Lb(),e.Mb(12,"div",6),e.Kb(13,"input",10),e.Mb(14,"div",8),e.fc(15,a,2,0,"span",9),e.Lb(),e.Lb(),e.Lb(),e.Mb(16,"div",5),e.Mb(17,"div",6),e.Kb(18,"input",11),e.Mb(19,"div",8),e.fc(20,c,2,0,"span",9),e.Lb(),e.Lb(),e.Mb(21,"div",6),e.Kb(22,"input",12),e.Mb(23,"div",8),e.fc(24,u,2,0,"span",9),e.Lb(),e.Lb(),e.Lb(),e.Mb(25,"div",5),e.Mb(26,"div",6),e.Mb(27,"select",13),e.Mb(28,"option",14),e.hc(29," --Genero-- "),e.Lb(),e.Mb(30,"option"),e.hc(31,"Rom\xe1ntica"),e.Lb(),e.Mb(32,"option"),e.hc(33,"Obra literaria / Novela"),e.Lb(),e.Mb(34,"option"),e.hc(35,"Terror / misterio"),e.Lb(),e.Mb(36,"option"),e.hc(37,"Poes\xeda"),e.Lb(),e.Mb(38,"option"),e.hc(39,"Cuento"),e.Lb(),e.Mb(40,"option"),e.hc(41,"Ciencia Ficci\xf3n"),e.Lb(),e.Mb(42,"option"),e.hc(43,"Aventuras"),e.Lb(),e.Mb(44,"option"),e.hc(45,"Polic\xedacas / Politica "),e.Lb(),e.Mb(46,"option"),e.hc(47,"Humor"),e.Lb(),e.Mb(48,"option"),e.hc(49,"Teatro"),e.Lb(),e.Mb(50,"option"),e.hc(51,"Informativo"),e.Lb(),e.Lb(),e.Mb(52,"div",8),e.fc(53,d,2,0,"span",9),e.Mb(54,"label",15),e.hc(55,"Genero"),e.Lb(),e.Lb(),e.Lb(),e.Mb(56,"div",6),e.Kb(57,"input",16),e.Mb(58,"div",8),e.fc(59,p,2,0,"span",9),e.Lb(),e.Lb(),e.Lb(),e.Mb(60,"button",17),e.hc(61,"Guardar"),e.Lb(),e.Mb(62,"button",18),e.Tb("click",function(){return r.regresarLista()}),e.hc(63,"Regresar"),e.Lb(),e.Mb(64,"button",18),e.Tb("click",function(){return r.regresarInicio()}),e.hc(65,"Inicio"),e.Lb(),e.Lb(),e.Lb(),e.Lb(),e.Lb()),2&o&&(e.yb(6),e.Yb("formGroup",r.librosForm),e.yb(3),e.Ab(r.isValidField("titulo")),e.yb(2),e.Yb("ngIf",null==r.librosForm.get("titulo").errors?null:r.librosForm.get("titulo").errors.required),e.yb(2),e.Ab(r.isValidField("autor")),e.yb(2),e.Yb("ngIf",null==r.librosForm.get("autor").errors?null:r.librosForm.get("autor").errors.required),e.yb(3),e.Ab(r.isValidField("editorial")),e.yb(2),e.Yb("ngIf",null==r.librosForm.get("editorial").errors?null:r.librosForm.get("editorial").errors.required),e.yb(2),e.Ab(r.isValidField("pag")),e.yb(2),e.Yb("ngIf",null==r.librosForm.get("pag").errors?null:r.librosForm.get("pag").errors.required),e.yb(3),e.Ab(r.isValidField("sinopsis")),e.yb(26),e.Yb("ngIf",null==r.librosForm.get("sinopsis").errors?null:r.librosForm.get("sinopsis").errors.required),e.yb(4),e.Ab(r.isValidField("startDate")),e.yb(2),e.Yb("ngIf",null==r.librosForm.get("startDate").errors?null:r.librosForm.get("startDate").errors.required))},directives:[t.n,t.h,t.f,t.a,t.g,t.d,b.j,t.k,t.i,t.m],styles:[""]}),o})()},eNqO:function(o,r,i){"use strict";i.d(r,"a",function(){return b});var t=i("mrSG"),e=i("lJxs"),s=i("fXoL"),n=i("I/3d");let b=(()=>{class o{constructor(o){this.afs=o,this.librosCollection=o.collection("libros"),this.getLibros()}onEliminar(o){return new Promise((r,i)=>Object(t.a)(this,void 0,void 0,function*(){try{const i=yield this.librosCollection.doc(o).delete();r(i)}catch(t){i(t.message)}}))}onGuardar(o,r){return new Promise((i,e)=>Object(t.a)(this,void 0,void 0,function*(){try{const t=r||this.afs.createId(),e=Object.assign({id:t},o),s=yield this.librosCollection.doc(t).set(e);i(s)}catch(t){e(t.message)}}))}getLibros(){this.libros=this.librosCollection.snapshotChanges().pipe(Object(e.a)(o=>o.map(o=>o.payload.doc.data())))}}return o.\u0275fac=function(r){return new(r||o)(s.Qb(n.a))},o.\u0275prov=s.Fb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);