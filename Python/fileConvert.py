import pandas as pd
import os.path

inputCSV = "NetSuite.csv"

df = pd.read_csv (inputCSV)

storeAndISBN = {'Store ID + ISBN':['','']}

school = {'School':['']}

itemType = {'Item Type':['']}

df1 = pd.DataFrame(df, columns = ['School','Store ID + ISBN', 'Term Name', 'Department', 'Store ID','Item Type', 'ISBN', 'Required?'])

df1['ISBN'] = df['ISBN'].str.replace('-','')

df1['School'] = df['School'] = 'Iowa State University'

df1['Item Type'] = df['Item Type'] = 'Book'

df1['Store ID + ISBN'] = df1 ['Store ID'] + df1['ISBN']

df1.columns = [
                'School',
                'External ID',
                'Academic Term',
                'Academic Department Code',
                'Course Code',
                'Item Type',
                'ISBN',
                'Course Material Requirement']

save = 'C:\\NetSuite Adoptions\\'

df1.to_csv('NetSuite.csv', index=False)

save.to_csv(os.path.join(save,r'NetSuite.csv'))
