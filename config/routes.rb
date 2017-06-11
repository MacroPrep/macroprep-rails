Rails.application.routes.draw do
  resources :meals, only: [:new, :create]

  root 'home#index'
  get '/about' => 'about#main'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  devise_scope :user do
    get 'sign_in', to: 'users/sessions#new'
    post 'sign_in', to: 'users/sessions#create'
    get 'sign_up', to: 'users/registrations#new'
    delete 'sign_out', to: 'users/sessions#destroy', as: 'user_sign_out'
  end

  get 'profile' => 'users#profile'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
