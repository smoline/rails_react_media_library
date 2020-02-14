require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) do
    User.new(
      first_name: "John",
      last_name: "Doe",
      email: "john@email.com",
      password: "password",
      password_confirmation: "password"
    )
  end

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(user).to be_valid
    end

    it "has the expected fields" do
      expect(user.first_name).to eq "John"
    end
  end

  describe "Associations" do
    it "has many movies" do
      assc = User.reflect_on_association(:movies)
      expect(assc.macro).to eq :has_many
    end

    it "has many owners" do
      assc = User.reflect_on_association(:owners)
      expect(assc.macro).to eq :has_many
    end
  end
end