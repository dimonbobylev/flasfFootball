from flask import Flask, jsonify;
from flask_cors import CORS;
# from flask_restful import Resource, Api;


app = Flask(__name__)
# api=Api(app)
CORS(app)

footballPlayers = {
    "football": [
    {
        "name": "Messi",
        "club": "Barselona",
        "number": "10",
        "position": "striker",
        "statistics":"50"
    },
    {
        "name": "Ronaldo",
        "club": "Juventus",
        "number": "7",
        "position": "striker",
        "statistics":"33"
    },
    {
        "name": "Neymar",
        "club": "PSG",
        "number": "10",
        "position": "striker",
        "statistics":"25"
    },
        {
        "name": "Frankie de Jong",
        "club": "Barselona",
        "number": "21",
        "position": "midfielder",
        "statistics":"5"
    },
    ]
}


@app.route("/", methods=['GET'])
def index():
    return "Welcome to CodezUp";

@app.route("/footballReport/", methods = ['GET'])
def FootballReport():
    global footballPlayers
    qwer = footballPlayers["football"]  # преобразование словаря в массив словарей
    i = len(qwer)                       # получение длины массива
    footballclub = []
    for number in range(i):
        footballclub.append(qwer[number]["club"]) # массив footballclub заполняется названиями клубов
    clubNew = []
    for m in set(footballclub):  # с помощию множества set отбрасываем повторяющиеся клубы
        clubNew.append(m)       # массив clubNew заполняется уникальными названиями клубов из множества
    print(clubNew)

    # return jsonify([footballPlayers])
    return jsonify(clubNew)


if __name__ == '__main__':
    app.run(debug=True)