require 'rails_helper'

RSpec.describe Movie, type: :model do
  let(:movie) {Movie.new(title: "Amadeus")}

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(movie).to be_valid
    end

    it "has the expected fields" do
      expect(movie.title).to eq "Amadeus"
    end
  end

  describe "Associations" do
    it "has many people" do
      assc = Movie.reflect_on_association(:people)
      expect(assc.macro).to eq :has_many
    end

    it "has many users" do
      assc = Movie.reflect_on_association(:users)
      expect(assc.macro).to eq :has_many
    end
  end
end