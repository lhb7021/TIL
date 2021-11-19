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


# gun = 10

# def checkpoint(soldiers):
#   global gun
#   gun = gun - soldiers
#   print("[함수 내] 남은 총 : {0}".format(gun))

# def checkpoint_ret(gun, soldiers):
#   gun = gun - soldiers
#   print("[함수 내] 남은 총 : {0}".format(gun))
#   return gun

# print("전체 총 : {0}".format(gun))
# checkpoint(2)
# gun = checkpoint_ret(gun, 2)
# print("남은 총 : {0}".format(gun))


# def std_weight(height, gender):
#   h = height * 0.01
#   if gender == "male":
#     result = round(h * h * 22, 2)
#     print("키 {0}cm 남자의 표준 체중은 {1}kg 입니다.".format(height, result))
#   if gender == "female":
#     result = round(h * h * 21, 2)
#     print("키 {0}cm 여자의 표준 체중은 {1}kg 입니다.".format(height, result))

# person1 = (175, "male")
# std_weight(person1[0], person1[1])

# def std_weight(height, gender):
#   if gender == "남자":
#     return height * height * 22
#   if gender == "여자":
#     return height * height * 21

# person1_height = 175
# person1_gender = "남자"
# person1_weight = round(std_weight(person1_height / 100, person1_gender), 2)
# print("키 {0}cm {1}의 표준 체중은 {2}kg 입니다.".format(person1_height, person1_gender, person1_weight))


# import sys
# print("Python", "Java", file=sys.stdout)
# print("Python", "Java", file=sys.stderr)

# scores = {"수학":0, "영어":50, "코딩":100}
# for subject, score in scores.items():
#   # print(subject, score)
#   print(subject.ljust(8), str(score).rjust(4), sep=":")

# for num in range(1, 21):
#   print("대기번호 : " + str(num).zfill(3))

# answer = input("아무 값이나 입력하세요 : ")
# print("입력하신 값은 " + answer + "입니다")
# print(type(answer))
# answer = 10
# print(type(answer))


# # 빈 자리는 빈공간으로 두고, 오른쪽 정렬을 하되, 총 10자리 공간을 확보
# print("{0: >10}".format(500))
# # 양수일 땐 +로 표시, 음수일 땐 -로 표시
# print("{0: >+10}".format(500))
# print("{0: >+10}".format(-500))
# # 왼쪽 정렬하고, 빈칸으로 _로 채움
# print("{0:_<10}".format(500))
# # 3자리 마다 콤마를 찍어주기
# print("{0:,}".format(100000000000))
# # 3자리 마다 콤마를 찍어주기, +- 부호도 붙이기
# print("{0:+,}".format(100000000000))
# print("{0:+,}".format(-100000000000))
# # 3자리 마다 콤마를 찍어주기, 부호도 붙이고, 자릿수 확보하기
# # 돈이 많으면 행복하니까 빈 자리는 ^ 로 채워주기
# print("{0:^<+30,}".format(100000000000))
# # 소수점 출력
# print("{0:f}".format(5/3))
# # 소수점 특정 자리수 까지만 표시
# print("{0:.2f}".format(5/3))


# score_file = open("score.txt", "w", encoding="utf8")
# print("수학 : 0", file=score_file)
# print("영어 : 50", file=score_file)
# score_file.close()

# score_file = open("score.txt", "a", encoding="utf8")
# score_file.write("과학 : 80")
# score_file.write("\n코딩 : 100")
# score_file.close()

# score_file = open("score.txt", "r", encoding="utf8")
# print(score_file.read())
# score_file.close()

# score_file = open("score.txt", "r", encoding="utf8")
# print(score_file.readline(), end="")
# print(score_file.readline(), end="")
# print(score_file.readline(), end="")
# print(score_file.readline(), end="")
# score_file.close()

# score_file = open("score.txt", "r", encoding="utf8")
# while True:
#   line = score_file.readline()
#   if not line:
#     break
#   print(line, end="")
# score_file.close()

# score_file = open("score.txt", "r", encoding="utf8")
# lines = score_file.readlines()
# for line in lines:
#   print(line, end="")
# score_file.close()


# import pickle
# profile_file = open("profile.pickle", "wb")
# profile = {"이름":"박명수", "나이":30, "취미":["축구", "골프"]}
# print(profile)
# pickle.dump(profile, profile_file)
# profile_file.close()

# profile_file = open("profile.pickle", "rb")
# profile = pickle.load(profile_file)
# print(profile)
# profile_file.close()


# import pickle

# with open("profile.pickle", "rb") as profile_file:
#   print(pickle.load(profile_file))

# with open("study.txt", "w", encoding="utf8") as study_file:
#   study_file.write("파이썬을 열심히 공부하고 있어요")

