import { $, ElementFinder } from 'protractor';

import BasePage from './base-component';
import SignInPage from './signin-page';
import RegisterPage from './register-page';
import PasswordPage from './password-page';
import SettingsPage from './settings-page';

const selector: ElementFinder = $('#app-header');
export default class NavBarPage extends BasePage {
  selector: ElementFinder;
  signInPage: SignInPage;
  adminMenu: ElementFinder = this.selector.$('#admin-menu');
  accountMenu: ElementFinder = this.selector.$('#account-menu');
  entityMenu: ElementFinder = this.selector.$('#entity-menu');

  constructor() {
    super(selector);
    this.selector = selector;
    this.signInPage = new SignInPage();
  }

  async getPasswordPage() {
    await this.clickOnAccountMenuItem('password');
    return new PasswordPage();
  }

  async getSettingsPage() {
    await this.clickOnAccountMenuItem('settings');
    return new SettingsPage();
  }

  async getRegisterPage() {
    await this.clickOnAccountMenu();
    await this.clickOnTabMenu('#register');
    return new RegisterPage();
  }

  async getSignInPage() {
    await this.clickOnAccountMenu();
    await this.clickOnTabMenu('#login');
    return this.signInPage;
  }

  async getEntityPage(entityName: string) {
    await this.clickOnEntityMenu();
    await this.clickOnEntity(entityName);
  }

  async clickOnTabMenu(item: string) {
    await this.selector
      .$('#header-tabs')
      .$(`.dropdown-menu ${item}`)
      .click();
  }

  async clickOnAccountMenu() {
    await this.accountMenu.click();
  }

  async clickOnAccountMenuItem(item: string) {
    await this.accountMenu.click();
    await this.selector.$(`.dropdown-item[href="/./#/account/${item}"`).click();
  }

  async clickOnAdminMenuItem(item: string) {
    await this.adminMenu.click();
    await this.selector.$(`.dropdown-item[href="/./#/admin/${item}"]`).click();
  }

  async clickOnEntityMenu() {
    await this.entityMenu.click();
  }

  async clickOnEntity(entityName: string) {
    await this.selector.$(`.dropdown-item[href="/./#/entity/${entityName}"]`).click();
  }

  async autoSignIn() {
    await this.signInPage.get();
    await this.signInPage.autoSignInUsing('admin', 'admin');
  }

  async autoSignOut() {
    await this.clickOnAccountMenu();
    await this.clickOnTabMenu('#logout');
    //await this.signInPage.autoSignOut();
  }
}
