from flask import Response, request, jsonify
from database.models import Drivers
from flask_restful import Resource
import json

# @app.route('/api/driver/<nic>', methods=['GET'])
# def get_driver(nic):
#     driver = Drivers.objects(Nic=nic).first()
#     if driver:
#         return jsonify(driver.to_json())
#     return jsonify({"message": "Driver not found"}), 404


class NicApi(Resource):
    def get(self, nic):
        driver = Drivers.objects(Nic=nic).first()
        if driver:
            
            return jsonify(driver.to_json())
        return jsonify({"message": "Driver not found"}), 404


def initialize_routes(api):
    api.add_resource(NicApi, '/api/driver/<nic>')
