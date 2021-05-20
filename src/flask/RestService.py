from flask import Flask, jsonify;
from flask_cors import CORS;
from collections import Counter;
from collections import OrderedDict;
import football;            # подключаем файл football.py
# from flask_restful import Resource, Api;


app = Flask(__name__)
# api=Api(app)
CORS(app)


@app.route("/", methods=['GET'])
def index():
    return "Welcome to CodezUp";

@app.route("/footballReport/", methods = ['GET'])
def FootballReport():
#     global footballPlayers
    return jsonify([football.footballPlayers])

@app.route("/footballClub/", methods = ['GET'])
def FootballClub():
    return jsonify([football.footballClubs])   # возвращаем словарь footballClubs из файла football.py

@app.route("/footballCountriesTop/", methods = ['GET'])
def FootballCountriesTop():
    return jsonify([football.footballCountries])   # возвращаем словарь footballCountries из файла football.py


@app.route("/footballCountry/", methods = ['GET'])
def FootballCountry():
    CountryDict = {
        "countryMass": [ ]
    }
#     global footballPlayers
    qwer = football.footballPlayers["football"]  # преобразование словаря в массив словарей
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
