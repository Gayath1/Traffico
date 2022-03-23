# from flask_pymongo import PyMongo
from flask import Flask, jsonify, request

import os
# from flask_mongoengine import MongoEngine
from database.db import initialize_db
from flask_restful import Api
from api.nic import initialize_routes

app = Flask(__name__)
api = Api(app)

# mongodb_client = PyMongo(
#     app, uri="mongodb+srv://gayath:Gayya@cluster0.cxze7.mongodb.net/Traffico?retryWrites=true&w=majority")
# db = mongodb_client.db

# database_name = "Traffico"
# DB_URI = "mongodb+srv://gayath:Gayya@cluster0.cxze7.mongodb.net/Traffico?retryWrites=true&w=majority"
# app.config["MONGODB_HOST"] = DB_URI

# db = MongoEngine()
# db.init_app(app)
DB_PASS = os.environ.get("DB_PASS")
print(DB_PASS)
# DB_PASS = "Gayya"

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb+srv://gayath:Gayya@cluster0.cxze7.mongodb.net/Traffico?retryWrites=true&w=majority'
}
# class Drivers(db.Document):

#     Nic = db.StringField()
#     name = db.StringField()
#     expires = db.StringField()
#     type = db.StringField()

#     def to_json(self):
#         # convert to jsonify
#         return {

#             "Nic": self.Nic,
#             "name": self.name,
#             "expires": self.expires,
#             "type": self.type
#         }


# @app.route('/api/driver/<nic>', methods=['GET'])
# def get_driver(nic):
#     driver = Drivers.objects(Nic=nic).first()
#     if driver:
#         return jsonify(driver.to_json())
#     return jsonify({"message": "Driver not found"}), 404


# @app.route('/api/drivers', methods=['GET'])
# def get_movies():
#     movies = Drivers.objects()
#     return jsonify(movies), 200


# @app.route('/api/drivers/add', methods=["POST"])
# def add_movie():
#     body = request.get_json()
#     movie = Drivers(**body).save()
#     return jsonify(movie), 201

# @app.route("/")
# def home():
#     todos = db.Drivers.find()
#     return flask.jsonify([todo for todo in todos])

initialize_db(app)
initialize_routes(api)

# if __name__ == '__main__':
app.run(debug=True)

# app.run(host='localhost', port=5000)
