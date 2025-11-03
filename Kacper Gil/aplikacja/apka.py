from tkinter import *
from tkinter import messagebox
def klik():
    messagebox.showinfo("Info","Witaj w Tkinter!")
okno = Tk()
okno.title("Aplikacja")
okno.geometry("300x300")
przycisk = Button(okno, text="kliknij mnie", command=klik)
przycisk.pack(pady=10)
okno.mainloop()