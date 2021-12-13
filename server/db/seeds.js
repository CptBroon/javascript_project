use educational_project;
db.dropDatabase();

db.animals.insertMany([
    {
        "name" : "Dolphin",
        "region" : "ocean",
        "type" : "mammal",
        "diet" : "carnivore",
        "population" : 600000,
        "status" : "endangered",
        "lifespan" : 40,
        "weight": 250000,
        "body-length": 2500,
        "top-speed": 30,
        "facts": [
            "Bottlenose dolphins are marine mammals that live in tropical and temperate oceans (oceans with mild temperatures) around the world. This includes the waters off the UK and Ireland, where you can spot them swimming and playing in bays and river estuaries!",
            "Social creatures, bottlenose dolphins travel in groups, called pods, of around 10-15. In these groups they play and hunt together, as well as cooperate to raise young dolphin calves and help each other."
        ],
        "images": [
            "https://i.natgeofe.com/n/05e75e40-3ea6-4195-bf33-be37466f7aec/common-bottlenose-dolphin_thumb_4x3.jpg",
            "https://i.natgeofe.com/n/d5e776f9-d68f-4de8-b3af-e2af651b9011/3319154_16x9.jpg"
        ] 
    },
    {
        "name" : "Orca",
        "region" : "ocean",
        "type" : "mammal",
        "diet" : "carnivore",
        "population" : 50000,
        "status" : "endangered",
        "lifespan" : 60,
        "weight": 3000000,
        "body-length": 6000,
        "top-speed": 56,
        "facts": [
            "Orcas are the oceans apex predators, which means they have no natural predators. Depending on where they live, orcas can eat fish, stingrays, sharks, whales, seals, penguins, and much more. Orcas have even been know to hunt great white sharks.",
            "Like dolphins, orcas live in close-knit groups called “pods.” Orcas live in a matriarchal society, where older females pass down knowledge and specific behaviours to the younger members of their family."
        ],
        "images": [
            "https://dkt6rvnu67rqj.cloudfront.net/sites/default/files/styles/max_1000/public/media/GettyImages-536459776.jpg?itok=tbqLuPJS",
            "https://a-z-animals.com/media/killer-whale-2.jpg"
        ]
    },
    {
        "name" : "Blue Whale",
        "region" : "ocean",
        "type" : "mammal",
        "diet" : "carnivore",
        "population" : 10000,
        "status" : "endangered",
        "lifespan" : 85,
        "weight": 150000000,
        "body-length": 30000,
        "top-speed": 12,
        "facts": [
            "The longest one ever recorded was a magnificent 108 feet (33 meters) long. That's about as long as three school buses lined up end to end.",
            "The blue whale's heart is huge. It's the largest heart in the animal kingdom, weighing about 400 pounds (180 kg) and roughly the size of a bumper car. As a blue whale dives to feed, its giant heart may only beat twice per minute."
        ],
        "images": [
            "https://www.treehugger.com/thmb/M_zf0d4hn58Vr0CteaY_q8pguBw=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__treehugger__images__2015__04__blue-whale-back-755b31c2586e4674b3b750c0b579d1b0.jpg",
            "https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        ]
    },
    {
        "name" : "Great White Shark",
        "region" : "ocean",
        "type" : "fish",
        "diet" : "carnivore",
        "population" : 3500,
        "status" : "endangered",
        "lifespan" : 70,
        "weight": 1000000,
        "body-length": 5000,
        "top-speed": 56,
        "facts": [
            "Most of these, however, are not fatal. Research finds that great whites, which are naturally curious, often 'sample bite' then release their human target.",
            "Fatal attacks, experts say, are typically cases of mistaken identity: Swimmers and surfers can look a lot like the great white's favorite prey—seals—when seen from below."
        ],
        "images": [
            "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg",
            "https://www.irishtimes.com/polopoly_fs/1.4072257.1572891362!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg"
        ]
    },
    {
        "name" : "Starfish",
        "region" : "ocean",
        "type" : "invertebrate",
        "diet" : "carnivore",
        "population" : 3500,
        "status" : "critically endangered",
        "lifespan" : 35,
        "weight": 5000,
        "body-length": 650,
        "top-speed": 1,
        "facts": [
            "Starfish do not have a central nervous system; instead, their entire body is made up of a collection of sensory nerves. Starfish observe the world through small eyes located at the ends of their limbs",
            "Starfish possess the ability to regrow a limb that is lost. This process is slow, and it only occurs if the starfish survives the pain of the initial break. Some species of starfish can break off their own limbs in order to escape from predators.",
            "Starfish don’t actually have blood in their bodies. Instead, they pump seawater through their vascular structure in order to carry nutrients and oxygen."
        ],
        "images": [
            "https://a-z-animals.com/media/animals/images/original/starfish2.jpg",
            "https://a-z-animals.com/media/starfish-1.jpg"
        ]
    },
    {
        "name" : "Seal",
        "region" : "ocean",
        "type" : "mammal",
        "diet" : "carnivore",
        "population" : 2000000,
        "status" : "abundant",
        "lifespan" : 25,
        "weight": 900000,
        "body-length": 3000,
        "top-speed": 35,
        "facts": [
            "With its cute, round eyes, seals see very well under water. However, they would need eyeglasses to see sharply above water. Seals are completely adapted to life under water.",
            "Young seals must teach themselves to eat and catch fish after nursing ends. Their mother doesn’t teach them the tricks. In this period, young seals lose a lot of weight. But eventually, most of them learn it on time.",
            "Most parts of the seal are well insulated with a thick layer of blubber. Sometimes the layer is more than 5 centimeters thick."
        ],
        "images": [
            "https://www.ecomare.nl/wp-content/uploads/2017/04/ill-boska-op-ijs2-sw.jpg",
            "https://www.ecomare.nl/wp-content/uploads/2017/04/zeehonden-zandbank-0074-sw.jpg"
        ]
    },
    {
        "name" : "Squid",
        "region" : "ocean",
        "type" : "invertebrate",
        "diet" : "carnivore",
        "population" : 4300000,
        "status" : "abundant",
        "lifespan" : 5,
        "weight": 1500,
        "body-length": 450,
        "top-speed": 40,
        "facts": [
            "Squid have three hearts.",
            "Some squid have bioluminescent organs that make them glow in the dark."
        ],
        "images": [
            "http://www.seawater.no/fauna/mollusca/images/CRW_6927.jpg",
            "https://guide-mags.ams3.digitaloceanspaces.com/home/cumbriaguideco/public_html/2020/02/squid.jpg"
        ]
    },
    {
        "name" : "Jellyfish",
        "region" : "ocean",
        "type" : "invertebrate",
        "diet" : "omnivore",
        "population" : 9000000,
        "status" : "abundant",
        "lifespan" : 1,
        "weight": 15000,
        "body-length": 400,
        "top-speed": 7,
        "facts": [
            "The Australian box jellyfish (Chironex fleckeri) is considered the most venomous marine animal on earth. Its sting can cause paralysis, cardiac arrest, and death within a few minutes",
            "Despite their venomous defenses, jellyfish are not without predators. Tunas, sharks, swordfish, sea turtles, and even some species salmon are jellyfish’s natural enemies that are known to prey upon jellies."
        ],
        "images": [
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
            "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2011/08/thumb_720_450_jellyfish_shutterstock_56875405.jpg"
        ]
    },
    {
        "name" : "Octopus",
        "region" : "ocean",
        "type" : "invertebrate",
        "diet" : "carnivore",
        "population" : 9000000,
        "status" : "abundant",
        "lifespan" : 2,
        "weight": 9000,
        "body-length": 1025,
        "top-speed": 40,
        "facts": [
            "An octopus's brain-to-body ratio is the largest of any invertebrate. It's also larger than many vertebrates, although not mammals.",
            "Octopuses appear to be able to recognise individuals outside of their own species, including human faces."
        ],
        "images": [
            "https://i.natgeofe.com/n/7c170327-796c-413c-a1c1-ad459883888b/common-octopus_thumb_16x9.JPG?w=1200",
            "https://www.gannett-cdn.com/-mm-/de0d29478c0d705010d1d45d3affdd90b9c411d9/c=0-138-2650-1629/local/-/media/2020/09/11/Portsmouth/ghows-SO-200819886-22a233c6.jpg"
        ]
    },
    {
        "name" : "Walrus",
        "region" : "ocean",
        "type" : "mammal",
        "diet" : "carnivore",
        "population" : 250000,
        "status" : "stable",
        "lifespan" : 40,
        "weight": 1000000,
        "body-length": 3500,
        "top-speed": 35,
        "facts": [
            "Both male and female walruses have large tusks. They use these tusks to help them haul themselves out of the water and onto sea ice. Their tusks are also used for fighting with other walruses, and defence against predators.",
            "Walruses are rarely found in deep water. They seem to prefer feeding at the bottom of shallow waters, eating clams, molluscs, worms, snails, soft shell crabs, shrimp and sea cucumbers."
        ],
        "images": [
            "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2019-04/Original_WW198971.jpg?h=a375d5a4&itok=z6tiDT2c",
            "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2019-04/Walrus%20mother%20calf_WW198964.jpg?h=2b813f79&itok=g4j7DYnr"
        ]
    },
    {
        "name" : "Tuna",
        "region" : "ocean",
        "type" : "fish",
        "diet" : "carnivore",
        "population" : 1000000,
        "status" : "endangered",
        "lifespan" : 40,
        "weight": 220000,
        "body-length": 3000,
        "top-speed": 60,
        "facts": [
            "Tuna swim incredible distances as they migrate",
            "Largest (ever recorded) specimen of tuna was 21 feet long, weighing 1600 pounds.",
            "Tuna is able to change the position of its dorsal and pectoral fins to reduce drag and accelerate the swimming speed."
        ],
        "images": [
            "https://easyscienceforkids.com/wp-content/uploads/2019/03/Tuna-Fish-19-4-1.jpg",
            "https://cdn-bdidg.nitrocdn.com/TcwXgyYbSzMUheZHmBoxcLwNlPSPxzHy/assets/static/optimized/wp-content/uploads/2021/02/ae13f8684892a4cbefd85484f35fd284.bluefin-tuna-characteristics-scaled.jpg"
        ]
    },
    {
        "name" : "Clown fish",
        "region" : "ocean",
        "type" : "fish",
        "diet" : "omnivore",
        "population" : 2000000,
        "status" : "abundant",
        "lifespan" : 6,
        "weight": 250,
        "body-length": 110,
        "top-speed": 4,
        "facts": [
            "Schools of clownfish have a strict hierarchy, with the most aggressive female at the top.",
            "All clownfish are born male. When the dominant female dies, the dominant male will turn itself into a female.",
            "Clownfish are not great swimmers. They mostly hide in anemones, and when they do venture out, their swimming patterns are very erratic."
        ],
        "images": [
            "https://thelivingplanet.com/wp-content/uploads/2018/11/03.jpg",
            "https://thelivingplanet.com/wp-content/uploads/2018/11/04.jpg"
        ]
    },
    {
        "name" : "Barracuda",
        "region" : "ocean",
        "type" : "fish",
        "diet" : "carnivore",
        "population" : 1000000,
        "status" : "abundant",
        "lifespan" : 14,
        "weight": 23000,
        "body-length": 1650,
        "top-speed": 43,
        "facts": [
            "In general, barracudas are elongated fish with powerful jaws. The lower jaw of the large mouth juts out beyond the upper. Barracudas possess strong, fang-like teeth that are unequal in size and set in sockets in the jaws and on the roof of the mouth.",
            "They rely on surprise and short bursts of speed to overrun their prey, sacrificing maneuverability.",
            "Barracudas are scavengers and may mistake snorkelers for large predators, following them in hopes of eating the remains of their prey. Swimmers have been reported being bitten by barracuda, but such incidents are rare and possibly caused by poor visibility."
        ],
        "images": [
            "https://www.worldlifeexpectancy.com/images/a/w/b/sphyraena-barracuda/sphyraena-barracuda.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/eb/Barracuda_laban.jpg"
        ]
    },
    {
        "name" : "Giant Tiger Prawn",
        "region" : "ocean",
        "type" : "crustacean",
        "diet" : "omnivore",
        "population" : 1500000,
        "status" : "stable",
        "lifespan" : 3,
        "weight": 300,
        "body-length": 100,
        "top-speed": 1,
        "facts": [
            "Giant tiger prawns are nocturnal feeders who usually burrow into the substrate in the course of the day.",
            "Giant tiger prawns have eyestalks on their heads which allow them to detect predators and get hold of prey. The eyes are referred to as ommatidia and are composed of clusters of photoreceptors."
        ],
        "images": [
            "https://i0.wp.com/cbsnews1.cbsistatic.com/hub/i/2012/08/13/d4463033-a644-11e2-a3f0-029118418759/strassmann05.jpg?resize=826%2C478&ssl=1",
            "https://static01.nyt.com/images/2019/10/16/dining/15shrimp8/merlin_162336303_e2f836db-fb3d-4a88-b2cf-3d7f724f4e61-mobileMasterAt3x.jpg"
        ]
    },
    {
        "name" : "Sea turtle",
        "region" : "ocean",
        "type" : "reptile",
        "diet" : "herbivore",
        "population" : 8000,
        "status" : "critically endangered",
        "lifespan" : 150,
        "weight": 190000,
        "body-length": 1100,
        "top-speed": 35,
        "facts": [
            "Some Sea Turtles are able to hold their breath for hours at a time and can hold their breath in colder water for longer",
            "To reach their nesting grounds, sea turtles migrate long distances every 2-4 years, traveling back to the very same beaches where they were born"
        ],
        "images": [
            "https://wildlifeact.com/wp-content/uploads/2016/07/Hawksbill-Banner.jpg",
            "https://wildlifeact.com/wp-content/uploads/2014/11/Volunteering-in-the-Seychelles-20.jpg"
        ]
    },
    {
        "name" : "Manta ray",
        "region" : "ocean",
        "type" : "fish",
        "diet" : "carnivore",
        "population" : 1500,
        "status" : "endangered",
        "lifespan" : 40,
        "weight": 1600000,
        "body-length": 45000,
        "top-speed": 35,
        "facts": [
            "Just like leopard sharks, manta rays can be individually identified by the spots on the underside of their bodies.",
            "Manta rays birth little manta pups about every second year, conveniently rolled up like little burritos."
        ],
        "images": [
            "https://www.queensland.com/au/en/places-to-see/experiences/great-barrier-reef/marine-life/facts-about-manta-rays/_jcr_content/root/responsivegrid/imageb3850c48-28cd-4965-8cff-993dc8023524.coreimg.jpeg/1595457458897/2020-gbr-ladyelliotisland-divingandsnorkeling1.jpeg?fit=wrap&fmt=webp&qlt=40&wid=1200",
            "https://www.thoughtco.com/thmb/5-wfudHSzV62g_je2R_wdT_l6wM=/3435x2576/smart/filters:no_upscale()/underwater-low-angle-view-of-manta-ray--manta-alfredi--feeding-at-ocean-surface--bali--indonesia-585285435-5c02d0f5c9e77c0001cddb86.jpg"
        ]
    },
    {
        "name" : "Black howler monkey",
        "region" : "rainforest",
        "type" : "mammal",
        "diet" : "herbivore",
        "population" : 100000,
        "status" : "endangered",
        "lifespan" : 20,
        "weight": 10000,
        "body-length": 9100,
        "top-speed": 29,
        "facts": [
            "Howler Monkeys spend 80% of their time resting!",
            "Predators of Howler Monkeys include jaguars, snakes, and birds."
        ],
        "images": [
            "https://scitechdaily.com/images/Black-Howler-Monkey.jpg",
            "https://images.newscientist.com/wp-content/uploads/2021/08/12012348/PRI_194408512.jpg"
        ]
    },
    {
        "name" : "Silverback Gorilla",
        "region" : "rainforest",
        "type" : "primate",
        "diet" : "herbivore",
        "population" : 1000,
        "status" : "critically endangered",
        "lifespan" : 40,
        "weight": 220000,
        "body-length": 2000,
        "top-speed": 40,
        "facts": [
            "Gorillas live in family groups of 10 to 30, consisting of a single adult male and several females with their young.",
            "The home ranges of groups overlap and there is no defended territory; groups of gorillas which live within the same area get on with each other peacefully, sometimes mingling for a while or simply ignoring one another."
        ],
        "images": [
            "https://images.immediate.co.uk/production/volatile/sites/23/2014/07/GettyImages-157862378-7432ede.jpg?quality=45&resize=768,574",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg/1200px-Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg"
        ]
    },
    {
        "name" : "Giant anteater",
        "region" : "rainforest",
        "type" : "mammal",
        "diet" : "carnivore",
        "population" : 5000,
        "status" : "endangered",
        "lifespan" : 14,
        "weight": 41000,
        "body-length": 2200,
        "top-speed": 42,
        "facts": [
            "Their tongues are covered with tiny spines which point toward the back of the throat. Additionally, their tongue is coated with a thick, sticky coat of saliva (which is secreted from relatively enlarged salivary glands). Prior to swallowing, the insect-coated tongue is firmly pressed against the anteater's hard upper palate – crushing their meal and easing ingestion.",
            "They can eat up to 30,000 insects a day."
        ],
        "images": [
            "https://bloximages.newyork1.vip.townnews.com/victoriaadvocate.com/content/tncms/assets/v3/editorial/d/2f/d2fc2831-85db-501a-b650-80b809321883/5a8f7eb87d1b0.image.jpg",
            "https://www.thefactsite.com/wp-content/uploads/2018/07/giant-anteater-facts-702x347.jpg"
        ]
    },
    {
        "name" : "Ocelot",
        "region" : "rainforest",
        "type" : "mammal",
        "diet" : "carnivore",
        "population" : 1500000,
        "status" : "endangered",
        "lifespan" : 11,
        "weight": 12000,
        "body-length": 800,
        "top-speed": 55,
        "facts": [
            "The Ocelot is a solitary animal that occupies a home range that can be up to 30 square kilometres depending on the surrounding environment.",
            "The Ocelot is a nocturnal animal that spends the days sleeping either in thick vegetation or on a high and leafy branch."
        ],
        "images": [
            "https://a-z-animals.com/media/animals/images/original/ocelot.jpg",
            "https://a-z-animals.com/media/animals/images/original/ocelot4.jpg"
        ]
    },
    {
        "name" : "Orangutan",
        "region" : "rainforest",
        "type" : "primate",
        "diet" : "herbivore",
        "population" : 105000,
        "status" : "endangered",
        "lifespan" : 40,
        "weight": 90000,
        "body-length": 830,
        "top-speed": 5,
        "facts": [
            "This large, gentle red ape is one of our closest relatives, sharing 98% of our DNA.",
            "Great apes also have a bigger brain and can use tools, such as sticks, to help them get food to eat or leaves to make a sunshade or umbrella."
        ],
        "images": [
            "https://files.worldwildlife.org/wwfcmsprod/images/LG_Orangutans_Hero_image__c__naturepl.com_Anup_Shah_WWF.jpg/story_full_width/1y3j5is7n5_LG_Orangutans_Hero_image__c__naturepl.com_Anup_Shah_WWF.jpg",
            "https://i.natgeofe.com/n/ee9e96d7-da8c-471e-8ff7-fb28a42fc76c/orangutans_thumb_4x3.jpg"
        ]
    },
    {
        "name" : "Pangolin",
        "region" : "rainforest",
        "type" : "mammal",
        "diet" : "carnivore",
        "population" : 50000,
        "status" : "critically endangered",
        "lifespan" : 20,
        "weight": 1600,
        "body-length": 900,
        "top-speed": 5,
        "facts": [
            "Pangolin scales are made of keratin, the same protein that makes up our own hair and nails and many animals’ claws.",
            "Their name, “pangolin”, is derived from the Malay word “pengguling”, which loosely translates to “something that rolls up” – and indeed, they do!"
        ],
        "images": [
            "https://dkt6rvnu67rqj.cloudfront.net/sites/default/files/styles/max_1000/public/media/1015464.jpg?itok=Flokv_Dw",
            "https://dkt6rvnu67rqj.cloudfront.net/sites/default/files/styles/max_1000/public/media/1022442_1_0.jpg?itok=So53aYHL"
        ]
    },
    {
        "name" : "Lowland tapir",
        "region" : "rainforest",
        "type" : "mammal",
        "diet" : "omnivore",
        "population" : 2500,
        "status" : "endangered",
        "lifespan" : 20,
        "weight": 225000,
        "body-length": 1800,
        "top-speed": 5,
        "facts": [
            "They eat mainly plants and fruit. They love bananas!",
            "They talk to each other by whistling!"
        ],
        "images": [
            "https://www.yorkshirewildlifepark.com/media/w2mfah2k/tapier-web.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lowland_Tapir_%28Tapirus_terrestris%29_male_out_of_the_forest_..._-_Flickr_-_berniedup.jpg/1200px-Lowland_Tapir_%28Tapirus_terrestris%29_male_out_of_the_forest_..._-_Flickr_-_berniedup.jpg"
        ]
    },
    {
        "name" : "Slender loris",
        "region" : "rainforest",
        "type" : "primate",
        "diet" : "omnivore",
        "population" : 1500,
        "status" : "endangered",
        "lifespan" : 15,
        "weight": 250,
        "body-length": 220,
        "top-speed": 1,
        "facts": [
            "Slender lorises cannot jump even short distances, but with their long limbs they can bridge large gaps in the trees.",
            "A loris sleeps in a very particular position. It curls into a ball and puts its head between its legs."
        ],
        "images": [
            "https://animals.sandiegozoo.org/sites/default/files/2019-06/animals-pygmy-slow-loris.jpg",
            "https://www.neprimateconservancy.org/uploads/1/5/3/8/15380094/published/9940523_59.jpg?1559672214"
        ]
    },
    {
        "name" : "Jaguar",
        "region" : "rainforest",
        "type" : "mammal",
        "diet" : "carnivore",
        "population" : 64000,
        "status" : "endangered",
        "lifespan" : 15,
        "weight": 96000,
        "body-length": 1800,
        "top-speed": 80,
        "facts": [
            "Jaguars can be melanistic, where they appear almost black. Melanistic jaguars (and leopards) are known as black panthers.",
            "Unlike many domestic cats, jaguars don’t avoid water. They often live near lakes, rivers and wetlands, and are confident swimmers, known to cross large rivers."
        ],
        "images": [
            "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2019-04/Jaguar%2C%20Pantanal%2C%20Brazil%20%C2%A9%20Mary%20Chambers%20_0.jpg?h=e3ca0ad3&itok=ZWOUqze_",
            "https://www.wwf.org.uk/sites/default/files/styles/gallery_image/public/2019-05/Jaguar%20swimming%20in%20the%20Pantanal%2C%20Brazil%20%C2%A9%20Brent%20Chambers.jpg?h=8abcec71&itok=0HsKA1oU"
        ]
    },
    {
        "name" : "Green anaconda",
        "region" : "rainforest",
        "type" : "reptile",
        "diet" : "carnivore",
        "population" : 40000,
        "status" : "stable",
        "lifespan" : 10,
        "weight": 250000,
        "body-length": 9000,
        "top-speed": 5,
        "facts": [
            "Babies are around 2 feet long when they are born.",
            "Anacondas do not lay eggs, but give birth to live young."
        ],
        "images": [
            "https://images2.minutemediacdn.com/image/upload/c_crop,h_1349,w_2400,x_0,y_125/v1617378160/shape/mentalfloss/60015-gettyimages-836061794.jpg?itok=2dJUCZYG",
            "https://i.natgeofe.com/k/1fb6fee3-db45-4976-90b0-67a6ad6821a2/anaconda-water_3x2.jpg"
        ]
    },
    {
        "name" : "Poison dart frog",
        "region" : "rainforest",
        "type" : "amphibian",
        "diet" : "carnivore",
        "population" : 100000,
        "status" : "endangered",
        "lifespan" : 10,
        "weight": 28,
        "body-length": 25,
        "top-speed": 16,
        "facts": [
            "Poison dart frogs are considered one of Earth's most toxic, or poisonous, species",
            "The golden poison dart frog has enough poison to kill 20,000 mice."
        ],
        "images": [
            "https://www.blueplanetaquarium.com/wp-content/uploads/2021/01/iStock-1193723146.jpg",
            "https://lh3.googleusercontent.com/proxy/aUmWAZR1CSpdQF43Ztt8EgufcO-7E1wzOL9BgTMhrWjU0vHTc6n63Cdnru63C2zbJohzY4aNUdjvo5PUmOg0cZxnjQgAd2ycRUV13kLtVaHT0QQ84E6_5KxFHd-xUQuTfAmcAy90rqE9oxcrEqkLvaTBQLURjL7DgTy20g2mcGM5CLA0h9XB4Q"
        ]
    },
    {
        "name" : "Scarlet Macaw",
        "region" : "rainforest",
        "type" : "bird",
        "diet" : "herbivore",
        "population" : 50000,
        "status" : "stable",
        "lifespan" : 50,
        "weight": 1000,
        "body-length": 890,
        "top-speed": 56,
        "facts": [
            "The scientific name of this beautiful bird is Ara Macao.",
            "They have extremely powerful beaks with which they can easily crush nuts and seeds to eat. It also uses its beak as a climbing aid."
        ],
        "images": [
            "https://justbirding.com/wp-content/uploads/2019/01/beautiful-scarlet-macaw-flying.jpg",
            "https://justbirding.com/wp-content/uploads/2019/01/scarlet-macaw-facts.jpg"
        ]
    },
    {
        "name" : "Capybara",
        "region" : "rainforest",
        "type" : "mammal",
        "diet" : "herbivore",
        "population" : 500000,
        "status" : "stable",
        "lifespan" : 10,
        "weight": 50000,
        "body-length": 1200,
        "top-speed": 35,
        "facts": [
            "Capybaras are semi-aquatic, spending a lot of time in the water.",
            "Usually, a group of capybaras has a ratio of one male to two females."
        ],
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVzWp-tqLbs0B-FEc6N0vCpgeYutqE_7Vkg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNyg8td1T6YPudU3cMBozNpTEyJfocv6rCufW8uqF0EtxNd7hKVUpf3E0bOdQrbFwY6M&usqp=CAU"
        ]
    },
    {
        "name" : "Blue morpho butterfly",
        "region" : "rainforest",
        "type" : "insect",
        "diet" : "herbivore",
        "population" : 1000000,
        "status" : "endangered",
        "lifespan" : 1,
        "weight": 2,
        "body-length": 178,
        "top-speed": 1,
        "facts": [
            "Blue morpho butterfly are one of the largest butterflies in the world",
            "The females are generally not blue at all and tend to have have wings exhibiting various shades of brown, yellow and black."
        ],
        "images": [
            "https://render.fineartamerica.com/images/rendered/default/print/8/6/break/images/artworkimages/medium/2/blue-morpho-butterfly-with-black-edges-lpettet.jpg",
            "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/blue-morpho-butterfly-1.jpg.optimal.jpg"
        ]
    },
    {
        "name" : "Sloth",
        "region" : "rainforest",
        "type" : "mammal",
        "diet" : "herbivore",
        "population" : 10000,
        "status" : "endangered",
        "lifespan" : 20,
        "weight": 5443,
        "body-length": 700,
        "top-speed": 1,
        "facts": [
            "Sloths sleep up to 20 hours a day!",
            "If sloths are caught by a predator, they turn from sluggish to slugger, biting fiercely, hissing, slashing with their claws, and shrieking."
        ],
        "images": [
            "https://images.theconversation.com/files/421291/original/file-20210915-23-ccdc2l.jpg?ixlib=rb-1.1.0&rect=9%2C765%2C5997%2C2998&q=45&auto=format&w=1356&h=668&fit=crop",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBYyv9gFpvC3tvgvkM44mexie2fT_QRaRcw&usqp=CAU"
        ]
    },
    {
        "name" : "Python",
        "region" : "rainforest",
        "type" : "reptile",
        "diet" : "carnivore",
        "population" : 300000,
        "status" : "endangered",
        "lifespan" : 30,
        "weight": 90700,
        "body-length": 1524,
        "top-speed": 2,
        "facts": [
            "Python latch onto their prey and coil around them, slowly squeezing the air out of them until they die.",
            "There are 41 different types, or species, of pythons. This makes them one of the largest families of snakes in the entire world."
        ],
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsavL_mY8UhVmkjLYgZQM4lVgc17_ufBFkNw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJncot_7ngUaFjAxBgLP6vdcrn-tth_QZo6Q&usqp=CAU"
        ]
    },
    {
        "name" : "Boa constrictor",
        "region" : "rainforest",
        "type" : "reptile",
        "diet" : "carnivore",
        "population" : 300000,
        "status" : "stable",
        "lifespan" : 30,
        "weight": 15000,
        "body-length": 3000,
        "top-speed": 2,
        "facts": [
            "Boa constrictors have small, hooked teeth that they use to grab and hold prey. ",
            "After a large meal, a boa doesn't need to eat again for weeks."
        ],
        "images": [
            "https://metro.co.uk/wp-content/uploads/2021/09/PRC_201118982.jpg?quality=90&strip=all&zoom=1&resize=480%2C252",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6VCnSVmYrP9In4t9D13Bz35y4u7WZZMGcQ&usqp=CAU"
        ]
    },
    {
        name: "Bison",
        region: "plains",
        type: "mammal",
        diet: "herbivore",
        population: 31000,
        status: "endangered",
        lifespan: 20,
        weight: 900000,
        body_length: 2000,
        top_speed: 56,
        facts: [
            "Bison are more agile than their size would suggest - they can jump fences, swim well, and spin around quickly.",
            "Bison are nearsighted, but they have excellent senses of smell and hearing.",
            "You can judge a bison's mood by its tail. If the tail is standing straight up, it might be getting ready to charge.",
            'Baby bison are often called "red dogs" due to their orange-red coates. After a few months, their hair starts to change to dark brown and their characteristic shoulder hump and horns begin to grow.',
            "A group of bison is called herd.",
            "Bison are the largest mammals in North America.",
            "A bison’s coat is so thick and insulating that snow can cover it without melting.",
            "Called wallowing, bison roll in the dirt to deter biting flies and help shed fur.",
            "Bison were almost extinct, with only around 325 reamining in 1884.",
            "Both male and female bisons have horns."
        ],
        images: ["shorturl.at/kuxAQ", "shorturl.at/iqzOZ", "shorturl.at/krwC5", "shorturl.at/ejAP2", "shorturl.at/uAU36"]
    },
    {
        name: "African Elephant",
        region: "plains",
        type: "mammal",
        diet: "herbivore",
        population: 415000,
        status: "endangered",
        lifespan: 70,
        weight: 6000000,
        body_length: 3000,
        top_speed: 40,
        facts: [
            "The African Elephant is the world's largest land mammal.",
            "Elephants are constantly eating, because they need up to 150kg of food per day - that's around 375 tins of baked beans.",
            "Elephant calves weigh around 120kg at birth, are able to stand within 20 minutes of being born and can walk within 1 hour.",
            'An elephant’s trunk is a very impressive multi-tool. Besides being a long nose used for smelling, breathing and trumpeting, it is also used as a hand to grab things – it is sensitive enough to pick up a blade of grass, and strong enough to rip the branches off a tree.',
            "Female elephants remain pregnant for 2 years – the longest gestation period of all mammals.",
            "The memory of elephants is legendary, and for good reason. Of all land mammals, elephants possess the largest brains. They have the ability to recall distant watering holes, other elephants, and humans they have encountered — even after the passage of many years.",
            "Elephants have small eyes and poor eyesight, but they make up for this with their amazing sense of smell – the best in the whole animal kingdom! An elephant can smell water from up to 12 miles away.",
            "Elephants are highly sensitive and caring animals, and have been observed to express grief, compassion, altruism and play. They perform greeting ceremonies when a friend that has been away for some time returns to the group, and they sometimes ‘hug’ by wrapping their trunks together. Elephants will pay respect to the bones of their dead by gently touching the skulls and tusks with their trunks and feet.",
            "Elephants are able to recognise themselves using mirrors. Such displays of self-recognition indicates a very high level of awareness, and is something which only humans, apes, cetaceans and magpies are otherwise known to do.",
            "Elephants are able to recognise and distinguish human voices. They can tell the difference between human languages, male and female voices, friendly voices and those associated with danger."
        ],
        images: ["shorturl.at/foEI1", "shorturl.at/jqIQ0", "shorturl.at/ivSX4", "shorturl.at/bBQTV", "shorturl.at/lpsFR"]
    },
    {
        name: "Lion",
        region: "plains",
        type: "mammal",
        diet: "carnivore",
        population: 23000,
        status: "endangered",
        lifespan: 15,
        weight: 180000,
        body_length: 2000,
        top_speed: 80,
        facts: [
            "Only slightly smaller than the Siberian tiger, the lion is the second largest big cat, with a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail.",
            "Lions are the most sociable of all the big cats. They live in groups called prides, which usually consist of related females and their offspring. The typical pride consists of ten to fifteen lions, with several adult females, their cubs and up to four males. Some lion prides can be as large as 40 members!",
            "Female lions are the main hunters. While they’re out looking for food, the males guard the pride’s territory and their young.",
            "A lion’s roar can be heard up to eight kilometres away.",
            "Young lions have rosettes and spots on their sandy coats, but these generally disappear as they mature.",
            "Male lions grow impressive manes the older they get. These manes grow up to 16cm long and are a sign of dominance. The older they get, the darker their manes go.   As well as attracting females, their manes may also protect their neck and head from injuries during fights.",
            "Lions can eat up to 40kg of meat in a single meal - around a quarter of their body weight.  Their tongues have sharp-pointed rasps, called papillae, which are used to scrape meat off the bones.",
            "Lions are the only known cat species where individuals roar together - with even young cubs joining in with their mews. The calling sequence usually lasts about 40 seconds.  Prides often roar together to mark their territory.",
            'Lions communicate in different ways using sounds like roars, growls, moans, and grunts. Also, by leaving scent markings and through visual signals, such as the darkness of the mane. They also rub their heads on one another as an act of bonding and to spread the "family scent".',
            "The average lion will spend between 16 and 20 hours a day just resting or sleeping. It’s because they do not have many sweat glands so in order to conserve energy, lions will just lie about and watch the world unfold around them. They are more active at night when it is cooler although they do conduct most of their hunting activity during the day."
        ],
        images: ["shorturl.at/pFGIL", "shorturl.at/mIXZ2", "shorturl.at/yJNS8", "shorturl.at/iswW2", "shorturl.at/emrxV"]
    },
    {
        name: "Cheetah",
        region: "plains",
        type: "mammal",
        diet: "carnivore",
        population: 7100,
        status: "endangered",
        lifespan: 14,
        weight: 70000,
        body_length: 1000,
        top_speed: 130,
        facts: [
            "Cheetahs are the fastest land animal in the world. Due to the energy required to run at such speed, cheetahs can only maintain a chase for between 200 – 300m. If a hunt isn’t successful after 1 min, they usually stop to rest.",
            "Unlike big cats like the lion, cheetahs are unable to roar. They are closer to your domestic house cat in that they can purr, both inhaling and exhaling.",
            "Known to be typically solitary animals, females raise their cubs alone for about a year before they leave. Male cheetahs sometimes will live in a small group of brothers from the same litter.",
            "The cheetahs spots act as camouflage. The cheetah can have between 2,000 and 3,000 spots, to help it blend into surroundings when hunting or hiding from predators.",
            "Cheetah cubs have a very different coat to that of adults. The cubs have a smoky colored, long, wooly coat called a mantle. It runs down their backs and acts as a form of camouflage. It helps to conceal the cubs and their mothers assist in this by constantly seeking places to ‘hide’ them to protect the cubs from predators until they are old enough to take care of themselves.",
            "Female cheetahs will move their cubs to different hiding places every few days. Once the cubs reach 5 or 6 weeks of age, they will follow their mothers and even start eating from their kills. By the time the cubs reach one year of age, they are hunting on their own. At 15 months, they will move away from their mother and either find a mate or sometimes live in a small group.",
            "Having adapted for life in an environment where there is little water, cheetahs can go three to four days without a drop of it. That doesn’t mean that they don’t actually get any liquids at all. As it turns out, cheetahs are able to draw water from the animals they hunt, kill and eat.",
            "The Cheetah is the only big cat that is capable of turning in mid-air while sprinting.",
            "Cheetahs have been around for a very, very long time. Sumerians trained cheetahs for hunting back in 3000 BC.",
            "Cheetah cubs have a shockingly high mortality rate. One study in the 90’s the Serengeti found that 95% of cubs died before reaching adulthood. Many deaths were due to Lions, but also other predators and disease."
        ],
        images: ["shorturl.at/bvEW9", "shorturl.at/fqsJ2", "shorturl.at/bACO9", "shorturl.at/yQ123", "shorturl.at/hzA03"]
    },
    {
        name: "Giraffe",
        region: "plains",
        type: "mammal",
        diet: "herbivore",
        population: 117000,
        status: "endangered",
        lifespan: 26,
        weight: 1192000,
        body_length: 5700,
        top_speed: 60,
        facts: [
            "Giraffes are the tallest mammals on Earth. Their legs alone are taller than many humans.",
            "A giraffe's neck is too short to reach the ground. As a result, it has to awkwardly spread its front legs or kneel to reach the ground for a drink of water.",
            "Giraffes only need to drink once every few days. Most of their water comes from all the plants they eat.",
            "Giraffes spend most of their lives standing up; they even sleep and give birth standing up.",
            "The giraffe calf can stand up and walk after about an hour and within a week, it starts to sample vegetation.",
            "A giraffe’s spots are much like human fingerprints. No two individual giraffes have exactly the same pattern.",
            "Both male and female giraffes have two distinct, hair-covered horns called ossicones. Male giraffes use their horns to sometimes fight with other males.",
            "Giraffes only need 5 to 30 minutes of sleep in a 24-hour period! They often achieve that in quick naps that may last only a minute or two at a time.",
            "Giraffes are very social animals and roam around in groups. These groups, called towers, typically have around 15 members led by an adult male. The other members are females and young males.",
            "Male giraffes (called bulls) swing their long necks and butt heads to see who is stronger. This is known as “necking“ and most giraffes don’t get hurt doing it. Eventually one male will give up and walk away, probably to eat."
        ],
        images: ["shorturl.at/xAF35", "shorturl.at/arzNT", "shorturl.at/nEQ78", "shorturl.at/rzFS2", "shorturl.at/zBNOT"]
    },
    {
        name: "Hippopotamus",
        region: "plains",
        type: "mammal",
        diet: "herbivore",
        population: 148000,
        status: "endangered",
        lifespan: 50,
        weight: 1500000,
        body_length: 5000,
        top_speed: 48,
        facts: [
            "Hippos can’t swim or float! They walk or stand on surfaces below the water like sandbanks. Even so, they spend most of the day in water to protect their sensitive skin from the sun.",
            "If you’ve ever seen a hippo basking in the sun, you may have noticed what seems to be blood dripping from their skin. There is no need to be alarmed though, this substance is, in fact, a built-in “Hippo Sunblock” which is oily and red in colour. It not only provides much-needed protection from the sun’s rays, but is also an effective moisturiser and germ-killer, too.",
            "Although hippos can hold their breath for approximately seven minutes, most adult hippos resurface every three to five minutes to breathe. This is an automatic process – even sleeping hippo surface to breathe without waking.",
            "Hippos can close their nostrils and ears to prevent water from entering. This is why hippo calves can suckle on land or underwater.",
            "An open mouth is not a yawn but rather assign to warn you off. You will only see hippo ‘yawning’ while in the water because they are only territorial while in the water. You will also hear them ‘honking’ and ‘grunting’ which how they mark their territory.",
            "Hippos usually come out of the water for four to five hours at night to graze and can cover up to 10km in this time. Their diet consists of grass and they graze using muscular lips.",
            "The hippo is considered one of the most dangerous animals in Africa and it is highly aggressive, particularly if you get between it and the water. Their canine teeth (sharp teeth) are used for fighting.",
            "The hippo’s closest living relatives are whales and porpoises!",
            "Hippos usually live in groups (or “herds”) of around ten to 20 individuals, led by one large dominant male. The other members are females, their young and a few young non-breeding males.",
            "Female hippos, called cows, give birth every two years, usually to a single calf. Soon after birth, the mother and her baby join up with other cows and calves for protection against predators, such as crocodiles, lions and hyenas."
        ],
        images: ["shorturl.at/klJKV", "shorturl.at/bqBU4", "shorturl.at/gFW23", "shorturl.at/asxE9", "shorturl.at/tIPR0"]
    },
    {
        name: "Wild Turkey",
        region: "plains",
        type: "bird",
        diet: "omnivore",
        population: 6000000,
        status: "abundant",
        lifespan: 5,
        weight: 11000,
        body_length: 1400,
        top_speed: 88,
        facts: [
            "Adult male turkeys are called toms and females are called hens. Very young birds are poults and adolescents are called jakes.",
            "The wild turkey’s bald head can change color in seconds with excitement or emotion. The birds’ heads can be red (pink), white, or blue.",
            "Turkeys’ gobbles can be heard a mile or more away and they are fast on their feet with a top running speed of about 25 miles per hour — about the same as a human track star.",
            "A young poult is up, out of the nest, and walking around searching for food within an incredibly rapid 24 hours.  Turkeys have been known to lay as many as 18 eggs in a clutch, so maybe a fast exit is simply to beat the crowd.",
            "Wild turkeys sleep in trees.  The birds are usually seen walking so many people are surprised they even fly.",
            "Tom turkeys show courting behaviors much like the peacock with displays of their tails. ",
            'A group of turkeys has many awesome and unusual descriptive nouns, including a "crop", "dole", "gang", "posse", and "raffle."',
            "The wild turkey was hunted nearly to extinction by the early 1900s, when the population reached a low of around 30000 birds.",
            "Turkeys have three-times better vision than humans. They can also see in color and their eyesight covers 270 degrees.",
            "The English name “turkey” derives from historic shipping routes that passed through the country of Turkey on their way to delivering the birds to European markets."
        ],
        images: ["shorturl.at/bfvBL", "shorturl.at/ghkyL", "shorturl.at/grAI7", "shorturl.at/vyO16", "shorturl.at/qAOS3"]
    },
    {
        name: "Capybara",
        region: "plains",
        type: "mammal",
        diet: "herbivore",
        population: 1500000,
        status: "abundant",
        lifespan: 10,
        weight: 66000,
        body_length: 1300,
        top_speed: 33,
        facts: [
            "Capybaras are the world’s largest rodent. Females of this species are slightly larger than males.",
            "Their fur is coarse and thin, and is reddish brown over most of the body, turning yellowish brown on the belly and sometimes black on the face.",
            "The body is barrel-shaped, sturdy, and tailless. The front legs are slightly shorter than the hind legs, and the feet are partially webbed. This, in addition to the location of the eyes, ears, and nostrils on top of the head, make capybaras well-suited to semi-aquatic life.",
            "Capybaras are excellent swimmers, capable of diving and remaining beneath the surface for as long as 5 minutes. They can sleep in water, keeping only their noses out of the water. They also spend time wallowing in mud.",
            "Capybaras are normally crepuscular, which means that they are active at twilight: early in the morning and at sunset.",
            "Capybaras are very social animals. They live in groups of around 10-20 adults of both sexes, although groups can range in size from 3 to 100; larger aggregations often form around water resources during the dry season.",
            "Capybaras can make dog-like barks when threatened or when females are herding young.",
            "Capybaras are so trainable that in Suriname a blind man once used a capybara as a guide animal.",
            "In the 16th century, the Catholic Church classified the capybara, which can swim, as a fish so that the meat could be eaten on Fridays and during Lent.",
            "The scientific name for capybara comes from Hydro chaeris, which means “water hog” in Greek."
        ],
        images: ["shorturl.at/pwDM1", "shorturl.at/hwyJ1", "shorturl.at/kzKM6", "shorturl.at/mqLQ6", "shorturl.at/ruwB3"]
    },
    {
        name: "Quokka",
        region: "plains",
        type: "mammal",
        diet: "herbivore",
        population: 20000,
        status: "endangered",
        lifespan: 10,
        weight: 5000,
        body_length: 500,
        top_speed: 32,
        facts: [
            "Like their kangaroo relatives, quokkas move around by hopping and bounding, or moving forward using their hands.",
            "You mainly see quokkas on the ground, but unlike their bigger 'roo cousins, quokkas can climb trees if they need to – with heights of up to 2 metres! Mainly, they do it to get food.",
            "Quokkas store fat in their chubby lil’ tails as a means of surviving when food supplies are low, and they can also go months without water.",
            "Unlike their boxing kangaroo relatives, quokkas are not territorial and are very happy to share space, food and shelter.",
            "Quokkas are nocturnal and spend most of the day sleeping and resting, but are also active during the day.",
            "Though they’re known as the happiest animal on earth, their “smiles” are mainly due to the shape of their mouths, and they open them and stick their tongues out to keep cool.",
            "Their scientific name is Setonix Brachyrus, and the name “quokka” comes from the name given to them by the Aboriginal people living in south-west Western Australia.",
            "These iconic animals were first discovered by Willem de Vlamingh in 1696 who mistakenly thought he spotted a giant rat. He went on to name the island “Rattennest” which means “Rat’s Nest” in Dutch after his sightings, which was later adapted to the common day, Rottnest Island.",
            "Like kangaroos, baby quokkas have also been given the name ‘joeys.’ Quokkas only have one baby at a time (they arrive around 27 days after mating), and when born, they ride around in their mother’s pouch – usually about six months before they venture off on their own.",
            "Despite their sweet and friendly nature, quokkas have a survival instinct that’s pretty nasty: If a mother is being pursued by a predator, she’ll sacrifice her baby to save herself."
        ],
        images: ["shorturl.at/hkETY", "shorturl.at/azKLQ", "shorturl.at/gmC04", "shorturl.at/wBV03", "shorturl.at/cjELX"]
    },
    {
        name: "Bald Eagle",
        region: "plains",
        type: "bird",
        diet: "carnivore",
        population: 316700,
        status: "abundant",
        lifespan: 20,
        weight: 6000,
        body_length: 900,
        top_speed: 160,
        facts: [
            "They aren't really bald. The name comes from an old English word from centuries ago:  Piebald, which is defined as “having irregular patches of two colors, typically black and white.”",
            "Their average life span in the wild is 20 years, but the oldest recorded bird was 38! Captive individuals have been known to live longer, with one eagle almost reaching the age of 50.",
            "Eagle pairs typically bond for life. When breeding season arrives each year, the same pair meet, build (or reuse) a nest, and raise up to three young.  Both eagles help raise the babies, with each sitting on eggs, and hunting and providing food for the young. The concern for their young is so strong that they walk around the nest by folding their talons in so that they won’t accidentally hurt the young birds.",
            "A Bald Eagle’s typical wingspan is between 5 ft 11 in (1.8m) and 7 ft 7 in (2.3 m).",
            "Bald Eagles make the most massive tree nests ever recorded for any animal species. The largest nest documented was 9.5 feet in diameter, 20 feet deep, and weighed almost 3 tons!",
            "Once an egg hatches, the baby eagle will be confined to the nest anywhere between 8 to 14 weeks before fledging (taking their first flight).",
            "As with many other animals, the highest likelihood of death for eagles comes in the first year, where the rate at which young birds perish is 50% or more.",
            "Bald Eagles are opportunistic feeders that prey on a wide variety of food, but their most common source of food is fish. They are expert fish hunters and have adapted to swoop down to snatch fish from the water with their talons.",
            "Bald Eagle courtship can be pretty dramatic, with many elaborate calls and flight displays. But the craziest part involves the birds flying high into the sky, locking talons, and free-falling and spinning together, releasing right before they hit the ground.",
            "During the winter months, when eagles aren’t protecting a breeding territory and food is scarce, they are known to gather in large numbers."
        ],
        images: ["shorturl.at/ktMU6", "shorturl.at/nsDGY", "shorturl.at/hrvC6", "shorturl.at/bsSV0", "shorturl.at/cCS59"]
    },
    {
        name: "Honey Badger",
        region: "plains",
        type: "mammal",
        diet: "omnivore",
        population: 100000,
        status: "stable",
        lifespan: 8,
        weight: 15000,
        body_length: 800,
        top_speed: 30,
        facts: [
            "Honey Badgers are not actually badgers. They don’t even really resemble badgers. In appearance they are more like an overgrown weasel, just with a really cute tail and an adorable little face.",
            "For such a small animal honey badgers have enormous brains. They are capable of tricking their captors and escaping any man-made trap. They are one of very few non-primates known to manufacture and use tools. For example, they will roll fallen tree branches into position so they can climb to a food source. If they can’t dig under an obstacle, they will build ladders to get over it.",
            "Honey badger skin is 6 millimetres thick. That is thicker than almost all other animals. To provide some perspective, that is similar to the skin of Cape buffalo, an animal that weighs 50 times more than the honey badger.",
            "Honey badgers eat honey. That is why they need a means of placating the bees. Scientists think they hypnotise or paralyse bees with their spray, thus preventing some nasty stings.",
            "Honey badgers are omnivores. They are not too picky about their food, especially when beehives are scarce. These little predators will eat mice, birds, rotting meat, flowers, fruits, and just about anything they can get their teeth into. They even eat snakes and are impervious to their venom.",
            "Digging is the favourite honey badger pastime. They dig burrows to live in and maintain a network of underground channels to help them evade predators.",
            "According to the Guinness Book of World Records, honey badgers are the world’s most fearless creature.",
            "Honey badgers are solitary animals that spend most of the year on their own. They join up during mating season and sometimes hangout with a partner for a month before taking their own path once more.",
            "Despite their solitary nature, honey badgers do like a lot of motherly affection. There is no definitive age at which a youngster leaves home.",
            "Honey badgers are born without the ability to see. Newborns are completely hairless and can’t open their eyes. Mothers must grab their offspring and carry them around in their mouth. Even in adult life they have poor eyesight, although this is compensated for by a keen sense of smell."
        ],
        images: ["shorturl.at/tFGLY", "shorturl.at/sJRW7", "shorturl.at/lGHJ9", "shorturl.at/oCV01", "shorturl.at/xAI13"]
    },
    {
        name: "Alpaca",
        region: "plains",
        type: "mammal",
        diet: "herbivore",
        population: 3000000,
        status: "abundant",
        lifespan: 20,
        weight: 84000,
        body_length: 1000,
        top_speed: 56,
        facts: [
            "There are no wild alpacas – the alpaca is the domesticated version of the vicuña.",
            "Alpaca fiber is pretty much the most amazing natural fiber on earth. It’s been described as finer than cashmere, smoother than silk, softer than cotton, warmer than goose down, and more breathable than thermal knit.",
            "There are more than 20 colors of alpaca fiber, ranging from soft white to tan, light grey to true black.",
            "Originally from the Andes Mountains of Peru, Bolivia, Ecuador, and Chile, alpacas have literally been exported around the world.",
            "Alpacas are gentle, social creatures that can make great pets. They are famous for getting along well with people, including children, as well as dogs, cats, horses, donkeys, sheep, and goats.",
            "Unlike cows, sheep, and goats, alpacas don’t have hooves. Instead, they have soft pads and nails that more closely resemble a dog’s foot.",
            "What do alpacas eat? Their diet is mostly grass or hay. But while a horse typically eats about 15 to 20 pounds (7 to 9 kg) of hay a day (or about 2% of its body weight), a 125-pound alpaca’s daily grass consumption is only about two pounds (one kg), or about 1.5% of its body weight.",
            "And when it comes to water, they’re still minimalists. While a cow needs about 10% of its body weight in water each day, alpacas only need about 1%.",
            "Shortly after their first birthday, female alpacas are ready to become mothers. Males, however, take longer to mature and aren’t usually ready to breed until they are roughly twice as old.",
            "Female alpacas instinctively give birth between approximately 10:00 am and 2:00 pm. While that’s certainly more convenient for the people who raise alpacas, the real reason is that the new alpaca mother wants to be sure that her newborn, called a cria, has time to dry off, stand up, and suckle milk before the temperature drops."
        ],
        images: ["shorturl.at/prwJ0", "shorturl.at/grEO6", "shorturl.at/guzY2", "shorturl.at/cnvyD", "shorturl.at/oyzH9"]
    },
    {
        name: "Mallard",
        region: "plains",
        type: "bird",
        diet: "omnivore",
        population: 19000000,
        status: "abundant",
        lifespan: 10,
        weight: 1500,
        body_length: 500,
        top_speed: 88,
        facts: [
            "Males and females look very different. Only the male mallards have the iridescent green head feathers, white “collar” on the neck and dark brown breast. The females are comparatively drab, with mottled brown and tan plumage all over.",
            "Male mallards don’t sound much like what we think ducks sound like. They don’t quack, and instead produce deeper, raspier one- and two-note calls. They can also make rattling sounds by rubbing their bills against their flight feathers. The females make the stereotypical quack.",
            "Mallards can live in nearly any wetland habitat, natural or artificial. They’ll make themselves at home in and around lakes, ponds, rivers, marshes, estuaries and coastlines, as well parks and backyards.",
            "Only two species of wild duck—the mallard and the Muscovy Duck—have been domesticated by humans. The vast majority of domestic duck breeds descend from mallards and were developed by selectively breeding different domestic birds.",
            "Mallards are “dabbling ducks,” a cute term that means they feed by floating on the water and tipping themselves forward, butts in the air, to graze on underwater plants or grab insects.",
            "Migrating mallards have been clocked flying at 55 miles per hour, slightly faster than the average waterfowl. While they usually cruise at an altitude of less than 10,000 feet, they can get much higher. In 1962, a mallard was struck by a commercial airliner at 21,000 feet—a record altitude for a bird-aircraft collision at the time.",
            "Evolutionary biologists think that mallards and other ducks have yellow or orange bills and legs to show off for the opposite sex. The bright colors suggest that a duck has been eating right and has a strong immune system, making them attractive mates.",
            "The expression “water off a duck’s back” is a reminder of the waterproof qualities of the feathers. They are kept waterproof by regular applications of oil from the preen gland.",
            "Ducklings are almost exclusively insect eaters, only turning to a mainly vegetarian diet as they get older.",
            "A duck doesn’t feed her brood, as they are capable of finding their own food as soon as they leave the nest."
        ],
        images: ["shorturl.at/huKO6", "shorturl.at/mrtHM", "shorturl.at/lBCPY", "shorturl.at/izBP7", "shorturl.at/dvwIW"]
    },
    {
        name: "Burrowing Owl",
        region: "plains",
        type: "bird",
        diet: "omnivore",
        population: 20000,
        status: "stable",
        lifespan: 8,
        weight: 150,
        body_length: 250,
        top_speed: 60,
        facts: [
            "Burrowing owls are some of the smallest owls around.",
            "Unlike the Great Horned owl, these owls lack ear tufts, giving their heads a somewhat comical, round appearance.",
            "Their heads, backs, and chests are brown with white spotting and their bellies are white. Females may have more pronounced spotting than males.",
            "With most owl species, the female is noticeably larger than the male. However, with Burrowing owls, males and females are the same size, with the males sometimes being slightly larger.",
            "The Burrowing owl gets its name from where it lives – in underground burrows.",
            "Because they spend so much time underground and due to the lack of fresh air flow through their burrows, they’ve developed a higher resistance to carbon dioxide. This adaptation allows them to survive in conditions with stuffy air quality and not a lot of fresh oxygen.",
            "While other owls hunt at night, Burrowing owls mostly hunt during the day – catching prey which includes insects, small mammals, and sometimes reptiles and amphibians.",
            "Cowboys were known to refer to these owls as “howdy birds,” or “howdy owls” due to the way they stick their heads out from their burrow entrances and nod up and down. However, although humans tend to find this behavior cute and funny, it’s actually a sign of distress in regards to a predator or other threat.",
            "Burrowing owls are pretty animated performers during rain showers. It’s been reported that these owls get so excited when it rains that they’ve been reported to run around and flap their wings, stretch, and shake their feathers.",
            "Instead of flying away like other birds when they are disturbed, they often run away or flatten themselves along the ground."
        ],
        images: ["shorturl.at/gyFX6", "shorturl.at/nwCO9", "shorturl.at/fvyRT", "shorturl.at/akIM1", "shorturl.at/psPU4"]
    },
    {
        name: "Ostrich",
        region: "plains",
        type: "bird",
        diet: "omnivore",
        population: 150000,
        status: "stable",
        lifespan: 50,
        weight: 140000,
        body_length: 2800,
        top_speed: 70,
        facts: [
            "The flightless ostrich is the world’s largest bird.",
            "Ostriches’ wings reach a span of about 2 metres and are used in mating displays, to shade chicks, to cover the naked skin of the upper legs and flanks to conserve heat, and as “rudders” to help them change direction while running.",
            "One of an ostrich’s more famous characteristics, its long, thick eyelashes are actually an adaptation in response to risks associated with sandstorms. Because ostriches live in a semi-arid habitat, sand and dust storms are common and can cause damage to animals’ vision and, sometimes, respiratory systems. The ostrich’s eyelashes can help limit this damage.",
            "In addition to being the largest bird on Earth, ostriches also have the largest eggs of any bird. Their eggs — which have thick, glossy, cream-colored shells — have a diameter of about 6 inches and weigh up to 3 pounds.",
            "Like other modern birds, ostriches don’t have teeth. However, because they are omnivores, they eat everything from roots, plants, and seeds, to lizards and insects. To digest their broad diet, ostriches have to swallow grit and rocks to help break down food.",
            "Like many other animals that live in the savanna, ostriches can go several days without drinking water. Ostriches do drink from watering holes when they’re available, but they can get most of their water from the food they eat.",
            "In addition to sprinting away from threats, ostriches can use their long, strong legs to kick their predators. Unlike some animals that can kick their back legs, ostriches have to strike with a forward kick to maintain their stability. This results in a powerful impact that can cause serious injury — or even death — to humans and lions alike.",
            "Contrary to popular belief, ostriches don’t bury their heads in the sand to avoid predators. In fact, they don't bury their heads at all. The confusion stems from the ostrich’s nesting behavior, which involves digging shallow holes in the sand, rather than building nests. Because their eggs need to be rotated multiple times each day, ostriches are often observed with their heads down — so it appears that they are in the sand.",
            "Ostriches have three stomachs.",
            "The ostrich has the largest eye of any land animal, measuring almost 5 cm across, allowing predators such as lions to be seen at long distances."
        ],
        images: ["shorturl.at/lsJX4", "shorturl.at/wMTZ0", "shorturl.at/pIV29", "shorturl.at/hsFLR", "shorturl.at/qAQW9"]
    },
    {
        name: "Praire Falcon",
        region: "plains",
        type: "bird",
        diet: "carnivore",
        population: 80000,
        status: "stable",
        lifespan: 15,
        weight: 1000,
        body_length: 400,
        top_speed: 120,
        facts: [
            "Prairie Falcons nest on overhanging cliffs that can be up to 500 feet (152 meters) high.",
            "Prairie Falcons sometimes bathe in river shallows, but dust-bathing is probably more common than water-bathing, because of the general scarcity of standing water in its habitat.",
            "As in all falcons, female Prairie Falcons are noticeably bigger than males.",
            "The Prairie Falcons eats mostly small mammals and birds caught in flight.",
            "The young Prairie Falcons fledge from 36 to 41 days after hatching and remain with the family for a short time before dispersing.",
            "Like the Merlin, Prairie Falcons often hunts by flying fast and low, only a few feet above the ground, hoping to find surprised prey as it comes over the terrain or around a bush.",
            "In their cliff nests Prairie Falcons dig out a small scrape to hold their eggs, but don’t add nest material.",
            "Nearly 75% of the young Prairie Falcons die during their first year due to heat, predators and other natural causes.",
            "Young prairie falcons are called eyas and eyass.",
            "Prairie falcons are the most famous falconry birds used for falconry in the United States, but they are not suitable pets. They are aggressive birds, who need to be looked after by someone with high levels of expertise if they are kept in captivity."
        ],
        images: ["shorturl.at/czDU0", "shorturl.at/amzZ0", "shorturl.at/nyFLO", "shorturl.at/bovyC", "shorturl.at/zV458"]
    },
    {
        name: "White Rhinoceros",
        region: "plains",
        type: "mammal",
        diet: "herbivore",
        population: 18000,
        status: "endangered",
        lifespan: 50,
        weight: 2500000,
        body_length: 4000,
        top_speed: 50,
        facts: [
            "A common misconception about rhinos is that white rhinos are white and black rhinoceroses are black. Actually, the word “white” is merely a mispronunciation by English settlers in South Africa of a Dutch word, “wijd,” or wide. The white rhinoceros was described as “wijd” because it has wider lips than the black rhino with its prehensile upper lip. The black rhino gets its name because it’s usually seen covered in mud. Both white and black rhinos are grey.",
            "White rhinos have notoriously poor eyesight. As a result, it has long, tubular ears that swivel independently. This is important because it frequently has its head down while grazing.",
            "Typically, the white rhino has a much longer front horn and a very small second horn.",
            "The white rhino is one of the largest pure grazers on earth, eating nothing but grass, especially short grains.",
            "Because of their poor eyesight, white rhinos are likely to run from an encounter rather than attack.",
            "While all rhinos are social, this is especially true with white rhinos. All white rhinos live in herds (or crashes) of up to 14. These herds are mostly made up of females. Younger males do congregate together along with an adult female while adult bulls live alone.",
            "The white rhinoceros is the largest of the five rhino species.",
            "An adult white rhino has no natural predators given their size, horns, and thick skin, although humans have been a major threat.",
            "Rhino horns are not made of bone like cattle. Their horns are made from keratin, the same protein that makes up human fingernails and hair.",
            "The modern rhinoceros is related to the woolly mammoth that lived during the ice age. During this time, a species called the woolly rhinoceros lived alongside woolly mammoths."
        ],
        images: ["shorturl.at/vIJV9", "shorturl.at/vLQY5", "shorturl.at/qtOX3", "shorturl.at/abzLV", "shorturl.at/ipI36"]
    },
    {
        name: "Brown Bear",
        region: "plains",
        type: "mammal",
        diet: "omnivore",
        population: 200000,
        status: "stable",
        lifespan: 30,
        weight: 600000,
        body_length: 2800,
        top_speed: 56,
        facts: [
            "The brown bear has the widest distribution of any bear, once ranging as far as Morocco, Algeria and Mexico. Today it lives in North America, Asia and Europe, and is the national animal of Finland.",
            "Brown bears have amazing endurance. They can outrun a horse and drag a dead elk up a hill!",
            "Brown bears communicate by scratching and rubbing on trees to mark their territory and indicate their reproductive status.",
            "Brown bears hibernate in a den from October/December to March/May. The farther north they live, the longer they hibernate. In some southern areas, hibernation is very short or may not occur at all.",
            "Brown bears play important roles as predators—keeping animal populations in check—and as seed dispersers.",
            "Brown bear mothers give birth in their sleep! Cubs born during hibernation make their way to the mother’s chest and nurse until she is ready to wake up.",
            "Just like other bear species, a male brown bear is called a boar. The female brown bears are called a sow.",
            "A baby brown bear is called a cub. This brown bear cub name goes for both the female babies and the male babies.",
            "Brown bears are sometimes thought of as some dangerous carnivorous predators when in reality, they are omnivores. Their diet is like other rodents. Plants and roots form a major chunk of their food. They eat nuts, leaves, fruits, berries, meat, various insects, and so on. However, their most favorite food is fish, like salmon, and they also relish the fat from fishes. This fat enables them to sustain long hibernation periods. Brown bears can intake as much as 90 pounds of food each day.",
            "In general, brown bears are not dangerous to humans. They do not attack others if not necessary. If given a chance and opportunity, they will move away from human proximity rather than attacking them. But in case the cubs are in danger, brown bears will attack humans without a doubt.",
            "Brown bears should not be kept as pets. They are not domestic animals and being wild, and they hardly see humans as their friends. If they are angered, then your life might be in danger."
        ],
        images: ["shorturl.at/wABCZ", "shorturl.at/hvNZ0", "shorturl.at/irIX0", "shorturl.at/apyI1", "shorturl.at/uyHY9"]
    },
    {
        name: "American Alligator",
        region: "plains",
        type: "reptile",
        diet: "carnivore",
        population: 5000000,
        status: "abundant",
        lifespan: 50,
        weight: 230000,
        body_length: 4600,
        top_speed: 17,
        facts: [
            "Alligators are toothy. They have between 74 and 80 teeth in their jaws at any given time, and as teeth wear down or fall out they are replaced. An alligator can go through over 2,000 teeth in its lifetime.",
            "Alligators continue to grow throughout their lifetimes. Male American alligators average 8 to 10 feet long, while females tend to be slightly smaller. Very old males can get quite large, up to 15 feet long and weighing over 1,000 pounds.",
            "They can use tools. American alligators have been observed using lures to hunt birds. They balance sticks and branches on their heads, attracting birds looking for nesting material.",
            'Besides swimming, alligators walk, run, and crawl on land. They have a "high walk" and a "low walk." The low walk is sprawling, while in the high walk the alligator lifts its belly off the ground.',
            "Alligators play an important role in their wetland ecosystems by creating small ponds known as alligator holes. Alligator holes retain water during the dry season and provide habitats for other animals.",
            "Alligators are carnivorous opportunists, eating fish, amphibians, reptiles, birds, and mammals. What they eat is largely determined by their size. However, they were recently reported to also eat fruit such as wild grapes, elderberries, and citrus fruits directly from trees. Alligators may help spread the seeds of these fruits throughout their habitats.",
            "Female alligators build nests made of vegetation, sticks, leaves, and mud near a body of water. As the vegetation decays, it heats up and keeps the eggs warm. She stays near the nest throughout the 65-day incubation period, protecting it from intruders. When the eggs are ready to hatch, the young alligators make high-pitched noises from inside their eggs. This causes their mother to start digging them out of the nest and carrying her babies down to the water in her jaws. She may protect her young for up to a year.",
            "Their sex is determined by temperature. The temperature at which the eggs develop determines their sex. Eggs exposed to temperatures above 93°F (34 °C) become males, while those at 86 °F (30 °C) become females. Intermediate temperatures produce both sexes.",
            "Alligators have a variety of different calls to declare territory, signal distress, threaten competitors, and find mates. Although they have no vocal cords, alligators bellow loudly by sucking air into their lungs and blowing it out in intermittent roars. In addition to bellowing, alligators can growl, hiss, and make a cough-like sound called a chumpf.",
            "At the start of the spring breeding season, males bellow to attract females. The bellows have an infrasonic component that can cause the surface of the water around the male to ripple and dance. Other courtship rituals include head-slapping on the water's surface, snout and back rubbing, and blowing bubbles."
        ],
        images: ["shorturl.at/etEY6", "shorturl.at/asFQR", "shorturl.at/bqtxD", "shorturl.at/bnwH6", "shorturl.at/erxN3"]
    },
    {
        name: "Black Salamander",
        region: "plains",
        type: "amphibian",
        diet: "carnivore",
        population: 10000,
        status: "endangered",
        lifespan: 30,
        weight: 200,
        body_length: 70,
        top_speed: 16,
        facts: [
            "Salamanders, in general, do not like living in large groups. They live usually alone and only meet others during the breeding months.",
            "Little salamanders in general are called efts.",
            "Black salamanders are primarily carnivorous in their diet. The Aneides flavipunctatus diet includes invertebrates smaller than this species. These include termites, millipedes, ants, and even beetles. The younger ones eat springtails and flies, too. Leeches, waxworms, aquatic bugs, and newborn mice are also on the menu of this amphibians’ meal.",
            "Black salamanders secretes a sticky, poisonous substance when they are at threat to use it against their predators.",
            "In situations of threat, the juveniles of this kind remain frozen in their places, trying to merge with their surroundings and not stand out. The adults, however, make a quick attempt in escaping and hiding under the rocks and logs. They defend themselves by overpowering the opposite threat by raising their stance and standing straight. The adults then lower their heads and wave the long tail. They might even jump to startle the threat. Biting is also an escape mechanism for these adults, they would release the poisonous toxin from their skin.",
            "This amphibian carries out respiration entirely through the skin as well as the lining of tissues around the mouth. Hence, this arrangement of their bodies requires them to inhabit damp, moist areas on land. Only in cases of high humidity, these little salamanders would crawl onto land. This makes them terrestrial beings.",
            "The scientific name of this species, Aneides flavipunctatus, is formed from the Greek term Aneides and the Latin word flavipunctatus. ‘Aneides’ translates to ‘lacking a specific shape or form’, whereas ‘flavipunctatus’ translates to ‘yellow spotted’, which refers to the appearance of this species.",
            "To attract females, the male speckled/spotted black salamanders perform a special dance to impress them for mating.",
            "Common predators of this species are larger salamanders, snakes, and other large animals.",
            "Environments with high concentrations of chlorine are highly toxic to these salamanders."
        ],
        images: ["shorturl.at/rJSTX", "shorturl.at/kEIT6", "shorturl.at/ltxGY", "shorturl.at/crPU1", "shorturl.at/ckpGQ"]
    },
    {
        name: "Common Snapping Turtle",
        region: "plains",
        type: "reptile",
        diet: "omnivore",
        population: 200000,
        status: "stable",
        lifespan: 70,
        weight: 16000,
        body_length: 490,
        top_speed: 5,
        facts: [
            "If given the choice between fight and flight, snapping turtles almost always distance themselves from humans. The animals spend the bulk of their lives underwater, steering clear of nearby Homo sapiens. However, problems can arise on dry land, where the reptiles are especially vulnerable. Females haul themselves ashore during nesting season (late spring to early summer). In these delicate months, people tend to prod and handle them, making bites inevitable.",
            "Common snapping turtles can clamp down with up to 656.81 newtons (N) of force, though typical bites register an average of 209 N.",
            "The common snapping turtle inhabits a wide range of areas from southeastern Canada to Nova Scotia and Florida.",
            "Snapping turtles will eat almost everything they can catch, including other types of turtles.",
            "When people see a baby snapping turtle in trouble, and try to help it, they often do by picking it up by its tail. However, that’s not the appropriate approach. If you do that, there is a big chance of you hurting the turtle by injuring its vertebral column. Instead, pick it up by holding its shell edges.",
            "Did you know that some people in the United States use the common snapping turtle as an ingredient to make a turtle soup? In fact, in Philadelphia, the snapping turtle soup is a part of their traditional cuisine.",
            "You can say that the common snapping turtle is a kind of a famous animal. In 2006, these types of turtles were declared as the state reptile of New York. They were chosen by the state’s elementary school children.",
            "Unlike other species of turtles, the snapping turtle can’t retreat into its shell. It’s believed that with time the snapping turtle has evolved, and nowadays, it doesn’t need to hide into the shell when danger occurs. However, even though, these animals are large and dangerous, they still feel vulnerable on land. That’s the reason why they bite. It’s a part of their defense mechanism.",
            "Snapping turtles start the mating process once a female turtle has fully matured. A female turtle lays around 30-35 eggs and hides them under sand. The eggs hatch after a period ranging between 70-90 days. A snapping turtle baby is quite an adorable sight.",
            "Snapping turtles are not very social creatures that communicate through their leg movements while facing each other. They also have a strong sense of smell, vision, or touch that helps them find and identify their prey while on land, and they can also sense vibrations in case of water."
        ],
        images: ["shorturl.at/diDN7", "shorturl.at/anJNW", "shorturl.at/fyENW", "shorturl.at/ioFL7", "shorturl.at/hAK35"]
    },
    {
        name: "Zebra",
        region: "plains",
        type: "mammal",
        diet: "herbivore",
        population: 500000,
        status: "endangered",
        lifespan: 25,
        weight: 400000,
        body_length: 1500,
        top_speed: 65,
        facts: [
            "Zebra stripes are a form of pest control: they protect zebras from biting flies. By comparing zebras to horses, their closest living relative, scientists found that horses were bitten by flies disproportionately more often than zebras under the same conditions, leading them to conclude that those amazing stripes are more than just decoration.",
            "The striping pattern of the plains zebra varies by location; they have either black striping and a primarily white body color, or lighter, dark brown stripes overall.",
            "No two zebras have the same stripes; they are as unique as fingerprints.",
            "Plains zebras traverse a wide range of diverse habitats from mountains as high as 14,000 feet to the plains of the Serengeti.",
            "Plains zebras live in small family groups, called harems, with one male, one to six females, and their offspring. The bonds of the females in the harem are strong; they will stay together even if their dominant male leaves or is killed.",
            "When plains zebras sense a predator, they use a high-pitched sound to alert the herd. And at night, at least one member of the group stays awake to keep watch.",
            "Zebras can defend their herd and territory by kicking, biting, and pushing predators. They will engage in similar aggressive behavior when another stallion attempts to take over their herd, or to display dominance in mating. If a zebra is attacked, other zebras come to its defense and form a circle around it to ward off the predator.",
            "Since at least the 19th century, zebras have been bred with other animals to form 'zebroids'. This cross between a zebra and another equine, most commonly a horse or donkey, is intended to result in the best of both species. Zebras have been largely resistant to domestication, but they are healthier and less susceptible to disease than their equine relatives. A variety of zebroids have resulted from these combinations, including zedonks, zorses, and zonies.",
            "Zebras can survive up to five days without drinking water.",
            "Zebras have excellent eyesight and are one of the few mammals that can see in color. However, zebras cannot see the color orange."
        ],
        images: ["shorturl.at/sCUW6", "shorturl.at/npxC3", "shorturl.at/ezLZ8", "shorturl.at/wORU3", "shorturl.at/etxMW"]
    },
    {
        name: "Red fox",
        region: "plains",
        type: "mammal",
        diet: "omnivore",
        population: 5000000,
        status: "abundant",
        lifespan: 4,
        weight: 14000,
        body_length: 400,
        top_speed: 50,
        facts: [
            "Foxes are members of the Canidae family, which means they're related to wolves, jackals, and dogs.",
            "Unlike their relatives, foxes are not pack animals. When raising their young, they live in small families—called a “leash of foxes” or a “skulk of foxes”—in underground burrows. Otherwise, they hunt and sleep alone.",
            "Like a cat, the fox is most active after the sun goes down. It has vertically oriented pupils so it can see in dim light, and it hunts by stalking and pouncing on its prey. The fox also has sensitive cat-like whiskers and spines on its tongue. It walks on its toes, which accounts for its elegant, feline-like tread.",
            "Geographically, the red fox has the widest range of any of the 280 animals in the order Carnivora. While its natural habitat is a mixed landscape of scrub and woodland, its flexible diet allows it to adapt to many environments. As a result, its range is the entire Northern Hemisphere, from the Arctic Circle to North Africa to Central America to the Asiatic steppes. It's even in Australia, where it's considered an invasive species.",
            "Like a guided missile, the fox harnesses the Earth's magnetic field to hunt. Other animals, like birds, sharks, and turtles, have this “magnetic sense,” but the fox is the first one we've discovered that uses it to catch prey. According to New Scientist, the fox can see the earth's magnetic field as a “ring of shadow” on its eyes that darkens as it moves toward magnetic north. When the shadow and the sound of prey lines up, it's time to pounce.",
            "Fox pups are born blind and don't open their eyes until nine days after birth. During that time, they stay with the vixen (female) in the den while the dog (male) brings them food. They live with their parents until they're 7 months old. Vixens sometimes go to great lengths to protect their pups—once, in England, a fox pup was caught in a wire trap for two weeks but survived because its mother brought it food every day.",
            "Foxes are known to play among themselves, as well as with other animals. But play also establishes social hierarchy, and it starts very young. Animal behaviorist Sandra Alvarez-Betancourt studied thousands of hours of footage taken with an infrared camera of pup activity in the den. She discovered that the struggle for dominance starts as soon as the pups can walk. The play can be brutal—and even fatal. One in five pups never make it out of the den.",
            "Although foxes are usually wild, their relationship with people goes way back. In 2011, researchers opened a grave in a 16,500-year-old Jordan cemetery to find the remains of a man and his pet fox. This was 4000 years before the first-known human and domestic dog were buried together.",
            "A study looking at urban foxes in London revealed something surprising: They are starting to look more like domesticated dogs. Compared to their rural relatives, London foxes have shorter snouts and smaller brains. While it's unclear why this is, the strange part is that the foxes are doing this to themselves. As evolutionary biologist Kevin Parsons explained to the BBC, “This is the result of foxes that have decided to live near people, showing these traits that make them look more like domesticated animals.”",
            "You can often hear their mating calls, which is a sharp, high-pitched shrieking/screaming noise that can sound quite terrifying."
        ],
        images: ["shorturl.at/auEZ9", "shorturl.at/fxAQ3", "shorturl.at/vIJUY", "shorturl.at/hsxLX", "shorturl.at/dxGKS"]
    },
    {
        name: "European Hedgehog",
        region: "plains",
        type: "mammal",
        diet: "omnivore",
        population: 25000000,
        status: "stable",
        lifespan: 10,
        weight: 780,
        body_length: 240,
        top_speed: 6,
        facts: [
            "Hedgehogs are nocturnal which means that they sleep in the day and only come out at night.",
            "The ‘Hedge’ part of their name comes from where they build their nests hedges, bushes and shrubs. The ‘hog’ part comes from the small snorting/ grunting sound they make which is similar to a pig/warthog.",
            "Hedgehogs have the ability to hibernate (although not all do), which makes them one of only three mammals that hibernate in the UK. Hibernating means that they hole themselves up and stay in a dormant state for winter.",
            "Hedgehogs are actually lactose intolerant, so milk should never be left out for them, water is perfectly fine.",
            "They hunt primarily using they hearing and smell because their eyesight is not very good, although they can see quite well in the dark.",
            "Hedgehogs have around 5000 to 7000 spines on their back. These can be raised and lowered to respond to threatening situations. Each quill/ spine lasts about a year before dropping out and being replaced.",
            "The hedgehog has a vulnerable stomach, which is why it curls up into a spiky ball when predators such as badgers are around.",
            "Hedgehogs venture out on their own after only four to seven weeks of nurturing from their mother. They usually then spend their entire lives alone with the exception of pairing up to mate with another hedgehog.",
            "It is extremely rare that you will see multiple hedgehogs together in one place other than when mating, but if you do it is called an array.",
            "Hedgehogs are a gardeners’ friend. Hedgehogs have earnt this reputation because of their eating habits. Not only do they enjoy berries and fruit but the staple of their diet is made up from pests that are common in our back gardens such as beetles and caterpillars. This helps preserve the fruit and vegetables you may have growing in your gardens."
        ],
        images: ["shorturl.at/uyCEW", "shorturl.at/imG78", "shorturl.at/oqBDG", "shorturl.at/aqxBN", "shorturl.at/jkxN1"]
    },
    {
        name: "Giant Armadillo",
        region: "plains",
        type: "mammal",
        diet: "carnivore",
        population: 20000,
        status: "endangered",
        lifespan: 15,
        weight: 33000,
        body_length: 1000,
        top_speed: 48,
        facts: [
            "The word 'armadillo' has Spanish origin and means 'little armored one'.",
            "The largest armadillo species has its densest living habitat in South America. They usually live near water, and they feed on termite mounds, ants, and such. They prefer areas with shrubs, bushes, and other sparse vegetation.",
            "Giant armadillos live primarily on their own, in pairs or small groups, because armadillos are not communal species. They like to live alone, and the only time they come together is when they have to mate in the winter months.",
            "When the female giant gives birth to the young ones, they dig burrows for their young armadillos to keep them safe and nurse them for two to three months.",
            "The giant armadillo teeth are about 100 in number, which exceeds that of any other terrestrial mammal.",
            "These animals can communicate mainly through their smell and sound. These animals release secretion from their gland located on different parts of their body. It helps them to mark their burrows, and in offsprings call, they call for mating.",
            "When the female giant armadillo gives birth to their young, they are called pups. While the adults may not be much to look at, these pups look adorable and will definitely grab your attention.",
            "These species mostly go to termite mounds and rip the mounds using their front sharp claws to eat the termites, and mostly their diet consists solely of the termites. Other things to eat in their habitat are ants, spiders, and worms. They also do eat a lot, going through entire termite hills for just one meal.",
            "When this large animal is put under a serious threat, it can attack aggressively with its sharp front claws, leading to injury and diseases like rabies in humans. Although humans do not really take up the fight with this species, it is mostly dogs, cats, and rabbits that are engaged with them.",
            "Armadillos usually spend 16-18 hours in their burrows, sleeping. This means that the largest living species of the armadillo family spend most of their life, asleep, seldom stepping out of their burrows to hunt and forage for food."
        ],
        images: ["shorturl.at/zMOTU", "shorturl.at/qKM48", "shorturl.at/qxG78", "shorturl.at/qrCR8", "shorturl.at/eCEL5"]
    },
    {
        name: "Prairie Rattlesnake",
        region: "plains",
        type: "reptile",
        diet: "carnivore",
        population: 100000,
        status: "stable",
        lifespan: 20,
        weight: 361,
        body_length: 1650,
        top_speed: 28,
        facts: [
            "Prairie rattlesnakes are known as viviparous, which means they give birth to their young.",
            "The prairie rattlesnake range and is found between 100 to 2700 feet in elevation. They are found in rugged, rocky regions, as well as open fields that have a high population of their prey. They can be found in the forests too as the forest debris on the ground acts as a protection for them. They are found in grasslands and chaparral with shrubs and vegetation where they can camouflage themselves while waiting for their prey. They live in burrows or pits formed in the rocks, under branches, and also in caves, crevices, or holes dug by other animals.",
            "Prairie rattlesnakes live alone most of the time but may hibernate communally during the winters. They may also be found together during the breeding seasons.",
            "A small female snake can give birth to around five young while the larger females can give birth to around 25 young. The young are fully developed when they are born and are 22-28 cm long. They do not need any parental care.",
            "Prairie rattlesnake's eyesight is extremely weak, and therefore they depend on their ability to detect anything by the heat it emits. Rattlesnakes also rely on their sense of smell and tactile sense. These rattlesnakes can detect different chemical cues emitted by other animals and use their tongues to do so.",
            "The western rattlesnake eats amphibians and reptiles like deer mice, voles, gophers, chipmunks, woodrats, red squirrels. They can eat ground-nesting birds and eggs of any kind. They may also eat a prairie dog, but that is about the largest animal it will eat.",
            "The venom of prairie rattlesnake is extremely lethal and they are definitely venomous snakes. The release of 20-55 % of their venom is a single bite.",
            "It is best known for the unique rings on the end of its tail that knock together and make a rattling sound. A rattle is added to the string each time the rattlesnake sheds its skin, which happens up to five times in its first summer and around one to two times a year after that. Males tend to have more rings than females.",
            "The prairie rattlesnake is not aggressive and will usually flee if given the chance."
        ],
        images: ["shorturl.at/kuwQ3", "shorturl.at/intuS", "shorturl.at/atwQ9", "shorturl.at/rwHNV", "shorturl.at/qCUWZ"]
    },
    {
        name: "Common Toad",
        region: "plains",
        type: "amphibian",
        diet: "carnivore",
        population: 21236,
        status: "stable",
        lifespan: 12,
        weight: 80,
        body_length: 150,
        top_speed: 8,
        facts: [
            "Common toads bury themselves in lairs beneath trees, stems, and stones throughout the day. Common toads can also be challenging to detect since they like to hide in areas where they merge in with their surroundings. Since the skin of a common toad serves as a disguise, a gray toad can like to take naps of stones.",
            "Common toads live in solitude till the breeding season.",
            "Common toads have stilted pupils. There is a gland behind each eye that contains a noxious liquid called bufotoxin or bufogin. Common toads excrete this when they sense a predator or a threat around.",
            "The adult toads communicate primarily through vocalizations and common toad sounds. Vocalizations are used by toads for a number of purposes. The high-pitched 'qwark-qwark-qwark' sounds are the homage of the common toad to the amphibian symphony. Common toads primarily resolve disputes by croaking, and the tone of their croak indicates their size. The deeper the 'qwark,' the larger the animals.",
            "The common toad has the ability to leap 14 ft (4.2 m) in a single jump.",
            "Baby toads are called tadpoles. The baby toad holds on to the fluid of the egg strings as they are hatched. The toad then snacks on it for protein. The baby toad switches onto the lower part of water leaves after a few days and finally begins swimming. The toad gradually grows legs and their bodies resorb their tails within the first few weeks of life.",
            "While common toads are small, they are voracious eaters. Woodlice, slugs, flies, caterpillars, beetles, grass snakes, slow worms, and earthworms are examples of the common toad diet. The toad also eats little mice on occasion.",
            "Common toads can be poisonous as they contain within themselves certain venomous substances. Bufotoxin is the primary toxic agent present in the skin and parotoid gland of these animals. In mammals, including humans, the skin of one toad can produce enough toxin to induce significant effects or even mortality.",
            "To discourage predators from consuming them, the common toad has a foul-tasting body. When they are attacked, they puff up as well.",
            "A common toad (Bufo bufo) is not the same as a common frog. The color of an amphibian's body is one of the best ways to know which one you're looking at. Toads have olive-brown, warty skin of lumps and scratches, while the common frog is smooth and shiny."
        ],
        images: ["shorturl.at/hiBPS", "shorturl.at/ekBY0", "shorturl.at/ntD14", "shorturl.at/jlvCO", "shorturl.at/orzX1"],
    },
    {
        name: "Wolf",
        region: "plains",
        type: "mammal",
        diet: "carnivore",
        population: 250000,
        status: "stable",
        lifespan: 18,
        weight: 80000,
        body_length: 1600,
        top_speed: 60,
        facts: [
            "Once a wolf has found a mate, they tend to stay together for better or worse, through sickness and health, often until death due them part. Of course it is typically only the alpha male and female that breed, leaving the rest of the adult pack members to help rear the young and ensure their survival.",
            "In addition to a trend toward monogamy, wolves develop such strong social bonds for their family and other loved ones, they have been known to sacrifice themselves for the survival of the pack / family unit.",
            "Perhaps the most well known characteristic of the grey wolf is its penetrating, hauntingly beautiful howl. This is a primary communication tool, both between lone wolves and their pack, as well as between packs. When it comes to territory, inter-pack howling will determine the size and strength of different pack, often determining weather or not to attack or retreat.",
            "Wolves are ultra marathon endurance hunters. They have been known to track and trace their prey for hours well into the night. And they have the added bonus of a high IQ and excellent sense of hearing and smell, all of which they put to good use in rounding up their next meal.",
            "Wolves can eat a huge amount, as much as 9 kg, in one sitting, thus the saying. The alpha male is first to eat and will devour the most meat out of the pack, followed by other pack members and or other scavengers. Although this is partly to blame for their bad reputation, it is really a survival tactic, as they never know when their next meal will be and often it is days before they eat again.",
            "If you’ve ever seen a true wolf paw print, it’s enough to make the hair on your back stand on ends, as their average foot size is comparable to an adult human hand, at 4 inches wide by 5 inches long.",
            "Wolves are highly territorial animals, and generally establish territories far larger than they require to survive; in order to assure a steady supply of prey. Territory size depends largely on the amount of prey available: in areas with an abundance of prey, the territories of resident wolf packs are smaller.",
            "Wolves feed their young by carrying chewed-up food in their stomachs and throwing up, or “regurgitating”, the food for the pups when they come back to the den.",
            "Wolves have only one breeding season per year – in the winter. They have their puppies in late April or early May. They have their puppies in an underground hole, or den. There are usually four to six puppies in a litter. The puppies grow up fast and are their adult size by the end of their first winter. They are grown up by the time they are two years old.",
            "A wolf which has been driven from the pack or has left of its own accord is called a lone wolf.  It avoids contact with packs and rarely howls."
        ],
        images: ["shorturl.at/bnzDU", "shorturl.at/rPZ25", "shorturl.at/oJRW0", "shorturl.at/mCZ08", "shorturl.at/nyzKY"]
    },
    {
        name: "Common Frog",
        region: "plains",
        type: "amphibian",
        diet: "carnivore",
        population: 100000,
        status: "stable",
        lifespan: 10,
        weight: 22,
        body_length: 130,
        top_speed: 8,
        facts: [
            "Common frogs are often found in damp places around garden ponds, among marshes, and in long grasses. All of these places are important for common frogs. They remain highly active most days, except when hibernating during winter.",
            "The common frog is known to live a solitary life except during the breeding season. These frogs live by themselves for the majority of their lives.",
            "Male common frogs compete for female attention by producing a choir of croaks. Common female frogs are attracted to the male who has the loudest and longest croak. This leads to a lot of noise being made by males.",
            "The common frog looks like a regular frog, as its name suggests. It has smooth, moist skin which is also sticky. It uses this sticky skin to catch its prey. They can jump to great heights due to their long back legs and webbed feet and they have colorful skin which can darken or lighten to adapt to their surroundings. Common frogs have various bands of stripes on their back legs.",
            "Male common frogs are known to make croaking noises to attract female common frogs. The air from their lungs is forced over the vocal cords in their throats to make this noise. Other than croaking during the mating season, these frogs are not known to take part in any vocal communication during the rest of the year.",
            "Baby common frogs are known as tadpoles, polliwogs, or tiny froglets. After tadpoles reach the age of around four months, they start to grow back legs and then front legs. After they have absorbed their tail, they leave the water. These tiny froglets leave the water usually in the early summer or early spring, after having taken 16 weeks to grow.",
            "Most common frogs feed on a variety of insects, including insect larvae, woodlice, spiders, worms, slugs, and snails. This species can smell worms and use this scent to locate and eat them. Baby common frogs, froglets, or tadpoles are herbivores and feed on a variety of algae along with decaying plant matter.",
            "The common frog is not known to be poisonous, unlike its cousins the poison dart frog and the golden poison frog. Common frogs and tadpoles can hence be held in hands without any worries.",
            "Common frogs develop faster in warmer climates in comparison to colder climates.",
            "They are known to change the color of their skin (either darken or lightening it) according to their surroundings, similar to chameleons."
        ],
        images: ["shorturl.at/mszP2", "shorturl.at/imANW", "shorturl.at/ijAN0", "shorturl.at/qGNT6", "shorturl.at/nHQS8"]
    },
    {
        name: "Elk",
        region: "plains",
        type: "mammal",
        diet: "herbivore",
        population: 1000000,
        status: "stable",
        lifespan: 13,
        weight: 330000,
        body_length: 2400,
        top_speed: 64,
        facts: [
            "Male elk use their high-pitched roar, called bugling, to attract mates during their mating seasons. This loud bellowing sound is also used to advertise territories in the wintertime, and has a fundamental frequency of 2 kilohertz and higher (as a point of reference, a human child averages 0.3 kilohertz). Compared to its size, there is no vocal animal with the same abilities.",
            "Unlike some other deer species, like reindeer, only male elk have antlers. They begin growing their signature antlers in the spring, shedding them each winter. While they grow, elk antlers are covered with “velvet,” a soft layer of skin that sheds when the weather turns warm in the summer. Male elk use their antlers to compete with each other during the mating season, lowering their heads and knocking them with other males both to build strength and to win the attention of females.",
            "No matter which region they inhabitat, elk are almost always more active when it is cooler. You’re more likely to see them in the winter and fall (during the mating season), as well as early spring.",
            "Elk feed on grasses, sedges, and herbaceous flowering plants in the summer, and on woody growth such as cedar, jack pine, and red maple in the winter. Just like cows, they are ruminant animals, meaning that they regurgitate their food but continue to re-chew it to aid in digestion.",
            "Elk are very important in shaping plant communities within their own habitats through their foraging and browsing. Similarly to bison, elk have been introduced to several national wildlife refuges to help restore grass prairie ecosystems.",
            "Elk newborns are kept hidden for the first several days of their lives.7. After giving birth, female elk find a camouflaged area in thick brush or tall grass to hide their babies, who lay motionless until they are about 16 days old. Calves are also born with almost no scent to avoid attracting predators and have white spots that help camouflage them, breaking up their outline and mimicking spots of light.",
            "Elk live in large groups, also called herds, that can reach well into the hundreds and even thousands. Although herds are segregated by gender, they are matriarchal, meaning they are dominated by a single female or “cow” who runs the show.",
            "Researchers have found that elks’ anklebones make distinct cracking or popping noises when they walk. We think elk use this sound (at least in part) to tell other elk that they’re approaching them from behind.",
            "The Shawnee name for elk is wapiti, which means “white rump.” Elk are connected with love and music for many Native Americans, and a well-known tribe legend credits elk with the creation of the first flute: a boy is too shy to speak to the girl he has fallen in love with. But two elk-men visit him in a dream and give him a flute, which he masters, giving him the means to communicate his feelings to the girl through music.",
            "Strange, but true: Elk can count to 10. How do we know? Scientists have noticed that when a female elk is presented with the choice between a mate with nine antler points and 10 antler points, she’ll almost always select the bull with 10 points."
        ],
        images: ["shorturl.at/fpqwR", "shorturl.at/mACPZ", "shorturl.at/lwBCE", "shorturl.at/zKVZ5", "shorturl.at/aACJ7"]
    }
]);

