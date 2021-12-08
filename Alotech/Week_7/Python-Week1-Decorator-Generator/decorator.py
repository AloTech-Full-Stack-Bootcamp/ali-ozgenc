def my_awesome_decorator(func):
    def wrapper(*args):
        #Increases given values ​​by 1
        x = [number + 1 for number in args]
        return func(*x)
    return wrapper

@my_awesome_decorator
def mod_batch(*numbers):
    for number in numbers:
        #Returns false if even 1 of the values ​​is not divisible by 3
        if number % 3 != 0:
           return False
    #Returns true if divided
    return True
    
x = list(map(int, input("Enter a multiple value with whitespace: ").split()))

print(mod_batch(*x))
