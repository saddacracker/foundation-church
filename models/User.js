var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var User = new keystone.List('User',{
    sortable: true
});

User.add({
    name: { type: Types.Name, required: true, index: true },
    email: { type: Types.Email, initial: true, required: true, index: true },
    password: { type: Types.Password, initial: true, required: true },
    title: { type: String },
    image: { type: Types.CloudinaryImage }
}, 'Permissions', {
    isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
    isPastor: { type: Boolean, label: 'A Pastor', index: true }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
    return this.isAdmin;
});


/**
 * Relationships
 */

User.relationship({ ref: 'Post', path: 'author' });


/**
 * Registration
 */

User.defaultColumns = 'name, email, isAdmin';
User.register();
