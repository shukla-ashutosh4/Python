# -*- coding: utf-8 -*-
"""
Created on Mon Jan 30 22:54:50 2023

@author: ashutosh
"""
import random
names_string = input("Give me everybody's names, separated by a comma.\n")
names = names_string.split(", ")
num_items = len(names)
random_Choice = random.randint( 0, num_items - 1 )
person_who_will_pay = names[random_Choice]
print(person_who_will_pay  + " is The Unlucky." )