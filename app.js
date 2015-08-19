var Sequelize = require('sequelize');

var sequelize = new Sequelize('TWDemo', 'root', 'vermouth');

var Student = sequelize.define('Student', {
  name: Sequelize.STRING,
  sex: {
    type: Sequelize.ENUM('male', 'female')
  }
});

var Class = sequelize.define('Class', {
  className: Sequelize.STRING
});

var Course = sequelize.define('Course', {
  CourseName: Sequelize.STRING
});

var Record = sequelize.define('Record', {
  recordId: Sequelize.INTEGER
});


Class.hasMany(Student, {
  foreignkey: 'student_pk'
});

Record.hasOne(Student, {
  foreignKey: 'student_record_pk'
});

Student.belongsToMany(Course, {
  through: 'student_has_course',
  foreignkey: 'student_course_id'
});

Course.belongsToMany(Student, {
  through: 'student_has_course',
  foreignkey: 'course_student_id'
});

sequelize.sync().then(function() {
  Class.bulkCreate([
    {className: 'class one'},
    {className: 'class two'},
    {className: 'class three'}
  ]).then(function() {
    Class.destroy({
      where: {
        className: 'class one'
      }
    });
  });
})

sequelize.sync().then(function() {
  Student.bulkCreate([
    {name: 'John', sex: 'male'},
    {name: 'halp', sex: 'male'},
    {name: 'Json', sex: 'male'}
  ]).then(function() {
    Student.update({
      name: 'Lida',
      sex: 'female'
    }, {
      where: {
        id: 1
      }
    });
  });
})

Student.findOne({where:{sex:'male'}}).then(function(student) {
  console.log(student);
});
