import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import { MenuPage } from '../menu/menu';
import { RegistroPage } from '../registro/registro';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public proveedor : ProveedorProvider,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
   resp:any;
  verificar(user:any,pass:any){
    let datos=[user,pass];
    this.proveedor.getAutentificar(datos)
    .then(data => {
      this.resp = data;
      console.log(this.resp[0]['id_role']);
      if(this.resp[0]['id_role']==2){
        // this.navCtrl.push(MenuPage);
        this.navCtrl.setRoot(MenuPage,{tipo:this.resp[0]['id_role']});
      }else if(this.resp[0]['id_role']==1){
        console.log("menuAdmon");
      }else{
        // alert(this.resp);
        this.presentAlert();
      }
    });
  }
  // prueba(){
  //   let dta={id:'1',estado:'2'};
  //   this.proveedor.updateUser(dta);
  // }
  registro(){
    this.navCtrl.push(RegistroPage);
  }
  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error Inicio de session',
    subTitle: this.resp,
    buttons: ['Aceptar']
  });
  alert.present();
}
}
