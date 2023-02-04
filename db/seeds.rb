puts "destroying seeds"

FlightLesson.destroy_all
Instructor.destroy_all
Aircraft.destroy_all
Airport.destroy_all
User.destroy_all

puts "creating airports 🛩"

Faker::Config.locale = 'en-US'

a1 = Airport.create(name: "Falcon Field Airport", address: "4800 E Falcon Dr, Mesa, AZ 85215", state: "Arizona", phone_number: "(480) 644-2450", email: "airport.info@mesaaz.gov", image: "https://www.falconfieldairport.com/home/showpublishedimage/10505/635990763428870000")

a2 = Airport.create(name: "Scottsdale Airport", address: "15000 N Airport Dr, Scottsdale, AZ 85260", state: "Arizona", phone_number: "(480) 312-2321", email: "airport.info@scottsdaleaz.gov", image: "https://meadhunt.com/wp-content/uploads/Scottsdale-Airport-Exterior-1.jpg")

a3 = Airport.create(name: "Chandler Municipal Airport", address: "2380 S Stinson Way, Chandler, AZ 85286", state: "Arizona", phone_number: "(480) 782-3540", email: "airport@chandleraz.gov", image: "https://www.chandleraz.gov/sites/default/files/chandler-municipal-airport-terminal-building.jpg")

a4 = Airport.create(name: "Phoenix Sky Harbor International Airport", address: "3400 E Sky Harbor Blvd, Phoenix, AZ 85034", state: "Arizona", phone_number: "(602) 273-3300", email: "skyharbor@phoenix.gov", image: "https://www.istockphoto.com/photo/phoenix-sky-harbor-international-airport-phx-terminal-3-in-arizona-gm1334530023-416619568")

