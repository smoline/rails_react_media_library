class Movie < ApplicationRecord
  include Ownable
  include Castable
  include Crewable

  accepts_nested_attributes_for :owners

  validates :title, presence: true
  validates_uniqueness_of :tmdb_id
  validates_uniqueness_of :imdb_id
end
