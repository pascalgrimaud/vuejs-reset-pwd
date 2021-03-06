import axios from 'axios';
import { maxLength, minLength, required } from 'vuelidate/lib/validators';
import { Inject, Vue, Component } from 'vue-property-decorator';
import LoginModalService from '@/account/login-modal.service';

const validations = {
  resetAccount: {
    newPassword: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(254)
    },
    confirmPassword: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(254)
    }
  }
};

@Component({
  validations
})
export default class ResetPasswordFinish extends Vue {
  @Inject('loginModalService')
  private loginModalService: () => LoginModalService;

  public doNotMatch = null;
  public success = null;
  public error = null;
  public keyMissing = null;
  public key: any;
  public resetAccount: any = {
    newPassword: null,
    confirmPassword: null
  };

  created(): void {
    if (this.$route !== undefined && this.$route.query !== undefined && this.$route.query.key !== undefined) {
      this.key = this.$route.query.key;
    }
  }

  public finishReset(): void {
    this.doNotMatch = null;
    this.success = null;
    this.error = null;
    this.keyMissing = null;
    if (this.resetAccount.newPassword !== this.resetAccount.confirmPassword) {
      this.doNotMatch = 'ERROR';
    } else {
      axios
        .post('api/account/reset-password/finish', { key: this.key, newPassword: this.resetAccount.newPassword })
        .then(() => {
          this.success = 'OK';
        })
        .catch(() => {
          this.success = null;
          this.error = 'ERROR';
        });
    }
  }

  public openLogin() {
    this.loginModalService().openLogin((<any>this).$root);
  }
}
