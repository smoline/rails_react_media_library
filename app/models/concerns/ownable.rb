module Ownable
  extend ActiveSupport::Concern
  included do
    has_many :owners, as: :ownable
  end
end