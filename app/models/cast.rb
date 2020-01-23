class Cast < ApplicationRecord
  belongs_to :person
  belongs_to :castable, polymorphic: true
end
