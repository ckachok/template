import BaseComponent from 'common-components/base-component';
import Logo from 'common-components/logo-app/logo-app';
import 'common-components/header/header.scss';

class Header extends BaseComponent {
  private headerContainer: BaseComponent<HTMLElement>

  constructor(parentNode: HTMLElement, tagName: string, className: string) {
    super(parentNode, tagName, className);
    this.createHeader();
  }

  private createUser(userName = ''): void {
    const user = new BaseComponent(this.headerContainer.node, 'div', 'user');
    const userWelcome = new BaseComponent(user.node, 'span', 'user__welcome', `Привет, ${userName} ;)`);
    const userLogInButton = new BaseComponent(user.node, 'button', 'user__log-in-button');
    const userLogOutButton = new BaseComponent(user.node, 'button', 'user__log-out-button', 'Выйти');
  }

  private createBurgerMenu(): void {
    const burgerMenu = new BaseComponent(this.headerContainer.node, 'button', 'burger-menu active');
    const burgerMenuLine = new BaseComponent(burgerMenu.node, 'span', 'burger-menu__line');
  }

  private createHeader(): void {
    this.headerContainer = new BaseComponent(this.node, 'div', 'container header__container');
    const logo = new Logo(this.headerContainer.node, 'a', 'logo-app');
    this.createUser();
    this.createBurgerMenu();
  }
}

export default Header;
