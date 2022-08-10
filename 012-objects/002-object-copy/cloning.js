"use-strict";

//Cloning an object
let user = {
    name: "John",
    age: 30
};
//Create another object
let clone = {};

//Copy user properties
for (let key in user) {
    clone[key] = user[key];
}

//Merging objects properties
user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

//Copy all the properties of permission1 and permission2 in user
Object.assign(user, permissions1, permissions2);
/*
Object.assign(dest, [src1, ..., srcN]);
dest is the target object.
src1, ..., srcN are the source objects
It copies all the properties of src1, ..., srcN into dest.
returns dest

If the property already exists, it will be replaced.
*/
user = { name: "John" };
Object.assign(user, { name: "Pete" });
//user.name now equals to "Pete"

//Cloning an object using Object.assign
user = {
    name: "John",
    age: 30
};

clone = Object.assign({}, user);

//Nested cloning

//What if a property is an object ?
user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
};

clone = Object.assign({}, user);
user.sizes === clone.sizes; // true, it is the same object.

clone = _.cloneDeep(user);
user.sizes === user.sizes; //false