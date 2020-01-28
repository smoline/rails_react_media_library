module Crewable
  extend ActiveSupport::Concern
  included do
    has_many :crews, as: :crewable
    has_many :people, through: :crews
  end
end