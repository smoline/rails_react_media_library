class Person < ApplicationRecord
  has_many :casts, source: :person
  has_many :movies, through: :casts, source: :castable, source_type: 'Movie'

  has_many :crews, source: :person
  has_many :movies, through: :crews, source: :crewable, source_type: 'Movie'

  validates :name, presence: true
  validates_uniqueness_of :tmdb_people_id
  validates_uniqueness_of :imdb_people_id
end
