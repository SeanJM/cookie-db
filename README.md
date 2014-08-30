# Cookie Database
## Version 1.0

### Getting Started
#### Setting your project name

    var db = {
      config: {
        name: 'name'
      }
    };

#### Setting a value
##### Basic
    db.set('key','value');

##### Unlimited layers
    db.set('key','key',{object});

    db.set('key','key','key',[array]);

#### Getting a value
  db.get('key');

  db.get('key','key','key')