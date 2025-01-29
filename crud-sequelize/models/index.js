import {User} from './User.js';
import {Note} from './Note.js';

User.hasMany(Note, {
    foreignKey: 'myUserId',
});

Note.belongsTo(User, {
    foreignKey: 'myUserId',
});

await User.sync();
await Note.sync();
