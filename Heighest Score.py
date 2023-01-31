student_scores = input("Input a list of student scores \n").split()
for n in range(0, len(student_scores)):
    student_scores[n] = int(student_scores[n])
print (student_scores)

heighest_score = 0
for score in student_scores:
    if score > heighest_score:
        heighest_score = score
print(f"The highest score in the class is: {heighest_score}")
    