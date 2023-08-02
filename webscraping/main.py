from bs4 import BeautifulSoup, re
import requests
import json
import re


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
            # this code is extracted using regular expression in python to remove the code from a string like this: /discussions/microsoft/view/51459-exam-az-104-topic-5-question-43-discussion/
            code = re.search(
                r"/discussions/microsoft/view/(\d+)-[\w-]+/\Z", question['href']).group(1)
            topic = re.search(r"topic-(\d+)", question['href']).group(1)
            number = re.search(
                r"question-(\d+)", question['href']).group(1)

            self.addQuestion(Question(int(code), title, link,
                             len(self.questions)+1, int(topic), int(number)))

    def writeJSON(self):
        return self.file.write(self.toJSON())


class Question:
    def __init__(self, code, question, link, number, topic, nquestion):
        self.question = question
        self.link = link
        self.code = code
        self.number = number
        self.topic = topic
        self.nquestion = nquestion


ai102 = Questions("ai-102")
az104 = Questions("az-104")
az204 = Questions("az-204")
az220 = Questions("az-220")
az305 = Questions("az-305")
az400 = Questions("az-400")
dp100 = Questions("dp-100")
dp203 = Questions("dp-203")
dp300 = Questions("dp-300")
dp420 = Questions("dp-420")
pl200 = Questions("pl-200")
pl300 = Questions("pl-300")
pl400 = Questions("pl-400")
pl600 = Questions("pl-600")


def find_questions(page):
    html_text = requests.get(
        'https://www.examtopics.com/discussions/microsoft/' + str(page) + '/').text
    soup = BeautifulSoup(html_text, 'lxml')

    ai102.findAll(soup)
    az104.findAll(soup)
    az204.findAll(soup)
    az220.findAll(soup)
    az305.findAll(soup)
    az400.findAll(soup)
    dp100.findAll(soup)
    dp203.findAll(soup)
    dp300.findAll(soup)
    dp420.findAll(soup)
    pl200.findAll(soup)
    pl300.findAll(soup)
    pl400.findAll(soup)
    pl600.findAll(soup)


if __name__ == '__main__':

    for page in range(1, 20):
        find_questions(page)
        print(page)

    for page in range(501, 1000):
        find_questions(page)
        print(page)

    for page in range(1001, 1312):
        find_questions(page)
        print(page)

ai102.writeJSON()
az104.writeJSON()
az204.writeJSON()
az220.writeJSON()
az305.writeJSON()
az400.writeJSON()
dp100.writeJSON()
dp203.writeJSON()
dp300.writeJSON()
dp420.writeJSON()
pl200.writeJSON()
pl300.writeJSON()
pl400.writeJSON()
pl600.writeJSON()
