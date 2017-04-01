FactoryGirl.define do
  factory :user do
    first_name "Hillary"
    last_name "Clinton"
    sequence(:email) { |n| "user_#{n}@example.com" }
    password "password"
    password_confirmation "password"
  end
end
