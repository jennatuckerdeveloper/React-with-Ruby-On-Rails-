class Api::V1::PostsController < ApplicationController

  def index
    @post = Post.all
    render json: @post
  end
  
end
