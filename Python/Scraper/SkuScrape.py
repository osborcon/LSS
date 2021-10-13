import os.path


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
page = os.path.join(BASE_DIR, "tools.html")
#Replace File Name Here

filter = "merchSKU" 


with open(page, newline='') as File:
    for line in File:
        if filter in line:
            print(line[113:124])
    
