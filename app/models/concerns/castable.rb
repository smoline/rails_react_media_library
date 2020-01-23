module Castable
  extend ActiveSupport::Concern
  included do
    has_many :casts, as: :castable
  end
end