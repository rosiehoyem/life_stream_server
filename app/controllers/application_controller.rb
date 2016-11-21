class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def verify_is_super_admin
    (current_user.nil?) ? (render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found) : ((render :file => "#{Rails.root}/public/404", :layout => false, :status => :not_found) unless current_user.role == "Super Admin")
  end
end
