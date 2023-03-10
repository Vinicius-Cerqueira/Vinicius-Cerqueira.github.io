from bs4 import BeautifulSoup, re
import requests
import json

# Insira o código do exame aqui
exam = 'pl-200'


class Questions:
    def __init__(self):
        self.questions = []

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

    def addQuestion(self, question):
        question.number = len(self.questions)
        self.questions.append(question)


class Question:
    def __init__(self, question, link):
        self.question = question
        self.link = link

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)


jf = open("questions-" + exam + ".json", "a")
questions = Questions()


def find_questions(page):
    html_text = requests.get(
        'https://www.examtopics.com/discussions/microsoft/' + str(page) + '/').text
    soup = BeautifulSoup(html_text, 'lxml')

    webscraping = soup.find_all(href=re.compile(exam))

    for question in webscraping:
        title = " ".join(question.string.split())
        link = 'https://www.examtopics.com'+question['href']

        questions.addQuestion(Question(title, link))


if __name__ == '__main__':

    for page in range(1, 30):
        find_questions(page)
        print(page)

    """for page in range(501, 1000):
        find_questions(page)
        print(page)

    for page in range(1001, 1205):
        find_questions(page)
        print(page)
    """

    jf.write(questions.toJSON())
