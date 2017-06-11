class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def user_root_path
    '/profile'
  end
end
