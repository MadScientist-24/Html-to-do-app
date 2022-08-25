import eel
from time import localtime
print("SERVER RUNNING")


eel.init('web')

@eel.expose
def gettime():
    l = f"{localtime().tm_hour}:{localtime().tm_min}"
    return l

@eel.expose
def restart():
    eel._shutdown
    eel.start("main.html", mode="chrome")
    print("SERVER RUNNING")

eel.start('main.html', mode='chrome', port=8080)
