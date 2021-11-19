name = "마린"
hp = 40
damage = 5

print("{0} 유닛이 생성되었습니다.".format(name))
print("체력 {0}, 공격력 {1}\n".format(hp, damage))

tank_name = "탱크"
tank_hp = 150
tank_damage = 35

print("{0} 유닛이 생성되었습니다.".format(tank_name))
print("체력 {0}, 공격력 {1}\n".format(tank_hp, tank_damage))

tank2_name = "탱크"
tank2_hp = 150
tank2_damage = 35

print("{0} 유닛이 생성되었습니다.".format(tank2_name))
print("체력 {0}, 공격력 {1}\n".format(tank2_hp, tank2_damage))

def attack(name, location, damage):
  print("{0} : {1} 방향으로 적군을 공격 합니다. [공격력 {2}]" \
    .format(name, location, damage))

attack(name, "1시", damage)
attack(tank_name, "1시", tank_damage)
attack(tank2_name, "1시", tank_damage)

class Unit:
  def __init__(self, name, hp):
    self.name = name
    self.hp = hp
    print("{0} 유닛이 생성되었습니다. [채력 {1}]".format(self.name, self.hp))

marine1 = Unit("마린", 40, 5)
marine2 = Unit("마린", 40, 5)
tank = Unit("탱크", 150, 35)

wraith1 = Unit("레이스", 80, 5)
print("유닛 이름 : {0}, 공격력 : {1}".format(wraith1.name, wraith1.damage))

wraith2 = Unit("빼앗은 레이스", 80, 5)
wraith2.clocking = True

if(wraith2.clocking == True):
  print("{0} 는 현재 클로킹 상태입니다.".format(wraith2.name))

class AttackUnit(Unit):
  def __init__(self, name, hp, damage):
    Unit.__init__(self, name, hp)
    self.damage = damage

  def attack(self, location):
    print("{0} : {1} 방향으로 적군을 공격 합니다. [공격력 {2}]"\
      .format(self.name, location, self.damage))

  def damaged(self, damage):
    print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))
    self.hp -= damage
    print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))
    if self.hp <= 0:
      print("{0} : 파괴되었습니다.".format(self.name))

firebat1 = AttackUnit("파이어뱃", 50, 16)
firebat1.attack("5시")

firebat1.damaged(25)
firebat1.damaged(25)

class Flyable:
  def __init__(self, flying_speed):
    self.flying_speed = flying_speed

  def fly(self, name, location):
    print("{0} : {1} 방향으로 날아갑니다. [속도 {2}]"\
      .format(name, location, self.flying_speed))

class FlaybleAttackUnit(AttackUnit, Flyable):
  def __init__(self, name, hp, damage, flying_speed):
    AttackUnit.__init__(self, name, hp, damage)
    Flyable.__init__(self, flying_speed)

valkyrie = FlaybleAttackUnit("발키리", 200, 6, 5)
valkyrie.fly(valkyrie.name, "3시")


class Unit:
  def __init__(self, name, hp, speed):
    self.name = name
    self.hp = hp
    self.speed = speed
    print("{0} 유닛이 생성되었습니다. [채력 {1}]".format(self.name, self.hp))

  def move(self, location):
    print("[지상 유닛 이동]")
    print("{0} : {1} 방향으로 이동합니다. [속도 {2}"\
      .format(self.name, location, self.speed))

class AttackUnit(Unit):
  def __init__(self, name, hp, speed, damage):
    Unit.__init__(self, name, hp, speed)
    self.damage = damage

  def attack(self, location):
    print("{0} : {1} 방향으로 적군을 공격 합니다. [공격력 {2}]"\
      .format(self.name, location, self.damage))

  def damaged(self, damage):
    print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))
    self.hp -= damage
    print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))
    if self.hp <= 0:
      print("{0} : 파괴되었습니다.".format(self.name))

class Flyable:
  def __init__(self, flying_speed):
    self.flying_speed = flying_speed

  def fly(self, name, location):
    print("{0} : {1} 방향으로 날아갑니다. [속도 {2}]"\
      .format(name, location, self.flying_speed))

class FlaybleAttackUnit(AttackUnit, Flyable):
  def __init__(self, name, hp, damage, flying_speed):
    AttackUnit.__init__(self, name, hp, 0, damage)
    Flyable.__init__(self, flying_speed)

  def move(self, location):
    print("[공중 유닛 이동]")
    self.fly(self.name, location)

vulture = AttackUnit("벌쳐", 80, 10, 20)

battlecruiser = FlaybleAttackUnit("배틀크루져", 500, 25, 3)

vulture.move("11시")
battlecruiser.fly("배틀크루져", "9시")
battlecruiser.move("9시")


class BuildingUnit(Unit):
  def __init__(self, name, hp, location):
    pass

supply_depot = BuildingUnit("서플라이 디폿", 500, "7시")

def game_start():
  print("[알림] 새로운 게임을 시작합니다.")

def game_over():
  pass

game_start()
game_over()


class BuildingUnit(Unit):
  def __init__(self, name, hp, location):
    # Unit.__init__(self, name, hp, 0)
    super().__init__(name, hp, 0)
    self.location = location



class Student:
  def __init__(self, name, gender):
    self.name = name
    self.gender = gender

  def to_study(self, time):
    print("공부 중 입니다.")
    print("{}시간 뒤까지 할 예정입니다.".format(time))

class Footballer:
  def __init__(self, position, number):
    self.position = position
    self.number = number

  def to_training(self, time):
    print("훈련 중 입니다.")
    print("{}시간 뒤까지 할 예정입니다.".format(time))

class High_student(Student):
  def __init__(self, name, gender, grade):
    Student.__init__(self, name, gender)
    self.grade = grade

  def to_play(self):
    print("친구들과 놀고 있습니다.")

class High_student_footballer(High_student, Footballer):
  def __init__(self, name, gender, grade, position, number):
    High_student.__init__(self, name, gender, grade)
    Footballer.__init__(self, position, number)

  def to_study(self, time):
    self.to_training(time)

student1 = Student("유재석", "남자")
student2 = High_student("박명수", "남자", 2)

print(student1.name, student1.gender)
print(student2.name, student2.gender, student2.grade)

student1.to_study(6)
student2.to_study(6)
student2.to_play()

student3 = High_student_footballer("양세형", "남자", 3, "FW", 11)

student3.to_play()
student3.to_training(6)
student3.to_study(6)

class Middle_student(Student):
  def __init__(self, name, gender):
    pass

student = Middle_student("정준하", "남자")

class Schoolchild(Student):
  def __init__(self, name, gender):
    # Student.__init__(self, name, gender)
    super().__init__(name, gender)

children = Schoolchild("김민수", "남자")
children.to_study(3)