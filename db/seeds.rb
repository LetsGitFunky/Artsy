# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do
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
      first_name: 'test',
      email: 'test@test.com',
      password: 'password'
    )

    puts "Done!"

    # More users
    # 10.times do
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   })
    # end


    art1 = Product.create!(
      name: "Mona Lisa",
      description: "Look at that smile!",
      price: 20,
      category: "Art",
      img_urls: ["https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/Mona.jpeg",
      "https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/MonaFloor.avif",
    "https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/MonaWall.avif"],
      sizes: ['11×17', '18×24', '24×36', '27×40']
    )

    art2 = Product.create!(
      name: "Last Supper",
      description: "Da Vinci Code",
      price: 20,
      category: "Art",
      img_urls: ["https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/LastSupper.jpeg"],
      sizes: ['11×17', '18×24', '24×36', '27×40']
      )

      art3 = Product.create!(
        name: "Birth of Venus",
        description: "Take that beyonce!",
        price: 20,
        category: "Art",
        img_urls: ["https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/art/BirthOfVenus.jpeg"],
        sizes: ['11×17', '18×24', '24×36', '27×40']
      )

    jewelry1 = Product.create!(
      name: "Jade Earrings",
      description: "Beads of Jade for beauty",
      price: 50,
      category: "Jewelry",
      img_urls: ["https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/Jade.jpeg"],
      sizes: []
    )

    jewelry2 = Product.create!(
      name: "Diamond Ring",
      description: "Diamonds are forever",
      price: 1000,
      category: "Jewelry",
      img_urls: ["https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/diamond.jpeg"],
      sizes: []
    )

    jewelry3 = Product.create!(
      name: "Gold Bracelet",
      description: "Take that beyonce!",
      price: 150,
      category: "Jewelry",
      img_urls: ["https://artsy-seeds.s3.us-west-1.amazonaws.com/products-photos/jewelry/gold.jpeg"],
      sizes: []
    )


  end
