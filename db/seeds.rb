# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

require "open-uri"
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    CartItem.destroy_all
    Review.destroy_all
    Product.destroy_all
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('cart_items')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:

    User.create!(
      first_name: 'Demo',
      email: 'demo@test.com',
      password: 'password123'
    )

    User.create!(
      first_name: 'jsonBourne',
      email: 'hire@me.com',
      password: 'password123'
    )

    User.create!(
      first_name: 'greenSpec',
      email: 'html@brackets.com',
      password: 'password123'
    )

    User.create!(
      first_name: 'GITandGLITTER',
      email: 'react@state.com',
      password: 'password123'
    )

    User.create!(
      first_name: 'BlinkNPM',
      email: 'rails@routes.com',
      password: 'password123'
    )

    User.create!(
      first_name: 'linearGradient',
      email: 'css@cascade.com',
      password: 'password123'
    )

    User.create!(
      first_name: 'lowkeyFlex',
      email: 'jsx@element.com',
      password: 'password123'
    )

    User.create!(
      first_name: 'modalCitizen',
      email: 'mvc@model.com',
      password: 'password123'
    )

    User.create!(
      first_name: 'rubyGems',
      email: 'ruby@gems.com',
      password: 'password123'
    )

    User.create!(
      first_name: 'Ajax',
      email: 'ajax@request.com',
      password: 'password123'
    )



    # More users
    # 10.times do
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   })
    # end


    puts "seeding products"

    art1 = Product.create!(
      name: "Mona Lisa High Resolution Poster Print",
      description: "Own the enigma! The Mona Lisa print, a timeless masterpiece with an elusive smile that's been baffling art critics and living room guests alike. 'Is she chuckling at your dance moves?' Order now and wonder forever!",
      price: 20,
      category: "Art",
      sizes: ["11x17", "18x24", "24x36", "27x40"]
    )

    art1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/Mona.jpeg"), filename: "Mona1.jpg")
    art1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/MonaFloor.avif"), filename: "Mona2.jpg")
    art1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/MonaWall.avif"), filename: "Mona3.jpg")

    art2 = Product.create!(
      name: "The Last Supper by Da Vinci Poster Print",
      description:
      "Spice up your dining room with Da Vinci's 'Last Supper' poster. One of the most recognized pieces of art history, now it can spark lively debate at your dinner parties! 'Which disciple skipped on the check?' Keep guests guessing!",
      price: 20,
      category: "Art",
      sizes: ["11x17", "18x24", "24x36", "27x40"]
      )

      art2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/LastSupper.jpeg"), filename: "Supper1.jpg")

      art3 = Product.create!(
        name: "Birth of Venus by Botticelli Fine Art Print",
        description: "Shake up your home decor with Botticelli's 'Birth of Venus' poster. Before Beyoncé, there was Venus, setting the original standard for emerging flawlessly. Get this poster and celebrate the OG queen of fabulous entrances!",
        price: 20,
        category: "Art",
        sizes: ["11x17", "18x24", "24x36", "27x40"]
      )

      art3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/BirthOfVenus.jpeg"), filename: "Venus1.jpg")

    jewelry1 = Product.create!(
      name: "Handcrafted Jade Bead Earrings",
      description:
      "Embrace your inner warrior with these Jade Earrings. Just like Mulan, show that your beauty is more than just skin-deep. Let your strength and courage shine every time you wear these!",
      price: 50,
      category: "Jewelry",
      sizes: ["12mm"]
    )

    jewelry1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/Jade.jpeg"), filename: "Jade1.jpg")

    jewelry2 = Product.create!(
      name: "Elegant Round Cut Diamond Ring",
      description: "Sparkle brighter than Cinderella at the ball with this exquisite Diamond Ring. Who needs a Fairy Godmother when you've got this eternal beauty at your fingertips!",
      price: 1000,
      category: "Jewelry",
      sizes: ["12mm"]
    )

    jewelry2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/diamond.jpeg"), filename: "Diamond1.jpg")

    jewelry3 = Product.create!(
      name: "Classic Gold Cuff Bracelet",
      description:
      "Embrace your inner Wonder Woman with this elegant Gold Bracelet. Not quite a lasso of truth, but this stunning piece might just make you feel like a superhero!",
      price: 150,
      category: "Jewelry",
      sizes: ["10in", "12in", "14in"]
    )

    jewelry3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/gold.jpeg"), filename: "Gold1.jpg")

    jewelry4 = Product.create!(
      name: "Gold Chain",
      description:
      "I got a gold chain with a bad name. Love my face but dont love my brain. Lets talk about it",
      price: 150,
      category: "Jewelry",
      sizes: ["10in", "12in", "14in"]
    )

    jewelry4.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/gold_chain.avif"), filename: "gold_chain.avif")
    jewelry4.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/gold_chain2.avif"), filename: "gold_chain2.avif")
    jewelry4.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/gold_chain3.avif"), filename: "gold_chain3.avif")

    jewelry5 = Product.create!(
      name: "Wood ring.",
      description:
      "Wood Ring Gift for Woman Resin Rings Gift For Her Statement Ring Wood Jewelry Unique gift Birthday gift Clothing gift Wooden Ring Boho Ring.",
      price: 145,
      category: "Jewelry",
      sizes: ["10in", "12in", "14in"]
    )

    jewelry5.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/woodring.webp"), filename: "woodring.webp")
    jewelry5.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/woodring2.avif"), filename: "woodring2.avif")

    clothing1 = Product.create!(
      name: "Boho Chic Dress",
      description:
      "Introducing our Printed Hippie Boho Chic Summer Dress, the epitome of laid-back style and bohemian charm.",
      price: 40,
      category: "Clothing",
      sizes: ["XS", "S", "M", "L", "XL"]
    )

    clothing1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/clothing/bohochicdress.avif"), filename: "bohochicdress.avif")

    clothing2 = Product.create!(
      name: "Wool Sweater",
      description:
      "Stay warm with this cozy wool sweater. Chunky Merino Wool Sweater, Oversized Women Jumper, Loose Knit Jumper, Minimalist Basic Knitwear, Boho Sweater, Winter Clothing, Winter Gift",
      price: 65,
      category: "Clothing",
      sizes: ["XS", "S", "M", "L", "XL"]
    )

    clothing2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/clothing/woolsweater.avif"), filename: "woolsweater.avif")
    clothing2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/clothing/woolsweater2.avif"), filename: "woolsweater2.avif")
    clothing2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/clothing/woolsweater3.avif"), filename: "woolsweater3.avif")

    clothing3 = Product.create!(
      name: "Leather Sandals",
      description:
      "Women Leather Sandals, Feather Fan Sandals, Handmade To Order, Fur Lace Sandals, Women Shoes, Summer Shoes, Sandales Grecques / KIRKI",
      price: 145,
      category: "Clothing",
      sizes: ["5", "6", "7", "8", "9"]
    )

    clothing3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/clothing/leathersandals.avif"), filename: "leathersandals.avif")
    clothing3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/clothing/leathersandals2.avif"), filename: "leathersandals2.avif")
    clothing3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/clothing/leathersandals3.avif"), filename: "leathersandals3.avif")

    clothing4 = Product.create!(
      name: "Mushroom Converse",
      description:
      "Custom Converse Chuck Taylor Mushrooms Embroidered Converse Shoes/ Mushrooms Embroidered Converse Custom/ Mushrooms Embroidered Sneakers",
      price: 100,
      category: "Clothing",
      sizes: ["7", "8", "9", "10", "11"]
    )

    clothing4.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/clothing/mushroomconverse.webp"), filename: "mushroomconverse.webp")
    clothing4.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/clothing/mushroomconverse2.avif"), filename: "mushroomconverse2.avif")

    home1 = Product.create!(
      name: "Moss Wall Clock",
      description:
      "Made to Order Moss Wall Clock, Personalized gift, Wall Art, Custom Made Moss & Wood Wall Clock, Custom Wall Decor",
      price: 168,
      category: "Home",
      sizes: ["12in", "14in", "16in"]
    )

    home1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/home/clock1.avif"), filename: "clock1.avif")
    home1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/home/clock2.avif"), filename: "clock2.avif")

    home2 = Product.create!(
      name: "Navajo Pillow",
      description:
      "home decor pillow, tribal pillow cover, bench cushion, contemporary pillow, aztec pillow, body pillow, eco friendly, interior pillows",
      price: 12,
      category: "Home",
      sizes: ["18x18", "12x24"]
    )

    home2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/home/pillow.avif"), filename: "pillow.avif")
    home2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/home/pillow2.avif"), filename: "pillow.avif2")
    home2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/home/pillow3.avif"), filename: "pillow.avif3")

    home3 = Product.create!(
      name: "Blue Persian Rug",
      description:
      "Blue Persian Rug 8x10, Blue Kilim Rug 8x10, Oriental Vintage Blue Rug, Bessarabian Kilim, Custom Sized Blue Rug, Animal Patterned Blue Rug
      ",
      price: 85,
      category: "Home",
      sizes: ["5ftx7ft", "7ftx10ft"]
    )

    home3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/home/rug1.avif"), filename: "rug1.avif")
    home3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/home/rug2.avif"), filename: "rug2.avif")
    home3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/home/rug3.avif"), filename: "rug3.avif")

    wedding1 = Product.create!(
      name: "Mr. and Mrs. Custom Champagne Flutes",
      description:
      "Wedding Champagne Glasses, Set of 2 - Champagne Flutes, Wedding Gifts, Mr and Mrs Toasting Glasses, Wedding Decor, Bride and Groom",
      price: 30,
      category: "Wedding",
      sizes: ["set of 2"]
    )

    wedding1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/wedding/flutes1.avif"), filename: "flutes1.avif")
    wedding1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/wedding/flutes2.avif"), filename: "flutes2.avif")
    wedding1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/wedding/flutes3.avif"), filename: "flutes3.avif")

    wedding2 = Product.create!(
      name: "Floral Wedding Tiara",
      description:
      "Floral Bridal Tiara, Wedding Tiara, Bridal Crown, Wedding Crown, Bridal Tiara, Floral Bridal Headpiece",
      price: 85,
      category: "Wedding",
      sizes: ["7.5", "8", "8.5"]
    )

    wedding2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/wedding/weddingcrown.avif"), filename: "weddingcrown.avif")
    wedding2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/wedding/weddingcrown2.avif"), filename: "weddingcrown2.avif")
    wedding2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/wedding/weddingcrown3.avif"), filename: "weddingcrown3.avif")

    wedding3 = Product.create!(
      name: "Wax seal for wedding invites",
      description:
      "Custom logo wax seal stamp kit for wedding invitation , Custom letter wax stamp kit , Wedding wax seal kit , Letter wax stamp kit custom",
      price: 100,
      category: "Wedding",
      sizes: ["100", "200", "400"]
    )

    wedding3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/wedding/waxseal1.avif"), filename: "waxseal1.avif")
    wedding3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/wedding/waxseal2.avif"), filename: "waxseal2.avif")
    wedding3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/wedding/waxseal3.avif"), filename: "waxseal3.avif")

    toys1 = Product.create!(
      name: "Akira: Volume 1",
      description:
      "AKIRA - Volume 1 - Katsuhiro Otomo Manga Sci-Fi (Book 1) Anime PB. Greatest thing ever.",
      price: 100,
      category: "toys",
      sizes: ["paperback"]
    )

    toys1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/akira1.avif"), filename: "akira1.avif")
    toys1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/akira2.jpg"), filename: "akira2.jpg")
    toys1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/akira3.jpg"), filename: "akira3.jpg")

    toys2 = Product.create!(
      name: "Crystal Singing Bowls",
      description:
      "Professional Chakra Tuning 432HZ Perfect Pitch 6-12 Inches Crystal Singing Bowls, for meditation, 7 Pieces Set CDEFGAB with Carry Cases and Mallets",
      price: 100,
      category: "toys",
      sizes: ["paperback"]
    )

    toys2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/bowls1.avif"), filename: "bowls1.avif")
    toys2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/bowls2.avif"), filename: "bowls2.avif")
    toys2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/bowls3.avif"), filename: "bowls3.avif")

    toys3 = Product.create!(
      name: "Premium Collectors Chess Set",
      description:
      "Premium Chess Set - Handmade Chess Board - Resin Chess Pieces - Gorgeous Walnut Brass Chess Board - Luxury Gift for Him",
      price: 100,
      category: "toys",
      sizes: ["Full Set"]
    )

    toys3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/chess1.avif"), filename: "chess1.avif")
    toys3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/chess2.avif"), filename: "chess2.avif")
    toys3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/chess3.avif"), filename: "chess3.avif")

    toys4 = Product.create!(
      name: "Vintage Blue Dice DnD Metal Dice",
      description:
      "Vintage Blue Dice DnD Metal Dice, Dungeons and Dragons, dnd dice set Polyhedral Dice, MTG Dice D&D Dice , Metal Dnd Dice Gifts for Christmas",
      price: 40,
      category: "toys",
      sizes: ["full set"]
    )

    toys4.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/dnd.avif"), filename: "dnd.avif")
    toys4.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/toys/dnd.webp"), filename: "dnd.webp")

    crafts1 = Product.create!(
      name: "Disco Ball Pot for Plants",
      description:
      "Hanging Disco Ball Planter brightens up any room or porch, catching the sunlight to shine where it's needed most. This stylish boho disco ball extends the reach of your window and making your home décor pop!",
      price: 40,
      category: "crafts",
      sizes: ["8in", "10in", "12in"]
    )

    crafts1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/crafts/disco1.avif"), filename: "disco1.avif")
    crafts1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/crafts/disco2.avif"), filename: "disco2.avif")
    crafts1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/crafts/disco3.webp"), filename: "disco3.webp")

    crafts2 = Product.create!(
      name: "Ultralight Bamboo Magnetic Sketch Easel Handmade",
      description:
      "Magnetic Sketch Easel! Great for small works of watercolor, gouache, pencil, and acrylics (not recommended for oils). Painting anywhere!",
      price: 40,
      category: "crafts",
      sizes: ["8in", "10in", "12in"]
    )

    crafts2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/crafts/easel.avif"), filename: "easel.avif")
    crafts2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/crafts/easel2.avif"), filename: "easel2.avif")
    crafts2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/crafts/easel3.avif"), filename: "easel3.avif")

    crafts3 = Product.create!(
      name: "Watercolor Palette",
      description:
      "Walnut watercolor box Travel watercolor Go draw Watercolor palette Pocket watercolor box for painting.",
      price: 25,
      category: "crafts",
      sizes: ["8in", "10in", "12in"]
    )

    crafts3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/crafts/watercolor1.avif"), filename: "watercolor1.avif")
    crafts3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/crafts/watercolor2.avif"), filename: "watercolor2.avif")
    crafts3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/crafts/watercolor3.avif"), filename: "watercolor3.avif")








    puts "seeding custom reviews"

    Review.create!(
      title: "Mona Lisa's Secret Smile",
      rating: 5,
      body: "Can confirm, Mona Lisa definitely chuckles at my dance moves. She has brought a new level of class to my living room. Five stars!",
      user_id: 1,
      product_id: art1.id
    )

    Review.create!(
      title: "Da Vinci's Enigma",
      rating: 4,
      body: "I love my Mona Lisa print! She's so mysterious... I spend hours trying to figure out her smile. Recommended for all art enthusiasts.",
      user_id: 2,
      product_id: art1.id
    )

    Review.create!(
      title: "Endless Mystery",
      rating: 4,
      body: "I've been looking at this print for weeks, and still can't figure her out. She's the perfect conversation starter. Highly recommend!",
      user_id: 3,
      product_id: art1.id
    )

    Review.create!(
      title: "Last Supper Fun",
      rating: 4,
      body: "I’ve never seen my guests so engaged! They all try to figure out who ditched on the check. Hilarious! Great quality too.",
      user_id: 4,
      product_id: art2.id
    )

    Review.create!(
      title: "Dinner Debate",
      rating: 5,
      body: "Our dinner parties are now filled with lively debates, thanks to this Da Vinci's masterpiece. It's made every meal a memorable experience.",
      user_id: 5,
      product_id: art2.id
    )

    Review.create!(
      title: "Dinner Drama",
      rating: 5,
      body: "The 'Last Supper' poster is the talk of the town! It has added a whole new level of intrigue to our dinner parties. Love it!",
      user_id: 6,
      product_id: art2.id
    )

    Review.create!(
      title: "Fashion Forward",
      rating: 4,
      body: "Venus is the ultimate diva, and she knows it! This poster adds a certain glam to my room that even Beyoncé would be jealous of!",
      user_id: 7,
      product_id: art3.id
    )

    Review.create!(
      title: "Fabulous Venus",
      rating: 4,
      body: "Absolutely love the 'Birth of Venus' poster! The OG queen makes a statement in my living room. Visitors can't help but admire her!",
      user_id: 8,
      product_id: art3.id
    )

    Review.create!(
      title: "Botticelli's Best",
      rating: 5,
      body: "Venus has added a touch of elegance and grace to my home. The quality of the print is excellent, and the size options were a plus.",
      user_id: 9,
      product_id: art3.id
    )

    Review.create!(
      title: "Jade of Glory",
      rating: 4,
      body: "Felt like Mulan when I wore these Jade Earrings! They’re so elegant and make me feel powerful. Couldn’t ask for more!",
      user_id: 1,
      product_id: jewelry1.id
    )

    Review.create!(
      title: "Warrior Earrings",
      rating: 5,
      body: "These earrings make me feel like I can take on the world. They're more than just beautiful, they're empowering. Love them!",
      user_id: 2,
      product_id: jewelry1.id
    )

    Review.create!(
      title: "Elegance and Power",
      rating: 4,
      body: "Just like Mulan, these earrings show that beauty is more than skin-deep. They've become my go-to for any special occasion.",
      user_id: 3,
      product_id: jewelry1.id
    )

    Review.create!(
      title: "My Own Fairy Tale",
      rating: 5,
      body: "I feel like Cinderella every time I wear this diamond ring! It's absolutely stunning. Who needs Prince Charming?",
      user_id: 4,
      product_id: jewelry2.id
    )

    Review.create!(
      title: "Eternal Beauty",
      rating: 5,
      body: "This ring is beautiful! It sparkles and shines just like Cinderella's glass slipper. It's my favorite piece of jewelry!",
      user_id: 5,
      product_id: jewelry2.id
    )

    Review.create!(
      title: "Cinderella's Choice",
      rating: 5,
      body: "This diamond ring is a dream come true! It's just like being Cinderella at the ball. A definite must-buy!",
      user_id: 6,
      product_id: jewelry2.id
    )

    Review.create!(
      title: "Superhero Style",
      rating: 4,
      body: "This gold bracelet is my new secret weapon! I might not have superpowers, but I feel like Wonder Woman when I wear it.",
      user_id: 7,
      product_id: jewelry3.id
    )

    Review.create!(
      title: "Wonderful Bracelet",
      rating: 5,
      body: "This bracelet is my new favorite accessory. It's not a lasso of truth, but it makes me feel powerful and stylish. Love it!",
      user_id: 9,
      product_id: jewelry3.id
    )

    Review.create!(
      title: "Golden Wonder",
      rating: 5,
      body: "Every time I wear this gold bracelet, I feel like I can take on the world. It's a beautiful piece of jewelry and a great confidence booster.",
      user_id: 1,
      product_id: jewelry3.id
    )




    puts "seeding random reviews"
    # seed random reviews
    Product.all.map do |product|
      3.times do
        Review.create!(
          title: Faker::Movies::PrincessBride.character, # generating random titles for the reviews
          rating: rand(3..5),
          body: Faker::Movies::PrincessBride.quote,
          user_id: rand(2..9), # assuming that user with id 1 always exists
          product_id: product.id
          )
        end
      end

      puts "cart item"

      CartItem.create!(
        user_id: 1,
        product_id: 1,
        quantity: 1,
        options: '11×17'
        )

      CartItem.create!(
        user_id: 1,
        product_id: 2,
        quantity: 1,
        options: '11×17'
        )

        puts "Done!"
