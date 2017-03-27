class PagesController < ApplicationController
  def home
    render layout: 'public_layout'
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
