class User < ApplicationRecord
  has_secure_password

  has_many :owners
  has_many :movies, through: :owners, source: :ownable, source_type: 'Movie'

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
