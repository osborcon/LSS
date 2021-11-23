import requests
from bs4 import BeautifulSoup
import csv

#Create loop that iterates through all skus
#Store each iteration in csv
#Download all pictures for backup
#Upload into powerapp


with open('sku.csv', 'w', encoding='UTF8') as f:
    
    SKU = 2000000
    writer = csv.writer(f)
    while SKU < 2005800:
        URL = "https://order.centralstores.iastate.edu/merchlist?searchtype=all&txtSearch=" + str(SKU)
        page = requests.get(URL)

        soup = BeautifulSoup(page.content, "html.parser")

        price = soup.find("span", class_="merchPriceCurrent")
        title = soup.find("h2", class_="merchTitle top0")
        desc = soup.find("div", class_="merchDesc")
        images = soup.findAll('img')
        thumbnail = images[6]

        prices = [SKU,price,title,desc,thumbnail]
        writer.writerow(prices)

        SKU = SKU + 1   
        



            