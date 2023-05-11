import math

def print_calc(height, width, cover):
    area = height * width
    num_of_cans = math.ceil(area / cover)
    print(f"You'll need {num_of_cans} cans of paint")


test_h = int(input("height of wall:"))
test_w = int(input("width of wall:"))
coverage = 5
print_calc(height=test_h, width=test_w, cover=coverage)