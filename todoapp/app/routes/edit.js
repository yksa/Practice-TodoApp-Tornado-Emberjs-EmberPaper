import Route from '@ember/routing/route';

export default class EditRoute extends Route {
    model(params){
        console.log(params);
        return this.store.findRecord('list', params.list_id);
    }
}
