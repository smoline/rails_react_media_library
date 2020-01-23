module Crewable
  extend ActiveSupport::Concern
  included do
    has_many :crews, as: :crewable
  end
end