require 'rails_helper'

RSpec.describe Owner, type: :model do
  let(:movie) do
    Movie.new(
      id: 1,
      title: "Lincoln",
      tmdb_id: 72976,
      imdb_id: "tt0443272",
      description: "A revealing drama that focuses on the 16th President.",
      release_date: "2012-11-09",
      runtime: 149,
      tagline: "With the moral courage and fierce determination to succeed, his choices will change the fate of generations to come.",
      movie_image_url: "http://image.tmdb.org/t/p/w185/gkkiDu9srCCbCMxGKwNwKCxK7KF.jpg"
    )
  end

  let(:user) do
    User.new(
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john@email.com",
      password: "password",
      password_confirmation: "password"
    )
  end

  let(:owner) do
    Owner.new(
      user_id: user.id,
      notes: "excellent movie",
      upc: nil,
      rating: 3,
      ownable_type: "Movie",
      ownable_id: movie.id
    )
  end

  describe "Validations" do
    # it "is valid with valid attributes" do
    #   expect(owner).to be_valid
    # end

    it "has the expected fields" do
      expect(owner.notes).to eq "excellent movie"
    end
  end

  describe "Associations" do
    it "has one user" do
      assc = Owner.reflect_on_association(:user)
      expect(assc.macro).to eq :belongs_to
    end
  end
end