Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:index, :show] do
      resources :reviews, only: [:index, :create, :update, :destroy]
    end
    resources :reviews, only: [:index]
  end

  #updated routes for UserProfile
  # namespace :api, defaults: { format: :json } do
  #   resources :users, only: :create do
  #     resources :reviews, only: :index do
  #       resources :products, only: :show
  #     end
  #   end
  #   resource :session, only: [:show, :create, :destroy]
  #   resources :products, only: [:index, :show] do
  #     resources :reviews, only: [:index, :create, :update, :destroy]
  #   end
  # end


  # post 'api/test', to: 'application#test'

  get '*path', to: "static_pages#frontend_index"

end
