# print(5)
# print(-10)
# print(3.14)
# print(1000)
# print(5+3)
# print(2*(3+1))

# print('풍선')
# print("나비")
# print("ㅋㅋㅋㅋㅋㅋㅋ")
# print("ㅋ"*9)

# print(5 > 10)
# print(5 < 10)
# print(True)
# print(False)
# print(not True)
# print(not False)
# print(not (5 > 10))

'''
# 애완동물을 소개해 주세요~
animal = "고양이"
name = "해피"
age = 4
hobby = "낮잠"
is_adult = age >= 3

print("우리집 " + animal + "의 이름은 " + name + "예요")
# print(name + "는 " + str(age) + "살이며, " + hobby + "을 아주 좋아해요")
print(name,"는", age, "살이며, ", hobby, "을 아주 좋아해요")
print(name + "는 어른일까요? " + str(is_adult))
'''

# print(1+1) # 2
# print(3-2) # 1
# print(5*2) # 10
# print(6/3) # 2.0

# print(2**3) # 8
# print(5%3) # 2
# print(10%3) # 1
# print(5//3) # 1
# print(10//3) # 3

# print(10 > 3) # True
# print(4 >= 7) # False

# print(3 == 3) # True
# print(4 == 3) # False
# print(3 + 4 == 7) # True

# print(1 != 3) # True
# print(not(1 != 3)) # False

# print((3 > 0) and (3 < 5)) # True
# print((3 > 0) & (3 < 5)) # True

# print((3 > 0) or (3 > 5)) # True
# print((3 > 0) | (3 > 5)) # True

# print(5 > 4 > 3) # True
# print(5 > 4 > 7) # False

# number = 2 + 3 * 4 # 14
# print(number)
# number += 4 # 18
# print(number)
# number *= 2 # 36
# print(number)
# number /= 2 # 18
# print(number)
# number -= 2 # 16
# print(number)
# number %= 2 # 0
# print(number)

# print(abs(-5)) # 5
# print(pow(4, 2)) # 4^2 = 16
# print(max(5, 12)) # 12
# print(min(5, 12)) # 5
# print(round(3.14)) # 3
# print(round(4.99)) # 5

# from math import *
# print(floor(4.99)) # 4
# print(ceil(3.14)) # 4
# print(sqrt(16)) # 4.0

# from random import *
# print(random()) # 0.0 ~ 1.0 미만 랜덤숫자
# print(random() * 10) # 0 ~ 10 미만
# print(int(random() * 10)) # 0 ~ 10 미만 정수

# print(int(random() * 10 + 1)) # 1 ~ 10 이하 정수
# print(int(random() * 45) + 1) # 1 ~ 45 이하 정수

# print(randrange(1, 46)) # 1 ~ 46 미만 정수

# print(randint(1, 45)) # 1 ~ 45 이하 정수


# sentence = '나는 소년입니다'
# print(sentence)
# sentence2 = "파이썬은 쉬워요"
# print(sentence2)
# sentence3 = """
# 나는 소년이고,
# 파이썬은 쉬워요
# """
# print(sentence3)


# jumin = "990120-1234567"

# print("성별 : " + jumin[7])
# print("연 : " + jumin[0:2])
# print("월 : " + jumin[2:4])
# print("일 : " + jumin[4:6])

# print("생년월일: " + jumin[:6])
# print("뒤 7자리: " + jumin[7:])
# print("뒤 7자리 (뒤에부터) : " + jumin[-7:])


# python = "Python is Amazing"
# print(python.lower())
# print(python.upper())
# print(python[0].isupper())
# print(len(python))
# print(python.replace("Python", "Java"))

# index = python.index("n")
# print(index)
# index = python.index("n", index + 1)
# print(index)

# print(python.find("n"))

# print(python.count("n"))


# print("a" + "b")
# print("a", "b")

# print("나는 %d살입니다." % 20)
# print("나는 %s을 좋아해요." % "파이썬")
# print("Apple 은 %c로 시작해요." % "A")


# print("나는 %s살입니다." % 20)
# print("나는 %s을 좋아해요." % "파이썬")
# print("Apple 은 %s로 시작해요." % "A")

# print("나는 %s색과 %s색을 좋아해요." % ("파란", "빨간"))

# print("나는 {}살입니다.".format(20))
# print("나는 {}색과 {}색을 좋아해요.".format("파란", "빨간"))
# print("나는 {1}색과 {0}색을 좋아해요.".format("파란", "빨간"))

# print("나는 {age}살이며, {color}색을 좋아해요.".format(age = 20, color = "빨간"))

# age = 20
# color = "빨간"
# print(f"나는 {age}살이며, {color}색을 좋아해요.")

# print("백문이 불여일견\n백견이 불여일타")

# print('저는 "킁빈"입니다.')
# print("저는 \"킁빈\"입니다.")

# print("Red Apple\rPine") # \r : 커서를 맨 앞으로 이동

# print("Redd\bApple") # \b : 백스페이스 (한 글자 삭제)

# print("Red\tApple")

# quiz = "http://naver.com"
# answer1 = quiz.replace("http://", "")
# print(answer1)
# # answer2 = answer1[:-4]
# answer2 = answer1[:answer1.index(".")]
# print(answer2)
# answer3 = answer2[:3] + str(len(answer2)) + str(answer2.count("e")) + "!"
# print(answer3)
# print("{0} 의 비밀번호는 {1} 입니다.".format(quiz, answer3))
# print(f"{quiz} 의 비밀번호는 {answer3} 입니다.")
# print("{a} 의 비밀번호는 {b} 입니다.".format(a = quiz, b = answer3))
