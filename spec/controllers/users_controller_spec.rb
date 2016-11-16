require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let(:user) { create(:user) }
  let(:valid_attributes) {
    FactoryGirl.attributes_for(:user)
  }
  let(:invalid_attributes) {
    FactoryGirl.attributes_for(:user, email: nil)
  }

  describe "GET #index" do
    context "valid user" do
      before(:each) do
        sign_in user
        user2 = User.create! valid_attributes
        get :index
      end

      specify { expect(response).to have_http_status(200) }

      it "assigns all users as @users" do
        expect(assigns(:users)).to include(user)
      end
    end
  end

  describe "GET #show" do
    context "valid user" do
      before(:each) do
        sign_in user
        get :show, params: {id: user.to_param}
      end

      specify { expect(response).to have_http_status(200) }

      it "assigns the requested user as @user" do
        expect(assigns(:user)).to eq(user)
      end
    end
  end

  describe "GET #new" do
    context "valid user" do
      before(:each) do
        sign_in user
        get :new, params: {}
      end

      specify { expect(response).to have_http_status(200) }
      
      it "assigns a new user as @user" do
        expect(assigns(:user)).to be_a_new(User)
      end
    end
  end

  describe "GET #edit" do
    context "valid user" do
      before(:each) do
        sign_in user
        get :edit, params: {id: user.to_param}
      end

      specify { expect(response).to have_http_status(200) }
      
      it "assigns the requested user as @user" do
        expect(assigns(:user)).to eq(user)
      end
    end
  end

  # describe "POST #create" do
  #   context "valid user with valid params" do
  #     before(:each) do
  #       sign_in user
  #       post :create, params: {user: valid_attributes}
  #     end

  #     it "returns the correct status code" do
  #       expect(response).to have_http_status(302) 
  #     end

  #     it "creates a new User" do
  #       expect {
  #         post :create, params: {user: valid_attributes}
  #       }.to change(User, :count).by(1)
  #     end

  #     it "assigns a newly created user as @user" do  
  #       user = post :create, params: {user: valid_attributes}   
  #       expect(assigns(:user)).to be_a(User)
  #       expect(assigns(:user)).to be_persisted
  #     end

  #     it "redirects to the created user" do
  #       expect(response).to redirect_to(User.last)
  #     end
  #   end

  #   context "valid user with invalid params" do
  #     before(:each) do
  #       sign_in user
  #       post :create, params: {user: invalid_attributes}
  #     end

  #     specify { expect(response).to have_http_status(200) }

  #     it "assigns a newly created but unsaved user as @user" do
  #       expect(assigns(:user)).to be_a_new(User)
  #     end

  #     it "re-renders the 'new' template" do
  #       expect(response).to render_template("new")
  #     end
  #   end
  # end

  describe "PUT #update" do
    context "valid user with valid params" do
      let(:new_attributes) {
        { address: "New Address"}
      }

      before(:each) do
        sign_in user
        put :update, params: {id: user.to_param, user: new_attributes}
      end

      specify { expect(response).to have_http_status(302) }

      it "updates the requested user" do
        user.reload
        expect(user.address).to eq("New Address")
      end

      it "assigns the requested user as @user" do
        expect(assigns(:user)).to eq(user)
      end

      it "redirects to the user" do
        expect(response).to redirect_to(user)
      end
    end

    context "valid user with invalid params" do
      before(:each) do
        sign_in user
        put :update, params: {id: user.to_param, user: invalid_attributes}
      end

      it "assigns the user as @user" do
        expect(assigns(:user)).to eq(user)
      end

      it "re-renders the 'edit' template" do
        expect(response).to render_template("edit")
      end
    end
  end

  describe "DELETE #destroy" do
    context "valid user" do
      before(:each) do
        sign_in user
      end

      specify { expect(response).to have_http_status(200) }

      it "destroys the requested user" do
        user2 = User.create! valid_attributes
        expect {
          delete :destroy, params: {id: user2.to_param}
        }.to change(User, :count).by(-1)
      end

      it "redirects to the users list" do
        user2 = User.create! valid_attributes
        delete :destroy, params: {id: user2.to_param}
        expect(response).to redirect_to(users_url)
      end
    end
  end
end
