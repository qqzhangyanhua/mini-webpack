#!/usr/bin/python3
 
print("Hello, World!")

class Student:
    def __init__(self,name,age) -> None:
        self.name=name
        self.age =age
    def study(self,course_name):
        print('学习==', self.name,course_name)
    def watch(self):
        if self.age>18:
            print('熊猫馆',self.name)
        else:
            print('上p站',self.name)
def main():
    std1=Student('小明',22)
    std1.study('python')
    std1.watch()
if __name__ == '__main__':
    main()