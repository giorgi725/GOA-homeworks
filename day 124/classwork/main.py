import requests
from bs4 import BeautifulSoup

url = 'https://www.lit.ge/index.php?page=books&send[shop.catalog][order]=1&send[shop.catalog][reset]=1'

f = open('books.csv', 'w', encoding='utf-8_sig')
f.write('სათაური,ავტორი,ფასი\n')

h = {'user_agent': 'Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'}
for i in range(1, 100):
    url = f'https://www.lit.ge/index.php?page=books&send[shop.catalog][page]={i}'

    r = requests.get(url, headers=h)
    content = r.text

    soup = BeautifulSoup(content, 'html.parser')
    section = soup.find('section', {'class':'list-holder'})
    books = section.find_all('article')

    for book in books:
        t_bar = book.find('div', {'class':'title-bar'})
        title = t_bar.a.text.replace(',', '')
        author = t_bar.b.a.text
        price = book.button.text.strip()

        f.write(title + ',' + author + ',' + price + '\n')