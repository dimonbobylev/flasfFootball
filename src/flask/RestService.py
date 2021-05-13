from flask import Flask, jsonify;
from flask_cors import CORS;
from collections import Counter;
# from flask_restful import Resource, Api;


app = Flask(__name__)
# api=Api(app)
CORS(app)

footballPlayers = {
    "football": [
    {
        "name": "Messi",
        "club": "Barselona",
        "country": "Argentina",
        "number": "10",
        "position": "striker",
        "statistics":"50"
    },
    {
        "name": "Ronaldo",
        "club": "Juventus",
        "country": "Portugal",
        "number": "7",
        "position": "striker",
        "statistics":"33"
    },
    {
        "name": "Neymar",
        "club": "PSG",
        "country": "Brazil",
        "number": "10",
        "position": "striker",
        "statistics":"25"
    },
        {
        "name": "Frankie de Jong",
        "club": "Barselona",
        "country": "Netherlands",
        "number": "21",
        "position": "midfielder",
        "statistics":"5"
    },
        {
            "name": "van Dijk",
            "club": "Liverpool",
            "country": "Netherlands",
            "number": "4",
            "position": "defender",
            "statistics":"3"
        },
    ]
}
CountryDict = {
"country": "",
"kol": ""
}


@app.route("/", methods=['GET'])
def index():
    return "Welcome to CodezUp";

@app.route("/footballReport/", methods = ['GET'])
def FootballReport():
    global footballPlayers
    return jsonify([footballPlayers])


@app.route("/footballCountry/", methods = ['GET'])
def FootballCountry():
    global footballPlayers
    CountryArray = []
    qwer = footballPlayers["football"]  # преобразование словаря в массив словарей
    i = len(qwer)                       # получение длины массива
    footballCountry = []
    for number in range(i):
        footballCountry.append(qwer[number]["country"]) # массив footballCountry заполняется названиями стран
    print(footballCountry)
    a = dict(Counter(footballCountry))
    print(a)
#     print(a.items())

    CountryNew = []

    for m in set(footballCountry):  # с помощию множества set отбрасываем повторяющиеся страны
        CountryNew.append(m)       # массив clubNew заполняется уникальными названиями стран из множества
#         CountryDict['country'] = m
#         CountryDict['kol'] = 1
#         print(CountryDict)
#         CountryArray.append(CountryDict)
#     print(CountryNew)
#     print(CountryArray)

#     return jsonify(CountryNew)
    return jsonify(a)


if __name__ == '__main__':
    app.run(debug=True)
