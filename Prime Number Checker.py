def prime_checker(number):
   is_prime = True
   for i in range(2, number - 1 ):
    if number % i == 0:
      is_prime = False
   if is_prime:
         print("It's a Prime Number!")
   else:
         print("Uh Oh! It's not a Prime Number")

n = int(input("Welcome to the Prime Number Checker!, Please enter your number: "))
prime_checker(number=n)