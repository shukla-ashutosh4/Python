# -*- coding: utf-8 -*-
"""
Created on Mon Jan 30 23:39:21 2023

@author: ashutosh
"""
import random
rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''
game_images = [rock, paper, scissors]
user_choice = int(input("What do you choose? type 0 for rock, 1 for paper, 2 for scissors\n"))

if user_choice >= 3 or user_choice < 0:
    print("You typed an invalid no., You Lose!")
else:
    print(game_images[user_choice])
    
    computer_choice = random.randint(0, 2)
    print("computer chose:")
    print(game_images[computer_choice])

if user_choice == 0 and computer_choice== 2:
    print("You win!")
elif computer_choice == 0 and user_choice == 2:
    print("You Lose!")
elif computer_choice > user_choice:
    print("You Lose!")
elif user_choice > computer_choice:
    print("You Win!")
elif computer_choice == user_choice:
    print("It's a DRAW!!!")