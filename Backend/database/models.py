from .db import db

class Drivers(db.Document):

    Nic = db.StringField()
    name = db.StringField()
    expires = db.StringField()
    type = db.StringField()

    def to_json(self):
        # convert to jsonify
        return {

            "Nic": self.Nic,
            "name": self.name,
            "expires": self.expires,
            "type": self.type
        }
