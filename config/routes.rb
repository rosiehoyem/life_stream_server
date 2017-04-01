Rails.application.routes.draw do  
  get 'pages/data'
  get 'pages/about'
  get 'pages/home'
  root to: 'pages#coming_soon'
  
  devise_for :users
  resources :users

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :users, only: %i(show update)
      resources :day_stats, only: %i(show create update)
    end
  end

  resources :day_stats
end
