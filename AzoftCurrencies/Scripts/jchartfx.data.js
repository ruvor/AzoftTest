(function(){var b=window.cfx,a=window.sfx,u={Version:"7.4.5649.31763"};b.data=u;u.CrosstabAggregate={Sum:0,First:1,Last:2,Avg:3,Min:4,Max:5};var t=function G(){G._ic()};t.prototype={_0dN:function(a,b){this._bc._0bm.call(this,a,b);return this},ibg:function(){return 1},I:function(a){return a.e}};t._dt("CWDC",b.bm,0,b.ibf);var y=function H(){H._ic()};y.prototype={_0dO:function(a,b){this._bc._0bm.call(this,a,b);return this},ibg:function(){return 1},I:function(a){return a.f}};y._dt("CWDC",b.bm,0,b.ibf);
var z=function I(){I._ic()};z.prototype={_0dP:function(a){this.a=a;return this},SH:function(b,A){return a.b.c(b.c,A.c,!1,this.a)}};z._dt("CWDC",a.SA,0,a.SG);var B=function A(){A._ic();this.b=null};B.prototype={_0dQ:function(a,e,d,c){this.a=Array(e);this.f=a;this.d=d;this.e=c;this.c=a;2!=this.d&&(this.b=Array(e));for(a=0;a<e;a++)this.a[a]=1E108,null!=this.b&&(this.b[a]=0);return this},h:function(a){return a<this.a.length?this.a[a]:1E108},g:function(b,e){if(b>=this.a.length){for(var d=Array(b+1),c=
0;c<this.a.length;c++)d[c]=this.a[c];for(c=this.a.length;c<=b;c++)d[c]=1E108;this.a=d;if(null!=this.b){d=Array(b+1);for(c=0;c<this.b.length;c++)d[c]=this.b[c];for(c=this.b.length;c<=b;c++)d[c]=0;this.b=d}}c=0;null!=this.b&&(c=this.b[b],this.b[b]=c+1);switch(this.d){case 1:if(0!=c)return;break;case 0:0!=c&&(e+=this.a[b]);break;case 3:0!=c&&(e=(e+this.a[b]*c)/(c+1));break;case 4:0!=c&&(e=a.a.p(this.a[b],e));break;case 5:0!=c&&(e=a.a.o(this.a[b],e))}this.a[b]=e}};B._dt("CWDC",a.SA,0);var C=function e(){e._ic();
this.c=this.d=this.h=this.a=this.b=this.e=null};C.prototype={_0dR:function(e,d,c,b){this.g=e;this.l=d;this.j=c;this.k=b;d=e.indexOf(";");if(null!=e&&a.b.i(e,",")){if(this.c=e.split(","),e=this.c.length,this.a=Array(e),this.e=new a.aQ,-1!=d)for(this.d=Array(e),c=0;c<e;c++)b=this.c[c],d=b.indexOf(";"),-1!=d&&(this.d[c]=b.substr(d+1),this.c[c]=b.substr(0,d))}else-1!=d&&(this.h=e.substr(d+1),this.g=e.substr(0,d));return this},bB:function(){return null!=this.b?this.b.G():this.j},m:function(){return null!=
this.a||null!=this.h?(new y)._0dO(this.j,a.V.A(a.b)):(new t)._0dN(this.b.G(),this.b.H())},i:function(b){var d=null;if(null!=this.a){this.e.sb(0);for(var c=0;c<this.a.length;c++)d=this.a[c].I(b),null!=this.d&&null!=this.d[c]&&(d=a.V.C(d,a.Sy),d=d.Sz(this.d[c],this.k)),0!=c&&this.e.e(this.l),this.e.e(d.toString());d=this.e.toString()}else d=this.b.I(b),null!=this.h&&(d=a.V.C(d,a.Sy),d=d.Sz(this.h,this.k));return d},f:function(a,d,c,b){if(null==this.a){if(null==this.b&&(d==this.g||null==this.g&&18==
c&&!b))return this.b=a,!0}else{for(c=0;c<this.c.length;c++)this.c[c]==d&&(this.a[c]=a,b=!0);return b}return!1}};C._dt("CWDC",a.SA,0);var D=function d(){d._ic()};D.prototype={_0dS:function(a,c,b){this._bc._0bm.call(this,a,c);this.f=b;this.e=a;return this},ibg:function(){return 2},I:function(a){return a.h(this.f)}};D._dt("CWDC",b.bm,0,b.ibf);var E=function c(){c._ic()};E.prototype={_0dT:function(a){this.a=a;return this},SH:function(c,b){return a.b.c(c.e,b.e,!1,this.a)}};E._dt("CWDC",a.SA,0,a.SG);var q=
function J(){J._ic();this.e=this.a=null;this.c=!1;this.b=null};q.prototype={_0dU:function(){this.d=" - ";return this},getHeading:function(){return this.a},setHeading:function(a){this.a=a},getName:function(){return this.e},setName:function(a){this.e=a},getSeparator:function(){return this.d},setSeparator:function(a){this.d=a},getSort:function(){return this.c},setSort:function(a){this.c=a},getSortID:function(){return this.b},setSortID:function(a){this.b=a},f:function(a,b){null==a&&(a=this.a);return(new C)._0dR(a,
this.d,this.e,b)}};q._dt("CWDC",a.SA,0);var F=function K(){K._ic();this.p=0;this.k=this.h=this.i=this.c=null;this.o=0;this.n=null;this.m=0;this.e=null;this._0_1()};u.CrosstabDataProvider=F;F.prototype={_0_1:function(){this.d=a.aG.b();this.g=-1;this.f=(new a._L)._0_L();this.a=(new q)._0dU();this.b=(new q)._0dU();this.a.e="Row";this.j=3;return this},getAggregate:function(){return this.j},setAggregate:function(a){this.j=a},getColumns:function(){return this.b},ibt:function(){return this.f.Se()},ibu:function(){return this.f.So(this.g)},
ibA:function(){return this.p},sibA:function(a){this.p=a},ibB:function(){return this.c},getDataSource:function(){this.q(this.i,null);return this.i},setDataSource:function(a){this.i=a;this.q(this.i,null)},ibC:function(){return!0},ibv:function(){return 13},ibD:function(){return this.o},sibD:function(a){this.o=a},ibw:function(){return this.g},sibw:function(a){this.g=a},getRows:function(){return this.a},ibE:function(){return this.m},sibE:function(a){this.m=a},getValueName:function(){return this.e},setValueName:function(a){this.e=
a},q:function(a,f){null!=a&&null==this.c&&(this.c=b.DataSourceSettings.k(a,f))},ibF:function(a){return null},ibx:function(){this.l();return this.n},r:function(b,f){switch(b){case 3:return f?1:0;case 6:return f;case 4:return f;case 16:return f._nc().m();case 15:return a.K.r(f);case 14:return f;case 7:return f;case 9:return f;case 11:return f;case 5:return f;case 13:return f;case 18:return a.D.j(f,this.d);case 8:return f;case 10:return f;case 12:return f;default:return 0}},iby:function(){this.l();this.g++;
return this.g<this.f.Se()},ibG:function(){return null},l:function(){if(null!=this.c&&null==this.h&&(this.h=(new a._D)._0_D(),this.k=(new a._D)._0_D(),this.c.iby())){var b=null,f=this.a.f(null,this.d),g=this.b.f(null,this.d),l=null,v=null;null!=this.a.b&&(l=this.a.f(this.a.b,this.d));null!=this.b.b&&(v=this.b.f(this.b.b,this.d));var m=this.c.ibx(),q=(new a.X)._0X(),u=14,x=null;this.a.c&&(x=(new a.X)._0X());for(m=m.Sb();1==m.SK();){var h=m.SM(),r=h.G(),n=h.H(),n=a.V.g(n),k=!1;g.f(h,r,n,k)&&(k=!0);f.f(h,
r,n,k)&&(k=!0);null!=l&&l.f(h,r,n,k);null!=v&&v.f(h,r,n,k);k||null!=b||r!=this.e&&(null!=this.e||14!=n)||(b=h,u=n)}for(var p=h=m=null,p=null,n=r=0;;){var k=this.c.ibu(),p=g.i(k),w=new a._p1(m),t=this.h.tryGetValue(w,p),m=w.a;t||(m=(new D)._0dS(p.toString(),a.V.A(a.D),r),null!=v&&(m.e=v.i(k).toString()),this.h.w(p,m),q.Si(m),r++,n++);p=f.i(k);w.a=h;t=this.k.tryGetValue(w,p);h=w.a;t||(h=(new B)._0dQ(p.toString(),n,this.j,p),null!=l&&(h.c=l.i(k).toString()),this.k.w(p,h),this.a.c?x.Si(h):this.f.Si(h));
k=b.I(k);h.g(m.f,this.r(u,k));if(!this.c.iby())break}this.b.c&&q.e((new E)._0dT(this.d));if(this.a.c)for(x.e((new z)._0dP(this.d)),b=x.Sb();1==b.SK();)g=b.SM(),this.f.Si(g);b=q.Se();g=Array(b+1);g[0]=f.m();for(f=0;f<b;f++)g[f+1]=q.So(f);this.n=(new a.af)._0af(g)}},ibH:function(a){},ibI:function(a){if(null!=a){var b="",g="";for(a=a.Sb();1==a.SK();){var l=a.SM();null==this.a.a&&7==l.a?(0!=b.length&&(b+=","),b+=l.b):null==this.b.a&&6==l.a?(0!=g.length&&(g+=","),g+=l.b):null==this.e&&2==l.a&&(this.e=
l.b)}null==this.a.a&&0!=b.length&&(this.a.a=b);null==this.b.a&&0!=g.length&&(this.b.a=g)}return null}};F._dt("CWDC",a.SA,0,b.ibz,b.ibs)})();
