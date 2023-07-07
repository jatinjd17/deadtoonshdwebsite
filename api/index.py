import json
from flask import Flask
from flask import request, jsonify, session, redirect
import scrapy
import math
from scrapy.selector import Selector
from flask_cors import CORS
from flask_pymongo import PyMongo
import requests
import bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from bson.json_util import dumps
from bson import json_util
# from google.oauth2 import id_token
# from google.auth.transport import requests

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
app.config['MONGO_DBNAME'] = 'deadtoonshd'
app.config['MONGO_URI'] = 'mongodb+srv://jatin:jatin123@cluster0.1zrdh.mongodb.net/deadtoonshd?retryWrites=true&w=majority'
app.secret_key = "super secret key"
app.config['JWT_SECRET_KEY'] = 'jatinjwt-secret-key'
jwt = JWTManager(app)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
       "origins": "*"
    }
})
mongo = PyMongo(app)

dataaa = {
                "adult": 'true',
                "backdrop_path": "/nniZPBIfrep9wbx0l1529RHXeD8.jpg",
                "genre_ids": [
                    16,
                    10751,
                    12,
                    14,
                    35
                ],
                "id": 502356,
                "original_language": "en",
                "original_title": "The Super Mario Bros. Movie",
                "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
                "popularity": 1567.974,
                "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
                "release_date": "2023-04-05",
                "title": "The Super Mario Bros. Movie",
                "video": 'false',
                "vote_average": 7.8,
                "vote_count": 5346
            }

@app.route("/api/adddata", methods=['GET','POST'])
def adddata():
    pokemondata = {'img': 'https://www.deadtoons.co/wp-content/webp-express/webp-images/uploads/2021/07/Pokemon-Season-4-Hindi-Dubbed-Episodes-Download-480P-720P-1080P-1320x743.png.webp', "info": 'From the sprawling metropolis of Goldenrod City to the icy peak of Snowtop Mountain, the Johto region presents Ash, Misty, and Brock with exciting new adventures—along with a few familiar faces like their old friends Todd, Duplica, and Suzie! Johto’s rich past means plenty of Pokémon mysteries for our heroes to solve, and its exciting present means some tough challenges—Ash tackles three more Gyms, while handling competitions like the Pokémon Sumo Conference along the way.', 'title': 'Pokemon Season 4 Johto League Champions Episodes Hindi Dubbed Download (Hungama TV Dub)'}
    print('222222222222')
    if request.method == 'GET':
        db = mongo.db.alldata
        db.insert_one(pokemondata)
        return 'done!!!'


@app.route("/api/getdata", methods=['GET','POST'])
def googlelogin():
    print('11111111111111')
    if request.method == 'GET':
        db = mongo.db.alldata

        # r = requests.get('https://api.themoviedb.org/3/discover/movie?api_key=56f19136c3287a8765285f9e42a20242&with_genres=35')

        # print(r.json())

        # r.json()

        data = db.find({})

        list_cur = list(data)
        json_data = dumps(list_cur)

        # newdata = []
        # json_docs = []
        # json_doc = json.dumps(data, default=json_util.default)
        # json_docs.append(json_doc)

        # for i in data:
        #     newdata.append(str(i))
            # print(i)

        print((json_data))

        return json.loads(json_data)
    

@app.route("/api/getone", methods=['GET','POST'])
def getone():
    print('11111111111111')
    if request.method == 'GET':
        db = mongo.db.alldata

        # r = requests.get('https://api.themoviedb.org/3/discover/movie?api_key=56f19136c3287a8765285f9e42a20242&with_genres=35')

        # print(r.json())

        # r.json()

        data = db.find({'title': 'Pokemon Season 3 The Johto Journeys Episodes Hindi Dubbed Download (Hungama TV Dub)'})

        list_cur = list(data)
        json_data = dumps(list_cur)

        # newdata = []
        # json_docs = []
        # json_doc = json.dumps(data, default=json_util.default)
        # json_docs.append(json_doc)

        # for i in data:
        #     newdata.append(str(i))
            # print(i)

        print((json_data))

        return json.loads(json_data)


if __name__ == "__main__":
    # from waitress import serve
    # serve(app, host="0.0.0.0", port=9000)
    # app.run(host='0.0.0.0', port=2000,debug=True)
    app.run(host='0.0.0.0', port=9000,debug=True)
























#####################################

# @app.route("/api/googlelogin", methods=['GET','POST'])
# def googlelogin():
#     print('11111111111111')
#     if request.method == 'POST':
#         # print('ssss')
#         # daaa = json.load(request)
#         # jtopy=json.dumps(daaa)
#         # print(jtopy)
#         # neww = request.form.get()
#         neww = request.get_json()
#         idinfo = id_token.verify_oauth2_token(neww['credential'], requests.Request(), '577101913991-3lui3759un3sfba21h201r9g8ouf7qi0.apps.googleusercontent.com')
#         # print(neww['credential'])

#         users = mongo.db.users

#         email = users.find_one({'email': idinfo['email']})
#         # for document in email:
#         #     print(document)

#         if(email):
#             print('email already exist')
#             print(email['email'])
#             return jsonify({'email': email['email'], 'profilepic': email['profilepic'], 'cartcourses': email['cartcourses']})

