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
    User.destroy_all
    Product.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')

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
      sizes: ['11×17', '18×24', '24×36', '27×40']
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
      sizes: ['11×17', '18×24', '24×36', '27×40']
      )

      art2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/LastSupper.jpeg"), filename: "Supper1.jpg")

      art3 = Product.create!(
        name: "Birth of Venus by Botticelli Fine Art Print",
        description: "Shake up your home decor with Botticelli's 'Birth of Venus' poster. Before Beyoncé, there was Venus, setting the original standard for emerging flawlessly. Get this poster and celebrate the OG queen of fabulous entrances!",
        price: 20,
        category: "Art",
        sizes: ['11×17', '18×24', '24×36', '27×40']
      )

      art3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/BirthOfVenus.jpeg"), filename: "Venus1.jpg")

    jewelry1 = Product.create!(
      name: "Handcrafted Jade Bead Earrings",
      description:
      "Embrace your inner warrior with these Jade Earrings. Just like Mulan, show that your beauty is more than just skin-deep. Let your strength and courage shine every time you wear these!",
      price: 50,
      category: "Jewelry",
      sizes: []
    )

    jewelry1.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/Jade.jpeg"), filename: "Jade1.jpg")

    jewelry2 = Product.create!(
      name: "Elegant Round Cut Diamond Ring",
      description: "Sparkle brighter than Cinderella at the ball with this exquisite Diamond Ring. Who needs a Fairy Godmother when you've got this eternal beauty at your fingertips!",
      price: 1000,
      category: "Jewelry",
      sizes: []
    )

    jewelry2.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/diamond.jpeg"), filename: "Diamond1.jpg")

    jewelry3 = Product.create!(
      name: "Classic Gold Cuff Bracelet",
      description:
      "Embrace your inner Wonder Woman with this elegant Gold Bracelet. Not quite a lasso of truth, but this stunning piece might just make you feel like a superhero!",
      price: 150,
      category: "Jewelry",
      sizes: []
    )

    jewelry3.images.attach(io: URI.open("https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/gold.jpeg"), filename: "Gold1.jpg")

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



    puts "Done!"

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
