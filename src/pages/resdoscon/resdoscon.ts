import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DosConductoresPage } from '../dos-conductores/dos-conductores'

/**
 * Generated class for the ResdosconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resdoscon',
  templateUrl: 'resdoscon.html',
})
export class ResdosconPage {
  Rcakm:number;
  DMG:number;
  RMG:number;
  Lkm:number;
  xlkm:number;
  ckm:number;
  Bckm:number;
  resistVal:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.resistVal=navParams.get('resistVal');
    this.dosConductores();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResdosconPage');
  }
  cerrarModal(){
   this.viewCtrl.dismiss();
  }
  dosConductores(){
    let d,Rcd=0,temperatura=0,longitud=0,diametro1=0,diametro2=0,altura=0,distancia=0;
    let dab=0,dbc=0,dca=0,r=0,Rcd1=0,Rcdkm=0,ys=0,Rcakm=0,Rca=0,dmg=0,DMG=0,RMG=0,rr=0,rca=0;
    let L=0,Lkm=0,xl=0,xlkm=0,c=0,ckm=0,Bc=0,Bckm=0,n=0;

    d=parseFloat(this.resistVal[0]);
    Rcd=parseFloat(this.resistVal[1]);
    temperatura=parseFloat(this.resistVal[2]);
    longitud=parseFloat(this.resistVal[3]);
    distancia=parseFloat(this.resistVal[4]);
    diametro1=parseFloat(this.resistVal[5]);
    diametro2=parseFloat(this.resistVal[6]);
    altura=parseFloat(this.resistVal[7]);

    dab=Math.sqrt((Math.pow(diametro1, 2))+(Math.pow(altura, 2)));//sqrt((d1^2)+(altura^2));
    dbc=Math.sqrt((Math.pow(diametro2, 2))+(Math.pow(altura, 2)));//sqrt((d2^2)+(altura^2));
    dca=diametro1+diametro2;

    r=(d/2)/1000;
    Rcd1=Rcd*(1+(0.0037*(temperatura-20)));
    Rcdkm=Rcd1*longitud;
    ys=(7.5*((Math.pow(60, 2))*(Math.pow((d/10), 4)*(1e-7))));//(7.5*((60^2)*(d/10)^4*(1e-7)));
    //System.out.println(ys+"\n6.8431e-05");
    rca=Rcdkm*(1+ys);
    Rcakm=(rca*rca)/(rca+rca);
    Rca=Rcakm/longitud;


    dmg=((dab)*(dbc)*(dca));
    //System.out.println(dmg);
    n=1.0/3.0;
    //System.out.println(n);
    DMG=Math.pow(dmg,n);//nthroot(dmg,3);
    //System.out.println(DMG);
    rr=r*(Math.pow(Math.exp(1), -1.0/4.0));
    //System.out.println(rr+"\n\n");
    RMG=Math.sqrt(rr*distancia);//r*((exp(1))^(-1/4));
    //System.out.println(RMG);

    L=4.606*(Math.pow(10, -7))*(Math.log10(DMG/RMG));//(4.606*10^(-7))*(log10((DMG/RMG)));
    //System.out.println(L);
    Lkm=L*1000*longitud;
    xl=0.1736*Math.log10(DMG/RMG);//0.1736*log10((DMG/RMG));
    xlkm=xl*longitud;
    c=2*(Math.PI)*(8.854*(Math.pow(10, -12))/Math.log(DMG/RMG));//(2*(pi)*(8.854*10^(-12)))/(log(DMG/RMG));
    //System.out.println(c);
    ckm=(c*1000*longitud);
    Bc=(9.085* Math.pow(10, -6))/(Math.log10(DMG/RMG));//(9.085*10^(-6))/(log10(DMG/RMG));
    Bckm=Bc*longitud;

    this.Rcakm = Rcakm;
    this.DMG = DMG;
    this.RMG = RMG;
    this.Lkm = Lkm;
    this.xlkm = xlkm;
    this.ckm = ckm;
    this.Bckm = Bckm;
  }
}
