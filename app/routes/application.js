import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  activate() {
    var cssClass = this.toCssClass();
    // you probably don't need the application class
    // to be added to the body
    if (cssClass != 'application') {
      document.getElementsByTagName("body")[0].classList.add(cssClass);
    }
  }

  deactivate() {
    var cssClass = this.toCssClass();
    document.getElementsByTagName("body")[0].classList.remove(cssClass);
  }

  toCssClass(){
    return this.routeName.replace(/\./g, '-').dasherize();
  }
}
