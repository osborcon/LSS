import requests
from bs4 import BeautifulSoup

URL = "https://order.centralstores.iastate.edu/merchlist?searchtype=all&txtSearch=2000000"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

print(soup)