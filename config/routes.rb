Rails.application.routes.draw do

 scope :api, defaults: {format: :json} do
   resources :states, except: [:new, :edit, :create, :update, :destroy]
   resources :cities, except: [:new, :edit, :create, :update, :destroy]
 end

 get '/ui' => 'ui#index'
 get '/ui#' => 'ui#index'
 root 'ui#index'

end
