class Owner < ApplicationRecord
  belongs_to :user
  belongs_to :ownable, polymorphic: true
end
