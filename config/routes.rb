Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api do
  namespace :v1 do
    get 'posts/index'
    post 'posts/create'
    delete 'posts/:id', to: 'posts#destroy'
  end 
  end

root 'posts#index'

end
