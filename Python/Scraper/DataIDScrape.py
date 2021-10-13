import os.path


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
page = os.path.join(BASE_DIR, "sloan.html")
#Replace File Name Here

filter = "merchLink small textc displayb padding5" 


with open(page, newline='') as File:
    for line in File:
        if filter in line:
            print(line[86:91])