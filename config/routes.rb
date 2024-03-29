Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:index, :show] do
      collection do
        get 'search'
      end
      resources :reviews, only: [:index, :create, :update, :destroy]
    end
    resources :reviews, only: [:index]
    resources :cart_items, only: [:index, :create, :update, :destroy] do
      collection do
        delete 'clear'
      end
    end
  end

  # post 'api/test', to: 'application#test'

  get '*path', to: "static_pages#frontend_index"

end