#         else:
#             useremail = idinfo['email']
#             userprofilepic = idinfo['picture']
#             userpassword = 'googleauth'
#             cartcourses = []
#             userdata = {'email': useremail, 'profilepic': userprofilepic, 'password': userpassword, 'cartcourses': cartcourses}
#             users.insert_one(userdata)
            

#         # print(idinfo)
#         return jsonify({'email': idinfo["email"], 'profilepic': idinfo['picture']})
    

# @app.route("/api/normallogin", methods=['GET','POST'])
# def normallogin():
#     print('11111111111111')
#     if request.method == 'POST':
#         # print('ssss')
#         # daaa = json.load(request)
#         # jtopy=json.dumps(daaa)
#         # print(jtopy)
#         # neww = request.form.get()
#         neww = request.get_json()

#         email = neww['email']
#         password = neww['password']

#         users = mongo.db.users

#         isemail = users.find_one({'email': email})

#         # print(isemail['cartcourses'])

#         if(isemail):
#             if(isemail['password'] == password):
#                 try:
#                     if(isemail['cartcourses']):
#                         return jsonify({'email': isemail["email"], 'cartcourses': isemail['cartcourses']})
#                 except:
#                     return jsonify({'email': isemail["email"]})
#             else:
#                 return jsonify({'error': 'Invalid Password'})

#         else:
#             return jsonify({'error': 'Email No Exists'})
        


        
# @app.route("/api/createaccount", methods=['GET','POST'])
# def createaccount():
#     print('11111111111111')
#     if request.method == 'POST':
#         # print('ssss')
#         # daaa = json.load(request)
#         # jtopy=json.dumps(daaa)
#         # print(jtopy)
#         # neww = request.form.get()
#         neww = request.get_json()

#         email = neww['email']
#         password = neww['password']

#         users = mongo.db.users

#         isemail = users.find_one({'email': email})

#         if(isemail):
#             return jsonify({'error': 'Email Already Exists'})
            

#         else:
#             userdata = {'email': email, 'password': password}
#             users.insert_one(userdata)
#             return jsonify({'success': 'Account Created Successfully'})
        
#         # return jsonify({'email': idinfo["email"], 'profilepic': idinfo['picture']})

# @app.route("/api/addcoursestouser", methods=['GET','POST'])
# def addcoursestouser():
#     # print('11111111111111')
#     if request.method == 'POST':
#         # print('ssss')
#         # daaa = json.load(request)
#         # jtopy=json.dumps(daaa)
#         # print(jtopy)
#         # neww = request.form.get()
#         neww = request.get_json()
#         email = neww['email']
#         coursedata = neww['coursedata']
#         users = mongo.db.users
#         userinfo = users.find_one({'email': email})

#         if(userinfo):
#             data =  users.find_one_and_update({'email': neww['email']}, {'$push': {'cartcourses': coursedata}}, upsert = True, new = True)

            
#             # print(data)
#             # session['email'] = request.form['username']
#             return jsonify({'success': 'Successfully Added to Cart Products','data': json.loads(json_util.dumps(data))})
#         else:
#             return 'Invalid User'
        

# @app.route("/api/deletecartproduct", methods=['GET','POST'])
# def deletecartproduct():

#     if request.method == 'POST':
#         neww = request.get_json()
#         # print(neww)
#         users = mongo.db.users

#         data = users.find_one_and_update({ 'email' : neww['email'] },{ "$pull" : { "cartcourses" : { "title" : neww['title']}}}, new = True)

#         # return 'Done'

#         # print(data)

#         if data is not None:

#             return jsonify({'success': 'Successfully Removed From Tracked Products','data': json.loads(json_util.dumps(data))})
        
#         else:
#             return jsonify({'error': 'No Product Found'})
        

# @app.route("/api/deleteallcartproduct", methods=['GET','POST'])
# def deleteallcartproduct():

#     if request.method == 'POST':
#         neww = request.get_json()
#         # print(neww)
#         users = mongo.db.users

#         data = users.find_one_and_update({ 'email' : neww['email'] },{ "$set" : { "cartcourses" : []}}, new = True)

#         # return 'Done'

#         # print(data)

#         if data is not None:

#             return jsonify({'success': 'Successfully Removed All Cart Products','data': json.loads(json_util.dumps(data))})
        
#         else:
#             return jsonify({'error': 'No Product Found'})
        
# # @app.route("/api/checkcartproducts", methods=['GET','POST'])
# # def checkcartproducts():

# #     if request.method == 'POST':
# #         neww = request.get_json()
# #         # print(neww)
# #         users = mongo.db.users
# #         trackedpro = users.find_one({"email": neww['email']}, {'cartcourses', 'email'})

# #         # print(trackedpro['trackedproducts'])
# #         # print(neww['product'])

# #         for i in trackedpro['cartcourses']:
# #             # print(i['product'])

# #             if(i['title'] == neww['title']):
# #                 return jsonify({'Found': 'True'})
# #         return jsonify({'NOTFound': 'True'})


# @app.route("/api/getallcartproducts", methods=['GET','POST'])
# def getallcartproducts():

#     if request.method == 'POST':
#         neww = request.get_json()
#         # print(neww)
#         users = mongo.db.users
#         cartproducts = users.find_one({"email": neww['email']}, {'cartcourses', 'email'})

#         if cartproducts is not None:
#             # print(cartproducts)
#             return jsonify({'data': json.loads(json_util.dumps(cartproducts))})
            
        
#         else:
#             return jsonify({'error': 'noooo'})
