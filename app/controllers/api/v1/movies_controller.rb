class Api::V1::MoviesController < ApplicationController
  def index
    movie = Movie.all.order(created_at: :desc)
    render json: movie
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
    if movie
      render json: movie
    else
      render json: movie.errors
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
    params.permit(:title, :description, :tmdb_id, :imdb_id, :release_date, :runtime, :tagline, :movie_image_url)
  end

  def movie
    @movie ||= Movie.find(params[:id])
  end
end
