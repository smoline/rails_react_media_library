require 'rails_helper'

RSpec.describe MovieSearch do
  subject(:api) { described_class }

  let(:title) { 'Weird Science' }
  let(:api_key) { 'c5bc1a29e4fbf6a35bf9ba5f8f7b4646' }

  describe 'movie search by title' do
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

  describe 'more movie info' do
    let(:tmdb_id) {"11814"}
    let(:movie_search_url) {"https://api.themoviedb.org/3/movie/#{tmdb_id}"}
    let(:tmdb_response) { instance_double(HTTParty::Response, body: tmdb_response_body) }
    let(:tmdb_response_body) do
      {
        "genres" => [
          { "id" => 35, "name" => "Comedy" },
          { "id" => 10749, "name" => "Romance" },
          { "id" => 878, "name" => "Science Fiction" }
        ],
        "id" => 11814,
        "imdb_id" => "tt0090305",
        "overview" => "Two unpopular teenagers, Gary and Wyatt, fail at all attempts to be accepted by their peers.",
        "poster_path" => "/AsFxOHwUlK7mTOkC5p6SySsdEjz.jpg",
        "release_date" => "1985-08-01",
        "runtime" => 94,
        "status" => "Released",
        "tagline" => "If you can't get a date, make one!",
        "title" => "Weird Science"
      }
    end

    before do
      allow(HTTParty).to receive(:get).and_return(tmdb_response)
      allow(JSON).to receive(:parse)

      api.find_more_movie_info(tmdb_id)
    end

    it 'fetches the movie info from tmdb api' do
      expect(HTTParty).to have_received(:get).with(movie_search_url, { query: { api_key: api_key, language: "en-US" } })
    end

    it 'parses the tmdb response' do
      expect(JSON).to have_received(:parse).with(tmdb_response_body)
    end
  end

  describe 'movie credits' do
    let(:tmdb_id) {"11814"}
    let(:movie_search_url) {"https://api.themoviedb.org/3/movie/#{tmdb_id}/credits"}
    let(:tmdb_response) { instance_double(HTTParty::Response, body: tmdb_response_body) }
    let(:tmdb_response_body) do
      {
        "id": 11814,
        "cast": [
          {
            "cast_id": 9,
            "character": "Gary Wallace",
            "credit_id": "52fe448a9251416c7503868f",
            "gender": 2,
            "id": 1904,
            "name": "Anthony Michael Hall",
            "order": 0,
            "profile_path": "/nLthzoCuNxxd3KteIrnnMg1066G.jpg"
          },
          {
            "cast_id": 10,
            "character": "Lisa",
            "credit_id": "52fe448a9251416c75038693",
            "gender": 1,
            "id": 46948,
            "name": "Kelly LeBrock",
            "order": 1,
            "profile_path": "/p2sSQq8KdHQXQK9XeT5eGJ3oVcy.jpg"
          },
          {
            "cast_id": 11,
            "character": "Wyatt Donnelly",
            "credit_id": "52fe448a9251416c75038697",
            "gender": 2,
            "id": 70572,
            "name": "Ilan Mitchell-Smith",
            "order": 2,
            "profile_path": "/saLecJxQoxMvWM58H5xwaadHgyh.jpg"
          },
          {
            "cast_id": 12,
            "character": "Chet Donnelly",
            "credit_id": "52fe448a9251416c7503869b",
            "gender": 2,
            "id": 2053,
            "name": "Bill Paxton",
            "order": 3,
            "profile_path": "/53Ln1wTC0OCLzBF4HNlwhMXYgOU.jpg"
          },
          {
            "cast_id": 13,
            "character": "Deb",
            "credit_id": "52fe448a9251416c7503869f",
            "gender": 1,
            "id": 20363,
            "name": "Suzanne Snyder",
            "order": 4,
            "profile_path": "/7WO00lJH52Bm4Zo2R8eUVRekwqH.jpg"
          }
        ],
        "crew": [
          {
            "credit_id": "52fe448a9251416c7503866d",
            "department": "Production",
            "gender": 2,
            "id": 1091,
            "job": "Producer",
            "name": "Joel Silver",
            "profile_path": "/9BUSlPpIAEQYtRdzVrSXaivld04.jpg"
          },
          {
            "credit_id": "52fe448a9251416c75038661",
            "department": "Directing",
            "gender": 2,
            "id": 11505,
            "job": "Director",
            "name": "John Hughes",
            "profile_path": "/dFVgYYRY1R0aUCYvfEah00Iwzlt.jpg"
          }
        ]
      }
    end

    before do
      allow(HTTParty).to receive(:get).and_return(tmdb_response)
      allow(JSON).to receive(:parse)

      api.get_movie_credits(tmdb_id)
    end

    it 'fetches the movie info from tmdb api' do
      expect(HTTParty).to have_received(:get).with(movie_search_url, { query: { api_key: api_key } })
    end

    it 'parses the tmdb response' do
      expect(JSON).to have_received(:parse).with(tmdb_response_body)
    end
  end
end