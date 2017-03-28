Rails.application.routes.draw do
  resources :day_stats
  devise_for :users
  
  get 'pages/data'
  get 'pages/about'
  get 'pages/home'
  root to: 'pages#coming_soon'
  
  resources :users

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :users, only: %i(show update)
    end
  end
end
