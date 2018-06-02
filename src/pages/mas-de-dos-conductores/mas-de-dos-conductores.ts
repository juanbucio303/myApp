import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { ResmasdosconPage } from '../resmasdoscon/resmasdoscon';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';

/**
 * Generated class for the MasDeDosConductoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mas-de-dos-conductores',
  templateUrl: 'mas-de-dos-conductores.html',
})
export class MasDeDosConductoresPage {
  usuarios:any=[];
  resistVal:any=[];
  cad:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
  public viewCtrl: ViewController, public proveedor: ProveedorProvider) {
  }
  getDatos(){
    this.proveedor.getDatos()
    .then(data => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MasDeDosConductoresPage');
    this.getDatos();
  }
  getParams(datRes:any,nocond:any,tem:any,long:any,distancia2:any,altura:any,distancia1:any,diametro1:any,diametro2:any){
    this.cad=datRes+","+nocond+","+tem+","+long+","+distancia2+","+altura+","+distancia1+","+diametro1+","+diametro2;
    this.resistVal=this.cad.split(",");
  }
  modal() {
    let modal = this.modalCtrl.create(ResmasdosconPage,{resistVal:this.resistVal});
    modal.present();
  }
}
