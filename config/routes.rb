Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  devise_scope :user do
    get 'sign_in', to: 'users/sessions#new'
    get 'sign_up', to: 'users/registrations#new'
    delete 'sign_out', to: 'users/sessions#destroy', as: 'user_sign_out'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
