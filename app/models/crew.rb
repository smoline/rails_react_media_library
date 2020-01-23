class Crew < ApplicationRecord
  belongs_to :person
  belongs_to :crewable, polymorphic: true
end
