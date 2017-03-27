Rails.application.routes.draw do
  devise_for :users
  get 'pages/data'
  get 'pages/about'
  get 'pages/home'
  root to: 'pages#coming_soon'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
