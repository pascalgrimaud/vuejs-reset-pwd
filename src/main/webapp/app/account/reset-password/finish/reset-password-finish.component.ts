import { email, maxLength, minLength, required } from 'vuelidate/lib/validators';
import axios from 'axios';
import { EMAIL_NOT_FOUND_TYPE } from '@/constants';
import { Inject, Vue, Component } from 'vue-property-decorator';
import LoginModalService from '@/account/login-modal.service';

const validations = {
  resetAccount: {
    email: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(254),
      email
    }
  }
};

interface ResetAccount {
  email: string;
}

@Component({
  validations
})
export default class ResetPasswordFinish extends Vue {
  @Inject('loginModalService')
  private loginModalService: () => LoginModalService;
  public confirmPassword: string;
  public doNotMatch: string;
  public error: string;
  public keyMissing: boolean;
  public resetAccount: any;
  public success: string;
  public key: string;

  finishReset() {
    this.doNotMatch = null;
    this.error = null;
    if (this.resetAccount.password !== this.confirmPassword) {
      this.doNotMatch = 'ERROR';
    } else {
      axios
        .post('api/account/reset-password/finish', { key: this.key, newPassword: this.resetAccount.password })
        .then(() => {
          this.success = 'OK';
        })
        .catch(() => {
          this.success = null;
          this.error = 'ERROR';
        });
    }
  }

  login() {
    this.loginModalService().openLogin((<any>this).$root);
  }
}
