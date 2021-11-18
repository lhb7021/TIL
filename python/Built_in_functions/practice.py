print(abs(-5)) # 5
print(pow(4, 2)) # 4^2 = 16
print(max(5, 12)) # 12
print(min(5, 12)) # 5
print(round(3.14)) # 3
print(round(4.99)) # 5

from math import *
print(floor(4.99)) # 4
print(ceil(3.14)) # 4
print(sqrt(16)) # 4.0

from random import *
print(random()) # 0.0 ~ 1.0 미만 랜덤숫자
print(random() * 10) # 0 ~ 10 미만
print(int(random() * 10)) # 0 ~ 10 미만 정수

print(int(random() * 10 + 1)) # 1 ~ 10 이하 정수
print(int(random() * 45) + 1) # 1 ~ 45 이하 정수

print(randrange(1, 46)) # 1 ~ 46 미만 정수

print(randint(1, 45)) # 1 ~ 45 이하 정수