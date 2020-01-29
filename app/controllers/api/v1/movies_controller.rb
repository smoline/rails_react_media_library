class Api::V1::MoviesController < ApplicationController
  def index
    movies = current_user.movies.order('title')
    movies_owners = []
    movies.each do |movie|
      owner = movie.owners.find_by(user_id: current_user.id).as_json
      movies_owners << movie.as_json.merge!(owner: owner)
    end
    render json: movies_owners
  end

  def create
    movie = Movie.create!(movie_params)
    if movie
      render json: movie
    else
      render json: movie.errors
    end
  end

  def show
    movie = Movie.find(params[:id])
    owner = movie.owners.find_by(user_id: current_user.id)
    movie_owner = movie.as_json.merge!(owner: owner.as_json)
    if movie_owner
      render json: movie_owner
    else
      render json: movie_owner.errors
    end
  end

  def update
    # TODO: update the owner record (upc and notes) only
  end

  def destroy
    # TODO: once created, destroy the owner record only
  end

  private

  def movie_params
    # params.permit(:title, :description, :tmdb_id, :imdb_id, :release_date, :runtime, :tagline, :movie_image_url)
    params.require(:movie).permit(:title, :tmdb_id, :description, :release_date, :runtime, :tagline, :movie_image_url, owners_attributes: [:id, :user_id, :upc, :notes, :rating, :ownable_type, :ownable_id])
  end

  def movie
    @movie ||= Movie.find(params[:id])
  end
end
