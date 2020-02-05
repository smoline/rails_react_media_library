Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'movies/index'
      post 'movies', to: 'movies#create'
      get 'movies/:id', to: 'movies#show'
      put 'movies/:id', to: 'movies#update'
      delete 'movies/:id', to: 'movies#destroy'
      post 'movies/movies_search', to: 'movies#movies_search'
      post 'movies/movie_info', to: 'movies#movie_info'
    end
  end

  resources :users, only: [:create, :show, :index]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#signed_in?'

  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
