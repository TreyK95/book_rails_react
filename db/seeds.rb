# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
<<<<<<< HEAD
require "faker"

=======

require "faker"

catagories = ["food", "travel", "misc"]

>>>>>>> 7f76cd7ebb50f692900a091ab93fb28ed05a8952
10.times do |i|
  Book.create(
    title: Faker::Hacker.abbreviation,
    author: Faker::Hacker.say_something_smart,
  )
end
<<<<<<< HEAD

puts "seeded books: #{Book.all.size}"
=======
>>>>>>> 7f76cd7ebb50f692900a091ab93fb28ed05a8952
