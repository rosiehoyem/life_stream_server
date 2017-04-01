class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
  end

  def about
    render layout: 'public_layout'
  end

  def data
    render layout: 'public_layout'
  end

  def coming_soon
  end
end
