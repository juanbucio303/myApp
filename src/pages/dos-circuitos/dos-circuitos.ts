import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { ResdoscircPage } from '../resdoscirc/resdoscirc';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';

/**
 * Generated class for the DosCircuitosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dos-circuitos',
  templateUrl: 'dos-circuitos.html',
})
export class DosCircuitosPage {
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
    console.log('ionViewDidLoad DosCircuitosPage');
    this.getDatos();
  }
  getParams(datos:any,tem:any,long:any,distancia:any,altura:any,d1:any,d2:any,d3:any){
    this.cad=datos+","+tem+","+long+","+distancia+","+altura+","+d1+","+d2+","+d3;
    this.resistVal=this.cad.split(",");
  }
  modal() {
    let modal = this.modalCtrl.create(ResdoscircPage,{resistVal:this.resistVal});
    modal.present();
  }

}
