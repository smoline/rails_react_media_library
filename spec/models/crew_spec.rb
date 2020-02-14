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

  let(:person) do
    Person.new(
      id: 1,
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

  let(:crew) do
    Crew.new(
      department: "Directing",
      job: "Director",
      person_id: person.id,
      crewable_type: "Movie",
      crewable_id: movie.id
    )
  end

  describe "Validations" do
    # it "is valid with valid attributes" do
    #   expect(crew).to be_valid
    # end

    it "has the expected fields" do
      expect(crew.department).to eq "Directing"
    end
  end

  describe "Associations" do
    it "belongs to person" do
      assc = Crew.reflect_on_association(:person)
      expect(assc.macro).to eq :belongs_to
    end
  end
end