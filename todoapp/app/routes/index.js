import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    model(){
        const list = this.store.findAll('list');
        return {list};
    }
}
