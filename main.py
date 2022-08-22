import eel
from time import localtime
print("SERVER RUNNING")


eel.init('web')

@eel.expose
def gettime():
    l = f"{localtime().tm_hour}:{localtime().tm_min}"
    return l

eel.start('main.html', mode='chrome')