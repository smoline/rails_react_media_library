module Ownable
  extend ActiveSupport::Concern
  included do
    has_many :owners, as: :ownable, dependent: :destroy
    has_many :users, through: :owners
  end
end