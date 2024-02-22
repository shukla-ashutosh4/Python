import pandas
import turtle 
screen = turtle.Screen()
screen.title("Guess the State")
image = "blank_states_img.gif"
screen.addshape(image)

turtle.shape(image)

X = pandas.read_csv("50_states.csv")
All_States = X.state.to_list()
# def get_mouse_click_coor(x, y):
#     print(x, y)
# turtle.onscreenclick(get_mouse_click_coor)
# turtle.mainloop()
Guessed_states = []

while len(Guessed_states) < 50:
        
    answer_state = screen.textinput(title = f"{len(Guessed_states)}/50 States Correct", 
                                    prompt = "What's Another state's name?").title()
    if answer_state == "Exit":
        missing_states = []
        for state in All_States:
            if state not in Guessed_states:
                missing_states.append(state)
        new_data = pandas.DataFrame(missing_states)
        new_data.to_csv("States_to_Learn.csv")
        break
    if answer_state in All_States:
        Guessed_states.append(answer_state)
        t = turtle.Turtle()
        t.hideturtle()
        t.penup()
        State_Data = X[X.state == answer_state]
        t.goto(int(State_Data.x), int(State_Data.y))
        t.write(answer_state)
