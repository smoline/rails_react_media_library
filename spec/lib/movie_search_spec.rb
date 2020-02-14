require 'rails_helper'

RSpec.describe MovieSearch do
  subject(:api) { described_class }

  let(:title) { 'Weird Science' }
  let(:api_key) { 'c5bc1a29e4fbf6a35bf9ba5f8f7b4646' }

  describe 'movie' do
    let(:movie_search_url) {"https://api.themoviedb.org/3/search/movie"}
    let(:tmdb_response) { instance_double(HTTParty::Response, body: tmdb_response_body) }
    let(:tmdb_response_body) do
      [
        {
          "id" => 11814,
          "title" => "Weird Science",
          "release_date" => "1985-08-01",
          "genre_ids" => [35, 10749, 878],
          "backdrop_path" => "/5gLMyIGKBvuTrwRRvorexZD0twx.jpg",
          "overview" => "Two unpopular teenagers, Gary and Wyatt, fail at all attempts to be accepted by their peers.",
          "poster_path" => "/AsFxOHwUlK7mTOkC5p6SySsdEjz.jpg"
        }
      ]
    end

    before do
      allow(HTTParty).to receive(:get).and_return(tmdb_response)
      allow(JSON).to receive(:parse)

      api.find_initial_movie_info(title)
    end

    it 'fetches the movie from tmdb api' do
      expect(HTTParty).to have_received(:get).with(movie_search_url, { query: { api_key: api_key, include_adult: false, language: "en-US", page: 1, query: title } })
    end

    it 'parses the tmdb response' do
      expect(JSON).to have_received(:parse).with(tmdb_response_body)
    end
  end
end