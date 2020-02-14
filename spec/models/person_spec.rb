require 'rails_helper'

RSpec.describe Person, type: :model do
  let(:person) do
    Person.new(
      name: "Daniel Day-Lewis",
      biography: "Daniel Michael Blake Day-Lewis (born 29 April 1957) is an English actor.",
      birthday: "1957-04-29",
      deathday: "",
      place_of_birth: "Greenwich, London, England, UK",
      gender: "Male",
      profile_path_url: "http://image.tmdb.org/t/p/w185/3kNA9VcmymoEwT0btQ4bvMYxzcP.jpg",
      tmdb_people_id: 11856,
      imdb_people_id: "nm0000358"
    )
  end

  describe "Validations" do
    it "has the expected fields" do
      expect(person).to be_valid
      expect(person.name).to eq "Daniel Day-Lewis"
    end

    it "is not valid without name" do
      person.name = nil
      expect(person).to_not be_valid
    end
  end

  describe "Associations" do
    it "has many movies" do
      assc = Person.reflect_on_association(:movies)
      expect(assc.macro).to eq :has_many
    end
  end
end