a5 = Airport.create(name: "Ann Arbor Municipal Airport", address: "801 Airport Dr, Ann Arbor, MI 48108", state: "Michigan", phone_number: "(734) 994-2841", email: "airport@a2gov.org", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ann_Arbor_Airport_Passenger_Terminal.JPG/2880px-Ann_Arbor_Airport_Passenger_Terminal.JPG")

a6 = Airport.create(name: "Detroit Metropolitan Wayne County Airport", address: "11050 W. G. Rogell Dr. #602, Detroit, MI 48242", state: "Michigan", phone_number: "(734) 247-7678", email: "accessibility@wcaa.us", image: "https://m2i8x7d8.stackpathcdn.com/wp-content/uploads/2018/07/detroit-1080x675.jpg")

a7 = Airport.create(name: "Willow Run Airport", address: "801 Willow Run Airport, Ypsilanti, MI 48198", state: "Michigan", phone_number: "(734) 485-6666", email: "willowrunairportinfo@wcaa.us", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Willow_Run_Airport_Terminal_-_October_2021.jpg/2560px-Willow_Run_Airport_Terminal_-_October_2021.jpg")

a8 = Airport.create(name: "Oakland/Troy Airport", address: "2672 Industrial Row Dr, Troy, MI 48084", state: "Michigan", phone_number: "(248) 288-6100", email: "ocia@oakgov.com", image: "https://www.troyhistoricvillage.org/wp-content/uploads/2015/05/5-23-15-Oakland-Troy-airport-terminal-north-side.jpg")

a9 = Airport.create(name: "Oakland County International Airport", address: "6500 Highland Rd, Waterford Twp, MI 48327", state: "Michigan", phone_number: "(248) 666-3900", email: "ocia@oakgov.com", image: "https://www.oakgov.com/aviation/airports/ocia/PublishingImages/Pages/default/OaklandCountyInternationalAirport.jpg")

a10 = Airport.create(name: "Morristown Regional Airport", address: "5233 Old Hwy 11E, Morristown, TN 37814", state: "Tennessee", phone_number: "(423) 586-2483", email: "airport.info@mtn.gov", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Morristown_Regional_Airport_1.jpg/2560px-Morristown_Regional_Airport_1.jpg")

a11 = Airport.create(name: "Hawkins County Airport", address: "659 Main St, Surgoinsville, TN 37873", state: "Tennessee", phone_number: "(423) 345-0219", email: "airport.info@hwktn.gov", image: "https://hawkinscountytn.gov/images/airport2.jpg")

a12 = Airport.create(name: "Gatlinburg Pigeon Forge Airport", address: "134 Air Museum Way, Sevierville, TN 37862", state: "Tennessee", phone_number: "(865) 453-8393", email: "airport.info@svrtn.gov", image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Sevierville_-_Gatlinburg-Pigeon_Forge_%28GKT%29_AN1760217.jpg")

a13 = Airport.create(name: "City of Murfreesboro Airport", address: "1930 Memorial Blvd, Murfreesboro, TN 37129", state: "Tennessee", phone_number: "(615) 848-3254", email: "airport.info@mfbtn.gov", image: "https://www.metalconstructionnews.com/media/_mediumImage/MurfreesboroMunicipalAirport_May21_4.jpg")

a14 = Airport.create(name: "John C Tune Airport", address: "110 Tune Airport Dr, Nashville, TN 37209", state: "Tennessee", phone_number: "(615) 350-5000", email: "airport.info@nshtn.gov", image: "https://assets.website-files.com/60edaae34a8ee86b04715f4a/60edaae34a8ee8757771600f_Mask%20Group111.jpg")


ap = [a1.id, a2.id, a3.id, a4.id, a5.id, a6.id, a7.id, a8.id, a9.id, a10.id, a11.id, a12.id, a13.id, a14.id]

puts "creating aircraft 🫡"


p1 = Aircraft.create(airport_id: ap.sample, manufacturer: "Corben", model: "Baby Ace", hours: 30, description: "This is a fun single-seat tail wheel airplane, perfect for solo flights and cruising around in to build up your hours. There is no crazy gadgets to worry about in this plane, just focuses on the fundamentals and basic instrumentation. Max speed is this is roughly 100-110 mph, with a range of about 350mi. It's a real joy to fly!", image: "./baby_ace3.jpeg", hourly_rate: 75)

p2 = Aircraft.create(airport_id: ap.sample, manufacturer: "Diamond", model: "DA40 NG", hours: 5, description: "One of the best beginner planes out there. This is a top tier, safety first aircraft, it is very forgiving and has a lot of bells and whistles with it. You will be learning in luxury when flying this plane, and although you pay a premium compared to the others, it is well worth it.", image: "https://www.hangar67.com/photos/21308/4701773728.jpg", hourly_rate: 175)

p3 = Aircraft.create(airport_id: ap.sample, manufacturer: "Beechcraft", model: "G36 Bonanza", hours: 13, description: "The longest continuously produced aircraft in history, for a reason. This is a very reliable plane and probably our most popular. It has new avionics and has a max speed of around 200 mph.", image: "https://www.cav-systems.com/wordpress/wp-content/uploads/2017/11/mark-johnson-n536bb-beechcraft-g36tn-bonanza-001.jpg", hourly_rate: 160)

p4 = Aircraft.create(airport_id: ap.sample, manufacturer: "Cessna", model: "172", hours: 70, description: "The most widely used plane out there, a no frills easy aircraft to operate. This is a great plane to get started in and learn the fundamentals of flying. It may not be the fanciest plane but it is a great affordable option to start building hours.", image: "https://sweetaviation.wpenginepowered.com/wp-content/uploads/2015/04/SweetAviation-10004-1024x800.jpg", hourly_rate: 90)

p5 = Aircraft.create(airport_id: ap.sample, manufacturer: "Aviat", model: "Husky A-1C", hours: 21, description: "The Husky is a more bare bones plane intended to be taken in remote areas, and encourages exploration. This will be good for an already experienced student who wants to take on some more challenges.", image: "./aviat_husky_a1c.jpeg", hourly_rate: 140)

p6 = Aircraft.create(airport_id: ap.sample, manufacturer: "Diamond", model: "DA40", hours: 27, description: "One of the best beginner planes out there. This is a top tier, safety first aircraft, it is very forgiving and has a lot of bells and whistles with it. You will be learning in luxury when flying this plane, and although you pay a premium compared to the others, it is well worth it.", image: "https://flycraftchs.com/wp-content/uploads/2023/01/DIAMOND-AIRCRAFT-2008-DIAMOND-DA40-XLS-N218DC.png", hourly_rate: 185)

p7 = Aircraft.create(airport_id: ap.sample, manufacturer: "Piper", model: "Arrow", hours: 42, description: "The Arrow may be a good choice for a pilot with little complex aircraft experience or one who does not fly often. It was designed to be an easy step up for pilots transitioning from a trainer to a single with retractable landing gear and controllable-pitch propeller.", image: "./piper_arrow.jpeg", hourly_rate: 130)

p8 = Aircraft.create(airport_id: ap.sample, manufacturer: "Piper", model: "Colt", hours: 60, description: "The Piper Colt is a great entry plane, it is one of our most used planes and is a great aircraft to start building your hours in. It has been well maintained and is a joy to fly", image: "./piper_tri_pacer.jpeg", hourly_rate: 85)

p9 = Aircraft.create(airport_id: ap.sample, manufacturer: "Mooney", model: "M20", hours: 46, description: "An easy to fly, reliable aircraft. There is nothing super fancy about this aircraft but it allows for good fundamentals and great entry into flying.", image: "./mooney_f20c.jpeg", hourly_rate: 115)

p10 = Aircraft.create(airport_id: ap.sample, manufacturer: "Piper", model: "Archer", hours: 71, description: "A stable for general aviation, it's a reliable aircraft to build your flight hours and begin your journey towards becoming a pilot", image: "./piper_archer2_2.jpeg", hourly_rate: 90)

p11 = Aircraft.create(airport_id: ap.sample, manufacturer: "Piper", model: "PA-18 Super Cub", hours: 32, description: "A more intermediate flying experience, but will allow you to build some time with a tail wheel aircraft. This is a very popular model and frequently booked.", image: "./piper_supercub2.jpeg", hourly_rate: 105)

p12 = Aircraft.create(airport_id: ap.sample, manufacturer: "Diamond", model: "DA40", hours: 18, description: "One of the best beginner planes out there. This is a top tier, safety first aircraft, it is very forgiving and has a lot of bells and whistles with it. You will be learning in luxury when flying this plane, and although you pay a premium compared to the others, it is well worth it.", image: "https://www.ainonline.com/sites/ainonline.com/files/styles/ain30_fullwidth_large_2x/public/uploads/2018/12/5dwm1223.jpg?itok=c76fImFr&timestamp=1544265876", hourly_rate: 175)

p13 = Aircraft.create(airport_id: ap.sample, manufacturer: "Beechcraft", model: "G36 Bonanza", hours: 13, description: "The longest continuously produced aircraft in history, for a reason. This is a very reliable plane and probably our most popular. It has new avionics and has a max speed of around 200 mph.", image: "https://www.planesalesusa.com/Uploads/Listing/Normal/ID02654-7210-1-128-2012-Beechcraft-Bonanza-G36-Aircraft.jpg", hourly_rate: 150)

p14 = Aircraft.create(airport_id: ap.sample, manufacturer: "Cessna", model: "172", hours: 75, description: "The most widely used plane out there, a no frills easy aircraft to operate. This is a great plane to get started in and learn the fundamentals of flying. It may not be the fanciest plane but it is a great affordable option to start building hours.", image: "https://aceshighaviation.com/wp-content/uploads/2022/04/393-scaled.jpg", hourly_rate: 110)

p15 = Aircraft.create(airport_id: ap.sample, manufacturer: "Aviat", model: "Husky A-1C", hours: 10, description: "The Husky is a more bare bones plane intended to be taken in remote areas, and encourages exploration. This will be good for an already experienced student who wants to take on some more challenges.", image: "https://aviataircraft.com/wp-content/uploads/2022/07/N846U_FQDoor_Web.jpg", hourly_rate: 147)

p16 = Aircraft.create(airport_id: ap.sample, manufacturer: "Diamond", model: "DA40", hours: 42, description: "One of the best beginner planes out there. This is a top tier, safety first aircraft, it is very forgiving and has a lot of bells and whistles with it. You will be learning in luxury when flying this plane, and although you pay a premium compared to the others, it is well worth it.", image: "https://www.crosswindsaviation.com/wp-content/uploads/2019/08/N830BS-Front-Left-Quarter-600x600.jpg", hourly_rate: 178)

p17 = Aircraft.create(airport_id: ap.sample, manufacturer: "Piper", model: "Arrow", hours: 70, description: "The Arrow may be a good choice for a pilot with little complex aircraft experience or one who does not fly often. It was designed to be an easy step up for pilots transitioning from a trainer to a single with retractable landing gear and controllable-pitch propeller.", image: "https://princetonflyingschool.com/wp-content/uploads/2019/10/DSC05421.jpg", hourly_rate: 115)

p18 = Aircraft.create(airport_id: ap.sample, manufacturer: "Piper", model: "Colt", hours: 60, description: "The Piper Colt is a great entry plane, it is one of our most used planes and is a great aircraft to start building your hours in. It has been well maintained and is a joy to fly", image: "https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2022/05/13160616/IMG_6554-1100x531.jpg", hourly_rate: 85)

p19 = Aircraft.create(airport_id: ap.sample, manufacturer: "Mooney", model: "M20", hours: 46, description: "An easy to fly, reliable aircraft. There is nothing super fancy about this aircraft but it allows for good fundamentals and great entry into flying.", image: "./mooney_f20c.jpeg", hourly_rate: 115)

p20 = Aircraft.create(airport_id: ap.sample, manufacturer: "Piper", model: "Archer", hours: 71, description: "A stable for general aviation, it's a reliable aircraft to build your flight hours and begin your journey towards becoming a pilot", image: "./piper_archer2_2.jpeg", hourly_rate: 90)

p21 = Aircraft.create(airport_id: ap.sample, manufacturer: "Piper", model: "PA-18 Super Cub", hours: 32, description: "A more intermediate flying experience, but will allow you to build some time with a tail wheel aircraft. This is a very popular model and frequently booked.", image: "./piper_supercub2.jpeg", hourly_rate: 105)

puts "creating instructors"

experience = ["Beginner", "Professional", "Advanced", "Master"]

i1 = Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://images.squarespace-cdn.com/content/v1/543c334be4b0fb37be73face/1630965194026-DI0GT289DI8FILLQJW0Y/PXL_20210825_224802511.jpg?format=750w", flight_hours: 350, experience_level: experience.sample, aircraft_id: p12.id)

i2 = Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://images.squarespace-cdn.com/content/v1/543c334be4b0fb37be73face/fd50ba69-32ff-4080-9d19-e7110f51f514/IMG_2227.jpg?format=750w", flight_hours: 425, experience_level: experience.sample, aircraft_id: p2.id)

i3 = Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://www.mycitymag.com/wp-content/uploads/2017/08/coverflightins.jpg", flight_hours: 700, experience_level: "Master", aircraft_id: p3.id)

i4 = Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://www.nafinet.org/assets/tom%20turner%20hof.jpg", flight_hours: 500, experience_level: experience.sample, aircraft_id: p4.id)

i5 = Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://www.nafinet.org/assets/fred%20nauer%20hof%202.jpg", flight_hours: 900, experience_level: "Master", aircraft_id: p5.id)

i6 = Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://www.cpaviation.com/images/easyblog_articles/1025/Luke-Moran-11.18.20-CFI.JPEG", flight_hours: 400, experience_level: experience.sample, aircraft_id: p6.id)

i7 = Instructor.create(first_name: "Yukihiro", last_name: "Matsumoto", phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Yukihiro_Matsumoto.JPG", flight_hours: 10000, experience_level: "Master", aircraft_id: p7.id)

i8 = Instructor.create(first_name: "Brendan", last_name: "Eich", phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/440px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg", flight_hours: 975, experience_level: "Master", aircraft_id: p8.id)

i9 = Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://upperlimitaviation.edu/wp-content/uploads/2021/07/StudentPilot_C172_Flying.jpg", flight_hours: 575, experience_level: experience.sample, aircraft_id: p9.id)

i10 = Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://www.highflightacademy.com/wp-content/uploads/2021/11/Rich-Rafferty-CFI-Photo-1-600x427.jpeg", flight_hours: 600, experience_level: experience.sample, aircraft_id: p10.id)

i11 = Instructor.create(first_name: "Hunter", last_name: "Nedin", phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://hamiltonpawprint.com/wp-content/uploads/2014/03/hunterpilot-1.jpg", flight_hours: 100, experience_level: "Beginner", aircraft_id: p11.id)

i12 = Instructor.create(first_name: "Andrew", last_name: "Dutzy", phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://madamsabi.files.wordpress.com/2014/10/wpid-happy-pilot-580.jpg?w=443&zoom=2", flight_hours: 125, experience_level: "Beginner", aircraft_id: p1.id)

i13 = Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://www.highflightacademy.com/wp-content/uploads/2020/09/hayden_cropped-300x251_opt.jpg", flight_hours: 675, experience_level: experience.sample, aircraft_id: p13.id)

i14 = Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://www.highflightacademy.com/wp-content/uploads/2022/06/Skyler-Behn-edited.jpg", flight_hours: 825, experience_level: experience.sample, aircraft_id: p14.id)

i15= Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://www.highflightacademy.com/wp-content/uploads/2021/10/Ben-Stevens-1.jpg", flight_hours: 800, experience_level: experience.sample, aircraft_id: p15.id)

i16= Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://galvinflying.com/wp-content/uploads/2021/02/DavidSM.jpg", flight_hours: 925, experience_level: experience.sample, aircraft_id: p16.id)

i17= Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://galvinflying.com/wp-content/uploads/2021/06/Bartholet-CFI-2048x2048.jpg", flight_hours: 900, experience_level: experience.sample, aircraft_id: p17.id)

i18= Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://galvinflying.com/wp-content/uploads/2021/02/JimL_SM.jpg", flight_hours: 575, experience_level: experience.sample, aircraft_id: p18.id)

i19= Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://galvinflying.com/wp-content/uploads/2021/02/Garrison-Fleet-1024x1024-1.jpg", flight_hours: 550, experience_level: experience.sample, aircraft_id: p19.id)

i20= Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://galvinflying.com/wp-content/uploads/2021/02/WayneSM.jpg", flight_hours: 600, experience_level: experience.sample, aircraft_id: p20.id)

i21= Instructor.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(25..60), image: "https://simpliflyco.com/wp-content/uploads/2021/09/X7A2058-980x654.webp", flight_hours: 775, experience_level: experience.sample, aircraft_id: p21.id)

puts "creating users"

u1= User.create(first_name: "Yogi", last_name: "The Bear", gender: "Male", phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.free_email, age: rand(16..90), image: "https://static.thisdayinaviation.com/wp-content/uploads/tdia/2014/03/Yogi.jpg", flight_hours: 10, username: "b58yogi", password: "1111")

u2= User.create(first_name: "Kevin",
    last_name: "Dutzy",
    gender: "Male",
    phone_number: "2354322356",
    email: "adga@adsafgg.com",
    age: rand(16..90),
    image: "https://static.thisdayinaviation.com/wp-content/uploads/tdia/2014/03/Yogi.jpg",
    flight_hours: 5,
    username: "keffdu",
    password: "1111"
)

puts "creating flight lessons"

fl1= FlightLesson.create(date: "02/15/2023", airport: a1.name, start_time: "14:00", end_time: "16:00", user_id: u1.id, aircraft_id: p1.id)

fl2= FlightLesson.create(date: "03/06/2023", airport: a1.name, start_time: "15:00", end_time: "17:00", user_id: u1.id, aircraft_id: p1.id)

fl3= FlightLesson.create(date: "01/24/2023", airport: a1.name, start_time: "13:00", end_time: "15:00", completed: true, user_id: u1.id, aircraft_id: p1.id)