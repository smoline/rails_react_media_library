class MovieSearch
  include HTTParty

  def self.find_initial_movie_info(title)
    title_new = title

    response = HTTParty.get("https://api.themoviedb.org/3/search/movie", query: {
      api_key: Rails.application.credentials.TMDB_API_KEY,
      language: "en-US",
      query: title_new,
      page: 1,
      include_adult: false
    })

    movie_info = JSON.parse(response.body)["results"]
    return movie_info
  end

  def self.find_more_movie_info(tmdb_id)
    response = HTTParty.get("https://api.themoviedb.org/3/movie/#{tmdb_id}", query: {
      api_key: Rails.application.credentials.TMDB_API_KEY,
      language: "en-US"
    })

    more_movie_info = JSON.parse(response.body)
    return more_movie_info
  end

  def self.get_movie_credits(tmdb_id)
    response = HTTParty.get("https://api.themoviedb.org/3/movie/#{tmdb_id}/credits", query: {
      api_key: Rails.application.credentials.TMDB_API_KEY
    })

    credits = JSON.parse(response.body)
    return credits
  end
end
