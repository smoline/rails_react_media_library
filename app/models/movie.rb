class Movie < ApplicationRecord
  include Ownable
  include Castable
  include Crewable

  has_many :owners, as: :ownable
  accepts_nested_attributes_for :owners

  has_many :users, through: :owners

  validates :title, presence: true
  validates_uniqueness_of :tmdb_id
  validates_uniqueness_of :imdb_id
end
