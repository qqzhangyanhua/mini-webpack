
# num = 10
# while num > 0:
#     print(num)
#     num -= 1
# else:
#     print("while循环结束")

# 只要是空的就是false，只要不是空的就是true
# print(bool(0))  # False
# print(bool(1))  # True
# print(bool(-1))  # True
# print(bool(0.0))  # False
# print(bool(0.1))  # True
# print(bool(""))  # False
# print(bool(" "))  # True
# print(bool([]))  # False
# print(bool([1]))  # True
# print(bool(()))  # False
# print(bool((1,)))  # True
# print(bool({}))  # False
# data =[]
# if bool(data):
#     print("不是空的")
# else:
#     print("是空的")

s1 = "hello"
s2 = '1111'
s3 = '''1111'''
s4 = '   \t\t\t\t\t\n 我的内容   \r\r\t\t\t\n'
s5 = "hello\r \n world"
# print(s1[0:2])
# print(s1[-1])
# print(s4.strip())
s6 = s5.replace("\r", "").replace("\n", "").replace(" ", "")
print(s6)