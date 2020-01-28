module Castable
  extend ActiveSupport::Concern
  included do
    has_many :casts, as: :castable
    has_many :people, through: :casts
  end
end