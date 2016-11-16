FactoryGirl.define do
  factory :user do
    first_name "Hillary"
    last_name "Clinton"
    age 56
    gender "Female"
    address "100 6th St."
    city "New York"
    state "NY"
    zip "10065"
    sequence(:email) { |n| "user_#{n}@example.com" }
    password "password"
    password_confirmation "password"
  end
end
