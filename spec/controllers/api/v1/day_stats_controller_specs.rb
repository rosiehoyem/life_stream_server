require 'rails_helper'

RSpec.describe Api::V1::DayStatsController, type: :controller do
  include Api::ApiHelper

  let(:user) { create(:user) }

  let(:create_params) {
    FactoryGirl.attributes_for(:day_stat, user_id: user.id)
  }
  
  describe "POST #create" do

    context "accepts a post request" do
      it "should return a 201 status code and message (Created)" do
        # process :create, method: :post, params: { day_stat: create_params.merge(format: :json) } 
        post :create, { day_stat: create_params.merge(format: :json) }
        binding.pry
        expect(response).to have_http_status(201)
        expect(response.message).to eq("Created")
      end
    end
  end
end