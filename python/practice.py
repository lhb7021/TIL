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


# people1 = 10
# people2 = 20
# people3 = 30
# subway1 = [40, 50, 60]
# print(subway1)
# subway2 = [people1, people2, people3]
# print(subway2)
# print(subway2.index(people3))

# subway2.append(40)
# print(subway2)

# subway2.insert(1, 50)
# print(subway2)

# print(subway2.pop())
# print(subway2)

# print(subway2.count(10))

# num_list = [5,2,4,3,1]
# num_list.sort()
# print(num_list)

# num_list.reverse()
# print(num_list)

# num_list.clear()
# print(num_list)

# num_list = [5,2,4,3,1]
# mix_list = ["조세호", 20, True]
# print(mix_list)

# num_list.extend(mix_list)
# print(num_list)


# cabinet = {3:"유재석", 100:"김태호"}
# print(cabinet[3])
# print(cabinet[100])

# print(cabinet.get(3))
# print(cabinet.get(5, "사용 가능"))

# print(3 in cabinet)
# print(5 in cabinet)

# cabinet = {"A-3":"유재석", "B-100":"김태호"}
# print(cabinet["A-3"])
# print(cabinet["B-100"])

# print(cabinet)
# cabinet["A-3"] = "김종국"
# cabinet["C-20"] = "조세호"
# print(cabinet)

# del cabinet["A-3"]
# print(cabinet)

# print(cabinet.keys())
# print(cabinet.values())
# print(cabinet.items())

# cabinet.clear()
# print(cabinet)

# menu = ("돈까스", "치즈까스")
# print(menu[0])
# print(menu[1])

# menu.add("생선까스") # err

# name = "김종국"
# age = 20
# hobby = "코딩"
# print(name, age, hobby)

# (name, age, hobby) = ("김종국", 20, "코딩")
# print(name, age, hobby)
# name = "유재석"
# print(name)


# my_set = {1,2,3,3,3}
# print(my_set)

# java = {"유재석", "김태호", "양세형"}
# python = set(["유재석", "박명수"])

# print(java & python)
# print(java.intersection(python))

# print(java | python)
# print(java.union(python))

# print(java - python)
# print(java.difference(python))

# python.add("김태호")
# print(python)

# java.remove("김태호")
# print(java)


# menu = {"커피", "우유", "주스"}
# print(menu, type(menu))

# menu = list(menu)
# print(menu, type(menu))

# menu = tuple(menu)
# print(menu, type(menu))

# menu = set(menu)
# print(menu, type(menu))


# from random import *
# lst = [1,2,3,4,5]
# print(lst)
# shuffle(lst)
# print(lst)
# print(sample(lst, 1))

# lst = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
# x = sample(lst,  4)
# y = sample(x, 1)
# x.remove(y[0])
# print(x)
# print(y)


# users = range(1, 21)
# print(type(users))
# users = list(users)
# print(type(users))
# print(users)

# shuffle(users)
# print(users)

# winners = sample(users, 4)

# print(" -- 당첨자 발표 -- ")
# print("치킨 당첨자 : {0}".format(winners[0]))
# print("커피 당첨자 : {0}".format(winners[1:]))
# print(" -- 축하합니다 -- ")


# weather = input("오늘 날씨는 어때요? ")
# if weather == "비" or weather == "눈":
#   print("우산을 챙기세요")
# elif weather == "미세먼지":
#   print("마스크를 챙기세요.")
# else:
#   print("날씨 맑음.")

# temp = int(input("기온은 어때요? "))
# if 30 <= temp:
#   print("너무 더워요. 나가지 마세요.")
# elif 10 <= temp and temp < 30:
#   print("괜찮은 날씨에요.")
# elif 0 <= temp < 10:
#   print("외투를 챙기세요.")
# else:
#   print("너무 추워요. 나가지 마세요.")


# print("대기번호 : 1")
# print("대기번호 : 2")
# print("대기번호 : 3")
# print("대기번호 : 4")

# for waiting_no in range(1, 6):
#   print("대기번호 : {0}".format(waiting_no))

