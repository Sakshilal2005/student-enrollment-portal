from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
app = Flask(__name__)
CORS(app)
def init_db():
    conn = sqlite3.connect("college.db")
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS students(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        course TEXT
    )
    """)
    conn.commit()
    conn.close()
init_db()
@app.route("/")
def home():
    return "Flask Backend Running"
@app.route("/register", methods=["POST"])
def register():
    data = request.json
    name = data["name"]
    email = data["email"]
    course = data["course"]
    conn = sqlite3.connect("college.db")
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO students (name,email,course) VALUES (?,?,?)",
        (name,email,course)
    )
    conn.commit()
    conn.close()
    return jsonify({"message": "Registration Successful"})
@app.route("/students", methods=["GET"])
def students():
    conn = sqlite3.connect("college.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM students")
    rows = cursor.fetchall()
    conn.close()
    students_list = []
    for row in rows:
        students_list.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "course": row[3]
        })
    return jsonify(students_list)
if __name__ == "__main__":
    app.run(debug=True)