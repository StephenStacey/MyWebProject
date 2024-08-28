from flask import Flask, jsonify, render_template, request, redirect, get_flashed_messages
import sqlite3

app = Flask(__name__)

def init_db():
    """Initialize the database with the comments table if it doesn't exist."""
    with sqlite3.connect('comments.db') as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                comment TEXT NOT NULL
            )
        ''')
        conn.commit()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        comment = request.form.get('comment')

        if not name or not comment:
            return redirect('/')

        try:
            with sqlite3.connect('comments.db') as conn:
                cursor = conn.cursor()
                cursor.execute("INSERT INTO comments (name, comment) VALUES (?, ?)", (name, comment))
                conn.commit()
        except sqlite3.Error as e:
            print(f"Database error: {e}")

        return redirect('/')

    comments = []
    try:
        with sqlite3.connect('comments.db') as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT id, name, comment FROM comments")  # Ensure 'id' is included here
            comments = cursor.fetchall()
    except sqlite3.Error as e:
        print(f"Database error: {e}")

    return render_template('index.html', comments=comments)



@app.route('/update-comment', methods=['POST'])
def update_comment():
    data = request.json
    comment_id = data.get('id')
    updated_comment = data.get('comment')

    if not comment_id or not updated_comment:
        return jsonify({"success": False, "message": "Invalid data"}), 400

    try:
        with sqlite3.connect('comments.db') as conn:
            cursor = conn.cursor()
            cursor.execute('UPDATE comments SET comment = ? WHERE id = ?', (updated_comment, comment_id))
            conn.commit()

        return jsonify({"success": True, "message": "Comment updated successfully"})

    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


@app.route('/delete-comment', methods=['POST'])
def delete_comment():
    data = request.get_json()  # Get the JSON data from the request
    comment_id = data.get('id')  # Extract the 'id' from the JSON

    if not comment_id:
        return jsonify({"success": False, "message": "Invalid data"}), 400

    try:
        with sqlite3.connect('comments.db') as conn:
            cursor = conn.cursor()
            cursor.execute('DELETE FROM comments WHERE id = ?', (comment_id,))
            conn.commit()

        return jsonify({"success": True, "message": "Comment deleted successfully"})

    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


@app.route('/map')
def map_view():
    return render_template('map.html')


@app.route('/map.html')
def map():
    lat = request.args.get('lat', default=0, type=float)
    lng = request.args.get('lng', default=0, type=float)
    zoom = request.args.get('zoom', default=8, type=int)
    
    # Pass these parameters to your template
    return render_template('map.html', lat=lat, lng=lng, zoom=zoom)    


if __name__ == '__main__':
    init_db()
    app.run(debug=True)


