var student=require('./student');//加载学生模块
var teacher=require('./teacher');//加载教师模块

function add(teacherName,students){
    teacher.add(teacherName);
    students.forEach(function(item,index){
        student.add(item)
    });
}
exports.add=add;