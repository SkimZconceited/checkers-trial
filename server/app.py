from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  
# app.config['SECRET_KEY'] = 'your_secret_key'
CORS(app)

# db.init_app(app)
# db = SQLAlchemy(app)
# migrate = Migrate(app, db)

@app.route('/', methods=['POST'])
def home():
    
    board = {
        "board": [
        [" ", "W", " ", "W", " ", "W", " ", "W"],
        ["W", " ", "W", " ", "W", " ", "W", " "],
        [" ", "W", " ", "W", " ", "W", " ", "W"],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        ["B", " ", "B", " ", "B", " ", "B", " "],
        [" ", "B", " ", "B", " ", "B", " ", "B"],
        ["B", " ", "B", " ", "B", " ", "B", " "]
    ]}
    return jsonify(board)

if __name__ == '__main__':
    app.run(port=5555, debug=True)