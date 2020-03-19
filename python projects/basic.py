from flask import Flask, request, jsonify;
app = Flask(__name__)

subscribers = {'dinesh': '<h1>hey this is dinesh</h1>\n<h2>Trying out html</h2>', 'ravi': '<h1>hey this is ravi</h1>', 'karthick': '<h1>yo this is karthick</h1>'}
collection = dict()

def createCollection(coll):
        

@app.route('/')
def dinesh():
    return '<h1>this is dinesh</h1>'

@app.route('/subscriber/<sub>',methods=['GET','POST'])
def karthick(sub):
    return str(subscribers[sub])

@app.route('/collection/<coll>', methods=['POST'])
def collection(coll):
    if request.method == 'POST':
        return createCollection(coll)