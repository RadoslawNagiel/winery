import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: `root`,
})
export class ToastService {
  constructor(private readonly toastController: ToastController) {}

  async presentToastSuccess(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      animated: true,
      color: `success`,
      mode: `ios`,
    });
    toast.present();
  }

  async presentToastError(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      animated: true,
      color: `danger`,
      mode: `ios`,
    });
    toast.present();
  }

  async presentToastWithOptions(text: string) {
    const toast = await this.toastController.create({
      message: text,
      position: `top`,
      buttons: [
        {
          text: `Anuluj`,
          role: `Cancel`,
        },
        {
          text: `Dalej`,
          role: `Continue`,
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    if (role === `Continue`) {
      return true;
    }
    return false;
  }
}