# with open("study.txt", "r", encoding="utf8") as study_file:
#   print(study_file.read())


# for i in range(1, 51):
#   title = str(i) + "주차.txt"
#   with open(title, "w", encoding="utf8") as report_file:
#     report_file.write(f"- {i} 주차 주간보고 -\n")
#     report_file.write("부서 :\n")
#     report_file.write("이름 :\n")
#     report_file.write("엄무 요약 :\n")

# for i in range(1, 51):
#   with open(str(i) + "주차.txt", "w", encoding="utf8") as report_file:
#     report_file.write("- {0} 주차 주간보고 -".format(i))
#     report_file.write("\n부서 :")
#     report_file.write("\n이름 :")
#     report_file.write("\n업무 요약 :")


# name = "마린"
# hp = 40
# damage = 5

# print("{0} 유닛이 생성되었습니다.".format(name))
# print("체력 {0}, 공격력 {1}\n".format(hp, damage))

# tank_name = "탱크"
# tank_hp = 150
# tank_damage = 35

# print("{0} 유닛이 생성되었습니다.".format(tank_name))
# print("체력 {0}, 공격력 {1}\n".format(tank_hp, tank_damage))

# tank2_name = "탱크"
# tank2_hp = 150
# tank2_damage = 35

# print("{0} 유닛이 생성되었습니다.".format(tank2_name))
# print("체력 {0}, 공격력 {1}\n".format(tank2_hp, tank2_damage))

# def attack(name, location, damage):
#   print("{0} : {1} 방향으로 적군을 공격 합니다. [공격력 {2}]" \
#     .format(name, location, damage))

# attack(name, "1시", damage)
# attack(tank_name, "1시", tank_damage)
# attack(tank2_name, "1시", tank_damage)

# class Unit:
#   def __init__(self, name, hp):
#     self.name = name
#     self.hp = hp
#     print("{0} 유닛이 생성되었습니다. [채력 {1}]".format(self.name, self.hp))

# marine1 = Unit("마린", 40, 5)
# marine2 = Unit("마린", 40, 5)
# tank = Unit("탱크", 150, 35)

# wraith1 = Unit("레이스", 80, 5)
# print("유닛 이름 : {0}, 공격력 : {1}".format(wraith1.name, wraith1.damage))

# wraith2 = Unit("빼앗은 레이스", 80, 5)
# wraith2.clocking = True

# if(wraith2.clocking == True):
#   print("{0} 는 현재 클로킹 상태입니다.".format(wraith2.name))

# class AttackUnit(Unit):
#   def __init__(self, name, hp, damage):
#     Unit.__init__(self, name, hp)
#     self.damage = damage

#   def attack(self, location):
#     print("{0} : {1} 방향으로 적군을 공격 합니다. [공격력 {2}]"\
#       .format(self.name, location, self.damage))

#   def damaged(self, damage):
#     print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))
#     self.hp -= damage
#     print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))
#     if self.hp <= 0:
#       print("{0} : 파괴되었습니다.".format(self.name))

# firebat1 = AttackUnit("파이어뱃", 50, 16)
# firebat1.attack("5시")

# firebat1.damaged(25)
# firebat1.damaged(25)

# class Flyable:
#   def __init__(self, flying_speed):
#     self.flying_speed = flying_speed

#   def fly(self, name, location):
#     print("{0} : {1} 방향으로 날아갑니다. [속도 {2}]"\
#       .format(name, location, self.flying_speed))

# class FlaybleAttackUnit(AttackUnit, Flyable):
#   def __init__(self, name, hp, damage, flying_speed):
#     AttackUnit.__init__(self, name, hp, damage)
#     Flyable.__init__(self, flying_speed)

# valkyrie = FlaybleAttackUnit("발키리", 200, 6, 5)
# valkyrie.fly(valkyrie.name, "3시")


# class Unit:
#   def __init__(self, name, hp, speed):
#     self.name = name
#     self.hp = hp
#     self.speed = speed
#     print("{0} 유닛이 생성되었습니다. [채력 {1}]".format(self.name, self.hp))

#   def move(self, location):
#     print("[지상 유닛 이동]")
#     print("{0} : {1} 방향으로 이동합니다. [속도 {2}"\
#       .format(self.name, location, self.speed))

# class AttackUnit(Unit):
#   def __init__(self, name, hp, speed, damage):
#     Unit.__init__(self, name, hp, speed)
#     self.damage = damage

#   def attack(self, location):
#     print("{0} : {1} 방향으로 적군을 공격 합니다. [공격력 {2}]"\
#       .format(self.name, location, self.damage))