# starbucks = ["아이언맨", "토르", "아이엠 그루트"]
# for customer in starbucks:
#   print("{0}, 커피가 준비되었습니다.".format(customer))


# customer = "토르"
# index = 5
# while index >= 1:
#   print("{0}, 커피가 준비 되었습니다. {1} 번 남았어요.".format(customer, index))
#   index -= 1
#   if index == 0:
#     print("커피는 폐기처분되었습니다.")

# customer = "아이언맨"
# index = 1
# while True:
#   print("{0}, 커피가 준비 되었습니다. 호출 {1} 회".format(customer, index))
#   index += 1

# customer = "토르"
# person = "Unknown"
# while person != customer:
#   print("{0}, 커피가 준비 되었습니다.".format(customer))
#   person = input("이름이 어떻게 되세요? ")

# absent = [2, 5] # 결석
# no_book = [7] # 책 미지참
# for student in range(1, 11):
#   if student in absent:
#     continue
#   if student in no_book:
#     print("오늘 수업 여기까지. {0}는 교무실로 따라와.".format(student))
#     break
#   print("{0}, 책을 읽어봐".format(student))


# students = [1,2,3,4,5]
# print(students)
# students = [i+100 for i in students]
# print(students)

# students = ["Iron man", "Thor", "I am groot"]
# students = [len(i) for i in students]
# print(students)

# students = ["Iron man", "Thor", "I am groot"]
# students = [i.upper() for i in students]
# print(students)

# from random import *
# guests = range(50)
# # guests = [randrange(5, 51) for i in guest]
# guests = [randint(5, 50) for i in guests]
# count = 1
# for boarder in guests:
#   if 5 <= boarder <= 15:
#     print("{0}번째 손님 (소요시간 : {1}분)".format(count, boarder))
#   count += 1

# from random import *
# count = 0
# for i in range(1, 51):
#   time = randrange(5, 51)
#   if 5 <= time <= 15:
#     print("[O] {0}번째 손님 (소요시간 : {1}분)".format(i, time))
#     count += 1
#   else:
#     print("[ ] {0}번째 손님 (소요시간 : {1}분)".format(i, time))
# print("총 탑승 승객 : {0}분".format(count))


# def open_account():
#   print("새로운 계좌가 생성되었습니다.")

# def deposit(balance, money):
#   print("입금이 완료되었습니다. 잔액은 {0} 원입니다.".format(balance + money))
#   return balance + money

# def withdraw(balance, money):
#   if balance >= money:
#     print("출금이 완료되었습니다. 잔액은 {0} 원입니다.".format(balance - money))
#     return balance - money
#   else:
#     print("출금이 완료되지 않았습니다. 잔액은 {0} 원입니다.".format(balance))
#     return balance

# def withdraw_night(balance, money):
#   commission = 100
#   return commission, balance - money - commission

# balance = 0
# balance = deposit(balance, 1000)
# # balance = withdraw(balance, 500)
# commission, balance = withdraw_night(balance, 500)
# print("수수료는 {0} 원이며, 잔액은 {1} 원입니다.".format(commission, balance))


# def profile(name, age, main_lang):
#   print("이름 : {0}\t나이 : {1}\t주 사용 언어: {2}" \
#     .format(name, age, main_lang))

# profile("유재석", 20, "파이썬")
# profile("김태호", 25, "자바")

# def profile(name, age=17, main_lang="파이썬"):
#   print("이름 : {0}\t나이 : {1}\t주 사용 언어: {2}" \
#     .format(name, age, main_lang))

# profile("유재석")
# profile("김태호")


# def profile(name, age, lang1, lang2, lang3, lang4):
#   print("이름 : {0}\t나이 : {1}\t".format(name, age), end=" ")
#   print(lang1, lang2, lang3, lang4)

# profile("유재석", 20, "Python", "Java", "C", "C#")
# profile("김태호", 25, "Kotlin", "Swift", "", "")

# def profile(name, age, *language):
#   print("이름 : {0}\t나이 : {1}\t".format(name, age), end=" ")
#   for lang in language:
#     print(lang, end=" ")
#   print()

# profile("유재석", 20, "Python", "Java", "C", "C#")
# profile("김태호", 25, "Kotlin", "Swift")


