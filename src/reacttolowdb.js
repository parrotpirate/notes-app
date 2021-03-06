import { Component } from 'react';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

const adapter = new LocalStorage('db');
const db = low(adapter);

class LowdbComponent extends Component {

    // variables available to deriving class
    db = db;
    dbName = null;

    constructor(props) {
      super(props);

      // initialize lowdb with default props
      var defaultDBFields = props.defaultDBFields ? props.defaultDBFields : [];
      var dbName = props.dbName ? props.dbName : this.constructor.name + "-react-lowdb";

      this.dbName = dbName;

      var json = { };
      json[dbName] = defaultDBFields;

      db.defaults(json).write();
    }

    componentDidUpdate() {
      this.saveStateToDB();
    }

    saveStateToDB() {
      db.set(this.dbName, this.state).write();
    }

    resetStateToDefault() {
      db.unset(this.dbName).write();
      return true;
    }

    async componentDidMount() {
      var dbJson = db.getState();
      await this.setState({
        ...dbJson[this.dbName]
      })
    }

    render() {
      return null;
    }
}



export default LowdbComponent;