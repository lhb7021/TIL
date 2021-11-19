score_file = open("./File_in_out_put/score.txt", "w", encoding="utf8")
print("수학 : 0", file=score_file)
print("영어 : 50", file=score_file)
score_file.close()

score_file = open("./File_in_out_put/score.txt", "a", encoding="utf8")
score_file.write("과학 : 80")
score_file.write("\n코딩 : 100")
score_file.close()

score_file = open("./File_in_out_put/score.txt", "r", encoding="utf8")
print(score_file.read())
score_file.close()

score_file = open("./File_in_out_put/score.txt", "r", encoding="utf8")
print(score_file.readline(), end="")
print(score_file.readline(), end="")
print(score_file.readline(), end="")
print(score_file.readline(), end="")
print()
score_file.close()

score_file = open("./File_in_out_put/score.txt", "r", encoding="utf8")
while True:
  line = score_file.readline()
  if not line:
    break
  print(line, end="")
print()
score_file.close()

score_file = open("./File_in_out_put/score.txt", "r", encoding="utf8")
lines = score_file.readlines()
print(type(lines))
for line in lines:
  print(line, end="")
print()
score_file.close()
