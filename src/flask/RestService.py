from flask import Flask, jsonify;
from flask_cors import CORS;
from collections import Counter;
from collections import OrderedDict
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
        {
            "name": "Di Maria",
            "club": "PSG",
            "country": "Argentina",
            "number": "11",
            "position": "striker",
            "statistics":"15"
        },
    ]
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
    CountryDict = {
        "countryMass": [ ]
    }
    global footballPlayers
    qwer = footballPlayers["football"]  # преобразование словаря в массив словарей
    i = len(qwer)                       # получение длины массива
    footballCountry = []
    for number in range(i):
        footballCountry.append(qwer[number]["country"]) # массив footballCountry заполняется названиями стран
#     print(footballCountry)
    a = dict(Counter(footballCountry))    # a - словарь, ключи - названия стран, значение - количество повторений
    a_sorted_by_value = OrderedDict(sorted(a.items(), key=lambda x: x[1], reverse=True))
#   OrderedDict - словарь в котором элементы имеют постоянное расположение.
#   reverse=True сортировка по убыванию, reverse=False по возрастанию
    print(a_sorted_by_value)

    for key,value in a_sorted_by_value.items() :
        oneCountry = {
            "country": key,
            "kol": value
        }
        CountryDict["countryMass"].append(oneCountry)

    print(CountryDict["countryMass"])
    return jsonify([CountryDict])


if __name__ == '__main__':
    app.run(debug=True)