#   def damaged(self, damage):
#     print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))
#     self.hp -= damage
#     print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))
#     if self.hp <= 0:
#       print("{0} : 파괴되었습니다.".format(self.name))

# class Flyable:
#   def __init__(self, flying_speed):
#     self.flying_speed = flying_speed

#   def fly(self, name, location):
#     print("{0} : {1} 방향으로 날아갑니다. [속도 {2}]"\
#       .format(name, location, self.flying_speed))

# class FlaybleAttackUnit(AttackUnit, Flyable):
#   def __init__(self, name, hp, damage, flying_speed):
#     AttackUnit.__init__(self, name, hp, 0, damage)
#     Flyable.__init__(self, flying_speed)

#   def move(self, location):
#     print("[공중 유닛 이동]")
#     self.fly(self.name, location)

# vulture = AttackUnit("벌쳐", 80, 10, 20)

# battlecruiser = FlaybleAttackUnit("배틀크루져", 500, 25, 3)

# vulture.move("11시")
# battlecruiser.fly("배틀크루져", "9시")
# battlecruiser.move("9시")


# class BuildingUnit(Unit):
#   def __init__(self, name, hp, location):
#     pass

# supply_depot = BuildingUnit("서플라이 디폿", 500, "7시")

# def game_start():
#   print("[알림] 새로운 게임을 시작합니다.")

# def game_over():
#   pass

# game_start()
# game_over()


# class BuildingUnit(Unit):
#   def __init__(self, name, hp, location):
#     # Unit.__init__(name, hp, 0)
#     super().__init__(name, hp, 0)
#     self.location = location


# from random import *
# class Unit:
#   def __init__(self, name, hp, speed):
#     self.name = name
#     self.hp = hp
#     self.speed = speed
#     print("{0} 유닛이 생성되었습니다. [채력 {1}]".format(self.name, self.hp))

#   def move(self, location):
#     print("{0} : {1} 방향으로 이동합니다. [속도 {2}"\
#       .format(self.name, location, self.speed))

#   def damaged(self, damage):
#     print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))
#     self.hp -= damage
#     print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))
#     if self.hp <= 0:
#       print("{0} : 파괴되었습니다.".format(self.name))

# class AttackUnit(Unit):
#   def __init__(self, name, hp, speed, damage):
#     Unit.__init__(self, name, hp, speed)
#     self.damage = damage

#   def attack(self, location):
#     print("{0} : {1} 방향으로 적군을 공격 합니다. [공격력 {2}]"\
#       .format(self.name, location, self.damage))

# class Flyable:
#   def __init__(self, flying_speed):
#     self.flying_speed = flying_speed

#   def fly(self, name, location):
#     print("{0} : {1} 방향으로 날아갑니다. [속도 {2}]"\
#       .format(name, location, self.flying_speed))

# class FlaybleAttackUnit(AttackUnit, Flyable):
#   def __init__(self, name, hp, damage, flying_speed):
#     AttackUnit.__init__(self, name, hp, 0, damage)
#     Flyable.__init__(self, flying_speed)

#   def move(self, location):
#     self.fly(self.name, location)

# class Marine(AttackUnit):
#   def __init__(self):
#     AttackUnit.__init__(self, "마린", 40, 1, 5)

#   def stimpack(self):
#     if self.hp > 10:
#       self.hp -= 10
#       print("{0} : 스팀팩을 사용합니다. (HP 10 감소)".format(self.name))
#     else:
#       print("{0} : 체력이 부족하여 스팀팩을 사용하지 않습니다.".format(self.name))

# class Tank(AttackUnit):
#   seize_developed = False

#   def __init__(self):
#     AttackUnit.__init__(self, "탱크", 150, 1, 35)
#     self.seize_mode = False

#   def set_seize_mode(self):
#     if Tank.seize_developed == False:
#       return
#     if self.seize_mode == False:
#       print("{0} : 시즈모드로 전환합니다.".format(self.name))
#       self.damage *= 2
#       self.speed = 0
#       self.seize_mode = True
#     else:
#       print("{0} : 시즈모드로 해제합니다.".format(self.name))
#       self.damage /= 2
#       self.speed = 1
#       self.seize_mode = False

# class Wraith(FlaybleAttackUnit):
#   def __init__(self):
#     FlaybleAttackUnit.__init__(self, "레이스", 80, 20, 5)
#     self.clocked = False

#   def clocking(self):
#     if self.clocked == True:
#       print("{0} : 클로킹 모드 해제합니다.".format(self.name))
#       self.clocked = False
#     else:
#       print("{0} : 클로킹 모드 설정합니다.".format(self.name))
#       self.clocked = True


# def game_start():
#   print("[알림] 새로운 게임을 시작합니다.")

