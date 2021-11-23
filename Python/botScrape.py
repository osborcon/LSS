# C:\Program Files\Google\Chrome\Application\Chrome.exe
import csv
from selenium import webdriver 
from selenium.webdriver.common.keys import Keys


PATH = "C:\Program Files (x86)\chromedriver.exe"

driver = webdriver.Chrome(PATH)
driver.get("https://secure3.mbsbooks.com/employee/IndexInsite.aspx?s=order.centralstores.iastate.edu")

#Login Information
driver.find_element_by_id('txtUsername').send_keys('osborcon')
driver.find_element_by_id('txtPassword').send_keys('#')
driver.find_element_by_id('LoginButton').click()

with open('test.csv', 'w', encoding='UTF8') as f:
    writer = csv.writer(f)
    SKU = 2005766
    
    while SKU < 2005809:
        
        driver.get("https://secure3.mbsbooks.com/employee/prodAdmin.aspx?s=order.centralstores.iastate.edu")
        driver.find_element_by_id('mer_sku').send_keys(SKU)
        driver.find_element_by_id('btnSubmit').click()
        try:
            description  = driver.find_element_by_id('tabContainer1_pnlBasicInfo_mer_desc_long').get_attribute('value')
        except:
            driver.get("https://secure3.mbsbooks.com/employee/prodAdmin.aspx?s=order.centralstores.iastate.edu")
            description = 'null'
        try:         
            driver.find_element_by_id('tabContainer1_pnlImages_Label3').click()
        except:
            driver.get("https://secure3.mbsbooks.com/employee/prodAdmin.aspx?s=order.centralstores.iastate.edu")
        try: 
            thumbnail  = driver.find_element_by_id('tabContainer1_pnlImages_imgDefaultThumbnail').get_attribute('src')
        except:
            driver.get("https://secure3.mbsbooks.com/employee/prodAdmin.aspx?s=order.centralstores.iastate.edu")
            thumbnail = 'null'
        try: 
            driver.find_element_by_id('hlAdmin').click()   
        except:
            driver.get("https://secure3.mbsbooks.com/employee/prodAdmin.aspx?s=order.centralstores.iastate.edu")
        
        strip = [SKU,description,thumbnail]
        writer.writerow(strip)
        SKU = SKU + 1