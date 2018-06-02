import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';

/**
 * Generated class for the UnConductorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-un-conductor',
  templateUrl: 'un-conductor.html',
})
export class UnConductorPage {
  usuarios:any=[];
  resistVal:any=[];
  cad:string="";

  getDatos(){
    this.proveedor.getDatos()
    .then(data => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
  public viewCtrl: ViewController, public proveedor: ProveedorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnConductorPage');
    this.getDatos();
  }
  setArr(mm:any,tem:any,long:any,altura:any,d1:any,d2:any){
    this.cad=mm+","+tem+","+long+","+altura+","+d1+","+d2;
    this.resistVal=this.cad.split(",");
  }
  modal() {
    let modal = this.modalCtrl.create(ResultadosPage,{resistVal:this.resistVal});
    modal.present();
  }


}
