Rails.application.routes.draw do
  resources :airports, only: [:index, :show]
  resources :flight_lessons 
  resources :aircrafts, only: [:show]
  resources :users, only: [:update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post'/login', to: 'sessions#create'
  delete'/logout', to:'sessions#destroy'

  post'/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # Defines the root path route ("/")
  # root "articles#index"
end
