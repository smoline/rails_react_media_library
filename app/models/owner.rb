class Owner < ApplicationRecord
  belongs_to :user
  belongs_to :ownable, polymorphic: true

  # has_many :movies, through: :owners, source: :ownable, source_type: 'Movie'
end
