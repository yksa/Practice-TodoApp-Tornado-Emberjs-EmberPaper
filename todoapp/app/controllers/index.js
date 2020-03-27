import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @action
    add(){
        let data = { item: this.get('item'), status: 0};
        let newitem = this.store.createRecord('list', data);
        newitem.save();
        this.set('item','');
    }
    @action
    done(params){
        console.log("done");
        let data = this.store.peekRecord('list', params.id);
        data.status = 1;
        data.save();
    }
    @action
    edit(params){
        this.transitionToRoute('edit', params);
    }
    @action
    delete(params){
        console.log("delete");
        let deleteitem = this.store.peekRecord('list', params.id);
        deleteitem.deleteRecord();
        deleteitem.save();
    }
}
