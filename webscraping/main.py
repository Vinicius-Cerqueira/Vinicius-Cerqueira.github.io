from bs4 import BeautifulSoup, re
import requests
import json


class Questions:
    def __init__(self, exam):
        self.questions = []
        self.exam = exam
        self.file = open("questions-" + exam + ".json", "w")

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

    def addQuestion(self, question):
        self.questions.append(question)

    def findAll(self, soup):
        for question in soup.find_all(href=re.compile(self.exam)):
            title = " ".join(question.string.split())
            link = 'https://www.examtopics.com'+question['href']
            self.addQuestion(Question(title, link))

    def writeJSON(self):
        return self.file.write(self.toJSON())


class Question:
    def __init__(self, question, link):
        self.question = question
        self.link = link


# ai102 = Questions("ai-102")
# az104 = Questions("az-104")
# az204 = Questions("az-204")
# az220 = Questions("az-220")
# az305 = Questions("az-305")
# az400 = Questions("az-400")
# dp100 = Questions("dp-100")
# dp203 = Questions("dp-203")
# dp300 = Questions("dp-300")
# dp420 = Questions("dp-420")
# pl200 = Questions("pl-200")
# pl300 = Questions("pl-300")
# pl400 = Questions("pl-400")
# pl600 = Questions("pl-600")


def find_questions(page):
    html_text = requests.get(
        'https://www.examtopics.com/discussions/microsoft/' + str(page) + '/').text
    soup = BeautifulSoup(html_text, 'lxml')

    for question in soup.find_all(href=re.compile('pl-200')):
        number = question['href']
        title = " ".join(question.string.split())
        link = 'https://www.examtopics.com'+question['href']
        print(number)

    # ai102.findAll(soup)
    # az104.findAll(soup)
    # az204.findAll(soup)
    # az220.findAll(soup)
    # az305.findAll(soup)
    # az400.findAll(soup)
    # dp100.findAll(soup)
    # dp203.findAll(soup)
    # dp300.findAll(soup)
    # dp420.findAll(soup)
    # pl200.findAll(soup)
    # pl300.findAll(soup)
    # pl400.findAll(soup)
    # pl600.findAll(soup)


if __name__ == '__main__':

    for page in range(1, 5):
        find_questions(page)
        print(page)

    # for page in range(1, 500):
    #     find_questions(page)
    #     print(page)

    # for page in range(501, 1000):
    #     find_questions(page)
    #     print(page)

    # for page in range(1001, 1208):
    #     find_questions(page)
    #     print(page)


# ai102.questions.sort(key=lambda x: x.question)
# ai102.writeJSON()
# az104.questions.sort(key=lambda x: x.question)
# az104.writeJSON()
# az204.questions.sort(key=lambda x: x.question)
# az204.writeJSON()
# az220.questions.sort(key=lambda x: x.question)
# az220.writeJSON()
# az305.questions.sort(key=lambda x: x.question)
# az305.writeJSON()
# az400.questions.sort(key=lambda x: x.question)
# az400.writeJSON()
# dp100.questions.sort(key=lambda x: x.question)
# dp100.writeJSON()
# dp203.questions.sort(key=lambda x: x.question)
# dp203.writeJSON()
# dp300.questions.sort(key=lambda x: x.question)
# dp300.writeJSON()
# dp420.questions.sort(key=lambda x: x.question)
# dp420.writeJSON()
# pl200.questions.sort(key=lambda x: x.question)
# pl200.writeJSON()
# pl300.questions.sort(key=lambda x: x.question)
# pl300.writeJSON()
# pl400.questions.sort(key=lambda x: x.question)
# pl400.writeJSON()
# pl600.questions.sort(key=lambda x: x.question)
# pl600.writeJSON()
