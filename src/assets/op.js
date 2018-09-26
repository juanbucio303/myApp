var testvar = "Hola mundo en js y llamado desde ionic 3";
calcula(){
  let Bckm=0.000072963,xlkm=16.9469,Rcakm=4.5592;
  let vol=110,poteR=25,facP=20;
  let j=math.complex(0,1);
  let Ir=(poteR*(1e+6))/(math.sqrt(3)*(vol*(1e+3))*(facP));
  // console.log(Ir);
  let ang=math.acos(facP);
  // console.log(ang);
  // let a= Ir*math.cos(ang);
  // let b= math.multiply(math.multiply(Ir ,math.sin(ang)),j);
  let Irr=math.add(Ir*math.cos(ang),math.multiply(math.multiply(Ir ,math.sin(ang)),j));
  // console.log(Irr);
  let Vr=vol/math.sqrt(3);
  // console.log(Vr);
  let Yc=math.multiply(Bckm,j);
  // console.log(Yc);
  let Xl=math.multiply(xlkm,j);
  // console.log(Xl);
  let Z=math.add(Rcakm,Xl);
  // console.log(Z);
  let Zc=math.sqrt(math.divide(Z,Yc));
  // console.log(Zc);
  let Yx=math.sqrt(math.multiply(Z,Yc));
  // console.log(Yx);
  let A=math.cosh(Yx);
  // console.log(A);
  let B=math.multiply(Zc,(math.sinh(Yx)));
  // console.log(B);
  let C=math.multiply(math.divide(1,Zc),math.sinh(Yx));
  // console.log(C);
  let D=A;
  // console.log(D);
  let Vs=math.add(math.multiply(A,math.multiply(Vr,(1e+3))),math.multiply(B,Irr));
  // console.log(Vs);
  let Is=math.add(math.multiply(C,math.multiply(Vr,(1e+3))),math.multiply(D,Irr));
  // console.log(Is);
  let Isa=math.abs(Is);
  // console.log(Isa);
  let Pe=math.multiply(3,math.multiply(math.pow(Isa,2),Rcakm));
  // console.log(Pe);
  let Rv=math.multiply(math.divide(math.subtract(math.abs(Vs),math.multiply(Vr,1e3)),math.multiply(Vr,1e3)),100);
  // console.log(Rv);

  let a2=math.add(math.multiply(poteR,1e+6),Pe);
  console.log(a2);

  let n=math.multiply(math.divide(math.multiply(poteR,1e+6),a2),100);
  console.log(n);

  let angIr=math.multiply(ang,math.divide(180,math.pi));
  console.log(angIr);
  // let angVs=math.multiply(math.angle(Vs),math.divide(180,pi));
  // console.log(angVs);
  // let angIs=math.multiply(math.angle(Is),math.divide(180,pi));
  // console.log(angIs);

  // magnitud
  let IR=math.abs(Ir);
  console.log(IR);
  let VS=math.abs(Vs);
  console.log(VS);
  let IS=math.abs(Is);
  console.log(IS);

}
