people1 = 10
people2 = 20
people3 = 30
subway1 = [40, 50, 60]
print(subway1)
subway2 = [people1, people2, people3]
print(subway2)
print(subway2.index(people3))

subway2.append(40)
print(subway2)

subway2.insert(1, 50)
print(subway2)

print(subway2.pop())
print(subway2)

print(subway2.count(10))

num_list = [5,2,4,3,1]
num_list.sort()
print(num_list)
num_list.sort(reverse=True)
print(num_list)

num_list.reverse()
print(num_list)

num_list.clear()
print(num_list)

num_list = [5,2,4,3,1]
mix_list = ["조세호", 20, True]
print(mix_list)

num_list.extend(mix_list)
print(num_list)