def random_number(number_of_digits, number_of_numbers):
    import random
    for i in range(number_of_numbers):
        #We do it to return a value with the number of digits we want
        number = random.randint(10**(number_of_digits-1), 10**number_of_digits-1)
        yield int(number)

#We get the values ​​for the function
number_of_digits = int(input("Number of digits: "))
number_of_numbers = int(input("Number of numbers: "))

#We make it unique with a set data structure
setList = {*random_number(number_of_digits, number_of_numbers)}

n_largest_number=pow(10,number_of_digits) - pow(10,number_of_digits-1)

#If an input greater than the maximum number that can be entered for the desired number of digits is given, we indicate that the altitude is higher.
if number_of_numbers>n_largest_number :
    print(f"Number of numbers is too large,The max number can be {n_largest_number} for the situation you want")
else:
    while(len(setList) < number_of_numbers):
        #We continue to give random numbers to the list until the desired number is completed.
        kalan = number_of_numbers - len(setList)
        test = {*random_number(number_of_digits, kalan)}
        setList.update(test)
    print(setList)
    



    