# def game_over():
#   print("Player : gg")
#   print("[Player] 님이 게임에서 퇴장하셨습니다.")

# game_start()

# m1 = Marine()
# m2 = Marine()
# m3 = Marine()

# t1 = Tank()
# t2 = Tank()

# w1 = Wraith()

# attack_units = []
# attack_units.append(m1)
# attack_units.append(m2)
# attack_units.append(m3)
# attack_units.append(t1)
# attack_units.append(t2)
# attack_units.append(w1)

# for unit in attack_units:
#   unit.move("1시")

# Tank.seize_developed = True
# print("[알림] 탱크 시즈 모드 개발이 완료되었습니다.")

# for unit in attack_units:
#   if isinstance(unit, Marine):
#     unit.stimpack()
#   if isinstance(unit, Tank):
#     unit.set_seize_mode()
#   if isinstance(unit, Wraith):
#     unit.clocking()

# for unit in attack_units:
#   unit.attack("1시")

# for unit in attack_units:
#   unit.damaged(randrange(5, 21))

# game_over()


# class House:
#   def __init__(self, location, house_type, deal_type, price, completion_year):
#     self.location = location
#     self.house_type = house_type
#     self.deal_type = deal_type
#     self.price = price
#     self.completion_year = completion_year

#   def show_detail(self):
#     if self.deal_type == "월세":
#       print(f"{self.location} {self.house_type} {self.deal_type} {self.price} {self.completion_year}년")
#     else:
#       print(f"{self.location} {self.house_type} {self.deal_type} {self.price}억 {self.completion_year}년")

# h1 = House("강남", "아파트", "매매", 10, 2010)
# h2 = House("마포", "오피스텔", "전세", 5, 2007)
# h3 = House("송파", "빌라", "월세", "500/50", 2000)

# house_list = []
# house_list.append(h1)
# house_list.append(h2)
# house_list.append(h3)

# print("총 {0}대의 매물이 있습니다.".format(len(house_list)))
# for house in house_list:
#   house.show_detail()


# try:
#   print("나누기 전용 계산기입니다.")
#   nums = []
#   nums.append(int(input("첫 번째 숫자를 입력하세요 : ")))
#   nums.append(int(input("두 번째 숫자를 입력하세요 : ")))
#   # nums.append(int(nums[0] / nums[1]))
#   print("{0} / {1} = {2}".format(nums[0], nums[1], nums[2]))
# except ValueError:
#   print("에러! 잘못된 값을 입력하였습니다.")
# except ZeroDivisionError as err:
#   print(err)
# except Exception as err:
#   print("알 수 없는 에러가 발생하였습니다.")
#   print(err)


# try:
#   print("한 자리 숫자 나누기 전용 계산기입니다.")
#   num1 = int(input("첫 번째 숫자를 입력하세요 : "))
#   num2 = int(input("두 번째 숫자를 입력하세요 : "))
#   if num1 >= 10 or num2 >= 10:
#     raise ValueError
#   print("{0} / {1} = {2}".format(num1, num2, int(num1 / num2)))
# except ValueError:
#   print("잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요.")


# class BigNumberError(Exception):
#   def __init__(self, msg):
#     self.msg = msg

#   def __str__(self):
#     return self.msg

# try:
#   print("한 자리 숫자 나누기 전용 계산기입니다.")
#   num1 = int(input("첫 번째 숫자를 입력하세요 : "))
#   num2 = int(input("두 번째 숫자를 입력하세요 : "))
#   if num1 >= 10 or num2 >= 10:
#     raise BigNumberError("입력값 : {0}, {1}".format(num1, num2))
#   print("{0} / {1} = {2}".format(num1, num2, int(num1 / num2)))
# except ValueError:
#   print("잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요.")
# except BigNumberError as err:
#   print("에러가 발생하였습니다. 한 자리 숫자만 입력하세요.")
#   print(err)
# finally:
#   print("계산기를 이용해 주셔서 감사합니다.")


# class SoldOutError(Exception):
#   def __init__(self):
#     pass

# chicken = 10
# waiting = 1
# while(True):
#   try:
#     print("[남은 치킨 : {0}]".format(chicken))
#     if chicken <= 0:
#       raise SoldOutError
#     order = int(input("치킨 몇 마리 주문하시겠습니까?"))
#     if order > chicken:
#       print("재료가 부족합니다.")
#     elif order < 1:
#       raise ValueError
#     else:
#       print("[대기번호 {0}] {1} 마리 주문이 완료되었습니다."\
#         .format(waiting, order))
#       waiting += 1
#       chicken -= order
#   except ValueError:
#     print("잘못된 값을 입력하였습니다.")
#   except SoldOutError:
#     print("재고가 소진되어 더 이상 주문을 받지 않습니다.")
#     break

