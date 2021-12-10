use educational_project;
db.dropDatabase();

db.animals.insertOne(
    {
        "name" : "Dolphin",
        "region" : "Ocean",
        "type" : "mammal",
        "class" : "class1",
        "diet" : "carnivore",
        "population" : 2,
        "status" : "endangered",
        "lifespan" : 40,
        "weight": 3000,
        "body-length": 2500,
        "top-speed": 30,
        "facts": ["fact1", "fact2"],
        "images": ["image1", "image2"], 
    }
);