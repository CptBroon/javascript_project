use educational_project;
db.dropDatabase();

db.animals.insertMany([
    {
        "name" : "Dolphin",
        "region" : "ocean",
        "class" : "mammal",
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
        "class" : "mammal",
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
        "class" : "mammal",
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
        "class" : "fish",
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
        "class" : "invertebrate",
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
        "class" : "mammal",
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
        "class" : "invertebrate",
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
        "class" : "invertebrate",
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
        "class" : "invertebrate",
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
        "class" : "mammal",
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
        "class" : "fish",
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
        "class" : "fish",
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
        "class" : "fish",
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
        "class" : "crustacean",
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
        "class" : "reptile",
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
        "class" : "fish",
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
        "class" : "mammal",
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
        "class" : "primate",
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
        "class" : "mammal",
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
        "class" : "mammal",
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
        "class" : "primate",
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
        "class" : "mammal",
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
        "class" : "mammal",
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
        "class" : "primate",
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
        "class" : "mammal",
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
        "class" : "reptile",
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
        "class" : "amphibian",
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
        "class" : "bird",
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
        "class" : "mammal",
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
        "class" : "insect",
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
        "class" : "mammal",
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
        "class" : "reptile",
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
        "class" : "reptile",
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
    }
]);

