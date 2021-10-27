import requests
from bs4 import BeautifulSoup

mfgNum = "352110" #input("Enter manufacturer number: ")

acme_url = 'https://www.acmetools.com/shop/SearchDisplay?searchType=1002&storeUserType=G&categoryId=&searchTerm='+ mfgNum +'&storeId=11301&catalogId=10551&langId=-1&pageSize=12&beginIndex=0&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView='

home_depot_url = 'https://www.homedepot.com/s/'+ mfgNum + '?NCNI-5'

zoro_url = 'https://www.zoro.com/search?q=' + mfgNum

ace_url = 'https://www.acehardware.com/search?query=' + mfgNum

#amazon_url = 'https://www.amazon.com/s?k='+ mfgNum + '&ref=nb_sb_noss_2'

#Amazon requires api connection and connot be scraped via URL

#mendards_url = 'https://www.menards.com/main/search.html?sf_categoryHierarchy=&search='+ mfgNum

#No working API for scraping products currently 10/21/21

headers = {"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"}
page = requests.get(url=home_depot_url, headers = headers)

soup = BeautifulSoup(page.content,'lxml') 
print(soup.prettify())
